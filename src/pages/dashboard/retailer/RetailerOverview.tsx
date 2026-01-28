import React from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import {
  ShoppingCart,
  Package,
  AlertTriangle,
  TrendingUp,
  QrCode,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function RetailerOverview() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header với các nút điều hướng */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tổng quan Bán lẻ</h1>
          <p className="text-sm text-gray-500">
            Chào mừng trở lại! Dưới đây là tình hình kinh doanh hôm nay.
          </p>
        </div>

        <div className="flex gap-2">
          {/* NÚT MỚI THÊM: Tiếp nhận hàng và In QR */}
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white flex gap-2 items-center shadow-md"
            onClick={() => navigate("/dashboard/reception")}
          >
            <QrCode size={18} />
            Tiếp nhận & In QR
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate("/dashboard/inventory")}
          >
            Quản lý Kho
          </Button>

          <Button onClick={() => navigate("/dashboard/sales")}>
            Bán hàng mới (POS)
          </Button>
        </div>
      </div>

      {/* Stats Grid - Các thẻ thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 border-none shadow-sm bg-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Doanh số hôm nay
              </p>
              <h3 className="text-2xl font-bold text-gray-900">12.400.000₫</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-sm bg-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Tổng tồn kho</p>
              <h3 className="text-2xl font-bold text-gray-900">450 SP</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-sm bg-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Chờ nhập kho</p>
              <h3 className="text-2xl font-bold text-gray-900 text-yellow-600">
                3 Lô
              </h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-sm bg-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Sắp hết hàng</p>
              <h3 className="text-2xl font-bold text-gray-900 text-red-600">
                5 SP
              </h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Sales - Bảng lịch sử bán hàng */}
      <Card className="p-6 border-none shadow-sm bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Lịch sử Bán hàng Gần đây
          </h2>
          <Button variant="ghost" size="sm" className="text-blue-600">
            Xem tất cả
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="pb-3 font-medium text-gray-500">Mã giao dịch</th>
                <th className="pb-3 font-medium text-gray-500">Sản phẩm</th>
                <th className="pb-3 font-medium text-gray-500">Thời gian</th>
                <th className="pb-3 font-medium text-gray-500">Số tiền</th>
                <th className="pb-3 font-medium text-gray-500">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                {
                  id: "TX-9901",
                  product: "Táo Hữu cơ (Lô-005)",
                  time: "10:42",
                  amount: "125.000₫",
                  status: "Hoàn thành",
                },
                {
                  id: "TX-9902",
                  product: "Cà rốt tươi (Lô-008)",
                  time: "10:15",
                  amount: "42.000₫",
                  status: "Hoàn thành",
                },
                {
                  id: "TX-9903",
                  product: "Khoai tây 5kg (Lô-002)",
                  time: "09:55",
                  amount: "89.000₫",
                  status: "Hoàn thành",
                },
              ].map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 font-medium text-gray-900">{item.id}</td>
                  <td className="py-4 text-gray-700">{item.product}</td>
                  <td className="py-4 text-gray-500">{item.time}</td>
                  <td className="py-4 font-semibold text-gray-900">
                    {item.amount}
                  </td>
                  <td className="py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
