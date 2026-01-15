import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Download, Filter, Eye, TrendingUp, Package, DollarSign, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface PurchaseRecord {
  id: string;
  batchId: string;
  purchaseDate: string;
  farmer: string;
  farmerLocation: string;
  product: string;
  variety: string;
  quantity: string;
  quality: string;
  unitPrice: string;
  totalValue: string;
  paymentStatus: string;
  paymentDate: string;
  destination: string;
  notes: string;
}
export function PurchaseHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMonth, setFilterMonth] = useState('all');
  const purchaseRecords: PurchaseRecord[] = [{
    id: 'PUR-2024-045',
    batchId: 'LO-2024-008',
    purchaseDate: '21/06/2024',
    farmer: 'Nông trại Xanh Đà Lạt',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Cà chua hữu cơ',
    variety: 'Roma VF',
    quantity: '500 kg',
    quality: 'Hạng A',
    unitPrice: '45,000 VNĐ/kg',
    totalValue: '22,500,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '21/06/2024',
    destination: 'Chế biến Thực phẩm Sạch',
    notes: 'Chất lượng cao, đạt chuẩn hữu cơ'
  }, {
    id: 'PUR-2024-044',
    batchId: 'LO-2024-011',
    purchaseDate: '21/06/2024',
    farmer: 'Nông trại Xanh Đà Lạt',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Dâu tây',
    variety: 'Sweet Charlie',
    quantity: '200 kg',
    quality: 'Hạng A',
    unitPrice: '120,000 VNĐ/kg',
    totalValue: '24,000,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '21/06/2024',
    destination: 'Siêu thị Fresh Mart',
    notes: 'Chất lượng cao cấp, đóng gói cẩn thận'
  }, {
    id: 'PUR-2024-043',
    batchId: 'LO-2024-010',
    purchaseDate: '21/06/2024',
    farmer: 'Cánh đồng Nắng',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Khoai tây',
    variety: 'Russet',
    quantity: '800 kg',
    quality: 'Hạng B',
    unitPrice: '18,000 VNĐ/kg',
    totalValue: '14,400,000 VNĐ',
    paymentStatus: 'Chờ thanh toán',
    paymentDate: '-',
    destination: 'Chế biến Thực phẩm Sạch',
    notes: 'Một số củ có vết xước nhỏ'
  }, {
    id: 'PUR-2024-042',
    batchId: 'LO-2024-009',
    purchaseDate: '20/06/2024',
    farmer: 'Vườn cây Cao Nguyên',
    farmerLocation: 'Mộc Châu, Sơn La',
    product: 'Táo Fuji',
    variety: 'Fuji Premium',
    quantity: '1200 kg',
    quality: 'Hạng A',
    unitPrice: '65,000 VNĐ/kg',
    totalValue: '78,000,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '20/06/2024',
    destination: 'Siêu thị Fresh Mart',
    notes: 'Lô hàng lớn, chất lượng đồng đều'
  }, {
    id: 'PUR-2024-041',
    batchId: 'LO-2024-007',
    purchaseDate: '19/06/2024',
    farmer: 'Cánh đồng Nắng',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Cà rốt',
    variety: 'Nantes',
    quantity: '600 kg',
    quality: 'Hạng A',
    unitPrice: '22,000 VNĐ/kg',
    totalValue: '13,200,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '19/06/2024',
    destination: 'Chế biến Thực phẩm Sạch',
    notes: 'Màu sắc đẹp, giòn ngọt'
  }, {
    id: 'PUR-2024-040',
    batchId: 'LO-2024-006',
    purchaseDate: '18/06/2024',
    farmer: 'Vườn Hữu cơ Mộc Châu',
    farmerLocation: 'Mộc Châu, Sơn La',
    product: 'Bắp cải',
    variety: 'Green Cabbage',
    quantity: '800 kg',
    quality: 'Hạng A',
    unitPrice: '15,000 VNĐ/kg',
    totalValue: '12,000,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '18/06/2024',
    destination: 'Siêu thị City Mart',
    notes: 'Lá chắc, không sâu bệnh'
  }, {
    id: 'PUR-2024-039',
    batchId: 'LO-2024-005',
    purchaseDate: '17/06/2024',
    farmer: 'Nông trại Xanh Đà Lạt',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Rau xà lách',
    variety: 'Butterhead',
    quantity: '150 kg',
    quality: 'Hạng A',
    unitPrice: '25,000 VNĐ/kg',
    totalValue: '3,750,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '17/06/2024',
    destination: 'Siêu thị Fresh Mart',
    notes: 'Tươi xanh, không sâu bệnh'
  }, {
    id: 'PUR-2024-038',
    batchId: 'LO-2024-004',
    purchaseDate: '16/06/2024',
    farmer: 'Vườn cây Cao Nguyên',
    farmerLocation: 'Mộc Châu, Sơn La',
    product: 'Bắp ngọt',
    variety: 'Golden Bantam',
    quantity: '700 kg',
    quality: 'Hạng A',
    unitPrice: '35,000 VNĐ/kg',
    totalValue: '24,500,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '16/06/2024',
    destination: 'Chế biến Thực phẩm Sạch',
    notes: 'Độ ngọt cao, chất lượng tốt'
  }, {
    id: 'PUR-2024-037',
    batchId: 'LO-2024-003',
    purchaseDate: '15/06/2024',
    farmer: 'Cánh đồng Nắng',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Ớt chuông',
    variety: 'California Wonder',
    quantity: '300 kg',
    quality: 'Hạng B',
    unitPrice: '48,000 VNĐ/kg',
    totalValue: '14,400,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '15/06/2024',
    destination: 'Chế biến Thực phẩm Sạch',
    notes: 'Một số quả có vết nhỏ'
  }, {
    id: 'PUR-2024-036',
    batchId: 'LO-2024-002',
    purchaseDate: '14/06/2024',
    farmer: 'Nông trại Xanh Đà Lạt',
    farmerLocation: 'Đà Lạt, Lâm Đồng',
    product: 'Cà chua cherry',
    variety: 'Sweet 100',
    quantity: '250 kg',
    quality: 'Hạng A',
    unitPrice: '55,000 VNĐ/kg',
    totalValue: '13,750,000 VNĐ',
    paymentStatus: 'Đã thanh toán',
    paymentDate: '14/06/2024',
    destination: 'Siêu thị Fresh Mart',
    notes: 'Quả nhỏ, ngọt, màu đỏ đẹp'
  }];
  const filteredRecords = purchaseRecords.filter(record => {
    const matchesSearch = record.product.toLowerCase().includes(searchTerm.toLowerCase()) || record.batchId.toLowerCase().includes(searchTerm.toLowerCase()) || record.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  // Calculate stats
  const totalPurchases = purchaseRecords.length;
  const totalSpent = purchaseRecords.filter(r => r.paymentStatus === 'Đã thanh toán').reduce((sum, r) => {
    const value = parseFloat(r.totalValue.replace(/[^\d]/g, ''));
    return sum + value;
  }, 0);
  const pendingPayment = purchaseRecords.filter(r => r.paymentStatus === 'Chờ thanh toán').reduce((sum, r) => {
    const value = parseFloat(r.totalValue.replace(/[^\d]/g, ''));
    return sum + value;
  }, 0);
  const totalQuantity = purchaseRecords.reduce((sum, r) => {
    const qty = parseFloat(r.quantity.replace(/[^\d.]/g, ''));
    return sum + qty;
  }, 0);
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lịch sử Thu mua</h1>
          <p className="text-gray-500">
            Theo dõi tất cả các giao dịch thu mua từ nông dân
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
              <p className="text-sm text-gray-500">Tổng giao dịch</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalPurchases}
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
              <p className="text-sm text-gray-500">Tổng khối lượng</p>
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
              <p className="text-sm text-gray-500">Tổng chi</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalSpent / 1000000).toFixed(1)}M
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
              <Input placeholder="Tìm kiếm theo sản phẩm, nông dân, mã lô..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
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
                <th className="px-6 py-3">Mã GD</th>
                <th className="px-6 py-3">Ngày mua</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3">Nông dân</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Chất lượng</th>
                <th className="px-6 py-3">Đơn giá</th>
                <th className="px-6 py-3">Tổng giá trị</th>
                <th className="px-6 py-3">Thanh toán</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRecords.map(record => <tr key={record.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium">
                    {record.id}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.purchaseDate}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {record.product}
                      </p>
                      <p className="text-xs text-gray-500">{record.variety}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {record.farmer}
                      </p>
                      <p className="text-xs text-gray-500">
                        {record.farmerLocation}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {record.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${record.quality === 'Hạng A' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {record.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.unitPrice}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {record.totalValue}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${record.paymentStatus === 'Đã thanh toán' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {record.paymentStatus}
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