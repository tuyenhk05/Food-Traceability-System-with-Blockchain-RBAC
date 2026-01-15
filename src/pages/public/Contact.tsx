import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Sprout, Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: 'Email',
    content: 'info@foodtrace.vn',
    link: 'mailto:info@foodtrace.vn'
  }, {
    icon: Phone,
    title: 'Hotline',
    content: '1900 xxxx',
    link: 'tel:1900xxxx'
  }, {
    icon: MapPin,
    title: 'Địa chỉ',
    content: 'Tầng 10, Tòa nhà ABC, Quận Cầu Giấy, Hà Nội',
    link: null
  }, {
    icon: Clock,
    title: 'Giờ làm việc',
    content: 'Thứ 2 - Thứ 6: 8:00 - 17:30',
    link: null
  }];
  const faqs = [{
    question: 'Làm thế nào để tra cứu nguồn gốc sản phẩm?',
    answer: 'Bạn chỉ cần quét mã QR trên bao bì sản phẩm hoặc nhập mã lô hàng trên trang chủ để xem toàn bộ hành trình của sản phẩm.'
  }, {
    question: 'Tôi là nông dân, làm sao để tham gia FoodTrace?',
    answer: 'Vui lòng liên hệ với chúng tôi qua email hoặc hotline. Đội ngũ của chúng tôi sẽ hướng dẫn bạn quy trình đăng ký và sử dụng hệ thống.'
  }, {
    question: 'Chi phí sử dụng dịch vụ như thế nào?',
    answer: 'Chúng tôi có nhiều gói dịch vụ phù hợp với quy mô khác nhau. Vui lòng liên hệ để được tư vấn chi tiết.'
  }, {
    question: 'Dữ liệu trên blockchain có an toàn không?',
    answer: 'Hoàn toàn an toàn. Blockchain đảm bảo dữ liệu không thể bị thay đổi hoặc xóa, mang lại tính minh bạch và tin cậy tuyệt đối.'
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
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                Giới thiệu
              </Link>
              <Link to="/contact" className="text-green-600 font-medium">
                Liên hệ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Liên hệ</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <info.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.link ? <a href={info.link} className="text-gray-600 hover:text-green-600">
                  {info.content}
                </a> : <p className="text-gray-600">{info.content}</p>}
            </Card>)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Gửi tin nhắn cho chúng tôi
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên *
                </label>
                <Input required value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} placeholder="Nhập họ và tên" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <Input type="email" required value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <Input type="tel" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} placeholder="0123 456 789" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tiêu đề *
                </label>
                <Input required value={formData.subject} onChange={e => setFormData({
                ...formData,
                subject: e.target.value
              })} placeholder="Vấn đề bạn muốn trao đổi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung *
                </label>
                <textarea required rows={5} value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nhập nội dung tin nhắn..." />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Gửi tin nhắn
              </Button>
            </form>
          </Card>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Vị trí văn phòng
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Bản đồ Google Maps</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Địa chỉ</p>
                    <p className="text-gray-600">
                      Tầng 10, Tòa nhà ABC, Quận Cầu Giấy, Hà Nội
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Giờ làm việc</p>
                    <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                    <p className="text-gray-600">Thứ 7: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Câu hỏi thường gặp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
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