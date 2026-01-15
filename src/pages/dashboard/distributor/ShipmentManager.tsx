import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Truck, MapPin, Thermometer, CheckCircle } from 'lucide-react';
export function ShipmentManager() {
  const [activeShipments, setActiveShipments] = useState([{
    id: 'SHIP-8821',
    batch: 'LO-2024-005',
    status: 'Đang vận chuyển',
    location: 'QL1A, Km 45',
    temp: '4.2°C',
    dest: 'Siêu thị Fresh Mart'
  }, {
    id: 'SHIP-8822',
    batch: 'LO-2024-006',
    status: 'Đang xếp hàng',
    location: 'Kho A',
    temp: '---',
    dest: 'Cửa hàng Organic'
  }]);
  const handleUpdateStatus = (id: string, newStatus: string) => {
    // In a real app, this would call the API/Blockchain
    setActiveShipments(prev => prev.map(s => s.id === id ? {
      ...s,
      status: newStatus
    } : s));
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý Vận chuyển</h1>
        <Button variant="outline">Làm mới dữ liệu</Button>
      </div>

      <div className="grid gap-6">
        {activeShipments.map(shipment => <Card key={shipment.id} className="p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-lg">{shipment.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${shipment.status === 'Đã giao hàng' ? 'bg-green-100 text-green-700' : shipment.status === 'Đang vận chuyển' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                    {shipment.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Chở: {shipment.batch} • Đến: {shipment.dest}
                </p>
              </div>

              <div className="flex gap-2">
                {shipment.status !== 'Đã giao hàng' && <>
                    <Button size="sm" variant="outline" onClick={() => handleUpdateStatus(shipment.id, 'Đang vận chuyển')} disabled={shipment.status === 'Đang vận chuyển'}>
                      Bắt đầu đi
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleUpdateStatus(shipment.id, 'Đã giao hàng')}>
                      Xác nhận giao hàng
                    </Button>
                  </>}
              </div>
            </div>

            {/* Update Controls */}
            {shipment.status !== 'Đã giao hàng' && <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Cập nhật Vị trí
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder="Vị trí hiện tại..." defaultValue={shipment.location} />
                    <Button size="sm" variant="secondary">
                      Cập nhật
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Thermometer className="h-3 w-3" /> Ghi nhiệt độ
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder="Nhiệt độ (°C)" defaultValue={shipment.temp} className="w-32" />
                    <Button size="sm" variant="secondary">
                      Ghi
                    </Button>
                  </div>
                </div>
              </div>}
          </Card>)}
      </div>
    </div>;
}