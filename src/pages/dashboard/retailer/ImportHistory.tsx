import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Download, Filter, Eye, TrendingUp, Package, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface ImportRecord {
  id: string;
  importDate: string;
  batchId: string;
  product: string;
  category: string;
  supplier: string;
  quantity: string;
  unitPrice: string;
  totalValue: string;
  expiryDate: string;
  storageLocation: string;
  quality: string;
  paymentStatus: string;
  notes: string;
}
export function ImportHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMonth, setFilterMonth] = useState('all');
  const importRecords: ImportRecord[] = [{
    id: 'IMP-2024-065',
    importDate: '21/06/2024',
    batchId: 'LO-2024-025',
    product: 'Sốt cà chua đóng lọ',
    category: 'Chế biến',
    supplier: 'Vận tải Logistics Nhanh',
    quantity: '500 lọ',
    unitPrice: '30,000 VNĐ',
    totalValue: '15,000,000 VNĐ',
    expiryDate: '21/12/2024',
    storageLocation: 'Kho A - Kệ 1',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Hàng mới về, chất lượng tốt'
  }, {
    id: 'IMP-2024-064',
    importDate: '20/06/2024',
    batchId: 'LO-2024-024',
    product: 'Táo sấy giòn',
    category: 'Chế biến',
    supplier: 'Vận tải Express',
    quantity: '200 gói',
    unitPrice: '40,000 VNĐ',
    totalValue: '8,000,000 VNĐ',
    expiryDate: '20/09/2024',
    storageLocation: 'Kho B - Kệ 3',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Đóng gói cẩn thận, giòn ngon'
  }, {
    id: 'IMP-2024-063',
    importDate: '19/06/2024',
    batchId: 'LO-2024-023',
    product: 'Đậu Hà Lan đông lạnh',
    category: 'Đông lạnh',
    supplier: 'Vận tải Logistics Nhanh',
    quantity: '300 kg',
    unitPrice: '40,000 VNĐ/kg',
    totalValue: '12,000,000 VNĐ',
    expiryDate: '19/12/2024',
    storageLocation: 'Kho lạnh -18°C',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Nhiệt độ duy trì tốt'
  }, {
    id: 'IMP-2024-062',
    importDate: '18/06/2024',
    batchId: 'LO-2024-022',
    product: 'Dâu tây đông lạnh',
    category: 'Đông lạnh',
    supplier: 'Vận tải Express',
    quantity: '150 kg',
    unitPrice: '120,000 VNĐ/kg',
    totalValue: '18,000,000 VNĐ',
    expiryDate: '18/12/2024',
    storageLocation: 'Kho lạnh -18°C',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Chất lượng cao cấp'
  }, {
    id: 'IMP-2024-061',
    importDate: '17/06/2024',
    batchId: 'LO-2024-021',
    product: 'Khoai tây chiên đông lạnh',
    category: 'Đông lạnh',
    supplier: 'Vận tải Logistics Nhanh',
    quantity: '400 kg',
    unitPrice: '40,000 VNĐ/kg',
    totalValue: '16,000,000 VNĐ',
    expiryDate: '17/12/2024',
    storageLocation: 'Kho lạnh -18°C',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Độ giòn tốt'
  }, {
    id: 'IMP-2024-060',
    importDate: '16/06/2024',
    batchId: 'LO-2024-020',
    product: 'Bắp cải muối chua',
    category: 'Chế biến',
    supplier: 'Vận tải Express',
    quantity: '300 lọ',
    unitPrice: '30,000 VNĐ',
    totalValue: '9,000,000 VNĐ',
    expiryDate: '16/09/2024',
    storageLocation: 'Kho A - Kệ 2',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Vị chua vừa phải'
  }, {
    id: 'IMP-2024-059',
    importDate: '15/06/2024',
    batchId: 'LO-2024-019',
    product: 'Ớt bột',
    category: 'Gia vị',
    supplier: 'Vận tải Logistics Nhanh',
    quantity: '100 kg',
    unitPrice: '75,000 VNĐ/kg',
    totalValue: '7,500,000 VNĐ',
    expiryDate: '15/12/2024',
    storageLocation: 'Kho B - Kệ 1',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Độ cay cao, màu đỏ tự nhiên'
  }, {
    id: 'IMP-2024-058',
    importDate: '14/06/2024',
    batchId: 'LO-2024-018',
    product: 'Cà chua sấy khô',
    category: 'Chế biến',
    supplier: 'Vận tải Express',
    quantity: '80 kg',
    unitPrice: '150,000 VNĐ/kg',
    totalValue: '12,000,000 VNĐ',
    expiryDate: '14/12/2024',
    storageLocation: 'Kho B - Kệ 2',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Chất lượng cao, màu sắc đẹp'
  }, {
    id: 'IMP-2024-057',
    importDate: '13/06/2024',
    batchId: 'LO-2024-017',
    product: 'Cà rốt thái lát đông lạnh',
    category: 'Đông lạnh',
    supplier: 'Vận tải Logistics Nhanh',
    quantity: '350 kg',
    unitPrice: '35,000 VNĐ/kg',
    totalValue: '12,250,000 VNĐ',
    expiryDate: '13/12/2024',
    storageLocation: 'Kho lạnh -18°C',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Thái đều, đóng gói tốt'
  }, {
    id: 'IMP-2024-056',
    importDate: '12/06/2024',
    batchId: 'LO-2024-016',
    product: 'Bắp ngọt đông lạnh',
    category: 'Đông lạnh',
    supplier: 'Vận tải Express',
    quantity: '500 kg',
    unitPrice: '30,000 VNĐ/kg',
    totalValue: '15,000,000 VNĐ',
    expiryDate: '12/12/2024',
    storageLocation: 'Kho lạnh -18°C',
    quality: 'Đạt chuẩn',
    paymentStatus: 'Đã thanh toán',
    notes: 'Độ ngọt cao, chất lượng tốt'
  }];
  const filteredRecords = importRecords.filter(record => {
    const matchesSearch = record.product.toLowerCase().includes(searchTerm.toLowerCase()) || record.id.toLowerCase().includes(searchTerm.toLowerCase()) || record.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  // Calculate stats
  const totalImports = importRecords.length;
  const totalSpent = importRecords.reduce((sum, r) => {
    const value = parseFloat(r.totalValue.replace(/[^\d]/g, ''));
    return sum + value;
  }, 0);
  const totalQuantity = importRecords.reduce((sum, r) => {
    const qty = parseFloat(r.quantity.replace(/[^\d.]/g, ''));
    return sum + qty;
  }, 0);
  const paidImports = importRecords.filter(r => r.paymentStatus === 'Đã thanh toán').length;
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Lịch sử Nhập hàng
          </h1>
          <p className="text-gray-500">
            Theo dõi tất cả các đợt nhập hàng vào kho
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
              <p className="text-sm text-gray-500">Tổng đợt nhập</p>
              <p className="text-2xl font-bold text-gray-900">{totalImports}</p>
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
            <div className="p-3 bg-green-100 rounded-full">
              <Package className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tổng số lượng</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalQuantity.toFixed(0)}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-full">
              <CheckCircle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đã thanh toán</p>
              <p className="text-2xl font-bold text-gray-900">{paidImports}</p>
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
              <Input placeholder="Tìm kiếm theo sản phẩm, nhà cung cấp..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
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
                <th className="px-6 py-3">Mã nhập</th>
                <th className="px-6 py-3">Ngày nhập</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3">Nhà cung cấp</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Đơn giá</th>
                <th className="px-6 py-3">Tổng giá trị</th>
                <th className="px-6 py-3">Vị trí kho</th>
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
                    {record.importDate}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {record.product}
                      </p>
                      <p className="text-xs text-gray-500">{record.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{record.supplier}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {record.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.unitPrice}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {record.totalValue}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {record.storageLocation}
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