import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PublicHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-green-700 font-bold border-b-2 border-green-600"
      : "text-gray-700 hover:text-green-600";

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-600 tracking-tight"
        >
          FoodTrace
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={`pb-1 ${isActive("/")}`}>
            Trang chủ
          </Link>

          <Link to="/news" className={`pb-1 ${isActive("/news")}`}>
            Tin tức
          </Link>

          <Link to="/about" className={`pb-1 ${isActive("/about")}`}>
            Giới thiệu
          </Link>

          <Link to="/contact" className={`pb-1 ${isActive("/contact")}`}>
            Liên hệ
          </Link>

          {/* AUTH */}
          {!user ? (
            <Link
              to="/login"
              className="
                px-4 py-2
                rounded-full
                bg-green-600 text-white
                font-semibold
                hover:bg-green-700
                transition
              "
            >
              Đăng nhập
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-700">
                👋 {user.name}
              </span>

              {user.role !== "PUBLIC" && (
                <Link
                  to="/dashboard"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Dashboard
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="
                  px-4 py-2
                  rounded-full
                  bg-red-500 text-white
                  font-semibold
                  hover:bg-red-600
                  transition
                "
              >
                Đăng xuất
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
