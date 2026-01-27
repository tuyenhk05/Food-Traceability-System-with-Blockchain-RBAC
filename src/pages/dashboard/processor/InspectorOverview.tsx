import React from "react";
import { Card } from "../../../components/ui/Card";
import {
  ShieldCheck,
  Clock,
  CheckCircle,
  AlertTriangle,
  Database,
  Activity,
  Fingerprint,
  ChevronRight,
  FileText,
} from "lucide-react";

const InspectorOverview = () => {
  const ids = ["LOT-101", "LOT-102", "LOT-103", "LOT-104", "LOT-105"];

  const getStatusCount = (status: string) =>
    ids.filter((id) => localStorage.getItem(`status_${id}`) === status).length;

  const pending = getStatusCount("PROCESSED");
  const signed = ids.filter((id) =>
    ["QC_PASSED", "SHIPPED"].includes(
      localStorage.getItem(`status_${id}`) || "",
    ),
  ).length;

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans text-slate-800">
      {/* Header thanh mảnh chuẩn Farmer */}
      <div className="flex justify-between items-start mb-8 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 leading-none">
            Bảng điều khiển Kiểm định
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Xác thực chất lượng sản phẩm và lưu trữ Blockchain Ledger.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
          <Activity size={16} className="text-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Hệ thống: Hoạt động
          </span>
        </div>
      </div>

      {/* Thẻ thống kê - Layout bo góc và chữ nhẹ nhàng */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Database size={20} />}
          label="Tổng lô hàng"
          value="05"
          color="blue"
        />
        <StatCard
          icon={<Clock size={20} />}
          label="Đang chờ duyệt"
          value={pending.toString()}
          color="orange"
          highlight={pending > 0}
        />
        <StatCard
          icon={<CheckCircle size={20} />}
          label="Đã ký số"
          value={signed.toString()}
          color="emerald"
        />
        <StatCard
          icon={<AlertTriangle size={20} />}
          label="Cảnh báo rủi ro"
          value="0"
          color="slate"
        />
      </div>

      {/* Bảng nhật ký vận hành */}
      <Card className="bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Fingerprint className="text-blue-500" size={20} />
            <h2 className="text-lg font-bold text-slate-900">
              Nhật ký xác thực hệ thống
            </h2>
          </div>
          <button className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:underline">
            Xem tất cả <ChevronRight size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-8 py-4">Mã lô sản xuất</th>
                <th className="px-8 py-4">Khu vực yêu cầu</th>
                <th className="px-8 py-4 text-center">Trạng thái</th>
                <th className="px-8 py-4 text-right">Mã Hash (On-chain)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {ids.map((id) => {
                const status = localStorage.getItem(`status_${id}`);
                const qcData = JSON.parse(
                  localStorage.getItem(`qc_final_${id}`) || "{}",
                );
                return (
                  <tr
                    key={id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="px-8 py-5 text-sm font-semibold text-slate-700">
                      {id}
                    </td>
                    <td className="px-8 py-5 text-sm font-medium text-slate-400 uppercase tracking-tight">
                      Factory Zone A-01
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                          status === "SHIPPED"
                            ? "bg-blue-50 text-blue-600"
                            : status === "QC_PASSED"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {status === "SHIPPED"
                          ? "Đã xuất kho"
                          : status === "QC_PASSED"
                            ? "Đã phê duyệt"
                            : "Chờ kiểm định"}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-mono text-xs text-blue-500/70">
                      {qcData.hash || "0x_Pending_..."}
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

const StatCard = ({ icon, label, value, color, highlight }: any) => {
  const colors: any = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    emerald: "bg-emerald-50 text-emerald-500",
    slate: "bg-slate-50 text-slate-500",
  };
  return (
    <Card
      className={`p-6 bg-white border border-slate-100 shadow-sm rounded-xl space-y-4 transition-all ${
        highlight ? "border-orange-200 ring-1 ring-orange-50" : ""
      }`}
    >
      <div className={`p-3 w-fit rounded-lg ${colors[color]}`}>{icon}</div>
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-3xl font-bold text-slate-900 mt-1">{value}</p>
      </div>
    </Card>
  );
};

export default InspectorOverview;
