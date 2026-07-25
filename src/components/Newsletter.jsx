import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter({ t, onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setSubscribed(true);
    if (onShowToast) {
      onShowToast(t('newsletterSuccess'));
    }
  };

  return (
    <section style={{
      margin: '2rem 0',
      background: 'linear-gradient(135deg, rgba(255, 43, 74, 0.08) 0%, rgba(255, 106, 0, 0.12) 100%)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 43, 74, 0.2)',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '650px',
        margin: '0 auto'
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: 'var(--primary-gradient)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem auto',
          boxShadow: '0 4px 15px rgba(255, 43, 74, 0.3)'
        }}>
          <Mail size={22} />
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
          {t('newsletterTitle')}
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
          {t('newsletterSub')}
        </p>

        {subscribed ? (
          <div style={{
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#10b981',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '0.85rem 1.25rem',
            borderRadius: '14px',
            fontWeight: '800',
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <CheckCircle2 size={18} />
            <span>{t('newsletterSuccess')}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '0.5rem',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder={t('newsletterPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                minWidth: '240px',
                padding: '0.75rem 1rem',
                borderRadius: '50px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}
            >
              <span>{t('newsletterBtn')}</span>
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
