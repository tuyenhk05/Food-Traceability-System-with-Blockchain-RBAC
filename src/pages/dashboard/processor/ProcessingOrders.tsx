import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Filter, Eye, Play, CheckCircle, Clock, Package, Factory, AlertCircle, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface ProcessingOrder {
  id: string;
  orderDate: string;
  batchId: string;
  rawMaterial: string;
  rawMaterialQty: string;
  supplier: string;
  outputProduct: string;
  expectedOutput: string;
  actualOutput: string;
  processType: string;
  priority: string;
  status: string;
  startDate: string;
  completionDate: string;
  assignedLine: string;
  quality: string;
  notes: string;
}
export function ProcessingOrders() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const processingOrders: ProcessingOrder[] = [{
    id: 'PRO-2024-045',
    orderDate: '21/06/2024',
    batchId: 'LO-2024-005',
    rawMaterial: 'Cà chua hữu cơ',
    rawMaterialQty: '500 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Sốt cà chua đóng lọ (250ml)',
    expectedOutput: '500 lọ',
    actualOutput: '485 lọ',
    processType: 'Chế biến nhiệt',
    priority: 'Cao',
    status: 'Hoàn thành',
    startDate: '21/06/2024 08:00',
    completionDate: '21/06/2024 14:30',
    assignedLine: 'Dây chuyền A',
    quality: 'Đạt chuẩn',
    notes: 'Hoàn thành đúng hạn, chất lượng tốt'
  }, {
    id: 'PRO-2024-044',
    orderDate: '21/06/2024',
    batchId: 'LO-2024-009',
    rawMaterial: 'Táo Fuji',
    rawMaterialQty: '1200 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Táo sấy giòn (100g)',
    expectedOutput: '200 gói',
    actualOutput: '-',
    processType: 'Sấy khô',
    priority: 'Trung bình',
    status: 'Đang xử lý',
    startDate: '21/06/2024 09:30',
    completionDate: '-',
    assignedLine: 'Dây chuyền B',
    quality: 'Đang kiểm tra',
    notes: 'Đang trong quá trình sấy, dự kiến hoàn thành 18:00'
  }, {
    id: 'PRO-2024-043',
    orderDate: '21/06/2024',
    batchId: 'LO-2024-011',
    rawMaterial: 'Đậu Hà Lan tươi',
    rawMaterialQty: '400 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Đậu Hà Lan đông lạnh',
    expectedOutput: '300 kg',
    actualOutput: '295 kg',
    processType: 'Đông lạnh',
    priority: 'Cao',
    status: 'Hoàn thành',
    startDate: '21/06/2024 07:00',
    completionDate: '21/06/2024 12:30',
    assignedLine: 'Dây chuyền C',
    quality: 'Đạt chuẩn',
    notes: 'Đóng gói cẩn thận, nhiệt độ -18°C'
  }, {
    id: 'PRO-2024-042',
    orderDate: '20/06/2024',
    batchId: 'LO-2024-012',
    rawMaterial: 'Dâu tây tươi',
    rawMaterialQty: '200 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Dâu tây đông lạnh',
    expectedOutput: '150 kg',
    actualOutput: '-',
    processType: 'Đông lạnh',
    priority: 'Cao',
    status: 'Chờ xử lý',
    startDate: '-',
    completionDate: '-',
    assignedLine: 'Chưa phân công',
    quality: '-',
    notes: 'Cần xử lý trong 24h để giữ độ tươi'
  }, {
    id: 'PRO-2024-041',
    orderDate: '20/06/2024',
    batchId: 'LO-2024-007',
    rawMaterial: 'Khoai tây',
    rawMaterialQty: '800 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Khoai tây chiên đông lạnh',
    expectedOutput: '400 kg',
    actualOutput: '390 kg',
    processType: 'Chiên & Đông lạnh',
    priority: 'Trung bình',
    status: 'Hoàn thành',
    startDate: '20/06/2024 08:00',
    completionDate: '20/06/2024 16:00',
    assignedLine: 'Dây chuyền A',
    quality: 'Đạt chuẩn',
    notes: 'Độ giòn tốt, màu vàng đều'
  }, {
    id: 'PRO-2024-040',
    orderDate: '19/06/2024',
    batchId: 'LO-2024-008',
    rawMaterial: 'Bắp cải',
    rawMaterialQty: '600 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Bắp cải muối chua (500g)',
    expectedOutput: '300 lọ',
    actualOutput: '295 lọ',
    processType: 'Lên men',
    priority: 'Thấp',
    status: 'Hoàn thành',
    startDate: '19/06/2024 07:00',
    completionDate: '19/06/2024 15:00',
    assignedLine: 'Dây chuyền D',
    quality: 'Đạt chuẩn',
    notes: 'Lên men tốt, vị chua vừa phải'
  }, {
    id: 'PRO-2024-039',
    orderDate: '18/06/2024',
    batchId: 'LO-2024-003',
    rawMaterial: 'Ớt chuông',
    rawMaterialQty: '300 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Ớt bột',
    expectedOutput: '100 kg',
    actualOutput: '98 kg',
    processType: 'Sấy & Nghiền',
    priority: 'Trung bình',
    status: 'Hoàn thành',
    startDate: '18/06/2024 08:00',
    completionDate: '18/06/2024 17:00',
    assignedLine: 'Dây chuyền B',
    quality: 'Đạt chuẩn',
    notes: 'Độ mịn đồng đều, màu đỏ tự nhiên'
  }, {
    id: 'PRO-2024-038',
    orderDate: '17/06/2024',
    batchId: 'LO-2024-001',
    rawMaterial: 'Cà chua hữu cơ',
    rawMaterialQty: '400 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Cà chua sấy khô',
    expectedOutput: '80 kg',
    actualOutput: '78 kg',
    processType: 'Sấy khô',
    priority: 'Cao',
    status: 'Hoàn thành',
    startDate: '17/06/2024 07:00',
    completionDate: '17/06/2024 19:00',
    assignedLine: 'Dây chuyền B',
    quality: 'Đạt chuẩn',
    notes: 'Chất lượng cao, màu sắc đẹp'
  }, {
    id: 'PRO-2024-037',
    orderDate: '16/06/2024',
    batchId: 'LO-2024-004',
    rawMaterial: 'Bắp ngọt',
    rawMaterialQty: '700 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Bắp ngọt đông lạnh',
    expectedOutput: '500 kg',
    actualOutput: '-',
    processType: 'Đông lạnh',
    priority: 'Trung bình',
    status: 'Chờ xử lý',
    startDate: '-',
    completionDate: '-',
    assignedLine: 'Chưa phân công',
    quality: '-',
    notes: 'Đơn hàng lớn, cần chuẩn bị dây chuyền'
  }, {
    id: 'PRO-2024-036',
    orderDate: '15/06/2024',
    batchId: 'LO-2024-006',
    rawMaterial: 'Cà rốt',
    rawMaterialQty: '500 kg',
    supplier: 'Thu mua Nông sản Việt',
    outputProduct: 'Cà rốt thái lát đông lạnh',
    expectedOutput: '350 kg',
    actualOutput: '345 kg',
    processType: 'Thái & Đông lạnh',
    priority: 'Trung bình',
    status: 'Hoàn thành',
    startDate: '15/06/2024 08:00',
    completionDate: '15/06/2024 14:00',
    assignedLine: 'Dây chuyền C',
    quality: 'Đạt chuẩn',
    notes: 'Thái đều, đóng gói cẩn thận'
  }];
  const filteredOrders = processingOrders.filter(order => {
    const matchesSearch = order.outputProduct.toLowerCase().includes(searchTerm.toLowerCase()) || order.id.toLowerCase().includes(searchTerm.toLowerCase()) || order.rawMaterial.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Hoàn thành':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Đang xử lý':
        return <Factory className="w-4 h-4 text-blue-600" />;
      case 'Chờ xử lý':
        return <Clock className="w-4 h-4 text-amber-600" />;
      default:
        return null;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hoàn thành':
        return 'bg-green-100 text-green-800';
      case 'Đang xử lý':
        return 'bg-blue-100 text-blue-800';
      case 'Chờ xử lý':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Cao':
        return 'bg-red-100 text-red-800';
      case 'Trung bình':
        return 'bg-yellow-100 text-yellow-800';
      case 'Thấp':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Calculate stats
  const totalOrders = processingOrders.length;
  const completedOrders = processingOrders.filter(o => o.status === 'Hoàn thành').length;
  const processingOrders_count = processingOrders.filter(o => o.status === 'Đang xử lý').length;
  const pendingOrders = processingOrders.filter(o => o.status === 'Chờ xử lý').length;
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Đơn chế biến</h1>
          <p className="text-gray-500">
            Quản lý tất cả đơn hàng chế biến và sản xuất
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
              <p className="text-sm text-gray-500">Tổng đơn hàng</p>
              <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Hoàn thành</p>
              <p className="text-2xl font-bold text-gray-900">
                {completedOrders}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <Factory className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đang xử lý</p>
              <p className="text-2xl font-bold text-gray-900">
                {processingOrders_count}
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
              <p className="text-sm text-gray-500">Chờ xử lý</p>
              <p className="text-2xl font-bold text-gray-900">
                {pendingOrders}
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
              <Input placeholder="Tìm kiếm theo sản phẩm, nguyên liệu, mã đơn..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">Tất cả trạng thái</option>
                <option value="Chờ xử lý">Chờ xử lý</option>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Hoàn thành">Hoàn thành</option>
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
                <th className="px-6 py-3">Mã đơn</th>
                <th className="px-6 py-3">Nguyên liệu</th>
                <th className="px-6 py-3">Sản phẩm đầu ra</th>
                <th className="px-6 py-3">Quy trình</th>
                <th className="px-6 py-3">Dây chuyền</th>
                <th className="px-6 py-3">Ưu tiên</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map(order => <tr key={order.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {order.rawMaterial}
                      </p>
                      <p className="text-xs text-gray-500">
                        {order.rawMaterialQty}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {order.outputProduct}
                      </p>
                      <p className="text-xs text-gray-500">
                        Dự kiến: {order.expectedOutput}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {order.processType}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {order.assignedLine}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
                      {order.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/dashboard/batch/${order.batchId}`)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      {order.status === 'Chờ xử lý' && <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Play className="w-3 h-3 mr-1" />
                          Bắt đầu
                        </Button>}
                      {order.status === 'Đang xử lý' && <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Hoàn thành
                        </Button>}
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}