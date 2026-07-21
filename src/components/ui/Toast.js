"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Veloura Living - Toast Notification System
 * Lightweight, event-driven toast system.
 */

const TOAST_EVENT = "VELOURA_TOAST";

let toastCount = 0;

export const toast = (message, options = {}) => {
  const id = `toast-${++toastCount}`;
  const event = new CustomEvent(TOAST_EVENT, {
    detail: { id, message, type: "default", duration: 5000, ...options },
  });
  if (typeof window !== "undefined") {
    window.dispatchEvent(event);
  }
};

toast.success = (msg, opts) => toast(msg, { ...opts, type: "success" });
toast.error = (msg, opts) => toast(msg, { ...opts, type: "error" });
toast.warning = (msg, opts) => toast(msg, { ...opts, type: "warning" });
toast.info = (msg, opts) => toast(msg, { ...opts, type: "info" });

const icons = {
  success: <CheckCircle2 className="text-success shrink-0" size={20} />,
  error: <AlertCircle className="text-error shrink-0" size={20} />,
  warning: <AlertTriangle className="text-warning shrink-0" size={20} />,
  info: <Info className="text-info shrink-0" size={20} />,
  default: null,
};

export function Toaster() {
  const [toasts, setToasts] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const handleAddToast = (e) => {
      const newToast = e.detail;
      setToasts((prev) => [...prev, newToast]);

      if (newToast.duration !== Infinity) {
        setTimeout(() => {
          removeToast(newToast.id);
        }, newToast.duration);
      }
    };

    window.addEventListener(TOAST_EVENT, handleAddToast);
    return () => window.removeEventListener(TOAST_EVENT, handleAddToast);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      aria-live="polite"
      className="fixed bottom-0 right-0 z-[100] flex flex-col p-4 sm:p-6 space-y-3 pointer-events-none max-w-sm w-full"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "pointer-events-auto flex items-start gap-3 w-full bg-surface shadow-floating border border-border-soft rounded-radius-md p-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] animate-in slide-in-from-right-4 fade-in"
          )}
        >
          {icons[t.type]}
          <div className="flex-1">
            <p className="text-body-sm text-heading">{t.message}</p>
          </div>
          <button
            onClick={() => removeToast(t.id)}
            className="text-muted hover:text-heading transition-colors shrink-0"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
}
