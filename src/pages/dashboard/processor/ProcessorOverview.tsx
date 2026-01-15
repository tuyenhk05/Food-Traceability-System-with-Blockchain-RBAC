import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Factory, PackageCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ProcessorOverview() {
  const productionLines = [{
    line: 'Dây chuyền A',
    product: 'Sốt Cà chua (Lọ)',
    batch: 'LO-2024-005',
    progress: 75,
    status: 'Đang chiết rót',
    startTime: '08:00',
    estimatedCompletion: '14:00'
  }, {
    line: 'Dây chuyền B',
    product: 'Táo sấy giòn',
    batch: 'LO-2024-009',
    progress: 30,
    status: 'Đang sấy',
    startTime: '09:30',
    estimatedCompletion: '18:00'
  }, {
    line: 'Dây chuyền C',
    product: 'Đậu Hà Lan đông lạnh',
    batch: 'LO-2024-011',
    progress: 90,
    status: 'Đóng gói',
    startTime: '07:00',
    estimatedCompletion: '12:30'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tổng quan Chế biến</h1>
        <Link to="/dashboard/queue">
          <Button>
            <Factory className="w-4 h-4 mr-2" />
            Xem Hàng đợi
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <Factory className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Dây chuyền hoạt động</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {productionLines.length}/5
              </h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đơn chờ xử lý</p>
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <PackageCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Hoàn thành hôm nay</p>
              <h3 className="text-2xl font-bold text-gray-900">150 đơn vị</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Active Production Lines */}
      <h2 className="text-lg font-semibold">Dây chuyền đang hoạt động</h2>
      <div className="grid grid-cols-1 gap-4">
        {productionLines.map(item => <Card key={item.line} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-bold text-gray-900">{item.line}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Đang chế biến: {item.product} (Nguồn: {item.batch})
                </p>
                <div className="flex gap-4 mt-2 text-xs text-gray-500">
                  <span>Bắt đầu: {item.startTime}</span>
                  <span>Hoàn thành dự kiến: {item.estimatedCompletion}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <span className="text-sm font-medium text-gray-900">
                  {item.progress}% Hoàn thành
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{
            width: `${item.progress}%`
          }}></div>
            </div>
          </Card>)}
      </div>
    </div>;
}