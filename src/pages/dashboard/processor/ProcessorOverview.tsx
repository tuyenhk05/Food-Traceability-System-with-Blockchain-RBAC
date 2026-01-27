import React from "react";
import { Card } from "../../../components/ui/Card";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Database,
  RotateCcw,
  Cpu,
  CheckCircle,
  ChevronRight,
  Plus,
} from "lucide-react";

const ProcessorOverview = () => {
  const navigate = useNavigate();
  const ids = ["LOT-101", "LOT-102", "LOT-103", "LOT-104", "LOT-105"];

  const getCount = (status: string) =>
    ids.filter((id) => localStorage.getItem(`status_${id}`) === status).length;

  const handleResetSystem = () => {
    if (confirm("Reset toàn bộ hệ thống để bắt đầu Demo mới?")) {
      ids.forEach((id) => {
        localStorage.removeItem(`status_${id}`);
        localStorage.removeItem(`qc_final_${id}`);
      });
      window.location.reload();
    }
  };

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans text-slate-800">
      {/* Header chuẩn ảnh Farmer */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Quản trị chế biến
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Giám sát dây chuyền và quy trình sản xuất sản phẩm.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleResetSystem}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-500 rounded-lg text-sm font-medium hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>

      {/* Stats Cards - Layout bo góc và chữ thanh mảnh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: "Chờ nấu",
            val: getCount(""),
            icon: <Cpu className="text-blue-500" />,
          },
          {
            label: "Chờ kiểm định",
            val: getCount("PROCESSED"),
            icon: <Activity className="text-orange-500" />,
          },
          {
            label: "Đã hoàn tất",
            val: getCount("QC_PASSED") + getCount("SHIPPED"),
            icon: <CheckCircle className="text-emerald-500" />,
          },
        ].map((stat, i) => (
          <Card
            key={i}
            className="p-6 border border-slate-100 shadow-sm flex items-center gap-5 rounded-xl bg-white"
          >
            <div className="p-3.5 rounded-full bg-slate-50">{stat.icon}</div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 leading-none mt-1">
                {stat.val}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Table Section - Đúng font và padding của Nông dân */}
      <Card className="border border-slate-100 shadow-sm rounded-xl overflow-hidden bg-white text-slate-800">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Database size={18} className="text-slate-400" />
            <h2 className="text-lg font-bold text-slate-900">
              Nhật ký vận hành
            </h2>
          </div>
          <button
            onClick={() => navigate("/dashboard/queue")}
            className="text-emerald-600 text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            Xem dây chuyền <ChevronRight size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 font-sans">
              <tr>
                <th className="px-8 py-4">Mã lô sản xuất</th>
                <th className="px-8 py-4">Sản phẩm</th>
                <th className="px-8 py-4">Trạng thái hiện tại</th>
                <th className="px-8 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {ids.map((id) => {
                const status =
                  localStorage.getItem(`status_${id}`) || "ĐANG CHỜ";
                const isProcessed = status === "PROCESSED";
                const isWaiting = status === "ĐANG CHỜ";

                return (
                  <tr
                    key={id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-8 py-5 text-sm font-semibold text-slate-700">
                      {id}
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-600 font-medium">
                      Thành phẩm {id.split("-")[1]}
                    </td>
                    <td className="px-8 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                          isProcessed
                            ? "bg-orange-50 text-orange-600"
                            : isWaiting
                              ? "bg-slate-100 text-slate-500"
                              : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProcessorOverview;
