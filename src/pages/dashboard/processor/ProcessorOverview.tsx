import React from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import {
  Factory,
  PackageCheck,
  Clock,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export function ProcessorOverview() {
  const productionLines = [
    {
      line: "Dây chuyền A",
      product: "Sốt Cà chua",
      batch: "LO-2024-005",
      progress: 75,
      status: "Đang chiết rót",
    },
    {
      line: "Dây chuyền B",
      product: "Táo sấy giòn",
      batch: "LO-2024-009",
      progress: 30,
      status: "Đang sấy",
    },
    {
      line: "Dây chuyền C",
      product: "Đậu Hà Lan",
      batch: "LO-2024-011",
      progress: 90,
      status: "Đóng gói",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Tổng quan Chế biến
          </h1>
          <p className="text-sm text-gray-500">
            Theo dõi hiệu suất và chất lượng sản xuất
          </p>
        </div>
        <Link to="/dashboard/quality-inspection">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link to="/dashboard/quality-inspection">
              <Button className="bg-orange-600 ...">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Kiểm định chất lượng
              </Button>
            </Link>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-l-4 border-l-blue-500">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Factory className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Đang chạy
              </p>
              <h3 className="text-xl font-bold">3 Dây chuyền</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6 border-l-4 border-l-orange-500">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <ClipboardCheck className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Chờ kiểm tra
              </p>
              <h3 className="text-xl font-bold text-gray-900">4 Lô hàng</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6 border-l-4 border-l-green-500">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <PackageCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Hoàn thành
              </p>
              <h3 className="text-xl font-bold text-gray-900">12 Đơn</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6 border-l-4 border-l-purple-500">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Hiệu suất
              </p>
              <h3 className="text-xl font-bold text-gray-900">94%</h3>
            </div>
          </div>
        </Card>
      </div>

      <h2 className="text-lg font-bold text-gray-800">
        Trạng thái dây chuyền sản xuất
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {productionLines.map((item) => {
          const inspection = JSON.parse(
            localStorage.getItem(`inspection_${item.batch}`) || "{}",
          );
          return (
            <Card key={item.line} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">
                    {item.line} - {item.product}
                  </h3>
                  <p className="text-sm text-gray-500 italic">
                    Mã lô đầu vào: {item.batch}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                      inspection.status === "Đạt"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {inspection.status === "Đạt"
                      ? `CHẤT LƯỢNG: HẠNG ${inspection.grade}`
                      : "CHƯA CÓ DỮ LIỆU QC"}
                  </span>
                  <p className="text-xs text-blue-600 mt-1 font-medium">
                    {item.status}
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-right text-xs font-bold mt-2 text-gray-600">
                {item.progress}%
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
