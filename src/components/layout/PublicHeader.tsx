import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Menu, X, LogOut, LayoutDashboard, User } from "lucide-react";

export default function PublicHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/");
  };

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-green-700 font-bold md:border-b-2 md:border-green-600 bg-green-50 md:bg-transparent"
      : "text-gray-700 hover:text-green-600 hover:bg-gray-50 md:hover:bg-transparent";

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Tin tức", path: "/news" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-black text-green-600 tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">FT</span>
            </div>
            FoodTrace
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 transition-colors ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {!user ? (
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition shadow-md shadow-green-200"
              >
                Đăng nhập
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                  <User size={14} />
                  <span className="text-xs font-bold">{user.name}</span>
                </div>
                {user.role !== "PUBLIC" && (
                  <Link
                    to="/dashboard"
                    className="text-green-600 hover:text-green-700 font-bold text-xs flex items-center gap-1"
                  >
                    <LayoutDashboard size={14} /> DASHBOARD
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                >
                  <LogOut size={18} />
                </button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden fixed top-16 right-0 bottom-0 w-3/4 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {user && (
            <div className="pb-6 border-b border-gray-100">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-2">
                Tài khoản
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-4">
              Menu
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-bold transition-all ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 space-y-3">
            {!user ? (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-4 bg-green-600 text-white rounded-2xl font-bold shadow-lg shadow-green-100"
              >
                Đăng nhập
              </Link>
            ) : (
              <>
                {user.role !== "PUBLIC" && (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold"
                  >
                    <LayoutDashboard size={18} /> Vào Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-red-100 text-red-500 rounded-2xl font-bold hover:bg-red-50"
                >
                  <LogOut size={18} /> Đăng xuất
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
