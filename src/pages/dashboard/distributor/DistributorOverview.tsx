import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Truck, MapPin, Package, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function DistributorOverview() {
  const navigate = useNavigate();
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Tổng quan Vận chuyển
        </h1>
        <Button onClick={() => navigate('/dashboard/shipments')}>
          Quản lý Vận chuyển
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Đang vận chuyển
              </p>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Đội xe khả dụng
              </p>
              <h3 className="text-2xl font-bold text-gray-900">8/20</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Chờ lấy hàng</p>
              <h3 className="text-2xl font-bold text-gray-900">5</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Ready for Pickup List */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Sẵn sàng lấy hàng</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="pb-3 font-medium text-gray-500">Mã lô</th>
                <th className="pb-3 font-medium text-gray-500">
                  Từ (Nhà chế biến)
                </th>
                <th className="pb-3 font-medium text-gray-500">Điểm đến</th>
                <th className="pb-3 font-medium text-gray-500">Trọng lượng</th>
                <th className="pb-3 font-medium text-gray-500">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[{
              id: 'LO-2024-008',
              from: 'Nông trại Xanh Đà Lạt',
              to: 'Siêu thị Fresh Mart',
              weight: '500kg'
            }, {
              id: 'LO-2024-009',
              from: 'Công ty Chế biến Organic Việt',
              to: 'Siêu thị City',
              weight: '320kg'
            }].map(item => <tr key={item.id} className="group hover:bg-gray-50">
                  <td className="py-4 font-medium">{item.id}</td>
                  <td className="py-4">{item.from}</td>
                  <td className="py-4">{item.to}</td>
                  <td className="py-4">{item.weight}</td>
                  <td className="py-4">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Nhận đơn
                    </Button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}