import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  Package,
  Thermometer,
  CheckCircle2,
  Edit,
  Trash2,
  QrCode,
  Clock,
  ShieldCheck,
  Truck,
  Store,
} from "lucide-react";

export function BatchDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState("Đang vận chuyển");

  // Dữ liệu lô hàng
  const batch = {
    id: id || "LO-2024-025",
    product: id === "LO-2024-025" ? "Sốt cà chua đóng lọ" : "Táo Hữu cơ",
    variety: "Hữu cơ VietGAP",
    farmer: "Hợp tác xã Nông nghiệp Số 1",
    location: "Khu công nghiệp Thực phẩm sạch, Long An",
    plantedDate: "10/01/2024",
    harvestDate: "20/05/2024",
    quantity: "500 lọ",
    quality: "Hạng Xuất Khẩu",
    temperature: "18°C - 25°C",
    notes: "Sản phẩm đã qua kiểm duyệt vi sinh. Đóng gói hút chân không.",
    certifications: ["VietGAP", "HACCP", "Blockchain Verified"],
    timeline: [
      {
        date: "10/01/2024",
        event: "Khởi tạo lô hàng & Gieo trồng",
        actor: "Nhà sản xuất",
      },
      {
        date: "20/05/2024",
        event: "Thu hoạch & Chế biến",
        actor: "Nhà máy đóng gói",
      },
      {
        date: "21/05/2024",
        event: "Xuất kho vận chuyển",
        actor: "Đơn vị Logistics",
      },
    ],
  };

  useEffect(() => {
    const savedStatus = localStorage.getItem(`status_${batch.id}`);
    if (savedStatus) {
      setCurrentStatus(savedStatus);
    }
  }, [batch.id]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-8 bg-slate-50/50 min-h-screen font-sans">
      {/* Nút quay lại & Thao tác nhanh */}
      <div className="flex items-center justify-between bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="hover:bg-slate-100 rounded-2xl"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-2xl border-slate-200">
            <Edit className="mr-2 h-4 w-4" /> Sửa dữ liệu
          </Button>
          <Button
            variant="outline"
            className="text-red-500 border-red-100 hover:bg-red-50 rounded-2xl"
          >
            <Trash2 className="mr-2 h-4 w-4" /> Xóa
          </Button>
        </div>
      </div>

      {/* Header Profile */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-[2.5rem] p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/30">
                {batch.id}
              </span>
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                <ShieldCheck size={14} /> Blockchain Verified
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              {batch.product}
            </h1>
            <div className="flex flex-wrap gap-4 text-slate-300 text-sm italic">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {batch.location}
              </span>
              <span className="flex items-center gap-1">
                <User size={14} /> {batch.farmer}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 text-right">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Trạng thái hiện tại
            </p>
            <div
              className={`px-6 py-3 rounded-2xl text-lg font-black shadow-lg border-2 ${
                currentStatus === "Đã nhập kho"
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                  : "bg-amber-500/10 border-amber-500 text-amber-400"
              }`}
            >
              {currentStatus.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="rounded-[2rem] border-none shadow-sm overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    label: "Số lượng",
                    value: batch.quantity,
                    icon: <Package className="text-blue-500" />,
                  },
                  {
                    label: "Ngày gieo",
                    value: batch.plantedDate,
                    icon: <Calendar className="text-orange-500" />,
                  },
                  {
                    label: "Chất lượng",
                    value: batch.quality,
                    icon: <ShieldCheck className="text-emerald-500" />,
                  },
                  {
                    label: "Nhiệt độ",
                    value: batch.temperature,
                    icon: <Thermometer className="text-red-500" />,
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      {item.icon} {item.label}
                    </div>
                    <p className="text-lg font-bold text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="px-6 py-8 border-t border-slate-50 bg-slate-50/30">
                <h4 className="font-bold text-slate-900 mb-2">
                  Ghi chú nguồn gốc:
                </h4>
                <p className="text-slate-600 leading-relaxed italic">
                  "{batch.notes}"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-none shadow-sm bg-white p-8">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Clock className="text-indigo-600" /> Hành trình sản phẩm
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-slate-200 before:to-transparent">
                {batch.timeline.map((event, idx) => (
                  <div
                    key={idx}
                    className="relative flex items-center gap-6 group"
                  >
                    <div className="absolute left-0 w-10 h-10 bg-indigo-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                      <CheckCircle2 size={18} />
                    </div>
                    <div className="ml-12">
                      <p className="text-sm font-bold text-slate-900">
                        {event.event}
                      </p>
                      <p className="text-xs text-slate-500">
                        {event.actor} • {event.date}
                      </p>
                    </div>
                  </div>
                ))}

                {currentStatus === "Đã nhập kho" && (
                  <div className="relative flex items-center gap-6 group">
                    <div className="absolute left-0 w-10 h-10 bg-emerald-500 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                      <Store size={18} />
                    </div>
                    <div className="ml-12 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 border-dashed">
                      <p className="text-sm font-bold text-emerald-700 font-mono tracking-tighter">
                        ĐÃ TIẾP NHẬN TẠI CỬA HÀNG
                      </p>
                      <p className="text-xs text-emerald-600/70 uppercase font-black mt-1">
                        Sẵn sàng bán ra (POS Ready)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="rounded-[2rem] border-none shadow-lg bg-white p-8 overflow-hidden relative group">
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
              Mã QR truy xuất
            </h3>
            <div className="bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4">
              {currentStatus === "Đã nhập kho" ? (
                <>
                  <div className="p-4 bg-white rounded-2xl shadow-xl">
                    <QrCode size={140} className="text-slate-900" />
                  </div>
                  <Button className="w-full bg-slate-900 text-white rounded-xl py-4 font-bold">
                    Tải về mã QR
                  </Button>
                </>
              ) : (
                <div className="text-center py-10 opacity-30">
                  <Truck size={48} className="mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase italic text-center">
                    Đang vận chuyển...
                  </p>
                </div>
              )}
            </div>
          </Card>

          <Card className="rounded-[2rem] border-none shadow-sm bg-indigo-600 p-8 text-white">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <ShieldCheck size={18} /> Chứng chỉ lô hàng
            </h3>
            <div className="space-y-3">
              {batch.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/10"
                >
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span className="text-sm font-bold">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
