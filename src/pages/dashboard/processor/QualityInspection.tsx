import React, { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import {
  ClipboardCheck,
  CheckCircle,
  XCircle,
  Search,
  AlertCircle,
} from "lucide-react";

// Sử dụng export function để khớp với cấu trúc App.tsx của bạn
export function QualityInspection() {
  const [inspectingId, setInspectingId] = useState<string | null>(null);
  const [tempGrade, setTempGrade] = useState<string>("A");

  // Danh sách các lô hàng cần kiểm định từ các nhà cung cấp
  const items = [
    {
      id: "LO-2024-005",
      product: "Cà chua Hữu cơ",
      farmer: "Nông trại Xanh Đà Lạt",
      date: "15/06/2024",
      quantity: "500 kg",
    },
    {
      id: "LO-2024-007",
      product: "Khoai tây",
      farmer: "Cánh đồng Nắng",
      date: "16/06/2024",
      quantity: "800 kg",
    },
    {
      id: "LO-2024-012",
      product: "Dâu tây tươi",
      farmer: "Nông trại Xanh Đà Lạt",
      date: "17/06/2024",
      quantity: "200 kg",
    },
  ];

  const approveInspection = (id: string) => {
    // Lưu kết quả kiểm định để các trang khác (Queue, Orders) có thể đọc được
    localStorage.setItem(
      `inspection_${id}`,
      JSON.stringify({
        status: "Đạt",
        grade: tempGrade,
        inspectDate: new Date().toLocaleString(),
      }),
    );
    setInspectingId(null);
    alert(`Lô hàng ${id} đã được phê duyệt đạt chuẩn Hạng ${tempGrade}`);
  };

  const rejectInspection = (id: string) => {
    localStorage.setItem(
      `inspection_${id}`,
      JSON.stringify({
        status: "Không đạt",
        inspectDate: new Date().toLocaleString(),
      }),
    );
    setInspectingId(null);
    alert(`Lô hàng ${id} đã bị từ chối do không đủ điều kiện`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Kiểm định Chất lượng
        </h1>
        <p className="text-gray-500">
          Đánh giá và phê duyệt nguyên liệu đầu vào trước khi chế biến
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => {
          const savedData = JSON.parse(
            localStorage.getItem(`inspection_${item.id}`) || "{}",
          );
          const isProcessed = !!savedData.status;

          return (
            <Card
              key={item.id}
              className={`p-6 border-l-4 ${isProcessed ? "border-gray-200 opacity-75" : "border-orange-500"}`}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-blue-600">
                      {item.id}
                    </span>
                    {isProcessed && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-bold ${savedData.status === "Đạt" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                      >
                        {savedData.status}{" "}
                        {savedData.grade && `(Hạng ${savedData.grade})`}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.product}
                  </h3>
                  <div className="text-sm text-gray-600 grid grid-cols-2 gap-x-4">
                    <span>
                      Nguồn: <strong>{item.farmer}</strong>
                    </span>
                    <span>
                      Số lượng: <strong>{item.quantity}</strong>
                    </span>
                    <span>Ngày nhận: {item.date}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  {!isProcessed ? (
                    <Button
                      variant={inspectingId === item.id ? "primary" : "outline"}
                      onClick={() =>
                        setInspectingId(
                          inspectingId === item.id ? null : item.id,
                        )
                      }
                      className={
                        inspectingId === item.id
                          ? "bg-orange-600 hover:bg-orange-700 text-white"
                          : ""
                      }
                    >
                      <Search className="w-4 h-4 mr-2" />
                      {inspectingId === item.id
                        ? "Đang kiểm tra..."
                        : "Bắt đầu kiểm định"}
                    </Button>
                  ) : (
                    <div className="text-xs text-gray-400 italic">
                      Đã kiểm định lúc: {savedData.inspectDate}
                    </div>
                  )}
                </div>
              </div>

              {/* Form nhập kết quả kiểm định */}
              {inspectingId === item.id && (
                <div className="mt-6 border-t pt-6 animate-in fade-in duration-300">
                  <div className="bg-orange-50 p-4 rounded-lg mb-6 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <p className="text-sm text-orange-800">
                      Vui lòng kiểm tra kỹ các tiêu chuẩn vệ sinh an toàn thực
                      phẩm và thông số kỹ thuật trước khi phê duyệt.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Input
                      label="Nhiệt độ bảo quản (°C)"
                      type="number"
                      placeholder="4.5"
                    />
                    <Input label="Độ ẩm (%)" type="number" placeholder="85" />
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-gray-700">
                        Phân loại hạng
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        value={tempGrade}
                        onChange={(e) => setTempGrade(e.target.value)}
                      >
                        <option value="A">Hạng A (Xuất sắc)</option>
                        <option value="B">Hạng B (Đạt chuẩn)</option>
                        <option value="C">Hạng C (Chế biến ngay)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => rejectInspection(item.id)}
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Từ chối lô hàng
                    </Button>

                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => approveInspection(item.id)}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Phê duyệt đạt chuẩn
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
