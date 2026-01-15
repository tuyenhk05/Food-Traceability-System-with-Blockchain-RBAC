import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { ClipboardCheck, CheckCircle, XCircle } from 'lucide-react';
export function QualityInspection() {
  const [inspectingId, setInspectingId] = useState<string | null>(null);
  const items = [{
    id: 'LO-2024-005',
    product: 'Cà chua Hữu cơ',
    farmer: 'Nông trại Xanh Đà Lạt',
    date: '15/03/2024'
  }, {
    id: 'LO-2024-007',
    product: 'Khoai tây',
    farmer: 'Cánh đồng Nắng',
    date: '16/03/2024'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Kiểm định Chất lượng
          </h1>
          <p className="text-gray-500">
            Kiểm tra hàng hóa đã nhận trước khi chế biến
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List of items to inspect */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => <Card key={item.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                      {item.id}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.product}
                  </h3>
                  <p className="text-gray-600">Nguồn: {item.farmer}</p>
                </div>
                <Button onClick={() => setInspectingId(item.id)} variant={inspectingId === item.id ? 'primary' : 'outline'}>
                  {inspectingId === item.id ? 'Đang kiểm tra...' : 'Kiểm tra'}
                </Button>
              </div>

              {/* Inspection Form - Only visible when selected */}
              {inspectingId === item.id && <div className="mt-6 pt-6 border-t border-gray-100 animate-accordion-down">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <ClipboardCheck className="w-4 h-4 mr-2 text-blue-600" />
                    Báo cáo Kiểm định
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hạng chất lượng
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option>Hạng A (Cao cấp)</option>
                        <option>Hạng B (Tiêu chuẩn)</option>
                        <option>Hạng C (Chế biến)</option>
                        <option>Từ chối</option>
                      </select>
                    </div>
                    <Input label="Nhiệt độ (°C)" placeholder="ví dụ: 4.5" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ghi chú kiểm định
                    </label>
                    <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Mô tả tình trạng, khuyết điểm hoặc các chỉ số chất lượng cụ thể..." />
                  </div>
                  <div className="flex space-x-3">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Phê duyệt & Thông qua
                    </Button>
                    <Button variant="outline" className="text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50">
                      <XCircle className="w-4 h-4 mr-2" />
                      Từ chối Lô hàng
                    </Button>
                  </div>
                </div>}
            </Card>)}

          {items.length === 0 && <div className="text-center py-12 text-gray-500">
              Không có mặt hàng nào chờ kiểm định.
            </div>}
        </div>

        {/* Guidelines Sidebar */}
        <div className="space-y-6">
          <Card className="p-6 bg-blue-50 border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Hướng dẫn Kiểm định
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Kiểm tra hư hỏng vật lý hoặc bầm tím
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Xác minh nhật ký nhiệt độ phù hợp với yêu cầu
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Đảm bảo tính toàn vẹn của bao bì
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Hạng A yêu cầu &lt; 2% khuyết điểm
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>;
}