import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function BatchCreate() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mô phỏng gọi API / Giao dịch Blockchain
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard/crops');
    }, 1500);
  };
  return <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tạo lô hàng mới</h1>
        <p className="text-gray-500">
          Đăng ký lô cây trồng mới trên blockchain.
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Tên cây trồng
              </label>
              <Input placeholder="VD: Cà chua hữu cơ" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Giống / Loại
              </label>
              <Input placeholder="VD: Roma VF" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Ngày gieo trồng
              </label>
              <Input type="date" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Ngày thu hoạch dự kiến
              </label>
              <Input type="date" required />
            </div>

            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Vị trí trang trại / Mã lô đất
              </label>
              <Input placeholder="VD: Lô A-22, Cánh đồng Bắc" required />
            </div>

            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Ghi chú ban đầu
              </label>
              <textarea className="w-full min-h-[100px] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm" placeholder="Các chi tiết cụ thể về chu kỳ gieo trồng này..." />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Hủy
            </Button>
            <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
              {isSubmitting ? 'Đang ghi vào Blockchain...' : <>
                  <Save className="w-4 h-4 mr-2" />
                  Tạo lô hàng
                </>}
            </Button>
          </div>
        </form>
      </Card>
    </div>;
}