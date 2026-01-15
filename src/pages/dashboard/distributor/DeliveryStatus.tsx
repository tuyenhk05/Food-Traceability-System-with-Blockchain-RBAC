import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Filter, Eye, MapPin, Truck, Package, Clock, CheckCircle, AlertCircle, Navigation, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface DeliveryStatus {
  id: string;
  trackingNumber: string;
  batchId: string;
  product: string;
  quantity: string;
  origin: string;
  destination: string;
  recipient: string;
  recipientPhone: string;
  driver: string;
  driverPhone: string;
  vehicle: string;
  departureTime: string;
  estimatedArrival: string;
  currentLocation: string;
  progress: number;
  status: string;
  temperature: string;
  distance: string;
  notes: string;
}
export function DeliveryStatus() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const deliveries: DeliveryStatus[] = [{
    id: 'DEL-2024-055',
    trackingNumber: 'VT-20240621-001',
    batchId: 'LO-2024-025',
    product: 'Sốt cà chua đóng lọ',
    quantity: '500 lọ',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Siêu thị Fresh Mart, Quận 1, TP.HCM',
    recipient: 'Nguyễn Văn A',
    recipientPhone: '0901234567',
    driver: 'Trần Văn B',
    driverPhone: '0912345678',
    vehicle: 'Xe tải lạnh 29A-12345',
    departureTime: '21/06/2024 06:00',
    estimatedArrival: '21/06/2024 18:00',
    currentLocation: 'Nghệ An (Km 320/1680)',
    progress: 65,
    status: 'Đang giao',
    temperature: '4-8°C',
    distance: '1680 km',
    notes: 'Đang di chuyển bình thường, nhiệt độ ổn định'
  }, {
    id: 'DEL-2024-054',
    trackingNumber: 'VT-20240621-002',
    batchId: 'LO-2024-024',
    product: 'Táo sấy giòn',
    quantity: '200 gói',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Cửa hàng Organic Life, Quận 3, TP.HCM',
    recipient: 'Lê Thị C',
    recipientPhone: '0923456789',
    driver: 'Phạm Văn D',
    driverPhone: '0934567890',
    vehicle: 'Xe tải thường 30B-67890',
    departureTime: '21/06/2024 07:00',
    estimatedArrival: '21/06/2024 19:00',
    currentLocation: 'Thanh Hóa (Km 180/1680)',
    progress: 35,
    status: 'Đang giao',
    temperature: 'Nhiệt độ phòng',
    distance: '1680 km',
    notes: 'Đang di chuyển theo lịch trình'
  }, {
    id: 'DEL-2024-053',
    trackingNumber: 'VT-20240621-003',
    batchId: 'LO-2024-023',
    product: 'Đậu Hà Lan đông lạnh',
    quantity: '300 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Nhà hàng Golden Dragon, Quận 1, TP.HCM',
    recipient: 'Hoàng Văn E',
    recipientPhone: '0945678901',
    driver: 'Đỗ Văn F',
    driverPhone: '0956789012',
    vehicle: 'Xe tải lạnh 29C-11111',
    departureTime: '21/06/2024 05:00',
    estimatedArrival: '21/06/2024 17:00',
    currentLocation: 'Đang đến điểm giao (Km 1650/1680)',
    progress: 95,
    status: 'Sắp đến',
    temperature: '-18°C',
    distance: '1680 km',
    notes: 'Dự kiến đến sớm 30 phút'
  }, {
    id: 'DEL-2024-052',
    trackingNumber: 'VT-20240620-008',
    batchId: 'LO-2024-022',
    product: 'Dâu tây đông lạnh',
    quantity: '150 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Siêu thị Fresh Mart, Hà Đông, Hà Nội',
    recipient: 'Vũ Thị G',
    recipientPhone: '0967890123',
    driver: 'Ngô Văn H',
    driverPhone: '0978901234',
    vehicle: 'Xe tải lạnh 29D-22222',
    departureTime: '21/06/2024 08:00',
    estimatedArrival: '21/06/2024 10:00',
    currentLocation: 'Đang đến điểm giao (Km 28/30)',
    progress: 90,
    status: 'Sắp đến',
    temperature: '-18°C',
    distance: '30 km',
    notes: 'Đang liên hệ người nhận'
  }, {
    id: 'DEL-2024-051',
    trackingNumber: 'VT-20240620-009',
    batchId: 'LO-2024-021',
    product: 'Khoai tây chiên đông lạnh',
    quantity: '400 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Chuỗi nhà hàng FastFood, Đà Nẵng',
    recipient: 'Bùi Văn I',
    recipientPhone: '0989012345',
    driver: 'Lý Văn K',
    driverPhone: '0990123456',
    vehicle: 'Xe tải lạnh 29E-33333',
    departureTime: '20/06/2024 22:00',
    estimatedArrival: '21/06/2024 10:00',
    currentLocation: 'Quảng Bình (Km 450/800)',
    progress: 55,
    status: 'Đang giao',
    temperature: '-18°C',
    distance: '800 km',
    notes: 'Đang di chuyển ban đêm để tránh nóng'
  }, {
    id: 'DEL-2024-050',
    trackingNumber: 'EX-20240620-005',
    batchId: 'LO-2024-020',
    product: 'Bắp cải muối chua',
    quantity: '300 lọ',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Siêu thị City Mart, Hải Phòng',
    recipient: 'Mai Thị L',
    recipientPhone: '0901234568',
    driver: 'Cao Văn M',
    driverPhone: '0912345679',
    vehicle: 'Xe tải thường 30C-44444',
    departureTime: '21/06/2024 06:30',
    estimatedArrival: '21/06/2024 09:00',
    currentLocation: 'Hải Dương (Km 80/120)',
    progress: 70,
    status: 'Đang giao',
    temperature: '4-8°C',
    distance: '120 km',
    notes: 'Đường thuận lợi, không ùn tắc'
  }, {
    id: 'DEL-2024-049',
    trackingNumber: 'VT-20240620-010',
    batchId: 'LO-2024-019',
    product: 'Ớt bột',
    quantity: '100 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Nhà máy gia vị Việt, Bình Dương',
    recipient: 'Đinh Văn N',
    recipientPhone: '0923456780',
    driver: 'Hồ Văn O',
    driverPhone: '0934567891',
    vehicle: 'Xe tải thường 30D-55555',
    departureTime: '20/06/2024 20:00',
    estimatedArrival: '21/06/2024 08:00',
    currentLocation: 'Nghệ An (Km 350/1650)',
    progress: 40,
    status: 'Đang giao',
    temperature: 'Nhiệt độ phòng',
    distance: '1650 km',
    notes: 'Đang nghỉ tại trạm dừng chân'
  }, {
    id: 'DEL-2024-048',
    trackingNumber: 'VT-20240620-011',
    batchId: 'LO-2024-018',
    product: 'Cà chua sấy khô',
    quantity: '80 kg',
    origin: 'Chế biến Thực phẩm Sạch, Hà Nội',
    destination: 'Cửa hàng Organic Life, Đà Nẵng',
    recipient: 'Phan Thị P',
    recipientPhone: '0945678902',
    driver: 'Võ Văn Q',
    driverPhone: '0956789013',
    vehicle: 'Xe tải thường 30E-66666',
    departureTime: '21/06/2024 04:00',
    estimatedArrival: '21/06/2024 12:00',
    currentLocation: 'Nghệ An (Km 280/800)',
    progress: 45,
    status: 'Đang giao',
    temperature: 'Nhiệt độ phòng',
    distance: '800 km',
    notes: 'Đang di chuyển bình thường'
  }];
  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch = delivery.product.toLowerCase().includes(searchTerm.toLowerCase()) || delivery.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) || delivery.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || delivery.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Đang giao':
        return <Truck className="w-4 h-4 text-blue-600" />;
      case 'Sắp đến':
        return <Navigation className="w-4 h-4 text-green-600" />;
      default:
        return null;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đang giao':
        return 'bg-blue-100 text-blue-800';
      case 'Sắp đến':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Calculate stats
  const totalDeliveries = deliveries.length;
  const inTransit = deliveries.filter(d => d.status === 'Đang giao').length;
  const nearDestination = deliveries.filter(d => d.status === 'Sắp đến').length;
  const avgProgress = deliveries.reduce((sum, d) => sum + d.progress, 0) / deliveries.length;
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Trạng thái Giao hàng
          </h1>
          <p className="text-gray-500">
            Theo dõi thời gian thực các lô hàng đang vận chuyển
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đang vận chuyển</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalDeliveries}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <Truck className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đang trên đường</p>
              <p className="text-2xl font-bold text-gray-900">{inTransit}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full">
              <Navigation className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Sắp đến nơi</p>
              <p className="text-2xl font-bold text-gray-900">
                {nearDestination}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-full">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tiến độ TB</p>
              <p className="text-2xl font-bold text-gray-900">
                {avgProgress.toFixed(0)}%
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
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">Tất cả trạng thái</option>
                <option value="Đang giao">Đang giao</option>
                <option value="Sắp đến">Sắp đến</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Lọc
              </Button>
            </div>
          </div>
        </div>

        {/* Delivery Cards */}
        <div className="p-6 space-y-4">
          {filteredDeliveries.map(delivery => <Card key={delivery.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {delivery.product}
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}>
                        {getStatusIcon(delivery.status)}
                        <span className="ml-1">{delivery.status}</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-mono">
                      {delivery.trackingNumber}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/dashboard/batch/${delivery.batchId}`)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Route Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Điểm đi</p>
                        <p className="text-sm font-medium text-gray-900">
                          {delivery.origin}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-red-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Điểm đến</p>
                        <p className="text-sm font-medium text-gray-900">
                          {delivery.destination}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Tài xế</p>
                        <p className="text-sm font-medium text-gray-900">
                          {delivery.driver}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        {delivery.driverPhone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      Vị trí hiện tại: {delivery.currentLocation}
                    </p>
                    <span className="text-sm font-semibold text-blue-600">
                      {delivery.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{
                  width: `${delivery.progress}%`
                }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Khởi hành: {delivery.departureTime}</span>
                    <span>Dự kiến đến: {delivery.estimatedArrival}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 pt-2 border-t">
                  <div className="flex items-center gap-1">
                    <Package className="w-4 h-4" />
                    <span>{delivery.quantity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{delivery.temperature}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Navigation className="w-4 h-4" />
                    <span>{delivery.distance}</span>
                  </div>
                </div>

                {delivery.notes && <p className="text-sm text-gray-500 italic">
                    {delivery.notes}
                  </p>}
              </div>
            </Card>)}
        </div>
      </Card>
    </div>;
}