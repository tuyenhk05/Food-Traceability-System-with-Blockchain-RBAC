import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import {
  Sprout,
  Truck,
  Factory,
  Store,
  CheckCircle2,
  MapPin,
  Calendar,
  Thermometer,
  ArrowLeft,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* =======================
   DATA – LẤY NGUYÊN TỪ Timeline.docx
======================= */
const TIMELINE = [
  {
    title: "Gieo trồng & Chăm sóc",
    icon: Sprout,
    date: "01/03/2024 08:00",
    description: "Gieo hạt giống F1, sử dụng phân bón hữu cơ mã PB-05.",
    actor: "Nguyễn Văn A (FAR-001)",
    location: "Nông trại Xanh Đà Lạt (Khu A-12)",
    blockchain: {
      block: 10234,
      txHash: "0x7d3...a1b",
    },
  },
  {
    title: "Thu hoạch",
    icon: CheckCircle2,
    date: "15/06/2024 06:30",
    description:
      "Thu hoạch 500kg cà chua. Chất lượng ban đầu hạng A (Độ chín 90%).",
    actor: "Nông trại Xanh Đà Lạt",
    location: "Đà Lạt, Lâm Đồng",
    blockchain: {
      block: 10240,
      txHash: "0x8e4...c2d",
    },
  },
  {
    title: "Vận chuyển đợt 1",
    icon: Truck,
    date: "15/06/2024 08:00 – 10:00",
    description:
      "Vận chuyển từ nông trại đến nhà máy chế biến bằng xe 49C-123.45.",
    actor: "Vận tải Nhanh",
    location: "Nông trại → Nhà máy Chế biến",
    temperature: "25°C",
    blockchain: {
      block: 10245,
      txHash: "0x9f5...d3e",
    },
  },
  {
    title: "Chế biến & Đóng gói",
    icon: Factory,
    date: "16/06/2024 09:00",
    description:
      "Rửa ozon, phân loại, đóng hộp 500g. Tạo 200 hộp thành phẩm từ 100kg nguyên liệu.",
    actor: "Nhà máy Chế biến",
    location: "Nhà máy Thực phẩm Sạch",
    blockchain: {
      block: 10255,
      txHash: "0xa16...e4f",
    },
  },
  {
    title: "Kiểm định Chất lượng (QC)",
    icon: CheckCircle2,
    date: "16/06/2024 14:00",
    description: "Kết quả: ĐẠT (PASS) – Không dư lượng thuốc BVTV. Đã ký số.",
    actor: "Trung tâm QUATEST 3",
    location: "Việt Nam",
    blockchain: {
      block: 10260,
      txHash: "0xb27...f5g",
    },
  },
  {
    title: "Nhập kho Phân phối",
    icon: Store,
    date: "17/06/2024 08:00",
    description: "Nhập kho lạnh, chờ phân luồng về hệ thống siêu thị.",
    actor: "Kho Tổng Miền Nam",
    location: "Bình Dương",
    blockchain: {
      block: 10275,
      txHash: "0xc38...h6i",
    },
  },
  {
    title: "Tại điểm bán (Siêu thị)",
    icon: Store,
    date: "18/06/2024 07:00",
    description:
      "Nhận hàng, kiểm tra niêm phong, lên kệ. Quản lý kho Lê Thị B ký nhận.",
    actor: "Siêu thị Fresh Mart",
    location: "Quận 1, TP.HCM",
    blockchain: {
      block: 10280,
      txHash: "0xd49...j7k",
    },
  },
];

export function TraceResultPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6 pl-0">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại Trang chủ
          </Button>
        </Link>

        {/* HEADER */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">
              Cà chua Hữu cơ – Lô {id || "TOM-2024-XA1"}
            </CardTitle>
            <CardDescription>✅ Đã xác thực trên Blockchain</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Nguồn gốc</p>
                <p className="font-medium">Đà Lạt, Lâm Đồng</p>
              </div>
              <div>
                <p className="text-muted-foreground">NSX</p>
                <p className="font-medium">16/06/2024</p>
              </div>
              <div>
                <p className="text-muted-foreground">HSD</p>
                <p className="font-medium">25/06/2024</p>
              </div>
              <div>
                <p className="text-muted-foreground">Smart Contract</p>
                <p className="font-medium text-green-600">0x12a...9f3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
          {TIMELINE.map((e, i) => (
            <TimelineItem key={i} e={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =======================
   TIMELINE ITEM
======================= */
function TimelineItem({ e }: any) {
  const [open, setOpen] = useState(false);
  const Icon = e.icon;

  return (
    <div className="relative pl-8">
      <div className="absolute -left-[9px] top-1 bg-white p-1 rounded-full border-2 border-primary">
        <Icon className="h-4 w-4 text-primary" />
      </div>

      <div className="flex justify-between gap-4">
        {/* LEFT */}
        <div>
          <h3 className="text-lg font-semibold">{e.title}</h3>
          <p className="text-gray-600">{e.description}</p>

          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {e.actor}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {e.location}
            </span>
            {e.temperature && (
              <span className="flex items-center gap-1 text-blue-600">
                <Thermometer className="h-3 w-3" />
                {e.temperature}
              </span>
            )}
          </div>

          {/* Blockchain */}
          <div className="mt-2 text-xs">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              Blockchain data
            </button>

            {open && (
              <div className="ml-4 mt-2 text-gray-500 space-y-1">
                <div>Block #: {e.blockchain.block}</div>
                <div>TxHash: {e.blockchain.txHash}</div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT DATE */}
        <div className="flex items-center text-sm text-gray-500 whitespace-nowrap">
          <Calendar className="h-4 w-4 mr-1" />
          {e.date}
        </div>
      </div>
    </div>
  );
}
