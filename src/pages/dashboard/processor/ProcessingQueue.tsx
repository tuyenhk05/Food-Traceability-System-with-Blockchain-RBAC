import React, { useState, useEffect } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Loader2, CheckCircle2, PlayCircle } from "lucide-react";

const ProcessingQueue = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const items = [
    { id: "LOT-101", target: "Nước ép táo" },
    { id: "LOT-102", target: "Sốt cà chua" },
    { id: "LOT-103", target: "Mứt dâu" },
    { id: "LOT-104", target: "Xoài sấy dẻo" },
    { id: "LOT-105", target: "Trà túi lọc" },
  ];

  useEffect(() => {
    if (activeId) {
      const timer = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(timer);
            localStorage.setItem(`status_${activeId}`, "PROCESSED");
            setActiveId(null);
            return 100;
          }
          return p + 25;
        });
      }, 500);
      return () => clearInterval(timer);
    }
  }, [activeId]);

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans">
      {/* Header thanh mảnh chuẩn Farmer */}
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">
          Dây chuyền Chế biến
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Vận hành máy móc và theo dõi tiến độ sản xuất.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const status = localStorage.getItem(`status_${item.id}`);
          const isDone =
            status === "PROCESSED" ||
            status === "QC_PASSED" ||
            status === "SHIPPED";

          return (
            <Card
              key={item.id}
              className={`p-6 rounded-xl bg-white border border-slate-100 shadow-sm transition-all ${
                activeId === item.id ? "ring-1 ring-blue-500" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                    {item.id}
                  </p>
                  <h3 className="text-lg font-bold text-slate-800 mt-1">
                    {item.target}
                  </h3>
                </div>
                {isDone && (
                  <CheckCircle2 size={20} className="text-emerald-500" />
                )}
              </div>

              {activeId === item.id ? (
                <div className="space-y-3 py-2">
                  <div className="flex justify-between text-xs font-semibold text-blue-600">
                    <span className="flex items-center gap-1.5">
                      <Loader2 size={14} className="animate-spin" /> Đang xử
                      lý...
                    </span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <Button
                    disabled={isDone}
                    onClick={() => {
                      setActiveId(item.id);
                      setProgress(0);
                    }}
                    className={`w-full py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                      isDone
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-none cursor-default"
                        : "bg-[#16A34A] text-white hover:bg-[#15803D] shadow-sm"
                    }`}
                  >
                    {isDone ? (
                      <>Hoàn tất chế biến</>
                    ) : (
                      <>
                        <PlayCircle size={18} /> Kích hoạt máy
                      </>
                    )}
                  </Button>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessingQueue;
