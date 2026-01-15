import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { X, AlertCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (decodedText: string) => void;
}
export function QRScanner({
  isOpen,
  onClose,
  onScan
}: QRScannerProps) {
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!isOpen) return;
    // Clear any previous errors
    setError(null);
    const scannerId = 'html5qr-code-full-region';
    let scanner: Html5QrcodeScanner | null = null;
    // Small timeout to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      try {
        scanner = new Html5QrcodeScanner(scannerId, {
          fps: 10,
          qrbox: {
            width: 250,
            height: 250
          },
          aspectRatio: 1.0,
          showTorchButtonIfSupported: true
        }, false);
        scanner.render(decodedText => {
          // Success callback
          scanner?.clear();
          onScan(decodedText);
        }, errorMessage => {
          // Error callback - usually just means no QR code found in frame yet
          // We don't want to show these as errors to the user constantly
          console.debug('QR Scan error:', errorMessage);
        });
      } catch (err) {
        console.error('Failed to initialize scanner:', err);
        setError('Không thể khởi động camera. Vui lòng kiểm tra quyền truy cập.');
      }
    }, 100);
    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (scanner) {
        scanner.clear().catch(error => {
          console.error('Failed to clear html5-qrcode scanner. ', error);
        });
      }
    };
  }, [isOpen, onScan]);
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <Card className="w-full max-w-lg relative overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <h3 className="text-lg font-semibold text-gray-900">
            Quét mã QR sản phẩm
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 rounded-full hover:bg-gray-100">
            <X className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Đóng</span>
          </Button>
        </div>

        {/* Scanner Area */}
        <div className="p-4 bg-gray-50 min-h-[300px] flex flex-col items-center justify-center">
          {error ? <div className="text-center p-6 text-red-600 bg-red-50 rounded-lg max-w-sm">
              <AlertCircle className="h-10 w-10 mx-auto mb-2" />
              <p className="font-medium">{error}</p>
              <Button variant="outline" className="mt-4 border-red-200 hover:bg-red-100 text-red-700" onClick={onClose}>
                Đóng
              </Button>
            </div> : <div className="w-full">
              <div id="html5qr-code-full-region" className="overflow-hidden rounded-lg bg-black"></div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Di chuyển camera đến mã QR trên sản phẩm để quét
              </p>
            </div>}
        </div>

        {/* Custom Styles for the scanner library to match our theme */}
        <style>{`
          #html5qr-code-full-region {
            border: none !important;
          }
          #html5qr-code-full-region img {
            display: none;
          }
          #html5qr-code-full-region__scan_region {
            background: white;
          }
          #html5qr-code-full-region__dashboard_section_csr button {
            background-color: white;
            color: #16a34a;
            border: 1px solid #dcfce7;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            margin-top: 1rem;
            cursor: pointer;
          }
          #html5qr-code-full-region__dashboard_section_csr button:hover {
            background-color: #f0fdf4;
          }
          #html5qr-code-full-region__dashboard_section_swaplink {
            text-decoration: none;
            color: #16a34a;
            font-weight: 500;
            margin-top: 0.5rem;
            display: inline-block;
          }
        `}</style>
      </Card>
    </div>;
}