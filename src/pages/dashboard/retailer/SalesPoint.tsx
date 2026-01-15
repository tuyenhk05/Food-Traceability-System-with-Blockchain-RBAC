import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { ScanLine, ShoppingCart, CheckCircle } from 'lucide-react';
export function SalesPoint() {
  const [cart, setCart] = useState<any[]>([]);
  const [productId, setProductId] = useState('');
  const [success, setSuccess] = useState(false);
  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productId) return;
    // Mock product lookup
    const mockProduct = {
      id: productId,
      name: 'Táo Hữu cơ',
      price: 45000,
      batch: 'LO-2024-005'
    };
    setCart([...cart, mockProduct]);
    setProductId('');
  };
  const handleCheckout = () => {
    setSuccess(true);
    setTimeout(() => {
      setCart([]);
      setSuccess(false);
    }, 3000);
  };
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Điểm Bán hàng (POS)
        </h1>
        <div className="text-sm text-gray-500">
          Máy #04 • Cửa hàng: Trung tâm
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Scanner / Input Section */}
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6">
            <form onSubmit={handleAddToCart} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Quét Mã vạch / QR Sản phẩm
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <ScanLine className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input value={productId} onChange={e => setProductId(e.target.value)} placeholder="Nhập Mã SP (ví dụ: SP-123)" className="pl-10 text-lg" autoFocus />
                </div>
                <Button type="submit" size="lg">
                  Thêm
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                Mô phỏng quét bằng cách nhập ID và nhấn Enter.
              </p>
            </form>
          </Card>

          {/* Cart List */}
          <Card className="min-h-[300px] flex flex-col">
            <div className="p-4 border-b bg-gray-50 font-medium text-gray-700 flex justify-between">
              <span>Giỏ hàng hiện tại</span>
              <span>{cart.length} Món</span>
            </div>
            <div className="flex-1 p-4 space-y-2">
              {cart.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-2">
                  <ShoppingCart className="h-12 w-12 opacity-20" />
                  <p>Giỏ hàng trống</p>
                </div> : cart.map((item, idx) => <div key={idx} className="flex justify-between items-center p-3 bg-white border rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Lô: {item.batch}</p>
                    </div>
                    <span className="font-bold">
                      {item.price.toLocaleString('vi-VN')}₫
                    </span>
                  </div>)}
            </div>
          </Card>
        </div>

        {/* Checkout Section */}
        <div className="md:col-span-1">
          <Card className="p-6 h-full flex flex-col">
            <h2 className="text-lg font-semibold mb-6">Tóm tắt Đơn hàng</h2>

            <div className="space-y-3 flex-1">
              <div className="flex justify-between text-gray-600">
                <span>Tạm tính</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Thuế (8%)</span>
                <span>{(total * 0.08).toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between text-xl font-bold text-gray-900">
                <span>Tổng cộng</span>
                <span>{(total * 1.08).toLocaleString('vi-VN')}₫</span>
              </div>
            </div>

            {success ? <div className="mt-6 bg-green-50 text-green-700 p-4 rounded-lg flex flex-col items-center text-center animate-in fade-in zoom-in">
                <CheckCircle className="h-12 w-12 mb-2" />
                <p className="font-bold">Bán hàng Thành công!</p>
                <p className="text-sm">Blockchain đã cập nhật.</p>
              </div> : <Button size="lg" className="w-full mt-6 bg-green-600 hover:bg-green-700" disabled={cart.length === 0} onClick={handleCheckout}>
                Hoàn tất Bán hàng
              </Button>}
          </Card>
        </div>
      </div>
    </div>;
}