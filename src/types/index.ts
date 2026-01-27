export type UserRole =
  | "ADMIN"
  | "FARMER"
  | "PROCESSOR" // Nhà máy
  | "DISTRIBUTOR"
  | "RETAILER"
  | "PUBLIC"
  | "INSPECTOR"; // <--- Đã thêm "Cấp phép" cho Kiểm định ở đây

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type BatchStatus =
  | "PLANTED"
  | "HARVESTED"
  | "RECEIVED"
  | "PROCESSED"
  | "QC_PASSED" // Chị nên có thêm trạng thái này để biết hàng đã kiểm định xong
  | "SHIPPED"
  | "DELIVERED"
  | "SOLD";

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  category: string;
}

export interface Batch {
  id: string;
  productId: string;
  farmerId: string;
  quantity: number;
  unit: string;
  createdAt: string;
  status: BatchStatus;
  currentHolderId: string;
  qrCode: string;
}

export interface Transaction {
  id: string;
  batchId: string;
  fromUserId: string;
  toUserId: string;
  timestamp: string;
  action: string;
  location: string;
  notes?: string;
  metadata?: Record<string, any>;
}

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  actor: string;
  role: UserRole;
  status: BatchStatus;
  icon?: any;
}
