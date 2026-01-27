import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserRole } from "../types";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 1. DANH SÁCH ROLE: Đã thêm INSPECTOR và xóa WHOLESALER
  const demoRoles: Record<string, UserRole> = {
    "admin@demo.com": "ADMIN",
    "farmer@demo.com": "FARMER",
    "processor@demo.com": "PROCESSOR",
    "inspector@demo.com": "INSPECTOR",
    "distributor@demo.com": "DISTRIBUTOR",
    "retailer@demo.com": "RETAILER",
  };

  const handleLogin = () => {
    const currentEmail = email.trim(); // Tránh lỗi gõ thừa dấu cách

    // ===== LOGIC ĐĂNG NHẬP CHO TÀI KHOẢN DEMO =====
    if (demoRoles[currentEmail]) {
      if (password !== "123456") {
        alert("Mật khẩu demo là 123456");
        return;
      }

      const userRole = demoRoles[currentEmail];

      login({
        id: crypto.randomUUID(),
        name: currentEmail.split("@")[0],
        email: currentEmail,
        role: userRole,
      });

      // 2. ĐIỀU HƯỚNG: Kiểm định vào Tổng quan xịn, các bên khác vào Dashboard cũ
      if (userRole === "INSPECTOR") {
        navigate("/dashboard/inspector-overview"); // Dẫn vào trang Tổng quan đẹp
      } else {
        navigate("/dashboard");
      }
      return;
    }

    // ===== LOGIC ĐĂNG NHẬP CHO USER TỰ ĐĂNG KÝ =====
    const stored = localStorage.getItem("foodtrace_users");
    const users = stored ? JSON.parse(stored) : [];

    const found = users.find(
      (u: any) => u.email === currentEmail && u.password === password,
    );

    if (!found) {
      alert("Email hoặc mật khẩu không đúng");
      return;
    }

    login({
      id: found.id,
      name: found.name,
      email: found.email,
      role: "PUBLIC",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-10">
      {/* CỘT TRÁI – MÀU XANH GIỮ NGUYÊN (YÊU CẦU CỦA CHỊ) */}
      <div className="hidden lg:flex lg:col-span-3 bg-gradient-to-br from-green-600 to-emerald-500 text-white items-center px-10">
        <div>
          <h1 className="text-4xl font-bold mb-4 font-sans italic tracking-tighter">
            FoodTrace
          </h1>
          <p className="text-lg opacity-90 leading-relaxed font-sans">
            Nền tảng truy xuất nguồn gốc <br />
            <span className="font-semibold uppercase text-sm tracking-widest">
              Minh bạch – An toàn – Tin cậy
            </span>
          </p>
        </div>
      </div>

      {/* CỘT PHẢI – FORM ĐĂNG NHẬP */}
      <div className="lg:col-span-7 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-2 font-sans text-gray-800">
            Đăng nhập
          </h2>
          <p className="text-gray-500 mb-6 font-sans text-sm">
            Nhập thông tin để truy cập hệ thống quản trị
          </p>

          <input
            className="w-full mb-3 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-4 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 uppercase tracking-wide"
          >
            Đăng nhập
          </button>

          <p className="text-center text-sm mt-6 font-sans text-gray-400">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-green-600 font-bold hover:underline"
            >
              Đăng ký ngay
            </Link>
          </p>

          {/* DANH SÁCH TÀI KHOẢN (ĐÃ XÓA THU MUA, CẬP NHẬT KIỂM ĐỊNH) */}
          <div className="mt-8 text-[10px] text-gray-400 leading-relaxed font-sans border-t border-gray-100 pt-6">
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs tracking-tight">
              <p>admin@demo.com → Admin</p>
              <p>farmer@demo.com → Nông dân</p>
              <p>processor@demo.com → Chế biến</p>
              <p>inspector@demo.com → Kiểm định</p>
              <p>distributor@demo.com → Vận chuyển</p>
              <p>retailer@demo.com → Bán lẻ</p>
            </div>
            <p className="mt-3 text-center border-t pt-2 italic">
              Mật khẩu mặc định: <b>123456</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
