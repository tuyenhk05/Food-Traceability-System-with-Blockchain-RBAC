import React, { useState, useEffect } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Package,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Thermometer,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // 1. Khởi tạo State với dữ liệu mẫu
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([
    {
      id: "INV-001",
      batchId: "LO-2024-025",
      product: "Sốt cà chua đóng lọ",
      category: "Chế biến",
      quantity: "450 lọ",
      unit: "lọ",
      minStock: 100,
      currentStock: 450,
      status: "Đang vận chuyển", // Trạng thái mặc định
      location: "Kho A - Kệ 1",
      expiryDate: "21/12/2024",
      supplier: "Chế biến Thực phẩm Sạch",
      lastRestocked: "21/06/2024",
      temperature: "4-8°C",
      price: "35,000 VNĐ",
    },
    {
      id: "INV-002",
      batchId: "LO-2024-030", // BatchId khớp với file ShipmentReception
      product: "Táo Hữu cơ",
      category: "Trái cây",
      quantity: "200 kg",
      unit: "kg",
      minStock: 50,
      currentStock: 200,
      status: "Đang vận chuyển",
      location: "Kho B - Kệ 3",
      expiryDate: "20/09/2024",
      supplier: "Farm hữu cơ sạch",
      lastRestocked: "20/06/2024",
      temperature: "4°C",
      price: "120,000 VNĐ",
    },
    {
      id: "INV-003",
      batchId: "LO-2024-023",
      product: "Đậu Hà Lan đông lạnh",
      category: "Đông lạnh",
      quantity: "250 kg",
      unit: "kg",
      minStock: 100,
      currentStock: 250,
      status: "Đủ hàng",
      location: "Kho lạnh -18°C",
      expiryDate: "19/12/2024",
      supplier: "Chế biến Thực phẩm Sạch",
      lastRestocked: "19/06/2024",
      temperature: "-18°C",
      price: "45,000 VNĐ/kg",
    },
    // Bạn có thể thêm các item cũ của bạn vào đây...
  ]);

  // 2. LIÊN KẾT: Tự động cập nhật trạng thái từ LocalStorage
  useEffect(() => {
    const syncInventory = () => {
      const updated = inventoryItems.map((item) => {
        // Kiểm tra xem lô hàng này đã được "Xác nhận nhận hàng" ở trang Reception chưa
        const savedStatus = localStorage.getItem(`status_${item.batchId}`);
        if (savedStatus) {
          return { ...item, status: savedStatus };
        }
        return item;
      });
      setInventoryItems(updated);
    };

    syncInventory();
  }, []); // Chạy khi component mount

  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch =
      item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.batchId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đã nhập kho":
      case "Đủ hàng":
        return "bg-green-100 text-green-800";
      case "Đang vận chuyển":
        return "bg-blue-100 text-blue-800";
      case "Sắp hết":
        return "bg-amber-100 text-amber-800";
      case "Hết hàng":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Tính toán thống kê
  const totalItems = inventoryItems.length;
  const inStock = inventoryItems.filter(
    (i) => i.status === "Đủ hàng" || i.status === "Đã nhập kho",
  ).length;
  const lowStock = inventoryItems.filter((i) => i.status === "Sắp hết").length;
  const totalValue = inventoryItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d]/g, "")) || 0;
    const qty = parseFloat(item.quantity.replace(/[^\d.]/g, "")) || 0;
    return sum + price * qty;
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý Kho hàng</h1>
          <p className="text-gray-500">
            Dữ liệu được đồng bộ từ khâu Tiếp nhận & Blockchain
          </p>
        </div>
        <Button
          onClick={() => navigate("/dashboard/reception")}
          className="bg-blue-600 text-white"
        >
          Tiếp nhận hàng mới
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-none shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Package size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Mặt hàng</p>
              <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-none shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full text-green-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Đã nhập kho</p>
              <p className="text-2xl font-bold text-gray-900">{inStock}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-none shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100 rounded-full text-amber-600">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Cảnh báo tồn</p>
              <p className="text-2xl font-bold text-gray-900">{lowStock}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-none shadow-sm text-purple-600">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingDown size={20} />
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

      <Card className="overflow-hidden border-none shadow-sm bg-white">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Tìm mã lô hoặc tên sản phẩm..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">Tất cả danh mục</option>
            <option value="Chế biến">Chế biến</option>
            <option value="Trái cây">Trái cây</option>
            <option value="Đông lạnh">Đông lạnh</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-3">Mã Batch</th>
                <th className="px-6 py-3">Sản phẩm</th>
                <th className="px-6 py-3 text-center">Nhiệt độ</th>
                <th className="px-6 py-3">Hạn dùng</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3 text-right">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-xs font-bold text-blue-600">
                    {item.batchId}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">
                      {item.product}
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.category} • {item.quantity}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1 text-blue-500 bg-blue-50 py-1 rounded-lg">
                      <Thermometer size={14} />
                      <span className="text-xs font-bold">
                        {item.temperature}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-xs">
                    {item.expiryDate}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        navigate(`/dashboard/batch/${item.batchId}`)
                      }
                    >
                      <Eye size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
