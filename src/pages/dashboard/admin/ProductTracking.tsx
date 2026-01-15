import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Search, Filter, Eye, Sprout, ShoppingCart, Factory, Truck, Store, CheckCircle, Clock, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface ProductTracking {
  id: string;
  batchId: string;
  product: string;
  category: string;
  quantity: string;
  currentStage: string;
  currentLocation: string;
  progress: number;
  farmer: string;
  startDate: string;
  lastUpdate: string;
  estimatedCompletion: string;
  timeline: {
    stage: string;
    status: string;
    date: string;
    location: string;
    actor: string;
  }[];
}
export function ProductTracking() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStage, setFilterStage] = useState('all');
  const products: ProductTracking[] = [{
    id: 'TRK-001',
    batchId: 'LO-2024-025',
    product: 'Sốt cà chua đóng lọ',
    category: 'Chế biến',
    quantity: '500 lọ',
    currentStage: 'Bán lẻ',
    currentLocation: 'Siêu thị Fresh Mart, TP.HCM',
    progress: 90,
    farmer: 'Nông trại Xanh Đà Lạt',
    startDate: '15/06/2024',
    lastUpdate: '21/06/2024 14:30',
    estimatedCompletion: '25/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Hoàn thành',
      date: '15/06/2024',
      location: 'Đà Lạt, Lâm Đồng',
      actor: 'Nông trại Xanh Đà Lạt'
    }, {
      stage: 'Thu mua',
      status: 'Hoàn thành',
      date: '16/06/2024',
      location: 'Thu mua Nông sản Việt',
      actor: 'Thu mua Nông sản Việt'
    }, {
      stage: 'Chế biến',
      status: 'Hoàn thành',
      date: '21/06/2024',
      location: 'Chế biến Thực phẩm Sạch',
      actor: 'Chế biến Thực phẩm Sạch'
    }, {
      stage: 'Vận chuyển',
      status: 'Hoàn thành',
      date: '21/06/2024',
      location: 'Đã giao đến TP.HCM',
      actor: 'Vận tải Logistics Nhanh'
    }, {
      stage: 'Bán lẻ',
      status: 'Đang bán',
      date: '21/06/2024',
      location: 'Siêu thị Fresh Mart',
      actor: 'Siêu thị Fresh Mart'
    }]
  }, {
    id: 'TRK-002',
    batchId: 'LO-2024-024',
    product: 'Táo sấy giòn',
    category: 'Chế biến',
    quantity: '200 gói',
    currentStage: 'Vận chuyển',
    currentLocation: 'Đang vận chuyển đến TP.HCM',
    progress: 65,
    farmer: 'Vườn cây Cao Nguyên',
    startDate: '16/06/2024',
    lastUpdate: '21/06/2024 10:00',
    estimatedCompletion: '22/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Hoàn thành',
      date: '16/06/2024',
      location: 'Mộc Châu, Sơn La',
      actor: 'Vườn cây Cao Nguyên'
    }, {
      stage: 'Thu mua',
      status: 'Hoàn thành',
      date: '17/06/2024',
      location: 'Thu mua Nông sản Việt',
      actor: 'Thu mua Nông sản Việt'
    }, {
      stage: 'Chế biến',
      status: 'Hoàn thành',
      date: '19/06/2024',
      location: 'Chế biến Thực phẩm Sạch',
      actor: 'Chế biến Thực phẩm Sạch'
    }, {
      stage: 'Vận chuyển',
      status: 'Đang vận chuyển',
      date: '21/06/2024',
      location: 'Nghệ An (Km 180/1680)',
      actor: 'Vận tải Express'
    }]
  }, {
    id: 'TRK-003',
    batchId: 'LO-2024-023',
    product: 'Đậu Hà Lan đông lạnh',
    category: 'Đông lạnh',
    quantity: '300 kg',
    currentStage: 'Đã bán',
    currentLocation: 'Nhà hàng Golden Dragon',
    progress: 100,
    farmer: 'Nông trại Xanh Đà Lạt',
    startDate: '17/06/2024',
    lastUpdate: '21/06/2024 17:00',
    estimatedCompletion: '21/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Hoàn thành',
      date: '17/06/2024',
      location: 'Đà Lạt, Lâm Đồng',
      actor: 'Nông trại Xanh Đà Lạt'
    }, {
      stage: 'Thu mua',
      status: 'Hoàn thành',
      date: '18/06/2024',
      location: 'Thu mua Nông sản Việt',
      actor: 'Thu mua Nông sản Việt'
    }, {
      stage: 'Chế biến',
      status: 'Hoàn thành',
      date: '19/06/2024',
      location: 'Chế biến Thực phẩm Sạch',
      actor: 'Chế biến Thực phẩm Sạch'
    }, {
      stage: 'Vận chuyển',
      status: 'Hoàn thành',
      date: '20/06/2024',
      location: 'Đã giao đến TP.HCM',
      actor: 'Vận tải Logistics Nhanh'
    }, {
      stage: 'Bán lẻ',
      status: 'Hoàn thành',
      date: '21/06/2024',
      location: 'Nhà hàng Golden Dragon',
      actor: 'Nhà hàng Golden Dragon'
    }]
  }, {
    id: 'TRK-004',
    batchId: 'LO-2024-022',
    product: 'Dâu tây đông lạnh',
    category: 'Đông lạnh',
    quantity: '150 kg',
    currentStage: 'Chế biến',
    currentLocation: 'Chế biến Thực phẩm Sạch',
    progress: 45,
    farmer: 'Nông trại Xanh Đà Lạt',
    startDate: '17/06/2024',
    lastUpdate: '20/06/2024 14:00',
    estimatedCompletion: '22/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Hoàn thành',
      date: '17/06/2024',
      location: 'Đà Lạt, Lâm Đồng',
      actor: 'Nông trại Xanh Đà Lạt'
    }, {
      stage: 'Thu mua',
      status: 'Hoàn thành',
      date: '18/06/2024',
      location: 'Thu mua Nông sản Việt',
      actor: 'Thu mua Nông sản Việt'
    }, {
      stage: 'Chế biến',
      status: 'Đang xử lý',
      date: '20/06/2024',
      location: 'Chế biến Thực phẩm Sạch',
      actor: 'Chế biến Thực phẩm Sạch'
    }]
  }, {
    id: 'TRK-005',
    batchId: 'LO-2024-021',
    product: 'Khoai tây chiên đông lạnh',
    category: 'Đông lạnh',
    quantity: '400 kg',
    currentStage: 'Bán lẻ',
    currentLocation: 'Chuỗi nhà hàng FastFood',
    progress: 85,
    farmer: 'Cánh đồng Nắng',
    startDate: '14/06/2024',
    lastUpdate: '20/06/2024 16:00',
    estimatedCompletion: '23/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Hoàn thành',
      date: '14/06/2024',
      location: 'Đà Lạt, Lâm Đồng',
      actor: 'Cánh đồng Nắng'
    }, {
      stage: 'Thu mua',
      status: 'Hoàn thành',
      date: '15/06/2024',
      location: 'Thu mua Nông sản Việt',
      actor: 'Thu mua Nông sản Việt'
    }, {
      stage: 'Chế biến',
      status: 'Hoàn thành',
      date: '16/06/2024',
      location: 'Chế biến Thực phẩm Sạch',
      actor: 'Chế biến Thực phẩm Sạch'
    }, {
      stage: 'Vận chuyển',
      status: 'Hoàn thành',
      date: '17/06/2024',
      location: 'Đã giao đến Đà Nẵng',
      actor: 'Vận tải Logistics Nhanh'
    }, {
      stage: 'Bán lẻ',
      status: 'Đang bán',
      date: '17/06/2024',
      location: 'Chuỗi nhà hàng FastFood',
      actor: 'Chuỗi nhà hàng FastFood'
    }]
  }, {
    id: 'TRK-006',
    batchId: 'LO-2024-020',
    product: 'Bắp cải muối chua',
    category: 'Chế biến',
    quantity: '300 lọ',
    currentStage: 'Thu mua',
    currentLocation: 'Thu mua Nông sản Việt',
    progress: 25,
    farmer: 'Vườn Hữu cơ Mộc Châu',
    startDate: '18/06/2024',
    lastUpdate: '19/06/2024 10:00',
    estimatedCompletion: '25/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Hoàn thành',
      date: '18/06/2024',
      location: 'Mộc Châu, Sơn La',
      actor: 'Vườn Hữu cơ Mộc Châu'
    }, {
      stage: 'Thu mua',
      status: 'Đang kiểm định',
      date: '19/06/2024',
      location: 'Thu mua Nông sản Việt',
      actor: 'Thu mua Nông sản Việt'
    }]
  }, {
    id: 'TRK-007',
    batchId: 'LO-2024-019',
    product: 'Ớt bột',
    category: 'Gia vị',
    quantity: '100 kg',
    currentStage: 'Vận chuyển',
    currentLocation: 'Đang vận chuyển đến Bình Dương',
    progress: 70,
    farmer: 'Cánh đồng Nắng',
    startDate: '14/06/2024',
    lastUpdate: '20/06/2024 22:00',
    estimatedCompletion: '21/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Hoàn thành',
      date: '14/06/2024',
      location: 'Đà Lạt, Lâm Đồng',
      actor: 'Cánh đồng Nắng'
    }, {
      stage: 'Thu mua',
      status: 'Hoàn thành',
      date: '15/06/2024',
      location: 'Thu mua Nông sản Việt',
      actor: 'Thu mua Nông sản Việt'
    }, {
      stage: 'Chế biến',
      status: 'Hoàn thành',
      date: '18/06/2024',
      location: 'Chế biến Thực phẩm Sạch',
      actor: 'Chế biến Thực phẩm Sạch'
    }, {
      stage: 'Vận chuyển',
      status: 'Đang vận chuyển',
      date: '20/06/2024',
      location: 'Nghệ An (Km 350/1650)',
      actor: 'Vận tải Logistics Nhanh'
    }]
  }, {
    id: 'TRK-008',
    batchId: 'LO-2024-018',
    product: 'Cà chua sấy khô',
    category: 'Chế biến',
    quantity: '80 kg',
    currentStage: 'Nông trại',
    currentLocation: 'Nông trại Xanh Đà Lạt',
    progress: 15,
    farmer: 'Nông trại Xanh Đà Lạt',
    startDate: '20/06/2024',
    lastUpdate: '20/06/2024 08:00',
    estimatedCompletion: '28/06/2024',
    timeline: [{
      stage: 'Nông trại',
      status: 'Đang thu hoạch',
      date: '20/06/2024',
      location: 'Đà Lạt, Lâm Đồng',
      actor: 'Nông trại Xanh Đà Lạt'
    }]
  }];
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.product.toLowerCase().includes(searchTerm.toLowerCase()) || product.batchId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = filterStage === 'all' || product.currentStage === filterStage;
    return matchesSearch && matchesStage;
  });
  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'Nông trại':
        return <Sprout className="w-4 h-4" />;
      case 'Thu mua':
        return <ShoppingCart className="w-4 h-4" />;
      case 'Chế biến':
        return <Factory className="w-4 h-4" />;
      case 'Vận chuyển':
        return <Truck className="w-4 h-4" />;
      case 'Bán lẻ':
        return <Store className="w-4 h-4" />;
      case 'Đã bán':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };
  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Nông trại':
        return 'bg-green-100 text-green-800';
      case 'Thu mua':
        return 'bg-blue-100 text-blue-800';
      case 'Chế biến':
        return 'bg-purple-100 text-purple-800';
      case 'Vận chuyển':
        return 'bg-orange-100 text-orange-800';
      case 'Bán lẻ':
        return 'bg-pink-100 text-pink-800';
      case 'Đã bán':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Calculate stats
  const totalProducts = products.length;
  const byStage = {
    farm: products.filter(p => p.currentStage === 'Nông trại').length,
    wholesale: products.filter(p => p.currentStage === 'Thu mua').length,
    processing: products.filter(p => p.currentStage === 'Chế biến').length,
    shipping: products.filter(p => p.currentStage === 'Vận chuyển').length,
    retail: products.filter(p => p.currentStage === 'Bán lẻ').length,
    sold: products.filter(p => p.currentStage === 'Đã bán').length
  };
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Theo dõi Trạng thái Sản phẩm
          </h1>
          <p className="text-gray-500">
            Giám sát sản phẩm trong toàn bộ chuỗi cung ứng
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Xuất báo cáo
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sprout className="w-4 h-4 text-green-600" />
            <p className="text-xs text-gray-500">Nông trại</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{byStage.farm}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart className="w-4 h-4 text-blue-600" />
            <p className="text-xs text-gray-500">Thu mua</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {byStage.wholesale}
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Factory className="w-4 h-4 text-purple-600" />
            <p className="text-xs text-gray-500">Chế biến</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {byStage.processing}
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Truck className="w-4 h-4 text-orange-600" />
            <p className="text-xs text-gray-500">Vận chuyển</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{byStage.shipping}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Store className="w-4 h-4 text-pink-600" />
            <p className="text-xs text-gray-500">Bán lẻ</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{byStage.retail}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-gray-600" />
            <p className="text-xs text-gray-500">Đã bán</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{byStage.sold}</p>
        </Card>
      </div>

      <Card className="overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Tìm kiếm sản phẩm, mã lô..." className="pl-9 bg-white" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" value={filterStage} onChange={e => setFilterStage(e.target.value)}>
                <option value="all">Tất cả giai đoạn</option>
                <option value="Nông trại">Nông trại</option>
                <option value="Thu mua">Thu mua</option>
                <option value="Chế biến">Chế biến</option>
                <option value="Vận chuyển">Vận chuyển</option>
                <option value="Bán lẻ">Bán lẻ</option>
                <option value="Đã bán">Đã bán</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Lọc
              </Button>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="p-6 space-y-4">
          {filteredProducts.map(product => <Card key={product.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.product}
                      </h3>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStageColor(product.currentStage)}`}>
                        {getStageIcon(product.currentStage)}
                        {product.currentStage}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="font-mono">{product.batchId}</span>
                      <span>{product.quantity}</span>
                      <span>Nông dân: {product.farmer}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/dashboard/batch/${product.batchId}`)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Current Location */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-900">
                    Vị trí hiện tại: {product.currentLocation}
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    Cập nhật: {product.lastUpdate}
                  </p>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      Tiến độ chuỗi cung ứng
                    </p>
                    <span className="text-sm font-semibold text-blue-600">
                      {product.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{
                  width: `${product.progress}%`
                }}></div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Lịch sử di chuyển
                  </p>
                  <div className="space-y-3">
                    {product.timeline.map((item, index) => <div key={index} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.status === 'Hoàn thành' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                            {getStageIcon(item.stage)}
                          </div>
                          {index < product.timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-1" />}
                        </div>
                        <div className="flex-1 pb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-gray-900">
                              {item.stage}
                            </p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === 'Hoàn thành' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{item.actor}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.location} • {item.date}
                          </p>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
      </Card>
    </div>;
}