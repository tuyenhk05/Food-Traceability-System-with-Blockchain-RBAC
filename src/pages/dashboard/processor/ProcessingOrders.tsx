import React, { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Search, Eye, Play, CheckCircle, ClipboardCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProcessingOrders() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    {
      id: "PRO-2024-045",
      batchId: "LO-2024-005",
      rawMaterial: "Cà chua hữu cơ",
      outputProduct: "Sốt cà chua",
      status: "Đang xử lý",
      priority: "Cao",
    },
    {
      id: "PRO-2024-044",
      batchId: "LO-2024-009",
      rawMaterial: "Táo Fuji",
      outputProduct: "Táo sấy giòn",
      status: "Hoàn thành",
      priority: "Trung bình",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Quản lý Đơn chế biến
        </h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            className="pl-10"
            placeholder="Tìm mã đơn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr className="text-xs font-medium text-gray-500 uppercase">
                <th className="px-6 py-3">Mã đơn / Lô</th>
                <th className="px-6 py-3">Sản phẩm đầu ra</th>
                <th className="px-6 py-3">Chất lượng nguồn</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => {
                const inspection = JSON.parse(
                  localStorage.getItem(`inspection_${order.batchId}`) || "{}",
                );
                return (
                  <tr key={order.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm font-medium">
                        {order.id}
                      </div>
                      <div className="text-xs text-gray-400">
                        Lô: {order.batchId}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {order.outputProduct}
                    </td>
                    <td className="px-6 py-4">
                      {inspection.status ? (
                        <div className="flex flex-col">
                          <span
                            className={`text-xs font-bold ${inspection.status === "Đạt" ? "text-green-600" : "text-red-600"}`}
                          >
                            {inspection.status}
                          </span>
                          {inspection.grade && (
                            <span className="text-[10px] text-gray-500">
                              Hạng: {inspection.grade}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400 italic">
                          Chưa kiểm định
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === "Hoàn thành"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          navigate(`/dashboard/batch/${order.batchId}`)
                        }
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-600"
                        onClick={() =>
                          navigate("/dashboard/quality-inspection")
                        }
                      >
                        <ClipboardCheck className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
