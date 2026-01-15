import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { QrCode, Play, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function ProcessingQueue() {
  const navigate = useNavigate();
  const queueItems = [{
    id: 'LO-2024-005',
    material: 'Cà chua hữu cơ',
    qty: '500 kg',
    grade: 'A',
    supplier: 'Nông trại Xanh Đà Lạt',
    receivedDate: '15/06/2024',
    priority: 'Cao'
  }, {
    id: 'LO-2024-007',
    material: 'Khoai tây',
    qty: '800 kg',
    grade: 'B',
    supplier: 'Cánh đồng Nắng',
    receivedDate: '16/06/2024',
    priority: 'Trung bình'
  }, {
    id: 'LO-2024-012',
    material: 'Dâu tây',
    qty: '200 kg',
    grade: 'A',
    supplier: 'Nông trại Xanh Đà Lạt',
    receivedDate: '17/06/2024',
    priority: 'Cao'
  }, {
    id: 'LO-2024-013',
    material: 'Bắp cải',
    qty: '600 kg',
    grade: 'A',
    supplier: 'Vườn Hữu cơ Mộc Châu',
    receivedDate: '17/06/2024',
    priority: 'Thấp'
  }, {
    id: 'LO-2024-014',
    material: 'Cà rốt',
    qty: '400 kg',
    grade: 'B',
    supplier: 'Cánh đồng Nắng',
    receivedDate: '18/06/2024',
    priority: 'Trung bình'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Hàng đợi Chế biến
          </h1>
          <p className="text-gray-500">
            Nguyên liệu đã được phê duyệt chờ chế biến
          </p>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mã lô
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nguyên liệu
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nhà cung cấp
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số lượng
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chất lượng
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ưu tiên
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {queueItems.map(item => <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {item.material}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {item.qty}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.grade === 'A' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      Hạng {item.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.priority === 'Cao' ? 'bg-red-100 text-red-800' : item.priority === 'Trung bình' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => navigate(`/dashboard/batch/${item.id}`)}>
                        <Eye className="w-3 h-3 mr-1" />
                        Xem
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Play className="w-3 h-3 mr-1" />
                        Chế biến
                      </Button>
                      <Button size="sm" variant="outline">
                        <QrCode className="w-3 h-3 mr-1" />
                        QR
                      </Button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}