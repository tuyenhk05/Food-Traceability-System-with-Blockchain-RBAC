import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Plus, Search, MoreVertical } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
export function UserManagement() {
  const users = [{
    id: 1,
    name: 'Nông trại Xanh Đà Lạt',
    email: 'contact@greenvalley.vn',
    role: 'FARMER',
    status: 'Hoạt động'
  }, {
    id: 2,
    name: 'Vận tải Logistics Nhanh',
    email: 'ops@fastlogistics.vn',
    role: 'DISTRIBUTOR',
    status: 'Hoạt động'
  }, {
    id: 3,
    name: 'Siêu thị Fresh Mart',
    email: 'manager@freshmart.vn',
    role: 'RETAILER',
    status: 'Hoạt động'
  }, {
    id: 4,
    name: 'Chế biến Thực phẩm Sạch',
    email: 'info@pureprocessing.vn',
    role: 'PROCESSOR',
    status: 'Chờ duyệt'
  }, {
    id: 5,
    name: 'Thu mua Nông sản Việt',
    email: 'buy@wholesaler.vn',
    role: 'WHOLESALER',
    status: 'Tạm ngưng'
  }];
  const roleLabels: Record<string, string> = {
    FARMER: 'Nông dân',
    WHOLESALER: 'Thu mua',
    PROCESSOR: 'Chế biến',
    DISTRIBUTOR: 'Vận chuyển',
    RETAILER: 'Bán lẻ'
  };
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Quản lý người dùng
          </h1>
          <p className="text-gray-500">
            Quản lý quyền truy cập hệ thống và vai trò.
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Thêm người dùng
        </Button>
      </div>

      <Card className="overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Tìm kiếm người dùng..." className="pl-9 bg-white" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-3">Tổ chức / Tên</th>
                <th className="px-6 py-3">Vai trò</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map(user => <tr key={user.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-gray-500 text-xs">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {roleLabels[user.role] || user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Hoạt động' ? 'bg-green-100 text-green-800' : user.status === 'Chờ duyệt' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}