import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import {
  Truck,
  CheckCircle,
  QrCode,
  Printer,
  Package,
  ArrowRight,
  Info,
  Layers,
  ChevronLeft,
} from "lucide-react";

const ShipmentReception = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState<any>(null);

  const [incomingShipments] = useState([
    {
      id: "SHIP-101",
      batchId: "LO-2024-025",
      product: "Sốt cà chua đóng lọ",
      qty: 500,
      unit: "lọ",
    },
    {
      id: "SHIP-102",
      batchId: "LO-2024-030",
      product: "Táo Hữu cơ",
      qty: 200,
      unit: "kg",
    },
  ]);

  const handleConfirmReceipt = (shipment: any) => {
    setSelectedBatch(shipment);
    setStep(2);
  };

  const handlePrintQR = () => {
    localStorage.setItem(`status_${selectedBatch.batchId}`, "Đã nhập kho");
    alert(`Đã in ${selectedBatch.qty} nhãn QR cho lô ${selectedBatch.batchId}`);
    // Điều hướng thẳng về kho sau khi hoàn tất
    navigate("/dashboard/inventory");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 sm:p-8 font-sans text-slate-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <span className="text-indigo-600 font-semibold tracking-widest text-xs uppercase flex items-center gap-2">
            Retailer Operations
          </span>
          <h1 className="text-3xl font-bold tracking-tight">
            Tiếp nhận & Dán nhãn
          </h1>
          <p className="text-slate-500 text-sm">
            Xác nhận hàng hóa và khởi tạo mã định danh QR.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-2xl shadow-sm border border-slate-100">
          <div
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${step === 1 ? "bg-slate-900 text-white" : "text-slate-400"}`}
          >
            1. Tiếp nhận
          </div>
          <ArrowRight size={14} className="text-slate-300" />
          <div
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${step === 2 ? "bg-indigo-600 text-white" : "text-slate-400"}`}
          >
            2. Dán nhãn
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Shipment List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2 mb-2 text-slate-400">
            <Truck size={18} />
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Lô hàng đang đến
            </h3>
          </div>

          {incomingShipments.map((ship) => (
            <Card
              key={ship.id}
              className={`p-5 transition-all border-none shadow-sm rounded-[2rem] ${
                selectedBatch?.id === ship.id && step === 2
                  ? "ring-1 ring-indigo-500 bg-white"
                  : "bg-white/80"
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex gap-4 items-center w-full">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                    <Package size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{ship.product}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                        {ship.batchId}
                      </span>
                      <span className="text-[10px] font-medium bg-indigo-50 px-2 py-0.5 rounded text-indigo-600">
                        {ship.qty} {ship.unit}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => handleConfirmReceipt(ship)}
                  disabled={step === 2 && selectedBatch?.id === ship.id}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-indigo-600 text-white rounded-xl px-8 py-5 font-semibold transition-all"
                >
                  Tiếp nhận
                </Button>
              </div>
            </Card>
          ))}

          <div className="p-5 bg-white/50 border border-slate-100 rounded-2xl flex gap-3 text-slate-500 text-xs">
            <Info size={16} className="text-indigo-400 shrink-0" />
            <p>
              Sau khi tiếp nhận, hệ thống sẽ chuẩn bị chuỗi dữ liệu để in mã QR
              định danh cho từng sản phẩm.
            </p>
          </div>
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-4">
          <div className="sticky top-8">
            {step === 2 ? (
              <Card className="p-8 border-none shadow-xl bg-white text-center rounded-[2.5rem] animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="mx-auto w-32 h-32 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-dashed border-indigo-100 relative mb-6">
                  <QrCode size={64} className="text-slate-800" />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-xl shadow-lg">
                    <CheckCircle size={18} />
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-1">
                    Xác nhận lô hàng
                  </p>
                  <h3 className="text-2xl font-bold">
                    {selectedBatch?.batchId}
                  </h3>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                    Sẵn sàng tạo nhãn QR cho{" "}
                    <span className="text-slate-900 font-medium">
                      {selectedBatch?.qty} {selectedBatch?.unit}
                    </span>{" "}
                    {selectedBatch?.product}.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-xl font-bold flex gap-2 shadow-lg shadow-indigo-100 transition-all"
                    onClick={handlePrintQR}
                  >
                    <Printer size={18} /> In nhãn & Nhập kho
                  </Button>
                  <button
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-600 text-xs font-medium mx-auto transition-colors"
                    onClick={() => setStep(1)}
                  >
                    <ChevronLeft size={14} /> Chọn lô hàng khác
                  </button>
                </div>
              </Card>
            ) : (
              <div className="h-[400px] border border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center text-slate-400 p-8 text-center bg-white/40">
                <QrCode size={40} className="opacity-10 mb-4" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Chờ lệnh
                </h4>
                <p className="text-[11px] mt-2 font-medium">
                  Chọn một lô hàng bên trái để xử lý.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentReception;
