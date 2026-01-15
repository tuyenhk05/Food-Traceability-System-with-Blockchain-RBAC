import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Filter, Eye, CheckCircle, Clock, Truck, Package, AlertTriangle, MapPin, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface IncomingShipment {
  id: string;
  batchId: string;
  farmer: string;
  farmerLocation: string;
  product: string;
  variety: string;
  quantity: string;
  expectedArrival: string;
  actualArrival: string;
  status: string;
  transportMethod: string;
  carrier: string;
  temperature: string;
  distance: string;
  estimatedQuality: string;
  notes: string;
}
export function IncomingGoods() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const incomingShipments: IncomingShipment[] = [{
    id: 'INC-2024-025',
    batchId: 'LO-2024-008',
    farmer: 'Nông trại Xanh Đà Lạt',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Cà chua hữu cơ',
    variety: 'Roma VF',
    quantity: '500 kg',
    expectedArrival: '21/06/2024 08:00',
    actualArrival: '21/06/2024 08:30',
    status: 'Đã đến',
    transportMethod: 'Xe tải lạnh',
    carrier: 'Vận tải Logistics Nhanh',
    temperature: '12°C',
    distance: '320 km',
    estimatedQuality: 'Hạng A',
    notes: 'Đã kiểm tra sơ bộ, chất lượng tốt'
  }, {
    id: 'INC-2024-024',
    batchId: 'LO-2024-009',
    farmer: 'Vườn cây Cao Nguyên',
    farmerLocation: 'Mộc Châu, Sơn La',
    product: 'Táo Fuji',
    variety: 'Fuji Premium',
    quantity: '1200 kg',
    expectedArrival: '21/06/2024 14:00',
    actualArrival: '-',
    status: 'Đang vận chuyển',
    transportMethod: 'Xe tải lạnh',
    carrier: 'Vận tải Express',
    temperature: '4°C',
    distance: '450 km',
    estimatedQuality: 'Hạng A',
    notes: 'Dự kiến đến sớm 30 phút'
  }, {
    id: 'INC-2024-023',
    batchId: 'LO-2024-010',
    farmer: 'Cánh đồng Nắng',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Khoai tây',
    variety: 'Russet',
    quantity: '800 kg',
    expectedArrival: '21/06/2024 07:15',
    actualArrival: '21/06/2024 07:15',
    status: 'Đã đến',
    transportMethod: 'Xe tải thường',
    carrier: 'Vận tải Logistics Nhanh',
    temperature: 'Nhiệt độ phòng',
    distance: '310 km',
    estimatedQuality: 'Hạng B',
    notes: 'Cần kiểm tra kỹ, một số củ có vết xước'
  }, {
    id: 'INC-2024-022',
    batchId: 'LO-2024-011',
    farmer: 'Nông trại Xanh Đà Lạt',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Dâu tây',
    variety: 'Sweet Charlie',
    quantity: '200 kg',
    expectedArrival: '21/06/2024 09:45',
    actualArrival: '21/06/2024 09:45',
    status: 'Đã đến',
    transportMethod: 'Xe tải lạnh',
    carrier: 'Vận tải Express',
    temperature: '2°C',
    distance: '320 km',
    estimatedQuality: 'Hạng A',
    notes: 'Chất lượng cao cấp, đóng gói cẩn thận'
  }, {
    id: 'INC-2024-021',
    batchId: 'LO-2024-012',
    farmer: 'Vườn Hữu cơ Mộc Châu',
    farmerLocation: 'Mộc Châu, Sơn La',
    product: 'Bắp cải',
    variety: 'Green Cabbage',
    quantity: '600 kg',
    expectedArrival: '21/06/2024 16:30',
    actualArrival: '-',
    status: 'Đang vận chuyển',
    transportMethod: 'Xe tải thường',
    carrier: 'Vận tải Logistics Nhanh',
    temperature: 'Nhiệt độ phòng',
    distance: '450 km',
    estimatedQuality: 'Hạng A',
    notes: 'Lô hàng lớn, cần chuẩn bị kho'
  }, {
    id: 'INC-2024-020',
    batchId: 'LO-2024-013',
    farmer: 'Cánh đồng Nắng',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Cà rốt',
    variety: 'Nantes',
    quantity: '400 kg',
    expectedArrival: '21/06/2024 10:00',
    actualArrival: '21/06/2024 10:15',
    status: 'Chờ kiểm định',
    transportMethod: 'Xe tải thường',
    carrier: 'Vận tải Express',
    temperature: 'Nhiệt độ phòng',
    distance: '310 km',
    estimatedQuality: 'Hạng A',
    notes: 'Đã đến, đang chờ kiểm định chất lượng'
  }, {
    id: 'INC-2024-019',
    batchId: 'LO-2024-014',
    farmer: 'Nông trại Xanh Đà Lạt',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Ớt chuông',
    variety: 'California Wonder',
    quantity: '300 kg',
    expectedArrival: '22/06/2024 08:00',
    actualArrival: '-',
    status: 'Chưa xuất phát',
    transportMethod: 'Xe tải lạnh',
    carrier: 'Vận tải Logistics Nhanh',
    temperature: '10°C',
    distance: '320 km',
    estimatedQuality: 'Hạng B',
    notes: 'Dự kiến xuất phát sáng mai'
  }, {
    id: 'INC-2024-018',
    batchId: 'LO-2024-015',
    farmer: 'Vườn cây Cao Nguyên',
    farmerLocation: 'Mộc Châu, Sơn La',
    product: 'Bắp ngọt',
    variety: 'Golden Bantam',
    quantity: '700 kg',
    expectedArrival: '21/06/2024 15:00',
    actualArrival: '-',
    status: 'Đang vận chuyển',
    transportMethod: 'Xe tải lạnh',
    carrier: 'Vận tải Express',
    temperature: '8°C',
    distance: '450 km',
    estimatedQuality: 'Hạng A',
    notes: 'Lô hàng chất lượng cao'
  }];
  const filteredShipments = incomingShipments.filter(shipment => {
    const matchesSearch = shipment.product.toLowerCase().includes(searchTerm.toLowerCase()) || shipment.batchId.toLowerCase().includes(searchTerm.toLowerCase()) || shipment.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || shipment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Đã đến':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Đang vận chuyển':
        return <Truck className="w-4 h-4 text-blue-600" />;
      case 'Chờ kiểm định':
        return <Clock className="w-4 h-4 text-amber-600" />;
      case 'Chưa xuất phát':
        return <Package className="w-4 h-4 text-gray-600" />;
      default:
        return null;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đã đến':
        return 'bg-green-100 text-green-800';
      case 'Đang vận chuyển':
        return 'bg-blue-100 text-blue-800';
      case 'Chờ kiểm định':
        return 'bg-amber-100 text-amber-800';
      case 'Chưa xuất phát':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Calculate stats
  const totalShipments = incomingShipments.length;
  const arrivedShipments = incomingShipments.filter(s => s.status === 'Đã đến' || s.status === 'Chờ kiểm định').length;
  const inTransitShipments = incomingShipments.filter(s => s.status === 'Đang vận chuyển').length;
  const totalQuantity = incomingShipments.reduce((sum, s) => {
    const qty = parseFloat(s.quantity.replace(/[^\d.]/g, ''));
    return sum + qty;
  }, 0);
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hàng đang đến</h1>
          <p className="text-gray-500">
            Theo dõi các lô hàng đang trên đường vận chuyển
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
              <p className="text-sm text-gray-500">Tổng lô hàng</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalShipments}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đã đến</p>
              <p className="text-2xl font-bold text-gray-900">
                {arrivedShipments}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-full">
              <Truck className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đang vận chuyển</p>
              <p className="text-2xl font-bold text-gray-900">
                {inTransitShipments}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <AlertTriangle className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng khối lượng</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalQuantity.toFixed(0)} kg
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
              <Input placeholder="Tìm kiếm theo sản phẩm, nông dân, mã lô..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">Tất cả trạng thái</option>
                <option value="Đã đến">Đã đến</option>
                <option value="Đang vận chuyển">Đang vận chuyển</option>
                <option value="Chờ kiểm định">Chờ kiểm định</option>
                <option value="Chưa xuất phát">Chưa xuất phát</option>
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
                <th className="px-6 py-3">Mã lô</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3">Nông dân</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Thời gian đến</th>
                <th className="px-6 py-3">Nhiệt độ</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredShipments.map(shipment => <tr key={shipment.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium">
                    {shipment.batchId}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {shipment.product}
                      </p>
                      <p className="text-xs text-gray-500">
                        {shipment.variety}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {shipment.farmer}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {shipment.farmerLocation}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {shipment.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-gray-900 text-xs">
                        {shipment.actualArrival || shipment.expectedArrival}
                      </p>
                      {!shipment.actualArrival && <p className="text-xs text-gray-500">(dự kiến)</p>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-blue-600">
                      <Thermometer className="w-3 h-3" />
                      <span className="text-xs">{shipment.temperature}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(shipment.status)}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/dashboard/batch/${shipment.batchId}`)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      {(shipment.status === 'Đã đến' || shipment.status === 'Chờ kiểm định') && <Button size="sm">Xác nhận</Button>}
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}