import React, { useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserRole } from "../types";
import {
  LayoutDashboard,
  Sprout,
  Package,
  Truck,
  Store,
  Settings,
  LogOut,
  Menu,
  X,
  Factory,
  ClipboardCheck,
  Search,
  Receipt,
  ShoppingBag,
  History,
  Navigation,
  MapPin,
} from "lucide-react";
import { Button } from "../components/ui/Button";

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const getNavItems = (role: UserRole): SidebarItem[] => {
  const common = [
    { name: "Tổng quan", href: "/dashboard", icon: LayoutDashboard },
  ];

  switch (role) {
    case "ADMIN":
      return [
        ...common,
        {
          name: "Quản lý người dùng",
          href: "/dashboard/users",
          icon: Settings,
        },
        {
          name: "Tất cả sản phẩm",
          href: "/dashboard/products",
          icon: ShoppingBag,
        },
        {
          name: "Theo dõi trạng thái",
          href: "/dashboard/tracking",
          icon: MapPin,
        },
        {
          name: "Lịch sử giao dịch",
          href: "/dashboard/transactions",
          icon: Receipt,
        },
      ];

    case "FARMER":
      return [
        ...common,
        { name: "Cây trồng của tôi", href: "/dashboard/crops", icon: Sprout },
        { name: "Tạo lô hàng", href: "/dashboard/batch/new", icon: Package },
        {
          name: "Lịch sử thu hoạch",
          href: "/dashboard/history",
          icon: History,
        },
      ];

    case "PROCESSOR":
      return [
        ...common,
        { name: "Đơn chế biến", href: "/dashboard/orders", icon: Factory },
        { name: "Hàng đợi", href: "/dashboard/queue", icon: Package },
        {
          name: "Lịch sử xuất hàng",
          href: "/dashboard/shipments-history",
          icon: History,
        },
      ];

    // 🟢 CHỈ THÊM ĐÚNG ĐOẠN NÀY
    case "INSPECTOR":
      return [
        ...common,
        {
          name: "Kiểm định",
          href: "/dashboard/quality-inspection",
          icon: ClipboardCheck,
        },
        {
          name: "Lịch sử kiểm định",
          href: "/dashboard/inspection-history",
          icon: History,
        },
      ];

    case "DISTRIBUTOR":
      return [
        ...common,
        {
          name: "Lô hàng vận chuyển",
          href: "/dashboard/shipments",
          icon: Truck,
        },
        {
          name: "Trạng thái giao hàng",
          href: "/dashboard/delivery",
          icon: Navigation,
        },
        {
          name: "Lịch sử giao hàng",
          href: "/dashboard/delivery-history",
          icon: History,
        },
      ];

    case "RETAILER":
      return [
        ...common,
        { name: "Kho hàng", href: "/dashboard/inventory", icon: Store },
        {
          name: "Điểm bán hàng",
          href: "/dashboard/sales",
          icon: LayoutDashboard,
        },
        {
          name: "Lịch sử nhập hàng",
          href: "/dashboard/import-history",
          icon: History,
        },
      ];

    default:
      return common;
  }
};

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!user) {
    navigate("/login");
    return null;
  }

  const navItems = getNavItems(user.role);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Overlay mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64
          bg-white border-r
          transform transition-transform duration-200
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <Sprout className="h-6 w-6" />
            <span>FoodTrace</span>
          </Link>
          <button
            className="ml-auto lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col h-[calc(100%-4rem)]">
          <div className="p-4 flex-1 overflow-auto">
            {/* User info */}
            <div className="mb-6 px-2">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Vai trò hiện tại
              </p>
              <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Logout */}
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:bg-red-50"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Đăng xuất
            </Button>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="h-16 bg-white border-b flex items-center px-4 lg:px-8">
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="ml-auto">
            <Link to="/trace">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Search className="mr-2 h-4 w-4" />
                Tra cứu công khai
              </Button>
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
