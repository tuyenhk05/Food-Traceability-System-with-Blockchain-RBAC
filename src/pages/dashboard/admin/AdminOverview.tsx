import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';
import { Users, Activity, Package, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export function AdminOverview() {
  const stats = [{
    label: 'Tổng người dùng',
    value: '1,234',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  }, {
    label: 'Lô hàng hoạt động',
    value: '856',
    change: '+8%',
    trend: 'up',
    icon: Package,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  }, {
    label: 'Giao dịch (24h)',
    value: '2,405',
    change: '+23%',
    trend: 'up',
    icon: Activity,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }, {
    label: 'Cảnh báo hệ thống',
    value: '3',
    change: '-2',
    trend: 'down',
    icon: AlertCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }];
  // Dữ liệu biểu đồ giao dịch theo ngày
  const transactionData = [{
    date: '01/06',
    transactions: 1200,
    value: 45000000
  }, {
    date: '02/06',
    transactions: 1450,
    value: 52000000
  }, {
    date: '03/06',
    transactions: 1100,
    value: 41000000
  }, {
    date: '04/06',
    transactions: 1800,
    value: 68000000
  }, {
    date: '05/06',
    transactions: 2100,
    value: 78000000
  }, {
    date: '06/06',
    transactions: 1900,
    value: 71000000
  }, {
    date: '07/06',
    transactions: 2405,
    value: 89000000
  }];
  // Dữ liệu phân bố người dùng theo vai trò
  const userDistribution = [{
    name: 'Nông dân',
    value: 450,
    color: '#10b981'
  }, {
    name: 'Thu mua',
    value: 180,
    color: '#3b82f6'
  }, {
    name: 'Chế biến',
    value: 220,
    color: '#8b5cf6'
  }, {
    name: 'Vận chuyển',
    value: 150,
    color: '#f59e0b'
  }, {
    name: 'Bán lẻ',
    value: 234,
    color: '#ef4444'
  }];
  // Dữ liệu sản phẩm theo danh mục
  const productCategories = [{
    category: 'Rau củ',
    count: 450
  }, {
    category: 'Trái cây',
    count: 320
  }, {
    category: 'Ngũ cốc',
    count: 180
  }, {
    category: 'Chế biến',
    count: 290
  }];
  const recentActivity = [{
    id: 1,
    action: 'Người dùng mới đăng ký',
    detail: 'Nông trại Hữu cơ Ba Vì (Nông dân)',
    time: '2 phút trước',
    type: 'user'
  }, {
    id: 2,
    action: 'Lô hàng được tạo',
    detail: 'Cà chua hữu cơ #LO-2024-015',
    time: '15 phút trước',
    type: 'batch'
  }, {
    id: 3,
    action: 'Kiểm tra chất lượng thất bại',
    detail: 'Lô #LO-2024-013 - Độ ẩm cao',
    time: '1 giờ trước',
    type: 'alert'
  }, {
    id: 4,
    action: 'Lô hàng đã giao',
    detail: 'Đến: Siêu thị Fresh Mart',
    time: '3 giờ trước',
    type: 'delivery'
  }, {
    id: 5,
    action: 'Thanh toán hoàn tất',
    detail: 'Giao dịch #TX-9905 - 2.5M VNĐ',
    time: '4 giờ trước',
    type: 'payment'
  }];
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tổng quan Hệ thống</h1>
        <p className="text-gray-500">
          Giám sát tình trạng hệ thống và hoạt động blockchain.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => <Card key={stat.label} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {stat.trend === 'up' ? <TrendingUp className="w-4 h-4 text-green-600" /> : <TrendingDown className="w-4 h-4 text-red-600" />}
                <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </Card>)}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transaction Chart */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Giao dịch 7 ngày qua</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value: any, name: string) => {
                if (name === 'value') {
                  return [`${(value / 1000000).toFixed(1)}M VNĐ`, 'Giá trị'];
                }
                return [value, 'Số giao dịch'];
              }} />
                <Legend />
                <Line type="monotone" dataKey="transactions" stroke="#3b82f6" name="Số giao dịch" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Distribution Pie Chart */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Phân bố Người dùng theo Vai trò</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={userDistribution} cx="50%" cy="50%" labelLine={false} label={({
                name,
                percent
              }) => `${name}: ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                  {userDistribution.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Product Categories Bar Chart */}
      <Card className="p-6">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Sản phẩm theo Danh mục</CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productCategories}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#10b981" name="Số lượng sản phẩm" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Hoạt động Blockchain gần đây
        </h2>
        <div className="space-y-4">
          {recentActivity.map(item => <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${item.type === 'alert' ? 'bg-red-500' : item.type === 'user' ? 'bg-blue-500' : 'bg-green-500'}`} />
                <div>
                  <p className="font-medium text-gray-900">{item.action}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">{item.time}</span>
            </div>)}
        </div>
      </Card>
    </div>;
}