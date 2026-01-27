import React from "react";
import { Card } from "../../../components/ui/Card";
import {
  Search,
  Filter,
  Download,
  Eye,
  Hash,
  FileText,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const InspectionHistory = () => {
  const ids = ["LOT-101", "LOT-102", "LOT-103", "LOT-104", "LOT-105"];

  // Logic lấy dữ liệu kiểm định thực tế từ hệ thống của chị
  const logs = ids
    .map((id) => {
      const data = localStorage.getItem(`qc_final_${id}`);
      return data ? JSON.parse(data) : null;
    })
    .filter((item) => item !== null);

  // Thẻ thống kê phía trên (giống hệt image_4ad0b6.png)
  const stats = [
    {
      label: "Tổng kiểm định",
      value: logs.length,
      icon: <FileText size={20} />,
      color: "blue",
    },
    {
      label: "Đã đạt chuẩn",
      value: logs.filter((l: any) => l.status.includes("ĐẠT")).length,
      icon: <CheckCircle2 size={20} />,
      color: "emerald",
    },
    {
      label: "Không đạt chuẩn",
      value: logs.filter((l: any) => !l.status.includes("ĐẠT")).length,
      icon: <XCircle size={20} />,
      color: "orange",
    },
    {
      label: "Hiệu suất kiểm",
      value: "98.5%",
      icon: <TrendingUp size={20} />,
      color: "purple",
    },
  ];

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans text-slate-800">
      {/* Tiêu đề & Nút báo cáo */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Lịch sử Kiểm định
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Theo dõi tất cả các lô hàng đã qua thẩm định chất lượng.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
          <Download size={16} /> Xuất báo cáo
        </button>
      </div>

      {/* Grid thẻ thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="p-6 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center gap-4"
          >
            <div
              className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-500`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Khu vực Tìm kiếm & Lọc (Demo giống ảnh) */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Tìm kiếm mã kiểm định, sản phẩm..."
            className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <select className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none">
          <option>Tất cả trạng thái</option>
          <option>Đạt chuẩn</option>
          <option>Không đạt</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
          <Filter size={16} /> Lọc
        </button>
      </div>

      {/* Bảng danh sách - Copy chuẩn cấu trúc table ảnh 4ad0b6 */}
      <Card className="bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-8 py-5">Mã kiểm định</th>
                <th className="px-8 py-5">Sản phẩm</th>
                <th className="px-8 py-5 text-center">Ngày kiểm</th>
                <th className="px-8 py-5">Mã vận đơn (Hash)</th>
                <th className="px-8 py-5 text-center">Trạng thái</th>
                <th className="px-8 py-5 text-right font-bold text-slate-400">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {logs.map((log: any) => {
                const isPassed = log.status.includes("ĐẠT");
                return (
                  <tr
                    key={log.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <span className="font-bold text-slate-700 uppercase tracking-tight">
                        QC-{log.id.split("-")[1]}-2024
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">
                          Lô hàng {log.id}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium uppercase mt-0.5">
                          Xác thực: Inspector A
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-slate-600 font-medium">
                      {new Date(log.timestamp).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-blue-500 transition-colors">
                        <Hash size={12} />
                        <span>{log.hash.substring(0, 15)}...</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                          isPassed
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                            : "bg-red-50 text-red-600 border border-red-100"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${isPassed ? "bg-emerald-500" : "bg-red-500"}`}
                        />
                        {log.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right font-bold">
                      <button className="p-2 text-slate-300 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all ml-auto block">
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Thông báo nếu không có dữ liệu */}
        {logs.length === 0 && (
          <div className="py-24 text-center">
            <ShieldCheck size={48} className="mx-auto text-slate-100 mb-4" />
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Chưa có bản ghi kiểm định chính thức
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default InspectionHistory;
