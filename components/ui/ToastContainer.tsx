'use client';

import { useState, useCallback } from 'react';
import Toast from './Toast';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  subtitle?: string;
  duration?: number;
}

interface ToastContainerProps {
  toasts: ToastItem[];
  onRemove: (id: string) => void;
}

export default function ToastContainer({
  toasts,
  onRemove,
}: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          type={toast.type}
          title={toast.title}
          subtitle={toast.subtitle}
          isVisible={true}
          onClose={() => onRemove(toast.id)}
          duration={toast.duration}
        />
      ))}
    </div>
  );
}

// Toast Hook
export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (toast: Omit<ToastItem, 'id'>) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { ...toast, id }]);
      return id;
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showSuccess = useCallback(
    (title: string, subtitle?: string, duration?: number) => {
      return showToast({ type: 'success', title, subtitle, duration });
    },
    [showToast]
  );

  const showError = useCallback(
    (title: string, subtitle?: string, duration?: number) => {
      return showToast({ type: 'error', title, subtitle, duration });
    },
    [showToast]
  );

  const showWarning = useCallback(
    (title: string, subtitle?: string, duration?: number) => {
      return showToast({ type: 'warning', title, subtitle, duration });
    },
    [showToast]
  );

  const showInfo = useCallback(
    (title: string, subtitle?: string, duration?: number) => {
      return showToast({ type: 'info', title, subtitle, duration });
    },
    [showToast]
  );

  return {
    toasts,
    showToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
}
