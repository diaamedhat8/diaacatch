import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function ToastNotification({ message, onClose }) {
  if (!message) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 300,
      background: 'var(--bg-card)',
      color: 'var(--text-main)',
      border: '1px solid var(--primary-red)',
      padding: '0.65rem 1.25rem',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontSize: '0.85rem',
      fontWeight: '800',
      animation: 'slideUp 0.3s ease',
      whiteSpace: 'nowrap'
    }}>
      <CheckCircle2 size={18} color="var(--primary-red)" />
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          padding: '0.1rem'
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
