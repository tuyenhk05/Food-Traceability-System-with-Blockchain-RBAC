import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, MapPin, Calendar, User, Package, Thermometer, CheckCircle2, Edit, Trash2 } from 'lucide-react';
// Mock data
const BATCH_DETAILS: Record<string, any> = {
  'LO-2024-001': {
    id: 'LO-2024-001',
    product: 'Cà chua hữu cơ',
    variety: 'Roma VF',
    farmer: 'Nông trại Xanh Đà Lạt',
    location: 'Lô A-22, Cánh đồng Bắc, Đà Lạt',
    plantedDate: '15/03/2024',
    harvestDate: '15/06/2024',
    quantity: '500 kg',
    status: 'Đang phát triển',
    quality: 'Hạng A',
    temperature: '12°C',
    notes: 'Sử dụng phân bón hữu cơ 100%. Tưới nhỏ giọt tự động.',
    certifications: ['Hữu cơ VietGAP', 'GlobalGAP'],
    timeline: [{
      date: '15/03/2024',
      event: 'Gieo trồng',
      actor: 'Nông trại Xanh Đà Lạt'
    }, {
      date: '20/03/2024',
      event: 'Kiểm tra đầu tiên',
      actor: 'Nông trại Xanh Đà Lạt'
    }, {
      date: '15/06/2024',
      event: 'Thu hoạch',
      actor: 'Nông trại Xanh Đà Lạt'
    }]
  },
  'LO-2024-002': {
    id: 'LO-2024-002',
    product: 'Bắp ngọt',
    variety: 'Golden Bantam',
    farmer: 'Nông trại Xanh Đà Lạt',
    location: 'Cánh đồng B, Đà Lạt',
    plantedDate: '20/03/2024',
    harvestDate: '20/06/2024',
    quantity: '800 kg',
    status: 'Sẵn sàng thu hoạch',
    quality: 'Hạng A',
    temperature: '10°C',
    notes: 'Giống bắp ngọt chất lượng cao. Không sử dụng thuốc trừ sâu.',
    certifications: ['Hữu cơ VietGAP'],
    timeline: [{
      date: '20/03/2024',
      event: 'Gieo trồng',
      actor: 'Nông trại Xanh Đà Lạt'
    }, {
      date: '25/03/2024',
      event: 'Bón phân lần 1',
      actor: 'Nông trại Xanh Đà Lạt'
    }]
  }
};
export function BatchDetailPage() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const batch = BATCH_DETAILS[id || ''] || BATCH_DETAILS['LO-2024-001'];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Chỉnh sửa
          </Button>
          <Button variant="outline" className="text-red-600 hover:text-red-700">
            <Trash2 className="mr-2 h-4 w-4" />
            Xóa
          </Button>
        </div>
      </div>

      {/* Header Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl mb-2">{batch.product}</CardTitle>
              <p className="text-gray-500">Mã lô: {batch.id}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${batch.status === 'Sẵn sàng thu hoạch' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
              {batch.status}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Nông dân</p>
                <p className="font-medium">{batch.farmer}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Vị trí</p>
                <p className="font-medium">{batch.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Ngày gieo</p>
                <p className="font-medium">{batch.plantedDate}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Số lượng</p>
                <p className="font-medium">{batch.quantity}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin chi tiết</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Giống</p>
                <p className="font-medium">{batch.variety}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Chất lượng</p>
                <p className="font-medium">{batch.quality}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Nhiệt độ bảo quản</p>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-blue-600" />
                  <p className="font-medium">{batch.temperature}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ghi chú</p>
                <p className="text-gray-700">{batch.notes}</p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Lịch sử hoạt động</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {batch.timeline.map((item: any, index: number) => <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </div>
                      {index < batch.timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-1" />}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-medium">{item.event}</p>
                      <p className="text-sm text-gray-500">{item.actor}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chứng nhận</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {batch.certifications.map((cert: string) => <div key={cert} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">
                      {cert}
                    </span>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mã QR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Package className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Mã QR sẽ được tạo</p>
                  <p className="text-xs text-gray-400">sau khi chế biến</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
}