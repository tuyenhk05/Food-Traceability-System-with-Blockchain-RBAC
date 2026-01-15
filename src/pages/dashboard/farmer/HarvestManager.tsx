import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Tractor, MapPin, Calendar, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function HarvestManager() {
  const navigate = useNavigate();
  const batches = [{
    id: 'LO-2024-002',
    crop: 'Bắp ngọt',
    variety: 'Golden Bantam',
    planted: '20/03/2024',
    location: 'Cánh đồng B',
    status: 'Sẵn sàng thu hoạch',
    expectedYield: '800 kg'
  }, {
    id: 'LO-2024-001',
    crop: 'Cà chua hữu cơ',
    variety: 'Roma',
    planted: '15/03/2024',
    location: 'Nhà kính 1',
    status: 'Đang phát triển',
    expectedYield: '500 kg'
  }, {
    id: 'LO-2024-003',
    crop: 'Ớt chuông',
    variety: 'California Wonder',
    planted: '01/04/2024',
    location: 'Cánh đồng A',
    status: 'Đang phát triển',
    expectedYield: '300 kg'
  }, {
    id: 'LO-2024-004',
    crop: 'Dâu tây',
    variety: 'Sweet Charlie',
    planted: '10/04/2024',
    location: 'Nhà kính 2',
    status: 'Đang phát triển',
    expectedYield: '200 kg'
  }, {
    id: 'LO-2024-005',
    crop: 'Rau xà lách',
    variety: 'Butterhead',
    planted: '25/04/2024',
    location: 'Cánh đồng C',
    status: 'Sẵn sàng thu hoạch',
    expectedYield: '150 kg'
  }];
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Quản lý Cây trồng
          </h1>
          <p className="text-gray-500">
            Theo dõi sự phát triển và ghi lại thu hoạch.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {batches.map(batch => <Card key={batch.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {batch.crop}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                    {batch.id}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{batch.variety}</p>

                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Gieo: {batch.planted}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {batch.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tractor className="w-4 h-4" />
                    Dự kiến: {batch.expectedYield}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right mr-4 hidden md:block">
                  <p className="text-sm font-medium text-gray-900">
                    Trạng thái
                  </p>
                  <p className={`text-sm ${batch.status === 'Sẵn sàng thu hoạch' ? 'text-amber-600 font-medium' : 'text-green-600'}`}>
                    {batch.status}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => navigate(`/dashboard/batch/${batch.id}`)}>
                    <Eye className="w-4 h-4 mr-2" />
                    Chi tiết
                  </Button>
                  {batch.status === 'Sẵn sàng thu hoạch' ? <Button className="bg-amber-600 hover:bg-amber-700">
                      <Tractor className="w-4 h-4 mr-2" />
                      Ghi thu hoạch
                    </Button> : <Button variant="outline">Cập nhật</Button>}
                </div>
              </div>
            </div>
          </Card>)}
      </div>
    </div>;
}