import React from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { QrCode, Play, Eye, ClipboardCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProcessingQueue() {
  const navigate = useNavigate();

  const queueItems = [
    {
      id: "LO-2024-005",
      material: "Cà chua hữu cơ",
      qty: "500 kg",
      grade: "A",
      supplier: "Nông trại Xanh Đà Lạt",
      receivedDate: "15/06/2024",
      priority: "Cao",
    },
    {
      id: "LO-2024-007",
      material: "Khoai tây",
      qty: "800 kg",
      grade: "B",
      supplier: "Cánh đồng Nắng",
      receivedDate: "16/06/2024",
      priority: "Trung bình",
    },
    {
      id: "LO-2024-012",
      material: "Dâu tây",
      qty: "200 kg",
      grade: "A",
      supplier: "Nông trại Xanh Đà Lạt",
      receivedDate: "17/06/2024",
      priority: "Cao",
    },
    {
      id: "LO-2024-013",
      material: "Bắp cải",
      qty: "600 kg",
      grade: "A",
      supplier: "Vườn Hữu cơ Mộc Châu",
      receivedDate: "18/06/2024",
      priority: "Thấp",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Hàng đợi Chế biến
          </h1>
          <p className="text-gray-500">
            Nguyên liệu chờ xử lý (Chỉ cho phép chế biến khi đã đạt kiểm định)
          </p>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Mã lô
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Nguyên liệu / Nhà cung cấp
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Kiểm định
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {queueItems.map((item) => {
                const inspection = JSON.parse(
                  localStorage.getItem(`inspection_${item.id}`) || "{}",
                );
                const isApproved = inspection.status === "Đạt";

                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm font-bold text-blue-600">
                        {item.id}
                      </div>
                      <div className="text-xs text-gray-400">
                        {item.receivedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.material}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.supplier}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {isApproved ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Đạt (Hạng {inspection.grade})
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Chờ kiểm định
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            navigate("/dashboard/quality-inspection")
                          }
                        >
                          <ClipboardCheck className="w-3 h-3 mr-1" /> Kiểm định
                        </Button>
                        <Button
                          size="sm"
                          disabled={!isApproved}
                          className={
                            isApproved
                              ? "bg-blue-600 hover:bg-blue-700 text-white"
                              : "bg-gray-300 cursor-not-allowed"
                          }
                        >
                          <Play className="w-3 h-3 mr-1" /> Chế biến
                        </Button>
                      </div>
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
