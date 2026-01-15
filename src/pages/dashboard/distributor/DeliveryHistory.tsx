import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Download, Filter, Eye, CheckCircle, TrendingUp, Package, Truck, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface DeliveryRecord {
  id: string;
  trackingNumber: string;
  batchId: string;
  product: string;
  quantity: string;
  origin: string;
  destination: string;
  recipient: string;
  driver: string;
  vehicle: string;
  departureDate: string;
  deliveryDate: string;
  deliveryTime: string;
  distance: string;
  deliveryFee: string;
  status: string;
  rating: number;
  notes: string;
}
export function DeliveryHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMonth, setFilterMonth] = useState('all');
  const deliveryRecords: DeliveryRecord[] = [{
    id: 'DEL-2024-047',
    trackingNumber: 'VT-20240620-007',
    batchId: 'LO-2024-017',
    product: 'Cà rốt thái lát đông lạnh',
    quantity: '350 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Siêu thị Fresh Mart, TP.HCM',
    recipient: 'Trần Văn A',
    driver: 'Nguyễn Văn B',
    vehicle: 'Xe tải lạnh 29A-11111',
    departureDate: '19/06/2024',
    deliveryDate: '20/06/2024',
    deliveryTime: '14:30',
    distance: '1680 km',
    deliveryFee: '8,400,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Giao đúng hạn, hàng nguyên vẹn'
  }, {
    id: 'DEL-2024-046',
    trackingNumber: 'EX-20240619-006',
    batchId: 'LO-2024-016',
    product: 'Bắp ngọt đông lạnh',
    quantity: '500 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Nhà hàng Golden Dragon, Đà Nẵng',
    recipient: 'Lê Thị C',
    driver: 'Phạm Văn D',
    vehicle: 'Xe tải lạnh 29B-22222',
    departureDate: '18/06/2024',
    deliveryDate: '19/06/2024',
    deliveryTime: '10:15',
    distance: '800 km',
    deliveryFee: '4,000,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Nhiệt độ duy trì tốt, khách hàng hài lòng'
  }, {
    id: 'DEL-2024-045',
    trackingNumber: 'VT-20240618-005',
    batchId: 'LO-2024-015',
    product: 'Ớt bột',
    quantity: '100 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Nhà máy gia vị Việt, Bình Dương',
    recipient: 'Hoàng Văn E',
    driver: 'Đỗ Văn F',
    vehicle: 'Xe tải thường 30A-33333',
    departureDate: '17/06/2024',
    deliveryDate: '18/06/2024',
    deliveryTime: '16:45',
    distance: '1650 km',
    deliveryFee: '4,950,000 VNĐ',
    status: 'Đã giao',
    rating: 4,
    notes: 'Giao chậm 1 giờ do tắc đường'
  }, {
    id: 'DEL-2024-044',
    trackingNumber: 'VT-20240617-004',
    batchId: 'LO-2024-014',
    product: 'Cà chua sấy khô',
    quantity: '80 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Cửa hàng Organic Life, Đà Nẵng',
    recipient: 'Vũ Thị G',
    driver: 'Ngô Văn H',
    vehicle: 'Xe tải thường 30B-44444',
    departureDate: '16/06/2024',
    deliveryDate: '17/06/2024',
    deliveryTime: '11:30',
    distance: '800 km',
    deliveryFee: '2,400,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Đóng gói cẩn thận, giao đúng giờ'
  }, {
    id: 'DEL-2024-043',
    trackingNumber: 'EX-20240616-003',
    batchId: 'LO-2024-013',
    product: 'Bắp cải muối chua',
    quantity: '300 lọ',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Siêu thị City Mart, Hải Phòng',
    recipient: 'Bùi Văn I',
    driver: 'Lý Văn K',
    vehicle: 'Xe tải thường 30C-55555',
    departureDate: '15/06/2024',
    deliveryDate: '16/06/2024',
    deliveryTime: '08:45',
    distance: '120 km',
    deliveryFee: '600,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Giao sớm 30 phút, chất lượng tốt'
  }, {
    id: 'DEL-2024-042',
    trackingNumber: 'VT-20240615-002',
    batchId: 'LO-2024-012',
    product: 'Khoai tây chiên đông lạnh',
    quantity: '400 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Chuỗi nhà hàng FastFood, Đà Nẵng',
    recipient: 'Mai Thị L',
    driver: 'Cao Văn M',
    vehicle: 'Xe tải lạnh 29C-66666',
    departureDate: '14/06/2024',
    deliveryDate: '15/06/2024',
    deliveryTime: '13:20',
    distance: '800 km',
    deliveryFee: '4,800,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Nhiệt độ -18°C duy trì tốt'
  }, {
    id: 'DEL-2024-041',
    trackingNumber: 'VT-20240614-001',
    batchId: 'LO-2024-011',
    product: 'Đậu Hà Lan đông lạnh',
    quantity: '300 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Nhà hàng Golden Dragon, TP.HCM',
    recipient: 'Đinh Văn N',
    driver: 'Hồ Văn O',
    vehicle: 'Xe tải lạnh 29D-77777',
    departureDate: '13/06/2024',
    deliveryDate: '14/06/2024',
    deliveryTime: '15:00',
    distance: '1680 km',
    deliveryFee: '8,400,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Giao đúng hạn, đóng gói cẩn thận'
  }, {
    id: 'DEL-2024-040',
    trackingNumber: 'EX-20240613-009',
    batchId: 'LO-2024-010',
    product: 'Dâu tây đông lạnh',
    quantity: '150 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Siêu thị Fresh Mart, Hà Đông',
    recipient: 'Phan Thị P',
    driver: 'Võ Văn Q',
    vehicle: 'Xe tải lạnh 29E-88888',
    departureDate: '12/06/2024',
    deliveryDate: '12/06/2024',
    deliveryTime: '16:30',
    distance: '30 km',
    deliveryFee: '300,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Giao trong ngày, chất lượng cao'
  }, {
    id: 'DEL-2024-039',
    trackingNumber: 'VT-20240612-008',
    batchId: 'LO-2024-009',
    product: 'Táo sấy giòn',
    quantity: '200 gói',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Cửa hàng Organic Life, TP.HCM',
    recipient: 'Trịnh Văn R',
    driver: 'Dương Văn S',
    vehicle: 'Xe tải thường 30D-99999',
    departureDate: '11/06/2024',
    deliveryDate: '12/06/2024',
    deliveryTime: '14:15',
    distance: '1680 km',
    deliveryFee: '5,040,000 VNĐ',
    status: 'Đã giao',
    rating: 4,
    notes: 'Đóng gói tốt, giao đúng hạn'
  }, {
    id: 'DEL-2024-038',
    trackingNumber: 'VT-20240611-007',
    batchId: 'LO-2024-008',
    product: 'Sốt cà chua đóng lọ',
    quantity: '500 lọ',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Siêu thị Fresh Mart, TP.HCM',
    recipient: 'Lâm Thị T',
    driver: 'Tô Văn U',
    vehicle: 'Xe tải lạnh 29F-00000',
    departureDate: '10/06/2024',
    deliveryDate: '11/06/2024',
    deliveryTime: '12:00',
    distance: '1680 km',
    deliveryFee: '8,400,000 VNĐ',
    status: 'Đã giao',
    rating: 5,
    notes: 'Nhiệt độ 4-8°C duy trì tốt, không vỡ lọ'
  }];
  const filteredRecords = deliveryRecords.filter(record => {
    const matchesSearch = record.product.toLowerCase().includes(searchTerm.toLowerCase()) || record.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) || record.destination.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  // Calculate stats
  const totalDeliveries = deliveryRecords.length;
  const totalRevenue = deliveryRecords.reduce((sum, r) => {
    const fee = parseFloat(r.deliveryFee.replace(/[^\d]/g, ''));
    return sum + fee;
  }, 0);
  const totalDistance = deliveryRecords.reduce((sum, r) => {
    const distance = parseFloat(r.distance.replace(/[^\d]/g, ''));
    return sum + distance;
  }, 0);
  const avgRating = deliveryRecords.reduce((sum, r) => sum + r.rating, 0) / deliveryRecords.length;
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Lịch sử Giao hàng
          </h1>
          <p className="text-gray-500">
            Theo dõi tất cả các lô hàng đã giao thành công
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Xuất báo cáo
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đã giao</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalDeliveries}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Doanh thu</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalRevenue / 1000000).toFixed(1)}M
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng quãng đường</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalDistance / 1000).toFixed(1)}K km
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-full">
              <Package className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đánh giá TB</p>
              <p className="text-2xl font-bold text-gray-900">
                {avgRating.toFixed(1)}/5
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm kiếm theo sản phẩm, mã vận đơn, điểm đến..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterMonth} onChange={e => setFilterMonth(e.target.value)}>
                <option value="all">Tất cả tháng</option>
                <option value="06/2024">Tháng 6/2024</option>
                <option value="05/2024">Tháng 5/2024</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Lọc
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-3">Mã vận đơn</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3">Điểm đến</th>
                <th className="px-6 py-3">Tài xế</th>
                <th className="px-6 py-3">Ngày giao</th>
                <th className="px-6 py-3">Quãng đường</th>
                <th className="px-6 py-3">Phí vận chuyển</th>
                <th className="px-6 py-3">Đánh giá</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRecords.map(record => <tr key={record.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium">
                    {record.trackingNumber}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {record.product}
                      </p>
                      <p className="text-xs text-gray-500">{record.quantity}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.destination}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{record.driver}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-gray-900">{record.deliveryDate}</p>
                      <p className="text-xs text-gray-500">
                        {record.deliveryTime}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{record.distance}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {record.deliveryFee}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{record.rating}/5</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/dashboard/batch/${record.batchId}`)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}