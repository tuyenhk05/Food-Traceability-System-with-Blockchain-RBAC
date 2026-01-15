import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Sprout, Truck, Factory, Store, CheckCircle2, MapPin, Calendar, Thermometer, ArrowLeft, Users } from 'lucide-react';
import { TimelineEvent } from '../../types';
// Dữ liệu mẫu cho demo
const MOCK_TIMELINE: TimelineEvent[] = [{
  title: 'Gieo trồng',
  date: '01/03/2024 08:00',
  description: 'Gieo hạt cà chua hữu cơ tại khu vực A-12.',
  actor: 'Nông trại Xanh Đà Lạt',
  role: 'FARMER',
  status: 'PLANTED',
  icon: Sprout
}, {
  title: 'Thu hoạch',
  date: '15/06/2024 06:30',
  description: 'Thu hoạch 500kg cà chua chín. Chất lượng hạng A.',
  actor: 'Nông trại Xanh Đà Lạt',
  role: 'FARMER',
  status: 'HARVESTED',
  icon: CheckCircle2
}, {
  title: 'Kiểm định chất lượng',
  date: '15/06/2024 10:00',
  description: 'Đạt kiểm tra thuốc trừ sâu và độ tươi.',
  actor: 'Thu mua Nông sản Việt',
  role: 'WHOLESALER',
  status: 'RECEIVED',
  icon: CheckCircle2
}, {
  title: 'Chế biến',
  date: '16/06/2024 09:00',
  description: 'Rửa sạch, phân loại và đóng gói vào thùng 1kg.',
  actor: 'Chế biến Thực phẩm Sạch',
  role: 'PROCESSOR',
  status: 'PROCESSED',
  icon: Factory
}, {
  title: 'Đang vận chuyển',
  date: '17/06/2024 08:00',
  description: 'Vận chuyển đến trung tâm phân phối. Nhiệt độ duy trì 12°C.',
  actor: 'Vận tải Logistics Nhanh',
  role: 'DISTRIBUTOR',
  status: 'SHIPPED',
  icon: Truck
}, {
  title: 'Đã đến cửa hàng',
  date: '18/06/2024 07:00',
  description: 'Nhận hàng tại Siêu thị Fresh Mart. Lên kệ bán.',
  actor: 'Siêu thị Fresh Mart',
  role: 'RETAILER',
  status: 'DELIVERED',
  icon: Store
}];
export function TraceResultPage() {
  const {
    id
  } = useParams();
  return <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Trang chủ
          </Button>
        </Link>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl mb-2">Cà chua hữu cơ</CardTitle>
                <CardDescription>Mã lô: {id || 'LO-2024-001'}</CardDescription>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Đã xác minh an toàn
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Nguồn gốc</p>
                <p className="font-medium">Đà Lạt, Lâm Đồng</p>
              </div>
              <div>
                <p className="text-muted-foreground">Ngày thu hoạch</p>
                <p className="font-medium">15/06/2024</p>
              </div>
              <div>
                <p className="text-muted-foreground">Hạn sử dụng</p>
                <p className="font-medium">25/06/2024</p>
              </div>
              <div>
                <p className="text-muted-foreground">Trạng thái</p>
                <p className="font-medium text-green-600">Còn hàng</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="relative border-l-2 border-gray-200 ml-3 space-y-12 pb-12">
          {MOCK_TIMELINE.map((event, index) => {
          const Icon = event.icon || CheckCircle2;
          return <div key={index} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 bg-white p-1 rounded-full border-2 border-primary">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{event.description}</p>

                    <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.actor}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Việt Nam
                      </div>
                      {event.role === 'DISTRIBUTOR' && <div className="flex items-center gap-1 text-blue-600">
                          <Thermometer className="h-3 w-3" />
                          12°C
                        </div>}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 whitespace-nowrap">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </div>;
}