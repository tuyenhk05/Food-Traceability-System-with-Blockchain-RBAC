import React, { useState, useEffect } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import {
  Beaker,
  Fingerprint,
  Activity,
  ShieldCheck,
  Search,
  Cpu,
  ShieldAlert,
  ChevronRight,
  FileText,
} from "lucide-react";

export default function QualityInspection() {
  const [selectedLot, setSelectedLot] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<any>(null);

  const ids = ["LOT-101", "LOT-102", "LOT-103", "LOT-104", "LOT-105"];
  const queue = ids.filter(
    (id) => localStorage.getItem(`status_${id}`) === "PROCESSED",
  );

  useEffect(() => {
    if (selectedLot) {
      setIsAnalyzing(true);
      setReport(null);
      setTimeout(() => {
        const isFail = Math.random() > 0.7;
        setReport({
          micro: isFail ? 420 : 12,
          chem: isFail ? 0.08 : 0.0,
          moist: isFail ? 19.5 : 12.5,
          isPass: !isFail,
        });
        setIsAnalyzing(false);
      }, 800);
    }
  }, [selectedLot]);

  const handleAction = (id: string, action: "PASS" | "REJECT") => {
    localStorage.setItem(
      `status_${id}`,
      action === "PASS" ? "QC_PASSED" : "REJECTED",
    );
    localStorage.setItem(
      `qc_final_${id}`,
      JSON.stringify({
        id,
        status: action === "PASS" ? "ĐẠT CHUẨN" : "BỊ HỦY",
        hash:
          action === "PASS"
            ? `0x${Math.random().toString(16).slice(2, 10).toUpperCase()}`
            : "REVOKED",
        timestamp: new Date().toISOString(),
      }),
    );
    setSelectedLot(null);
  };

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans text-slate-800">
      {/* Header thanh mảnh */}
      <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Trung tâm Kiểm định Lab
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Hệ thống thẩm định chất lượng sản phẩm chuẩn ISO.
          </p>
        </div>
        <div className="flex gap-8">
          <HeaderStat
            label="Mẫu đang chờ"
            value={queue.length}
            icon={<Cpu size={18} />}
          />
          <HeaderStat
            label="Độ tin cậy"
            value="100%"
            icon={<ShieldCheck size={18} className="text-emerald-500" />}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Cột trái: Danh sách mẫu thử */}
        <div className="col-span-4 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
            Hàng đợi phân tích
          </h3>
          {queue.map((id) => (
            <div
              key={id}
              onClick={() => !isAnalyzing && setSelectedLot(id)}
              className={`p-4 rounded-xl cursor-pointer transition-all border flex justify-between items-center ${
                selectedLot === id
                  ? "bg-[#111827] border-[#111827] text-white shadow-md"
                  : "bg-white border-slate-200 hover:border-emerald-500/50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3">
                <Beaker
                  size={18}
                  className={
                    selectedLot === id ? "text-emerald-400" : "text-slate-400"
                  }
                />
                <span className="font-semibold text-sm">{id}</span>
              </div>
              <ChevronRight
                size={16}
                className={selectedLot === id ? "opacity-100" : "opacity-20"}
              />
            </div>
          ))}
          {queue.length === 0 && (
            <div className="py-16 border-2 border-dashed border-slate-200 rounded-2xl text-center">
              <p className="text-xs font-medium text-slate-400">
                Không có mẫu thử nào đang chờ
              </p>
            </div>
          )}
        </div>

        {/* Cột phải: Chi tiết phân tích */}
        <div className="col-span-8">
          {selectedLot ? (
            <Card className="p-8 bg-white border border-slate-200 shadow-sm rounded-2xl">
              {isAnalyzing ? (
                <div className="py-24 text-center space-y-4">
                  <Activity
                    size={32}
                    className="mx-auto text-emerald-500 animate-spin"
                  />
                  <p className="text-sm font-medium text-slate-500">
                    Đang trích xuất dữ liệu sinh hóa...
                  </p>
                </div>
              ) : (
                report && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <Fingerprint size={24} className="text-slate-600" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">
                            {selectedLot}
                          </h2>
                          <p className="text-xs text-slate-400 font-medium">
                            Tiêu chuẩn thẩm định: FDA-ISO 22000
                          </p>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full font-bold text-[11px] uppercase border ${
                          report.isPass
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                            : "bg-red-50 text-red-600 border-red-100"
                        }`}
                      >
                        {report.isPass ? "Đạt chứng nhận" : "Không đạt chuẩn"}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <StatRow
                        label="Vi sinh (Microbial)"
                        value={report.micro}
                        unit="CFU/g"
                        limit="100"
                        isBad={report.micro > 100}
                      />
                      <StatRow
                        label="Hóa chất (Chemical)"
                        value={report.chem}
                        unit="%"
                        limit="0.05"
                        isBad={report.chem > 0.05}
                      />
                      <StatRow
                        label="Độ ẩm (Moisture)"
                        value={report.moist}
                        unit="%"
                        limit="15"
                        isBad={report.moist > 15}
                      />
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-slate-50">
                      <Button
                        onClick={() => handleAction(selectedLot, "PASS")}
                        disabled={!report.isPass}
                        className={`flex-[2] py-6 rounded-lg font-bold text-sm transition-all ${
                          report.isPass
                            ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        Ký duyệt và Phát hành
                      </Button>
                      <Button
                        onClick={() => handleAction(selectedLot, "REJECT")}
                        className="flex-1 py-6 rounded-lg font-bold text-sm border border-red-200 text-red-600 hover:bg-red-50"
                      >
                        Hủy
                      </Button>
                    </div>
                  </div>
                )
              )}
            </Card>
          ) : (
            <div className="h-[500px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 space-y-4">
              <ShieldAlert size={40} className="opacity-20" />
              <p className="text-sm font-medium">
                Chọn một lô hàng để bắt đầu thẩm định
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const StatRow = ({ label, value, unit, limit, isBad }: any) => (
  <div
    className={`p-5 rounded-xl border flex items-center justify-between transition-colors ${
      isBad ? "bg-red-50/50 border-red-100" : "bg-slate-50/50 border-slate-100"
    }`}
  >
    <div>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">
        {label}
      </p>
      <p className="text-[11px] text-slate-400 mt-1 italic font-medium">
        Ngưỡng cho phép: {limit} {unit}
      </p>
    </div>
    <div className="flex items-baseline gap-1">
      <span
        className={`text-2xl font-bold ${isBad ? "text-red-600" : "text-slate-900"}`}
      >
        {value}
      </span>
      <span className="text-xs font-semibold text-slate-400">{unit}</span>
    </div>
  </div>
);

const HeaderStat = ({ label, value, icon }: any) => (
  <div className="flex items-center gap-3">
    <div className="text-slate-400 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">
        {label}
      </p>
      <p className="text-lg font-bold text-slate-900 leading-none">{value}</p>
    </div>
  </div>
);
