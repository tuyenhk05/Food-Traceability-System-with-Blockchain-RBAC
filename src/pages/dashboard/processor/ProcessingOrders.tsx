import React from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Truck, ArrowUpRight, Package, ChevronRight } from "lucide-react";

const ProcessingOrders = () => {
  const items = [
    { id: "LOT-101", name: "Nước ép táo" },
    { id: "LOT-102", name: "Sốt cà chua" },
    { id: "LOT-103", name: "Mứt dâu" },
    { id: "LOT-104", name: "Xoài sấy dẻo" },
    { id: "LOT-105", name: "Trà túi lọc" },
  ];

  const handleShip = (id: string) => {
    localStorage.setItem(`status_${id}`, "SHIPPED");
    alert(`🚚 Lô hàng ${id} đã xuất kho thành công!`);
    window.location.reload();
  };

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans text-slate-800">
      {/* Header thanh mảnh, không nghiêng */}
      <div className="flex items-center gap-4 border-b border-slate-200 pb-6 mb-8">
        <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-sm">
          <Truck size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 leading-none">
            Điều phối xuất kho
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 font-medium">
            Quản lý vận chuyển và bàn giao sản phẩm sau kiểm định.
          </p>
        </div>
      </div>

      <Card className="bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-8 py-4 px-8">Lô hàng</th>
                <th className="px-8 py-4">Sản phẩm</th>
                <th className="px-8 py-4">Trạng thái vận chuyển</th>
                <th className="px-8 py-4 text-right">Tác vụ xử lý</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {items.map((item) => {
                const status = localStorage.getItem(`status_${item.id}`);
                // Chỉ hiển thị hàng đã qua QC hoặc đã xuất
                if (!["QC_PASSED", "SHIPPED"].includes(status || ""))
                  return null;

                const isShipped = status === "SHIPPED";

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="px-8 py-5 font-semibold text-blue-600 text-sm">
                      {item.id}
                    </td>
                    <td className="px-8 py-5 font-medium text-slate-700 text-sm">
                      {item.name}
                    </td>
                    <td className="px-8 py-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                          isShipped
                            ? "bg-slate-100 text-slate-500"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${isShipped ? "bg-slate-400" : "bg-emerald-500"}`}
                        />
                        {isShipped ? "ĐÃ RỜI KHO" : "SẴN SÀNG XUẤT"}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      {status === "QC_PASSED" ? (
                        <Button
                          onClick={() => handleShip(item.id)}
                          className="bg-[#16A34A] text-white font-bold rounded-lg text-xs px-4 py-2 hover:bg-[15803D] transition-all shadow-sm flex items-center gap-2 ml-auto"
                        >
                          <ArrowUpRight size={14} /> Xuất kho ngay
                        </Button>
                      ) : (
                        <span className="text-xs font-semibold text-slate-300 flex items-center justify-end gap-1 cursor-default">
                          Hoàn tất bàn giao
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
              {/* Trường hợp trống */}
              {items.every(
                (item) =>
                  !["QC_PASSED", "SHIPPED"].includes(
                    localStorage.getItem(`status_${item.id}`) || "",
                  ),
              ) && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-8 py-20 text-center text-slate-400 font-medium text-sm"
                  >
                    Hiện chưa có lô hàng nào đủ điều kiện xuất kho.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProcessingOrders;
