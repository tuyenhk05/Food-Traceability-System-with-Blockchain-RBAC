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
} from "lucide-react";
import PublicHeader from "../../components/layout/PublicHeader";

export function HomePage() {
  const navigate = useNavigate();
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

  const features = [
    {
      icon: Shield,
      title: "Minh bạch tuyệt đối",
      description: "Dữ liệu blockchain không thể sửa đổi.",
    },
    {
      icon: Search,
      title: "Tra cứu dễ dàng",
      description: "Quét QR hoặc nhập mã nhanh chóng.",
    },
    {
      icon: Users,
      title: "Kết nối chuỗi",
      description: "Liên kết mọi thành phần cung ứng.",
    },
    {
      icon: TrendingUp,
      title: "Tăng giá trị",
      description: "Nâng tầm thương hiệu nông sản.",
    },
  ];

  const steps = [
    { icon: Leaf, title: "Nông trại", description: "Thu hoạch & ghi nhận" },
    { icon: Package, title: "Chế biến", description: "Giám sát quy trình" },
    { icon: Truck, title: "Vận chuyển", description: "Theo dõi hành trình" },
    {
      icon: CheckCircle,
      title: "Người tiêu dùng",
      description: "Tra cứu & an tâm",
    },
  ];

  const stats = [
    { value: "500+", label: "Đối tác" },
    { value: "10K+", label: "Sản phẩm" },
    { value: "50K+", label: "Người dùng" },
    { value: "100%", label: "Minh bạch" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <QRScanner
        isOpen={showScanner}
        onClose={() => setShowScanner(false)}
        onScan={handleScan}
      />
      <PublicHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Truy xuất nguồn gốc <br className="hidden sm:block" />
              <span className="text-green-300">An toàn & Minh bạch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto px-4">
              Giải pháp Blockchain giúp bạn kiểm soát toàn bộ hành trình thực
              phẩm từ nông trại đến bàn ăn.
            </p>

            {/* Trace Form - Tối ưu Mobile */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-2 sm:p-3">
              <form
                onSubmit={handleTrace}
                className="flex flex-col sm:flex-row gap-2"
              >
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Nhập mã lô hàng..."
                    className="w-full pl-12 py-6 border-none bg-gray-50 rounded-xl text-black focus:ring-2 focus:ring-green-500"
                    value={traceCode}
                    onChange={(e) => setTraceCode(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 h-14 sm:h-auto">
                  <Button
                    type="submit"
                    className="flex-1 sm:flex-none px-8 rounded-xl bg-green-600 hover:bg-green-700 font-bold"
                  >
                    Tra cứu
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="px-4 rounded-xl border-green-200 text-green-600 hover:bg-green-50 sm:hidden"
                    onClick={() => setShowScanner(true)}
                  >
                    <QrCode className="w-6 h-6" />
                  </Button>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="hidden sm:flex px-6 rounded-xl border-green-200 text-green-600 hover:bg-green-50 items-center gap-2"
                  onClick={() => setShowScanner(true)}
                >
                  <QrCode className="w-5 h-5" />
                  Quét QR
                </Button>
              </form>
            </div>
            <p className="text-green-200/80 text-xs sm:text-sm mt-4 font-medium">
              Thử ngay: LO-2024-025, LO-2024-030
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Grid 2x2 trên mobile */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-gray-50 md:bg-transparent"
              >
                <div className="text-2xl sm:text-4xl font-black text-green-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm uppercase tracking-widest text-gray-500 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Card đẹp hơn */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Vì sao chọn FoodTrace?
            </h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card
                key={i}
                className="p-6 border-none shadow-sm bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group rounded-3xl"
              >
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - Timeline dọc trên mobile */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
            Quy trình vận hành
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 relative z-10"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="md:text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {/* Line nối - Ẩn trên mobile vì dùng timeline dọc mặc định của flex-row */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-green-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto bg-green-900 rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Bắt đầu minh bạch hóa sản phẩm?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-900 hover:bg-green-50 rounded-xl px-10 font-bold h-14"
              >
                Liên hệ ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white rounded-xl px-10 h-14 font-bold"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Tinh gọn mobile */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="text-xl font-black tracking-tight">
                FoodTrace
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Nền tảng Blockchain hàng đầu Việt Nam về truy xuất nguồn gốc thực
              phẩm.
            </p>
          </div>
          {/* Các cột Footer khác giữ nguyên nhưng bỏ margin-top dư thừa */}
          <div>
            <h4 className="text-white font-bold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-500 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-500 transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </div>
          {/* ... giữ các cột hỗ trợ/liên hệ ... */}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs uppercase tracking-widest font-bold">
          &copy; 2024 FoodTrace. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
