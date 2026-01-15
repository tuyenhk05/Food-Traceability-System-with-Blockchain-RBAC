import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Download, Filter, Eye, Calendar, TrendingUp, Package, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface HarvestRecord {
  id: string;
  batchId: string;
  crop: string;
  variety: string;
  harvestDate: string;
  quantity: string;
  quality: string;
  buyer: string;
  price: string;
  totalValue: string;
  status: string;
  notes: string;
}
export function HarvestHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMonth, setFilterMonth] = useState('all');
  const harvestRecords: HarvestRecord[] = [{
    id: 'HV-2024-015',
    batchId: 'LO-2024-002',
    crop: 'Bắp ngọt',
    variety: 'Golden Bantam',
    harvestDate: '20/06/2024',
    quantity: '800 kg',
    quality: 'Hạng A',
    buyer: 'Thu mua Nông sản Việt',
    price: '35,000 VNĐ/kg',
    totalValue: '28,000,000 VNĐ',
    status: 'Đã thanh toán',
    notes: 'Chất lượng tốt, độ ngọt cao'
  }, {
    id: 'HV-2024-014',
    batchId: 'LO-2024-005',
    crop: 'Rau xà lách',
    variety: 'Butterhead',
    harvestDate: '19/06/2024',
    quantity: '150 kg',
    quality: 'Hạng A',
    buyer: 'Siêu thị Fresh Mart',
    price: '25,000 VNĐ/kg',
    totalValue: '3,750,000 VNĐ',
    status: 'Đã thanh toán',
    notes: 'Tươi xanh, không sâu bệnh'
  }, {
    id: 'HV-2024-013',
    batchId: 'LO-2024-001',
    crop: 'Cà chua hữu cơ',
    variety: 'Roma VF',
    harvestDate: '15/06/2024',
    quantity: '500 kg',
    quality: 'Hạng A',
    buyer: 'Chế biến Thực phẩm Sạch',
    price: '45,000 VNĐ/kg',
    totalValue: '22,500,000 VNĐ',
    status: 'Đã thanh toán',
    notes: 'Đạt chuẩn hữu cơ VietGAP'
  }, {
    id: 'HV-2024-012',
    batchId: 'LO-2024-003',
    crop: 'Ớt chuông',
    variety: 'California Wonder',
    harvestDate: '18/06/2024',
    quantity: '300 kg',
    quality: 'Hạng B',
    buyer: 'Thu mua Nông sản Việt',
    price: '48,000 VNĐ/kg',
    totalValue: '14,400,000 VNĐ',
    status: 'Chờ thanh toán',
    notes: 'Một số quả có vết nhỏ'
  }, {
    id: 'HV-2024-011',
    batchId: 'LO-2024-004',
    crop: 'Dâu tây',
    variety: 'Sweet Charlie',
    harvestDate: '17/06/2024',
    quantity: '200 kg',
    quality: 'Hạng A',
    buyer: 'Siêu thị Fresh Mart',
    price: '120,000 VNĐ/kg',
    totalValue: '24,000,000 VNĐ',
    status: 'Đã thanh toán',
    notes: 'Chất lượng cao cấp, ngọt tự nhiên'
  }, {
    id: 'HV-2024-010',
    batchId: 'LO-2023-098',
    crop: 'Khoai tây',
    variety: 'Russet',
    harvestDate: '10/06/2024',
    quantity: '1200 kg',
    quality: 'Hạng A',
    buyer: 'Chế biến Thực phẩm Sạch',
    price: '18,000 VNĐ/kg',
    totalValue: '21,600,000 VNĐ',
    status: 'Đã thanh toán',
    notes: 'Kích thước đồng đều'
  }, {
    id: 'HV-2024-009',
    batchId: 'LO-2023-095',
    crop: 'Cà rốt',
    variety: 'Nantes',
    harvestDate: '05/06/2024',
    quantity: '600 kg',
    quality: 'Hạng A',
    buyer: 'Thu mua Nông sản Việt',
    price: '22,000 VNĐ/kg',
    totalValue: '13,200,000 VNĐ',
    status: 'Đã thanh toán',
    notes: 'Màu sắc đẹp, giòn ngọt'
  }, {
    id: 'HV-2024-008',
    batchId: 'LO-2023-092',
    crop: 'Bắp cải',
    variety: 'Green Cabbage',
    harvestDate: '01/06/2024',
    quantity: '800 kg',
    quality: 'Hạng A',
    buyer: 'Siêu thị Fresh Mart',
    price: '15,000 VNĐ/kg',
    totalValue: '12,000,000 VNĐ',
    status: 'Đã thanh toán',
    notes: 'Lá chắc, không sâu'
  }];
  const filteredRecords = harvestRecords.filter(record => {
    const matchesSearch = record.crop.toLowerCase().includes(searchTerm.toLowerCase()) || record.batchId.toLowerCase().includes(searchTerm.toLowerCase()) || record.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  // Calculate stats
  const totalHarvests = harvestRecords.length;
  const totalQuantity = harvestRecords.reduce((sum, r) => {
    const qty = parseFloat(r.quantity.replace(/[^\d.]/g, ''));
    return sum + qty;
  }, 0);
  const totalRevenue = harvestRecords.filter(r => r.status === 'Đã thanh toán').reduce((sum, r) => {
    const value = parseFloat(r.totalValue.replace(/[^\d]/g, ''));
    return sum + value;
  }, 0);
  const pendingPayment = harvestRecords.filter(r => r.status === 'Chờ thanh toán').reduce((sum, r) => {
    const value = parseFloat(r.totalValue.replace(/[^\d]/g, ''));
    return sum + value;
  }, 0);
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Lịch sử Thu hoạch
          </h1>
          <p className="text-gray-500">
            Theo dõi tất cả các đợt thu hoạch và doanh thu
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
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng đợt thu hoạch</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalHarvests}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full">
              <Package className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng sản lượng</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalQuantity.toFixed(0)} kg
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <DollarSign className="w-5 h-5 text-purple-600" />
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
            <div className="p-3 bg-amber-100 rounded-full">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Chờ thanh toán</p>
              <p className="text-2xl font-bold text-gray-900">
                {(pendingPayment / 1000000).toFixed(1)}M
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
              <Input placeholder="Tìm kiếm theo cây trồng, mã lô..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
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
                <th className="px-6 py-3">Mã thu hoạch</th>
                <th className="px-6 py-3">Mã lô</th>
                <th className="px-6 py-3">Cây trồng</th>
                <th className="px-6 py-3">Ngày thu hoạch</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Chất lượng</th>
                <th className="px-6 py-3">Người mua</th>
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
                  <td className="px-6 py-4 font-mono text-xs">
                    {record.batchId}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{record.crop}</p>
                      <p className="text-xs text-gray-500">{record.variety}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.harvestDate}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {record.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${record.quality === 'Hạng A' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {record.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{record.buyer}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {record.totalValue}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${record.status === 'Đã thanh toán' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
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