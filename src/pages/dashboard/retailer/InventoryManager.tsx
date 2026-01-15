import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Filter, Eye, Edit, Package, AlertTriangle, TrendingUp, TrendingDown, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface InventoryItem {
  id: string;
  batchId: string;
  product: string;
  category: string;
  quantity: string;
  unit: string;
  minStock: number;
  currentStock: number;
  status: string;
  location: string;
  expiryDate: string;
  supplier: string;
  lastRestocked: string;
  temperature: string;
  price: string;
}
export function InventoryManager() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const inventoryItems: InventoryItem[] = [{
    id: 'INV-001',
    batchId: 'LO-2024-025',
    product: 'Sốt cà chua đóng lọ',
    category: 'Chế biến',
    quantity: '450 lọ',
    unit: 'lọ',
    minStock: 100,
    currentStock: 450,
    status: 'Đủ hàng',
    location: 'Kho A - Kệ 1',
    expiryDate: '21/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '21/06/2024',
    temperature: '4-8°C',
    price: '35,000 VNĐ'
  }, {
    id: 'INV-002',
    batchId: 'LO-2024-024',
    product: 'Táo sấy giòn',
    category: 'Chế biến',
    quantity: '180 gói',
    unit: 'gói',
    minStock: 50,
    currentStock: 180,
    status: 'Đủ hàng',
    location: 'Kho B - Kệ 3',
    expiryDate: '20/09/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '20/06/2024',
    temperature: 'Nhiệt độ phòng',
    price: '45,000 VNĐ'
  }, {
    id: 'INV-003',
    batchId: 'LO-2024-023',
    product: 'Đậu Hà Lan đông lạnh',
    category: 'Đông lạnh',
    quantity: '250 kg',
    unit: 'kg',
    minStock: 100,
    currentStock: 250,
    status: 'Đủ hàng',
    location: 'Kho lạnh -18°C',
    expiryDate: '19/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '19/06/2024',
    temperature: '-18°C',
    price: '45,000 VNĐ/kg'
  }, {
    id: 'INV-004',
    batchId: 'LO-2024-022',
    product: 'Dâu tây đông lạnh',
    category: 'Đông lạnh',
    quantity: '80 kg',
    unit: 'kg',
    minStock: 50,
    currentStock: 80,
    status: 'Sắp hết',
    location: 'Kho lạnh -18°C',
    expiryDate: '18/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '18/06/2024',
    temperature: '-18°C',
    price: '135,000 VNĐ/kg'
  }, {
    id: 'INV-005',
    batchId: 'LO-2024-021',
    product: 'Khoai tây chiên đông lạnh',
    category: 'Đông lạnh',
    quantity: '350 kg',
    unit: 'kg',
    minStock: 100,
    currentStock: 350,
    status: 'Đủ hàng',
    location: 'Kho lạnh -18°C',
    expiryDate: '17/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '17/06/2024',
    temperature: '-18°C',
    price: '48,000 VNĐ/kg'
  }, {
    id: 'INV-006',
    batchId: 'LO-2024-020',
    product: 'Bắp cải muối chua',
    category: 'Chế biến',
    quantity: '280 lọ',
    unit: 'lọ',
    minStock: 80,
    currentStock: 280,
    status: 'Đủ hàng',
    location: 'Kho A - Kệ 2',
    expiryDate: '16/09/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '16/06/2024',
    temperature: '4-8°C',
    price: '32,000 VNĐ'
  }, {
    id: 'INV-007',
    batchId: 'LO-2024-019',
    product: 'Ớt bột',
    category: 'Gia vị',
    quantity: '85 kg',
    unit: 'kg',
    minStock: 30,
    currentStock: 85,
    status: 'Đủ hàng',
    location: 'Kho B - Kệ 1',
    expiryDate: '15/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '15/06/2024',
    temperature: 'Nhiệt độ phòng',
    price: '85,000 VNĐ/kg'
  }, {
    id: 'INV-008',
    batchId: 'LO-2024-018',
    product: 'Cà chua sấy khô',
    category: 'Chế biến',
    quantity: '65 kg',
    unit: 'kg',
    minStock: 20,
    currentStock: 65,
    status: 'Đủ hàng',
    location: 'Kho B - Kệ 2',
    expiryDate: '14/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '14/06/2024',
    temperature: 'Nhiệt độ phòng',
    price: '165,000 VNĐ/kg'
  }, {
    id: 'INV-009',
    batchId: 'LO-2024-017',
    product: 'Cà rốt thái lát đông lạnh',
    category: 'Đông lạnh',
    quantity: '300 kg',
    unit: 'kg',
    minStock: 100,
    currentStock: 300,
    status: 'Đủ hàng',
    location: 'Kho lạnh -18°C',
    expiryDate: '13/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '13/06/2024',
    temperature: '-18°C',
    price: '42,000 VNĐ/kg'
  }, {
    id: 'INV-010',
    batchId: 'LO-2024-016',
    product: 'Bắp ngọt đông lạnh',
    category: 'Đông lạnh',
    quantity: '420 kg',
    unit: 'kg',
    minStock: 150,
    currentStock: 420,
    status: 'Đủ hàng',
    location: 'Kho lạnh -18°C',
    expiryDate: '12/12/2024',
    supplier: 'Chế biến Thực phẩm Sạch',
    lastRestocked: '12/06/2024',
    temperature: '-18°C',
    price: '38,000 VNĐ/kg'
  }];
  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.product.toLowerCase().includes(searchTerm.toLowerCase()) || item.batchId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đủ hàng':
        return 'bg-green-100 text-green-800';
      case 'Sắp hết':
        return 'bg-amber-100 text-amber-800';
      case 'Hết hàng':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Calculate stats
  const totalItems = inventoryItems.length;
  const inStock = inventoryItems.filter(i => i.status === 'Đủ hàng').length;
  const lowStock = inventoryItems.filter(i => i.status === 'Sắp hết').length;
  const totalValue = inventoryItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d]/g, ''));
    const qty = parseFloat(item.quantity.replace(/[^\d.]/g, ''));
    return sum + price * qty;
  }, 0);
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý Kho hàng</h1>
          <p className="text-gray-500">Theo dõi tồn kho và quản lý sản phẩm</p>
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
              <p className="text-sm text-gray-500">Tổng mặt hàng</p>
              <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đủ hàng</p>
              <p className="text-2xl font-bold text-gray-900">{inStock}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-full">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Sắp hết</p>
              <p className="text-2xl font-bold text-gray-900">{lowStock}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingDown className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Giá trị kho</p>
              <p className="text-2xl font-bold text-gray-900">
                {(totalValue / 1000000).toFixed(1)}M
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
              <Input placeholder="Tìm kiếm sản phẩm..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                <option value="all">Tất cả danh mục</option>
                <option value="Chế biến">Chế biến</option>
                <option value="Đông lạnh">Đông lạnh</option>
                <option value="Gia vị">Gia vị</option>
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
                <th className="px-6 py-3">Mã kho</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Vị trí</th>
                <th className="px-6 py-3">Nhiệt độ</th>
                <th className="px-6 py-3">Hạn sử dụng</th>
                <th className="px-6 py-3">Giá bán</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredItems.map(item => <tr key={item.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium">
                    {item.id}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">
                        {item.product}
                      </p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-blue-600">
                      <Thermometer className="w-3 h-3" />
                      <span className="text-xs">{item.temperature}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.expiryDate}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {item.price}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/dashboard/batch/${item.batchId}`)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
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