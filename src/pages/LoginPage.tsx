import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserRole } from "../types";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const demoRoles: Record<string, UserRole> = {
    "admin@demo.com": "ADMIN",
    "farmer@demo.com": "FARMER",
    "wholesaler@demo.com": "WHOLESALER",
    "processor@demo.com": "PROCESSOR",
    "distributor@demo.com": "DISTRIBUTOR",
    "retailer@demo.com": "RETAILER",
  };

  const handleLogin = () => {
    // ===== LOGIN ROLE =====
    if (demoRoles[email]) {
      if (password !== "123456") {
        alert("Mật khẩu demo là 123456");
        return;
      }

      login({
        id: crypto.randomUUID(),
        name: email.split("@")[0],
        email,
        role: demoRoles[email],
      });

      navigate("/dashboard");
      return;
    }

    // ===== LOGIN USER =====
    const stored = localStorage.getItem("foodtrace_users");
    const users = stored ? JSON.parse(stored) : [];

    const found = users.find(
      (u: any) => u.email === email && u.password === password
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
      {/* LEFT – GREEN */}
      <div className="hidden lg:flex lg:col-span-3 bg-gradient-to-br from-green-600 to-emerald-500 text-white items-center px-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">FoodTrace</h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Nền tảng truy xuất nguồn gốc <br />
            <span className="font-semibold">Minh bạch – An toàn – Tin cậy</span>
          </p>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="lg:col-span-7 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-2">Đăng nhập</h2>
          <p className="text-gray-500 mb-6">
            Nhập thông tin để truy cập hệ thống
          </p>

          <input
            className="w-full mb-3 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-4 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Đăng nhập
          </button>

          <p className="text-center text-sm mt-4">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-green-600 font-medium">
              Đăng ký ngay
            </Link>
          </p>

          <div className="mt-6 text-xs text-gray-400 leading-relaxed">
            <p>admin@demo.com → Admin</p>
            <p>farmer@demo.com → Nông dân</p>
            <p>wholesaler@demo.com → Thu mua</p>
            <p>processor@demo.com → Chế biến</p>
            <p>distributor@demo.com → Vận chuyển</p>
            <p>retailer@demo.com → Bán lẻ</p>
            <p className="mt-1">
              Mật khẩu: <b>123456</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
