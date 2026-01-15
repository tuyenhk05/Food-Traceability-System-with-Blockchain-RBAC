import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Download, Filter, Eye, Package, Truck, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface ShipmentRecord {
  id: string;
  batchId: string;
  product: string;
  rawMaterial: string;
  quantity: string;
  destination: string;
  destinationType: string;
  shipmentDate: string;
  deliveryDate: string;
  carrier: string;
  trackingNumber: string;
  value: string;
  status: string;
  temperature: string;
  notes: string;
}
export function ShipmentHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const shipmentRecords: ShipmentRecord[] = [{
    id: 'SH-2024-025',
    batchId: 'LO-2024-005',
    product: 'Sốt cà chua đóng lọ',
    rawMaterial: 'Cà chua hữu cơ',
    quantity: '500 lọ (250ml)',
    destination: 'Siêu thị Fresh Mart',
    destinationType: 'Bán lẻ',
    shipmentDate: '20/06/2024',
    deliveryDate: '21/06/2024',
    carrier: 'Vận tải Logistics Nhanh',
    trackingNumber: 'VT-20240620-001',
    value: '15,000,000 VNĐ',
    status: 'Đã giao',
    temperature: '4-8°C',
    notes: 'Giao đúng hạn, không hư hỏng'
  }, {
    id: 'SH-2024-024',
    batchId: 'LO-2024-009',
    product: 'Táo sấy giòn',
    rawMaterial: 'Táo Fuji',
    quantity: '200 gói (100g)',
    destination: 'Cửa hàng Organic Life',
    destinationType: 'Bán lẻ',
    shipmentDate: '19/06/2024',
    deliveryDate: '20/06/2024',
    carrier: 'Vận tải Logistics Nhanh',
    trackingNumber: 'VT-20240619-003',
    value: '8,000,000 VNĐ',
    status: 'Đã giao',
    temperature: 'Nhiệt độ phòng',
    notes: 'Đóng gói cẩn thận, chất lượng tốt'
  }, {
    id: 'SH-2024-023',
    batchId: 'LO-2024-011',
    product: 'Đậu Hà Lan đông lạnh',
    rawMaterial: 'Đậu Hà Lan tươi',
    quantity: '300 kg',
    destination: 'Nhà hàng Golden Dragon',
    destinationType: 'Nhà hàng',
    shipmentDate: '18/06/2024',
    deliveryDate: '18/06/2024',
    carrier: 'Vận tải Logistics Nhanh',
    trackingNumber: 'VT-20240618-005',
    value: '12,000,000 VNĐ',
    status: 'Đã giao',
    temperature: '-18°C',
    notes: 'Giao trong ngày, duy trì nhiệt độ tốt'
  }, {
    id: 'SH-2024-022',
    batchId: 'LO-2024-012',
    product: 'Dâu tây đông lạnh',
    rawMaterial: 'Dâu tây tươi',
    quantity: '150 kg',
    destination: 'Siêu thị Fresh Mart',
    destinationType: 'Bán lẻ',
    shipmentDate: '17/06/2024',
    deliveryDate: '-',
    carrier: 'Vận tải Logistics Nhanh',
    trackingNumber: 'VT-20240617-002',
    value: '18,000,000 VNĐ',
    status: 'Đang vận chuyển',
    temperature: '-18°C',
    notes: 'Dự kiến giao 18/06/2024'
  }, {
    id: 'SH-2024-021',
    batchId: 'LO-2024-007',
    product: 'Khoai tây chiên đông lạnh',
    rawMaterial: 'Khoai tây',
    quantity: '400 kg',
    destination: 'Chuỗi nhà hàng FastFood',
    destinationType: 'Nhà hàng',
    shipmentDate: '16/06/2024',
    deliveryDate: '17/06/2024',
    carrier: 'Vận tải Logistics Nhanh',
    trackingNumber: 'VT-20240616-008',
    value: '16,000,000 VNĐ',
    status: 'Đã giao',
    temperature: '-18°C',
    notes: 'Giao đầy đủ, chất lượng đạt chuẩn'
  }, {
    id: 'SH-2024-020',
    batchId: 'LO-2024-008',
    product: 'Bắp cải muối chua',
    rawMaterial: 'Bắp cải',
    quantity: '300 lọ (500g)',
    destination: 'Siêu thị City Mart',
    destinationType: 'Bán lẻ',
    shipmentDate: '15/06/2024',
    deliveryDate: '16/06/2024',
    carrier: 'Vận tải Express',
    trackingNumber: 'EX-20240615-012',
    value: '9,000,000 VNĐ',
    status: 'Đã giao',
    temperature: '4-8°C',
    notes: 'Sản phẩm lên men tốt'
  }, {
    id: 'SH-2024-019',
    batchId: 'LO-2024-003',
    product: 'Ớt bột',
    rawMaterial: 'Ớt chuông',
    quantity: '100 kg',
    destination: 'Nhà máy gia vị Việt',
    destinationType: 'Công nghiệp',
    shipmentDate: '14/06/2024',
    deliveryDate: '15/06/2024',
    carrier: 'Vận tải Logistics Nhanh',
    trackingNumber: 'VT-20240614-004',
    value: '7,500,000 VNĐ',
    status: 'Đã giao',
    temperature: 'Nhiệt độ phòng',
    notes: 'Đóng gói kín, tránh ẩm'
  }, {
    id: 'SH-2024-018',
    batchId: 'LO-2024-001',
    product: 'Cà chua sấy khô',
    rawMaterial: 'Cà chua hữu cơ',
    quantity: '80 kg',
    destination: 'Cửa hàng Organic Life',
    destinationType: 'Bán lẻ',
    shipmentDate: '13/06/2024',
    deliveryDate: '14/06/2024',
    carrier: 'Vận tải Express',
    trackingNumber: 'EX-20240613-007',
    value: '12,000,000 VNĐ',
    status: 'Đã giao',
    temperature: 'Nhiệt độ phòng',
    notes: 'Chất lượng cao, màu sắc đẹp'
  }];
  const filteredRecords = shipmentRecords.filter(record => {
    const matchesSearch = record.product.toLowerCase().includes(searchTerm.toLowerCase()) || record.id.toLowerCase().includes(searchTerm.toLowerCase()) || record.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || record.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  // Calculate stats
  const totalShipments = shipmentRecords.length;
  const deliveredShipments = shipmentRecords.filter(r => r.status === 'Đã giao').length;
  const inTransitShipments = shipmentRecords.filter(r => r.status === 'Đang vận chuyển').length;
  const totalRevenue = shipmentRecords.filter(r => r.status === 'Đã giao').reduce((sum, r) => {
    const value = parseFloat(r.value.replace(/[^\d]/g, ''));
    return sum + value;
  }, 0);
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Lịch sử Xuất hàng
          </h1>
          <p className="text-gray-500">
            Theo dõi tất cả các lô hàng đã xuất kho
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
            <div className="p-3 bg-blue-100 rounded-full">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng lô xuất</p>
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
              <p className="text-sm text-gray-500">Đã giao</p>
              <p className="text-2xl font-bold text-gray-900">
                {deliveredShipments}
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
      </div>

      <Card className="overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm kiếm theo sản phẩm, mã vận đơn..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">Tất cả trạng thái</option>
                <option value="Đã giao">Đã giao</option>
                <option value="Đang vận chuyển">Đang vận chuyển</option>
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
                <th className="px-6 py-3">Mã xuất hàng</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Điểm đến</th>
                <th className="px-6 py-3">Ngày xuất</th>
                <th className="px-6 py-3">Mã vận đơn</th>
                <th className="px-6 py-3">Giá trị</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRecords.map(record => <tr key={record.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium">
                    {record.id}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {record.product}
                      </p>
                      <p className="text-xs text-gray-500">
                        Từ: {record.rawMaterial}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{record.quantity}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {record.destination}
                      </p>
                      <p className="text-xs text-gray-500">
                        {record.destinationType}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.shipmentDate}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-gray-600">
                    {record.trackingNumber}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {record.value}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${record.status === 'Đã giao' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {record.status === 'Đã giao' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                      {record.status}
                    </span>
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