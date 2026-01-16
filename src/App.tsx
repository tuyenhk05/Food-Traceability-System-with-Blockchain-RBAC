import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { DashboardLayout } from "./layouts/DashboardLayout";

// Public pages
import { HomePage } from "./pages/public/Home";
import { TraceResultPage } from "./pages/public/TraceResult";
import { NewsPage } from "./pages/public/News";
import { AboutPage } from "./pages/public/About";
import { ContactPage } from "./pages/public/Contact";

// Auth pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Dashboard pages
import { AdminOverview } from "./pages/dashboard/admin/AdminOverview";
import { UserManagement } from "./pages/dashboard/admin/UserManagement";
import { AllProducts } from "./pages/dashboard/admin/AllProducts";
import { TransactionHistory } from "./pages/dashboard/admin/TransactionHistory";
import { ProductTracking } from "./pages/dashboard/admin/ProductTracking";

import { FarmerOverview } from "./pages/dashboard/farmer/FarmerOverview";
import { BatchCreate } from "./pages/dashboard/farmer/BatchCreate";
import { HarvestManager } from "./pages/dashboard/farmer/HarvestManager";
import { HarvestHistory } from "./pages/dashboard/farmer/HarvestHistory";

import { WholesalerOverview } from "./pages/dashboard/wholesaler/WholesalerOverview";
import { IncomingGoods } from "./pages/dashboard/wholesaler/IncomingGoods";
import { PurchaseHistory } from "./pages/dashboard/wholesaler/PurchaseHistory";
import { QualityInspection } from "./pages/dashboard/wholesaler/QualityInspection";

import { ProcessorOverview } from "./pages/dashboard/processor/ProcessorOverview";
import { ProcessingQueue } from "./pages/dashboard/processor/ProcessingQueue";
import { ProcessingOrders } from "./pages/dashboard/processor/ProcessingOrders";
import { ShipmentHistory } from "./pages/dashboard/processor/ShipmentHistory";

import { DistributorOverview } from "./pages/dashboard/distributor/DistributorOverview";
import { ShipmentManager } from "./pages/dashboard/distributor/ShipmentManager";
import { DeliveryStatus } from "./pages/dashboard/distributor/DeliveryStatus";
import { DeliveryHistory } from "./pages/dashboard/distributor/DeliveryHistory";

import { RetailerOverview } from "./pages/dashboard/retailer/RetailerOverview";
import { InventoryManager } from "./pages/dashboard/retailer/InventoryManager";
import { SalesPoint } from "./pages/dashboard/retailer/SalesPoint";
import { ImportHistory } from "./pages/dashboard/retailer/ImportHistory";

import { BatchDetailPage } from "./pages/dashboard/BatchDetail";

/* ===== DASHBOARD INDEX (redirect theo role) ===== */
const DashboardIndex = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  switch (user.role) {
    case "ADMIN":
      return <AdminOverview />;
    case "FARMER":
      return <FarmerOverview />;
    case "WHOLESALER":
      return <WholesalerOverview />;
    case "PROCESSOR":
      return <ProcessorOverview />;
    case "DISTRIBUTOR":
      return <DistributorOverview />;
    case "RETAILER":
      return <RetailerOverview />;
    default:
      return <div>Unknown role</div>;
  }
};

export function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/trace" element={<Navigate to="/" replace />} />
          <Route path="/trace/:id" element={<TraceResultPage />} />

          {/* ===== AUTH ROUTES ===== */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ===== DASHBOARD ROUTES ===== */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardIndex />} />

            {/* Shared */}
            <Route path="batch/:id" element={<BatchDetailPage />} />

            {/* Admin */}
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="tracking" element={<ProductTracking />} />
            <Route path="transactions" element={<TransactionHistory />} />

            {/* Farmer */}
            <Route path="crops" element={<HarvestManager />} />
            <Route path="batch/new" element={<BatchCreate />} />
            <Route path="history" element={<HarvestHistory />} />

            {/* Wholesaler */}
            <Route path="incoming" element={<IncomingGoods />} />
            <Route path="purchase-history" element={<PurchaseHistory />} />
            <Route path="inspection" element={<QualityInspection />} />

            {/* Processor */}
            <Route path="queue" element={<ProcessingQueue />} />
            <Route path="orders" element={<ProcessingOrders />} />
            <Route path="shipments-history" element={<ShipmentHistory />} />

            {/* Distributor */}
            <Route path="shipments" element={<ShipmentManager />} />
            <Route path="delivery" element={<DeliveryStatus />} />
            <Route path="delivery-history" element={<DeliveryHistory />} />

            {/* Retailer */}
            <Route path="inventory" element={<InventoryManager />} />
            <Route path="sales" element={<SalesPoint />} />
            <Route path="import-history" element={<ImportHistory />} />

            {/* fallback */}
            <Route
              path="*"
              element={<div className="p-4">Trang đang phát triển</div>}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
