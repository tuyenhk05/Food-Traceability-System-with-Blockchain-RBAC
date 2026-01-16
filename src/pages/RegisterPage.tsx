import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const stored = localStorage.getItem("foodtrace_users");
    const users = stored ? JSON.parse(stored) : [];

    if (users.some((u: any) => u.email === email)) {
      alert("Email đã tồn tại");
      return;
    }

    users.push({
      id: crypto.randomUUID(),
      name,
      email,
      password,
    });

    localStorage.setItem("foodtrace_users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-10">
      {/* LEFT – GREEN */}
      <div className="hidden lg:flex lg:col-span-3 bg-gradient-to-br from-green-600 to-emerald-500 text-white items-center px-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">FoodTrace</h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Tạo tài khoản để tham gia hệ thống <br />
            <span className="font-semibold">truy xuất nguồn gốc thực phẩm</span>
          </p>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="lg:col-span-7 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-2">Đăng ký</h2>
          <p className="text-gray-500 mb-6">Tạo tài khoản người dùng</p>

          <input
            className="w-full mb-3 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
            placeholder="Họ tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            onClick={handleRegister}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Đăng ký
          </button>

          <p className="text-center text-sm mt-4">
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-green-600 font-medium">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
