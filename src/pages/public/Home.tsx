import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";
import { QRScanner } from "../../components/QRScanner";
import { useAuth } from "../../context/AuthContext";
import { UserRole } from "../../types";
import {
  Sprout,
  Search,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Leaf,
  Package,
  Truck,
  QrCode,
  UserCircle,
  Building2,
  Factory,
  Store,
} from "lucide-react";
import PublicHeader from "../../components/layout/PublicHeader";

export function HomePage() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [traceCode, setTraceCode] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const handleTrace = (e: React.FormEvent) => {
    e.preventDefault();
    if (traceCode.trim()) {
      navigate(`/trace/${traceCode}`);
    }
  };
  const handleScan = (decodedText: string) => {
    setShowScanner(false);
    const id = decodedText.split("/").pop() || decodedText;
    navigate(`/trace/${id}`);
  };
  const handleRoleLogin = (role: UserRole) => {
    login(role);
    navigate("/dashboard");
  };
  const roles = [
    {
      role: "ADMIN" as UserRole,
      name: "Quản trị viên",
      icon: UserCircle,
      color: "bg-purple-100 text-purple-700 hover:bg-purple-200",
      description: "Quản lý toàn bộ hệ thống",
    },
    {
      role: "FARMER" as UserRole,
      name: "Nông dân",
      icon: Sprout,
      color: "bg-green-100 text-green-700 hover:bg-green-200",
      description: "Quản lý cây trồng và thu hoạch",
    },
    {
      role: "WHOLESALER" as UserRole,
      name: "Thu mua",
      icon: Building2,
      color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      description: "Kiểm định và thu mua nông sản",
    },
    {
      role: "PROCESSOR" as UserRole,
      name: "Chế biến",
      icon: Factory,
      color: "bg-orange-100 text-orange-700 hover:bg-orange-200",
      description: "Chế biến và đóng gói sản phẩm",
    },
    {
      role: "DISTRIBUTOR" as UserRole,
      name: "Vận chuyển",
      icon: Truck,
      color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
      description: "Vận chuyển và phân phối",
    },
    {
      role: "RETAILER" as UserRole,
      name: "Bán lẻ",
      icon: Store,
      color: "bg-pink-100 text-pink-700 hover:bg-pink-200",
      description: "Bán hàng cho người tiêu dùng",
    },
  ];
  const features = [
    {
      icon: Shield,
      title: "Minh bạch tuyệt đối",
      description:
        "Mọi thông tin được ghi nhận trên blockchain, không thể thay đổi hay xóa bỏ",
    },
    {
      icon: Search,
      title: "Tra cứu dễ dàng",
      description:
        "Chỉ cần quét mã QR hoặc nhập mã lô để biết toàn bộ hành trình sản phẩm",
    },
    {
      icon: Users,
      title: "Kết nối chuỗi cung ứng",
      description:
        "Liên kết nông dân, nhà chế biến, vận chuyển và người tiêu dùng",
    },
    {
      icon: TrendingUp,
      title: "Tăng giá trị sản phẩm",
      description:
        "Sản phẩm có nguồn gốc rõ ràng được định giá cao hơn trên thị trường",
    },
  ];
  const steps = [
    {
      icon: Leaf,
      title: "Nông trại",
      description: "Thu hoạch và ghi nhận thông tin ban đầu",
    },
    {
      icon: Package,
      title: "Chế biến",
      description: "Quy trình sản xuất được giám sát chặt chẽ",
    },
    {
      icon: Truck,
      title: "Vận chuyển",
      description: "Theo dõi điều kiện bảo quản trong suốt hành trình",
    },
    {
      icon: CheckCircle,
      title: "Người tiêu dùng",
      description: "Tra cứu đầy đủ thông tin trước khi mua",
    },
  ];
  const stats = [
    {
      value: "500+",
      label: "Nông trại đối tác",
    },
    {
      value: "10,000+",
      label: "Sản phẩm được truy xuất",
    },
    {
      value: "50,000+",
      label: "Người tiêu dùng tin tưởng",
    },
    {
      value: "100%",
      label: "Minh bạch thông tin",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <QRScanner
        isOpen={showScanner}
        onClose={() => setShowScanner(false)}
        onScan={handleScan}
      />

      {/* Header */}
      <PublicHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Truy xuất nguồn gốc thực phẩm
              <br />
              <span className="text-green-200">An toàn & Minh bạch</span>
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Sử dụng công nghệ blockchain để đảm bảo tính minh bạch tuyệt đối
              trong chuỗi cung ứng thực phẩm
            </p>

            {/* Trace Form */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-2 flex flex-col sm:flex-row gap-2">
              <form onSubmit={handleTrace} className="flex-1 flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Nhập mã lô hàng..."
                    className="pl-10 border-0 focus:ring-0"
                    value={traceCode}
                    onChange={(e) => setTraceCode(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg">
                  Tra cứu
                </Button>
              </form>
              <div className="hidden sm:block w-px bg-gray-200 my-2"></div>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => setShowScanner(true)}
              >
                <QrCode className="w-5 h-5 mr-2" />
                Quét QR
              </Button>
            </div>

            <p className="text-green-100 text-sm mt-4">
              Ví dụ: LO-2024-001, LO-2024-002
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section id="login" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đăng nhập theo vai trò
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chọn vai trò của bạn để truy cập vào hệ thống quản lý
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {roles.map((roleItem) => (
              <Card
                key={roleItem.role}
                className="p-6 hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => handleRoleLogin(roleItem.role)}
              >
                <div
                  className={`w-16 h-16 rounded-full ${roleItem.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <roleItem.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {roleItem.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {roleItem.description}
                </p>
                <div className="flex items-center text-green-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Đăng nhập
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              💡 Đây là demo - chọn bất kỳ vai trò nào để trải nghiệm hệ thống
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn FoodTrace?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Giải pháp toàn diện cho chuỗi cung ứng thực phẩm an toàn và bền
              vững
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cách thức hoạt động
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hành trình của sản phẩm từ nông trại đến tay người tiêu dùng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng trăm nông trại và doanh nghiệp đang sử dụng
            FoodTrace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-green-600 hover:bg-green-50"
              >
                Liên hệ ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" className="bg-green-800 hover:bg-green-900">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold">FoodTrace</span>
              </div>
              <p className="text-gray-400">
                Giải pháp truy xuất nguồn gốc thực phẩm bằng công nghệ
                blockchain
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Liên kết</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-white">
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hướng dẫn sử dụng</li>
                <li>Câu hỏi thường gặp</li>
                <li>Chính sách bảo mật</li>
                <li>Điều khoản sử dụng</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@foodtrace.vn</li>
                <li>Hotline: 1900 xxxx</li>
                <li>Địa chỉ: Hà Nội, Việt Nam</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FoodTrace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
