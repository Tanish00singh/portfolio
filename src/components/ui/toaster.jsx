import React from 'react';
import { useToast } from '../../hooks/use-toast.js';
import { X } from 'lucide-react';

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (!toasts?.length) return null;

  return (
    <div className="fixed z-[100] top-4 right-4 w-[min(420px,calc(100vw-32px))] space-y-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="glass-card glow-border px-4 py-3 flex items-start gap-3"
          role="status"
          aria-live="polite"
        >
          <div className="flex-1">
            {t.title && <div className="text-white font-semibold leading-snug">{t.title}</div>}
            {t.description && <div className="text-gray-300 text-sm mt-1 leading-relaxed">{t.description}</div>}
          </div>
          <button
            onClick={() => dismiss(t.id)}
            className="mt-0.5 text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

