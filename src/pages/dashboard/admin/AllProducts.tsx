import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Plus, Search, Eye, Edit, Trash2, Filter, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface Product {
  id: string;
  name: string;
  category: string;
  farmer: string;
  quantity: string;
  status: string;
  quality: string;
  price: string;
  harvestDate: string;
}
export function AllProducts() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const products: Product[] = [{
    id: 'LO-2024-001',
    name: 'Cà chua hữu cơ',
    category: 'Rau củ',
    farmer: 'Nông trại Xanh Đà Lạt',
    quantity: '500 kg',
    status: 'Còn hàng',
    quality: 'Hạng A',
    price: '45,000 VNĐ/kg',
    harvestDate: '15/06/2024'
  }, {
    id: 'LO-2024-002',
    name: 'Bắp ngọt',
    category: 'Ngũ cốc',
    farmer: 'Nông trại Xanh Đà Lạt',
    quantity: '800 kg',
    status: 'Còn hàng',
    quality: 'Hạng A',
    price: '35,000 VNĐ/kg',
    harvestDate: '20/06/2024'
  }, {
    id: 'LO-2024-003',
    name: 'Ớt chuông',
    category: 'Rau củ',
    farmer: 'Cánh đồng Nắng',
    quantity: '300 kg',
    status: 'Còn hàng',
    quality: 'Hạng B',
    price: '55,000 VNĐ/kg',
    harvestDate: '18/06/2024'
  }, {
    id: 'LO-2024-004',
    name: 'Dâu tây',
    category: 'Trái cây',
    farmer: 'Vườn Hữu cơ Mộc Châu',
    quantity: '200 kg',
    status: 'Sắp hết',
    quality: 'Hạng A',
    price: '120,000 VNĐ/kg',
    harvestDate: '17/06/2024'
  }, {
    id: 'LO-2024-005',
    name: 'Rau xà lách',
    category: 'Rau củ',
    farmer: 'Nông trại Xanh Đà Lạt',
    quantity: '150 kg',
    status: 'Còn hàng',
    quality: 'Hạng A',
    price: '25,000 VNĐ/kg',
    harvestDate: '19/06/2024'
  }, {
    id: 'LO-2024-006',
    name: 'Táo Fuji',
    category: 'Trái cây',
    farmer: 'Vườn cây Cao Nguyên',
    quantity: '1200 kg',
    status: 'Còn hàng',
    quality: 'Hạng A',
    price: '65,000 VNĐ/kg',
    harvestDate: '16/06/2024'
  }, {
    id: 'LO-2024-007',
    name: 'Khoai tây',
    category: 'Rau củ',
    farmer: 'Cánh đồng Nắng',
    quantity: '800 kg',
    status: 'Còn hàng',
    quality: 'Hạng B',
    price: '18,000 VNĐ/kg',
    harvestDate: '14/06/2024'
  }, {
    id: 'LO-2024-008',
    name: 'Bắp cải',
    category: 'Rau củ',
    farmer: 'Vườn Hữu cơ Mộc Châu',
    quantity: '600 kg',
    status: 'Còn hàng',
    quality: 'Hạng A',
    price: '22,000 VNĐ/kg',
    harvestDate: '21/06/2024'
  }];
  const categories = ['all', 'Rau củ', 'Trái cây', 'Ngũ cốc', 'Chế biến'];
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý Sản phẩm</h1>
          <p className="text-gray-500">
            Quản lý tất cả sản phẩm trong hệ thống
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Xuất Excel
          </Button>
          <Button onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Thêm sản phẩm
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-500">Tổng sản phẩm</p>
          <p className="text-2xl font-bold text-gray-900">{products.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Còn hàng</p>
          <p className="text-2xl font-bold text-green-600">
            {products.filter(p => p.status === 'Còn hàng').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Sắp hết</p>
          <p className="text-2xl font-bold text-amber-600">
            {products.filter(p => p.status === 'Sắp hết').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Tổng khối lượng</p>
          <p className="text-2xl font-bold text-gray-900">4,550 kg</p>
        </Card>
      </div>

      <Card className="overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm kiếm theo tên hoặc mã lô..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                {categories.map(cat => <option key={cat} value={cat}>
                    {cat === 'all' ? 'Tất cả danh mục' : cat}
                  </option>)}
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
                <th className="px-6 py-3">Tên sản phẩm</th>
                <th className="px-6 py-3">Danh mục</th>
                <th className="px-6 py-3">Nông dân</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Chất lượng</th>
                <th className="px-6 py-3">Giá</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map(product => <tr key={product.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs">{product.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.farmer}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.quality === 'Hạng A' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {product.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === 'Còn hàng' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => navigate(`/dashboard/batch/${product.id}`)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Hiển thị {filteredProducts.length} / {products.length} sản phẩm
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Trước
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              Sau
            </Button>
          </div>
        </div>
      </Card>

      {/* Add Product Modal (Simple version) */}
      {showAddModal && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Thêm sản phẩm mới</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Tên sản phẩm
                    </label>
                    <Input placeholder="VD: Cà chua hữu cơ" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Danh mục
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Rau củ</option>
                      <option>Trái cây</option>
                      <option>Ngũ cốc</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Số lượng
                    </label>
                    <Input placeholder="VD: 500 kg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Giá (VNĐ/kg)
                    </label>
                    <Input placeholder="VD: 45000" type="number" />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setShowAddModal(false)}>
                    Hủy
                  </Button>
                  <Button onClick={() => setShowAddModal(false)}>
                    Thêm sản phẩm
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>}
    </div>;
}