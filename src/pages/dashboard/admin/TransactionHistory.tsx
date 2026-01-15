import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Download, Filter, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';
interface Transaction {
  id: string;
  type: string;
  from: string;
  to: string;
  product: string;
  amount: string;
  status: string;
  timestamp: string;
  blockchainHash: string;
}
export function TransactionHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const transactions: Transaction[] = [{
    id: 'TX-9905',
    type: 'Bán hàng',
    from: 'Siêu thị Fresh Mart',
    to: 'Khách hàng',
    product: 'Cà chua hữu cơ (LO-2024-001)',
    amount: '2,500,000 VNĐ',
    status: 'Hoàn thành',
    timestamp: '18/06/2024 14:35',
    blockchainHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385'
  }, {
    id: 'TX-9904',
    type: 'Vận chuyển',
    from: 'Vận tải Logistics Nhanh',
    to: 'Siêu thị Fresh Mart',
    product: 'Táo Fuji (LO-2024-009)',
    amount: '5,200,000 VNĐ',
    status: 'Hoàn thành',
    timestamp: '18/06/2024 12:20',
    blockchainHash: '0x8a0fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91386'
  }, {
    id: 'TX-9903',
    type: 'Chế biến',
    from: 'Chế biến Thực phẩm Sạch',
    to: 'Vận tải Logistics Nhanh',
    product: 'Sốt cà chua (LO-2024-005)',
    amount: '3,800,000 VNĐ',
    status: 'Đang xử lý',
    timestamp: '18/06/2024 10:15',
    blockchainHash: '0x9b1fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91387'
  }, {
    id: 'TX-9902',
    type: 'Thu mua',
    from: 'Thu mua Nông sản Việt',
    to: 'Chế biến Thực phẩm Sạch',
    product: 'Cà chua hữu cơ (LO-2024-008)',
    amount: '4,500,000 VNĐ',
    status: 'Hoàn thành',
    timestamp: '17/06/2024 16:45',
    blockchainHash: '0xac2fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91388'
  }, {
    id: 'TX-9901',
    type: 'Thu hoạch',
    from: 'Nông trại Xanh Đà Lạt',
    to: 'Thu mua Nông sản Việt',
    product: 'Cà chua hữu cơ (LO-2024-008)',
    amount: '2,250,000 VNĐ',
    status: 'Hoàn thành',
    timestamp: '17/06/2024 08:30',
    blockchainHash: '0xbd3fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91389'
  }, {
    id: 'TX-9900',
    type: 'Bán hàng',
    from: 'Siêu thị Fresh Mart',
    to: 'Khách hàng',
    product: 'Dâu tây (LO-2024-004)',
    amount: '1,800,000 VNĐ',
    status: 'Hoàn thành',
    timestamp: '16/06/2024 18:20',
    blockchainHash: '0xce4fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91390'
  }, {
    id: 'TX-9899',
    type: 'Kiểm định',
    from: 'Thu mua Nông sản Việt',
    to: 'Chế biến Thực phẩm Sạch',
    product: 'Khoai tây (LO-2024-010)',
    amount: '1,440,000 VNĐ',
    status: 'Thất bại',
    timestamp: '16/06/2024 14:10',
    blockchainHash: '0xdf5fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91391'
  }];
  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.id.toLowerCase().includes(searchTerm.toLowerCase()) || tx.product.toLowerCase().includes(searchTerm.toLowerCase()) || tx.from.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || tx.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Hoàn thành':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Đang xử lý':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'Thất bại':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hoàn thành':
        return 'bg-green-100 text-green-800';
      case 'Đang xử lý':
        return 'bg-yellow-100 text-yellow-800';
      case 'Thất bại':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Lịch sử Giao dịch
          </h1>
          <p className="text-gray-500">
            Theo dõi tất cả giao dịch trên blockchain
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Xuất báo cáo
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-500">Tổng giao dịch</p>
          <p className="text-2xl font-bold text-gray-900">
            {transactions.length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Hoàn thành</p>
          <p className="text-2xl font-bold text-green-600">
            {transactions.filter(t => t.status === 'Hoàn thành').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Đang xử lý</p>
          <p className="text-2xl font-bold text-yellow-600">
            {transactions.filter(t => t.status === 'Đang xử lý').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Tổng giá trị</p>
          <p className="text-2xl font-bold text-gray-900">21.5M VNĐ</p>
        </Card>
      </div>

      <Card className="overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm kiếm giao dịch..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">Tất cả trạng thái</option>
                <option value="Hoàn thành">Hoàn thành</option>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Thất bại">Thất bại</option>
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
                <th className="px-6 py-3">Loại</th>
                <th className="px-6 py-3">Từ</th>
                <th className="px-6 py-3">Đến</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3">Giá trị</th>
                <th className="px-6 py-3">Thời gian</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTransactions.map(tx => <tr key={tx.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium">
                    {tx.id}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{tx.from}</td>
                  <td className="px-6 py-4 text-gray-600">{tx.to}</td>
                  <td className="px-6 py-4 text-gray-900">{tx.product}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs">
                    {tx.timestamp}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(tx.status)}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(tx.status)}`}>
                        {tx.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm">
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