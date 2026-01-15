import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Sprout, Shield, Users, Target, Award, TrendingUp, Heart, Zap } from 'lucide-react';
export function AboutPage() {
  const values = [{
    icon: Shield,
    title: 'Minh bạch',
    description: 'Cam kết cung cấp thông tin rõ ràng, chính xác về nguồn gốc sản phẩm'
  }, {
    icon: Heart,
    title: 'Trách nhiệm',
    description: 'Đặt sức khỏe người tiêu dùng và lợi ích nông dân lên hàng đầu'
  }, {
    icon: Zap,
    title: 'Đổi mới',
    description: 'Ứng dụng công nghệ blockchain tiên tiến vào nông nghiệp Việt Nam'
  }, {
    icon: Users,
    title: 'Hợp tác',
    description: 'Kết nối toàn bộ chuỗi cung ứng để tạo giá trị bền vững'
  }];
  const milestones = [{
    year: '2022',
    event: 'Thành lập FoodTrace',
    description: 'Khởi đầu với tầm nhìn cách mạng hóa chuỗi cung ứng thực phẩm'
  }, {
    year: '2023',
    event: '100+ Nông trại',
    description: 'Mở rộng mạng lưới đối tác trên toàn quốc'
  }, {
    year: '2024',
    event: '500+ Nông trại',
    description: 'Trở thành nền tảng truy xuất nguồn gốc hàng đầu Việt Nam'
  }, {
    year: '2024',
    event: 'Giải thưởng Startup',
    description: 'Vinh danh tại Lễ trao giải Startup Công nghệ Nông nghiệp'
  }];
  const team = [{
    name: 'Nguyễn Văn A',
    role: 'CEO & Founder',
    avatar: '👨‍💼'
  }, {
    name: 'Trần Thị B',
    role: 'CTO',
    avatar: '👩‍💻'
  }, {
    name: 'Lê Văn C',
    role: 'Head of Operations',
    avatar: '👨‍🔧'
  }, {
    name: 'Phạm Thị D',
    role: 'Head of Marketing',
    avatar: '👩‍💼'
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">FoodTrace</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Trang chủ
              </Link>
              <Link to="/news" className="text-gray-600 hover:text-gray-900">
                Tin tức
              </Link>
              <Link to="/about" className="text-green-600 font-medium">
                Giới thiệu
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                Liên hệ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Về FoodTrace</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Chúng tôi đang xây dựng một hệ sinh thái thực phẩm minh bạch, an
            toàn và bền vững cho Việt Nam
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8">
            <Target className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h2>
            <p className="text-gray-600 leading-relaxed">
              Mang đến sự minh bạch tuyệt đối trong chuỗi cung ứng thực phẩm,
              giúp người tiêu dùng an tâm về nguồn gốc sản phẩm và nông dân được
              định giá công bằng cho công sức của mình.
            </p>
          </Card>

          <Card className="p-8">
            <Award className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h2>
            <p className="text-gray-600 leading-relaxed">
              Trở thành nền tảng truy xuất nguồn gốc thực phẩm hàng đầu Đông Nam
              Á, góp phần xây dựng một hệ thống nông nghiệp bền vững và công
              nghệ cao.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>)}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Hành trình phát triển
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Đội ngũ lãnh đạo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </Card>)}
          </div>
        </div>

        {/* Stats */}
        <Card className="p-12 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Nông trại đối tác</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Sản phẩm được truy xuất</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-green-100">Người tiêu dùng tin tưởng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Minh bạch thông tin</div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cùng chúng tôi xây dựng tương lai
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tham gia FoodTrace để trở thành một phần của cách mạng minh bạch
            thực phẩm
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Liên hệ với chúng tôi</Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                Truy xuất ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>

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
    </div>;
}