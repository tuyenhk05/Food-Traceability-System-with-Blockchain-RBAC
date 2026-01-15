import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Sprout, Tractor, ClipboardCheck, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function FarmerOverview() {
  const stats = [{
    label: 'Lô hàng đang hoạt động',
    value: '12',
    icon: Sprout,
    color: 'text-green-600'
  }, {
    label: 'Chờ thu hoạch',
    value: '4',
    icon: Tractor,
    color: 'text-amber-600'
  }, {
    label: 'Chu kỳ hoàn thành',
    value: '156',
    icon: ClipboardCheck,
    color: 'text-blue-600'
  }];
  const activeBatches = [{
    id: 'LO-2024-001',
    crop: 'Cà chua hữu cơ',
    planted: '15/03/2024',
    status: 'Đang phát triển'
  }, {
    id: 'LO-2024-002',
    crop: 'Bắp ngọt',
    planted: '20/03/2024',
    status: 'Sẵn sàng thu hoạch'
  }, {
    id: 'LO-2024-003',
    crop: 'Ớt chuông',
    planted: '01/04/2024',
    status: 'Đang phát triển'
  }];
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Trang trại của tôi
          </h1>
          <p className="text-gray-500">Quản lý cây trồng và thu hoạch.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/dashboard/batch/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Lô hàng mới
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map(stat => <Card key={stat.label} className="p-4 flex items-center space-x-4">
            <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </Card>)}
      </div>

      {/* Recent Batches */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Lô hàng đang hoạt động
          </h2>
          <Link to="/dashboard/crops" className="text-sm text-green-600 hover:text-green-700 flex items-center">
            Xem tất cả <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-4 py-2">Mã lô</th>
                <th className="px-4 py-2">Cây trồng</th>
                <th className="px-4 py-2">Ngày gieo trồng</th>
                <th className="px-4 py-2">Trạng thái</th>
                <th className="px-4 py-2 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeBatches.map(batch => <tr key={batch.id}>
                  <td className="px-4 py-3 font-medium">{batch.id}</td>
                  <td className="px-4 py-3">{batch.crop}</td>
                  <td className="px-4 py-3 text-gray-500">{batch.planted}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${batch.status === 'Sẵn sàng thu hoạch' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="outline" size="sm">
                      Chi tiết
                    </Button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}