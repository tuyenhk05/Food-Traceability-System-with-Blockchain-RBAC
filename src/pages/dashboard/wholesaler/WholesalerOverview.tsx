import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Package, ClipboardCheck, Truck, AlertCircle, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
export function WholesalerOverview() {
  const navigate = useNavigate();
  const incomingShipments = [{
    id: 'LO-2024-008',
    farmer: 'Nông trại Xanh Đà Lạt',
    product: 'Cà chua hữu cơ',
    qty: '500 kg',
    status: 'Đã đến',
    arrivalTime: '08:30',
    quality: 'Chưa kiểm tra'
  }, {
    id: 'LO-2024-009',
    farmer: 'Vườn cây Cao Nguyên',
    product: 'Táo Fuji',
    qty: '1200 kg',
    status: 'Đang vận chuyển',
    arrivalTime: '14:00 (dự kiến)',
    quality: '-'
  }, {
    id: 'LO-2024-010',
    farmer: 'Cánh đồng Nắng',
    product: 'Khoai tây',
    qty: '800 kg',
    status: 'Đã đến',
    arrivalTime: '07:15',
    quality: 'Chưa kiểm tra'
  }, {
    id: 'LO-2024-011',
    farmer: 'Nông trại Xanh Đà Lạt',
    product: 'Dâu tây',
    qty: '200 kg',
    status: 'Đã đến',
    arrivalTime: '09:45',
    quality: 'Chưa kiểm tra'
  }, {
    id: 'LO-2024-012',
    farmer: 'Vườn Hữu cơ Mộc Châu',
    product: 'Bắp cải',
    qty: '600 kg',
    status: 'Đang vận chuyển',
    arrivalTime: '16:30 (dự kiến)',
    quality: '-'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tổng quan Thu mua</h1>
        <Link to="/dashboard/inspection">
          <Button>
            <ClipboardCheck className="w-4 h-4 mr-2" />
            Bắt đầu Kiểm định
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Lô hàng đang đến</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {incomingShipments.length}
              </h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-amber-100 rounded-full">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Chờ kiểm định</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {incomingShipments.filter(s => s.quality === 'Chưa kiểm tra').length}
              </h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đã kiểm định hôm nay</p>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Incoming Shipments */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Lô hàng đang đến</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 font-medium text-gray-500">Mã lô</th>
                <th className="pb-3 font-medium text-gray-500">Nông dân</th>
                <th className="pb-3 font-medium text-gray-500">Sản phẩm</th>
                <th className="pb-3 font-medium text-gray-500">Số lượng</th>
                <th className="pb-3 font-medium text-gray-500">
                  Thời gian đến
                </th>
                <th className="pb-3 font-medium text-gray-500">Trạng thái</th>
                <th className="pb-3 font-medium text-gray-500">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {incomingShipments.map(item => <tr key={item.id} className="group hover:bg-gray-50">
                  <td className="py-4 font-medium text-gray-900">{item.id}</td>
                  <td className="py-4 text-gray-600">{item.farmer}</td>
                  <td className="py-4 text-gray-600">{item.product}</td>
                  <td className="py-4 text-gray-600">{item.qty}</td>
                  <td className="py-4 text-gray-600 text-sm">
                    {item.arrivalTime}
                  </td>
                  <td className="py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Đã đến' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      {item.status === 'Đã đến' && <>
                          <Button variant="outline" size="sm" onClick={() => navigate(`/dashboard/batch/${item.id}`)}>
                            <Eye className="w-3 h-3 mr-1" />
                            Xem
                          </Button>
                          <Button size="sm">Xác nhận</Button>
                        </>}
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}