import React, { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import {
  ScanLine,
  ShoppingCart,
  CheckCircle,
  AlertCircle,
  XCircle,
  Receipt,
  ShieldCheck,
  Printer,
} from "lucide-react";

export function SalesPoint() {
  const [cart, setCart] = useState<any[]>([]);
  const [productId, setProductId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [lastOrder, setLastOrder] = useState<any>(null);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!productId) return;

    const status = localStorage.getItem(`status_${productId.toUpperCase()}`);
    if (!status || status !== "Đã nhập kho") {
      setError(`Mã ${productId} chưa được tiếp nhận hoặc chưa dán mã QR!`);
      return;
    }

    let mockProduct: any = null;
    const code = productId.toUpperCase();
    if (code === "LO-2024-025") {
      mockProduct = {
        id: code,
        name: "Sốt cà chua đóng lọ",
        price: 35000,
        batch: code,
      };
    } else if (code === "LO-2024-030") {
      mockProduct = {
        id: code,
        name: "Táo Hữu cơ",
        price: 120000,
        batch: code,
      };
    } else {
      mockProduct = {
        id: code,
        name: "Sản phẩm truy xuất",
        price: 50000,
        batch: code,
      };
    }

    setCart([...cart, mockProduct]);
    setProductId("");
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal * 1.08;

    setTimeout(() => {
      setLastOrder({
        id: `INV-${Math.floor(Math.random() * 90000) + 10000}`,
        total: total,
        items: cart.length,
        time: new Date().toLocaleTimeString("vi-VN"),
      });
      setIsProcessing(false);
      setSuccess(true);
    }, 1500);
  };

  const handleNewOrder = () => {
    setCart([]);
    setSuccess(false);
    setLastOrder(null);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal * 1.08;

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-4 text-slate-900">
      <div className="flex items-center justify-between pb-2">
        <div>
          <h1 className="text-2xl font-bold">Điểm Bán hàng (POS)</h1>
          <p className="text-sm text-slate-500 font-medium">
            Truy xuất nguồn gốc & Thanh toán
          </p>
        </div>
        <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full uppercase flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Blockchain Verified
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Scanner & Cart List */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border-none shadow-sm bg-white rounded-3xl">
            <form onSubmit={handleAddToCart} className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Quét mã QR sản phẩm
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <ScanLine className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                  <Input
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="Quét mã lô (VD: LO-2024-025)..."
                    className="pl-12 h-14 bg-slate-50 border-none rounded-2xl text-lg font-medium"
                    autoFocus
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-slate-900 hover:bg-indigo-600 h-14 px-8 rounded-2xl font-bold transition-all"
                >
                  Thêm
                </Button>
              </div>
              {error && (
                <div className="flex items-center gap-2 text-red-500 text-sm font-semibold italic">
                  <AlertCircle size={14} />
                  {error}
                </div>
              )}
            </form>
          </Card>

          <Card className="min-h-[400px] flex flex-col border-none shadow-sm bg-white rounded-3xl overflow-hidden">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
              <span className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                <ShoppingCart size={16} /> Giỏ hàng
              </span>
              <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                {cart.length} món
              </span>
            </div>
            <div className="flex-1 p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300 py-20 opacity-40">
                  <ScanLine size={48} />
                  <p className="text-sm font-medium mt-4 italic">
                    Vui lòng quét mã QR để bắt đầu
                  </p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm group"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="h-10 w-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{item.name}</p>
                        <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-tighter">
                          Mã: {item.batch}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold">
                        {item.price.toLocaleString("vi-VN")}₫
                      </span>
                      <button
                        onClick={() => {
                          const newCart = [...cart];
                          newCart.splice(idx, 1);
                          setCart(newCart);
                        }}
                        className="text-slate-300 hover:text-red-500"
                      >
                        <XCircle size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>

        {/* Right Section: Payment & Receipt */}
        <div className="lg:col-span-1">
          <Card className="p-8 min-h-full flex flex-col border-none shadow-2xl bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

            {success ? (
              <div className="flex-1 flex flex-col items-center justify-center animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6 animate-bounce">
                  <CheckCircle size={32} className="text-white" />
                </div>

                <h2 className="text-xl font-bold mb-1">BÁN HÀNG THÀNH CÔNG</h2>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em] mb-8">
                  Blockchain Verified
                </p>

                <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 uppercase font-bold tracking-widest">
                      Hóa đơn
                    </span>
                    <span className="font-mono">{lastOrder?.id}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-4">
                    <span className="text-slate-400 uppercase font-bold tracking-widest">
                      Thời gian
                    </span>
                    <span>{lastOrder?.time}</span>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-slate-400 text-sm font-bold uppercase">
                      Tổng tiền
                    </span>
                    <span className="text-2xl font-black text-emerald-400 leading-none">
                      {lastOrder?.total.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <Button
                    className="w-full bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold py-6 gap-2"
                    onClick={() => window.print()}
                  >
                    <Printer size={16} /> In hóa đơn
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest"
                    onClick={handleNewOrder}
                  >
                    Đơn hàng mới
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Receipt size={20} />
                  </div>
                  <h2 className="text-lg font-bold uppercase tracking-widest">
                    Tổng tiền
                  </h2>
                </div>

                <div className="flex-1 space-y-5 text-sm">
                  <div className="flex justify-between text-slate-400 font-medium italic">
                    <span>Tạm tính</span>
                    <span className="text-white">
                      {subtotal.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400 font-medium italic">
                    <span>Thuế VAT (8%)</span>
                    <span className="text-white">
                      {(subtotal * 0.08).toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]">
                        Tổng cộng
                      </span>
                      <span className="text-4xl font-black text-indigo-400 leading-none tracking-tighter">
                        {total.toLocaleString("vi-VN")}₫
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full mt-10 bg-indigo-500 hover:bg-indigo-600 text-white py-8 text-lg font-black rounded-2xl shadow-xl shadow-indigo-500/20 transition-all active:scale-95"
                  disabled={cart.length === 0 || isProcessing}
                  onClick={handleCheckout}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ĐANG XỬ LÝ...
                    </div>
                  ) : (
                    "XUẤT HÓA ĐƠN"
                  )}
                </Button>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2">
                  <ShieldCheck size={14} className="text-slate-500" />
                  <p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.2em]">
                    FoodTrace Secure POS
                  </p>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
