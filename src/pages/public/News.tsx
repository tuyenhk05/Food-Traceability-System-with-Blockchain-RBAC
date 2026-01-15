import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Sprout, Search, Calendar, User, ArrowRight } from 'lucide-react';
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}
export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const newsArticles: NewsArticle[] = [{
    id: '1',
    title: 'Blockchain Đang Thay Đổi Ngành Nông Nghiệp Việt Nam',
    excerpt: 'Công nghệ blockchain đang mang lại sự minh bạch chưa từng có cho chuỗi cung ứng nông sản, giúp người tiêu dùng tin tưởng hơn vào nguồn gốc thực phẩm.',
    content: '',
    category: 'Công nghệ',
    author: 'Nguyễn Văn A',
    date: '20/06/2024',
    image: '🌾',
    readTime: '5 phút'
  }, {
    id: '2',
    title: 'Nông Sản Hữu Cơ: Xu Hướng Tiêu Dùng Bền Vững',
    excerpt: 'Người tiêu dùng Việt Nam ngày càng quan tâm đến thực phẩm hữu cơ, tạo cơ hội lớn cho nông dân chuyển đổi sang canh tác bền vững.',
    content: '',
    category: 'Xu hướng',
    author: 'Trần Thị B',
    date: '18/06/2024',
    image: '🥬',
    readTime: '4 phút'
  }, {
    id: '3',
    title: 'FoodTrace Hợp Tác Với 500+ Nông Trại Trên Toàn Quốc',
    excerpt: 'Chúng tôi tự hào thông báo đã mở rộng mạng lưới đối tác lên 500 nông trại, cam kết mang đến sản phẩm chất lượng và minh bạch.',
    content: '',
    category: 'Tin công ty',
    author: 'FoodTrace Team',
    date: '15/06/2024',
    image: '🤝',
    readTime: '3 phút'
  }, {
    id: '4',
    title: 'Hướng Dẫn Tra Cứu Nguồn Gốc Sản Phẩm Qua Mã QR',
    excerpt: 'Chỉ với một lần quét mã QR, bạn có thể biết toàn bộ hành trình của sản phẩm từ nông trại đến tay người tiêu dùng.',
    content: '',
    category: 'Hướng dẫn',
    author: 'Lê Văn C',
    date: '12/06/2024',
    image: '📱',
    readTime: '6 phút'
  }, {
    id: '5',
    title: 'Nông Dân Đà Lạt Tăng Thu Nhập 40% Nhờ Truy Xuất Nguồn Gốc',
    excerpt: 'Câu chuyện thành công của các nông dân Đà Lạt khi tham gia hệ thống truy xuất nguồn gốc, giúp sản phẩm được định giá cao hơn.',
    content: '',
    category: 'Câu chuyện',
    author: 'Phạm Thị D',
    date: '10/06/2024',
    image: '💰',
    readTime: '7 phút'
  }, {
    id: '6',
    title: 'An Toàn Thực Phẩm: Vai Trò Của Công Nghệ Trong Kiểm Soát',
    excerpt: 'Công nghệ IoT và blockchain đang giúp giám sát chặt chẽ điều kiện bảo quản, vận chuyển để đảm bảo an toàn thực phẩm tối đa.',
    content: '',
    category: 'Công nghệ',
    author: 'Hoàng Văn E',
    date: '08/06/2024',
    image: '🔒',
    readTime: '5 phút'
  }, {
    id: '7',
    title: 'Chứng Nhận VietGAP: Tiêu Chuẩn Vàng Cho Nông Sản Việt',
    excerpt: 'Tìm hiểu về chứng nhận VietGAP và tại sao nó quan trọng trong việc nâng cao giá trị nông sản Việt Nam trên thị trường.',
    content: '',
    category: 'Kiến thức',
    author: 'Vũ Thị F',
    date: '05/06/2024',
    image: '🏆',
    readTime: '8 phút'
  }, {
    id: '8',
    title: 'Xu Hướng Mua Sắm Thực Phẩm Online Sau Đại Dịch',
    excerpt: 'Người tiêu dùng Việt Nam ngày càng ưa chuộng mua thực phẩm online, đặc biệt là các sản phẩm có nguồn gốc rõ ràng.',
    content: '',
    category: 'Xu hướng',
    author: 'Đỗ Văn G',
    date: '03/06/2024',
    image: '🛒',
    readTime: '4 phút'
  }, {
    id: '9',
    title: 'FoodTrace Nhận Giải Thưởng Startup Công Nghệ Nông Nghiệp',
    excerpt: 'Chúng tôi vinh dự được vinh danh tại Lễ trao giải Startup Công nghệ Nông nghiệp 2024 cho những đóng góp trong lĩnh vực truy xuất nguồn gốc.',
    content: '',
    category: 'Tin công ty',
    author: 'FoodTrace Team',
    date: '01/06/2024',
    image: '🎉',
    readTime: '3 phút'
  }];
  const categories = ['all', 'Công nghệ', 'Xu hướng', 'Tin công ty', 'Hướng dẫn', 'Câu chuyện', 'Kiến thức'];
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const featuredArticle = newsArticles[0];
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
              <Link to="/news" className="text-green-600 font-medium">
                Tin tức
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
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
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tin tức & Cập nhật
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Cập nhật những tin tức mới nhất về công nghệ blockchain, nông nghiệp
            bền vững và truy xuất nguồn gốc thực phẩm
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input placeholder="Tìm kiếm bài viết..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                {category === 'all' ? 'Tất cả' : category}
              </button>)}
          </div>
        </div>

        {/* Featured Article */}
        {selectedCategory === 'all' && !searchTerm && <Card className="mb-12 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-12">
                <div className="text-8xl">{featuredArticle.image}</div>
              </div>
              <div className="md:w-1/2 p-8">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                  Nổi bật
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </div>
                  <span>{featuredArticle.readTime} đọc</span>
                </div>
                <Button>
                  Đọc thêm
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 flex items-center justify-center">
                <div className="text-6xl">{article.image}</div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <span>{article.readTime} đọc</span>
                </div>
                <Button variant="outline" className="w-full">
                  Đọc thêm
                </Button>
              </div>
            </Card>)}
        </div>

        {filteredArticles.length === 0 && <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Không tìm thấy bài viết nào phù hợp
            </p>
          </div>}
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