import React from 'react';
import { ShieldCheck, Truck, RotateCcw, HeartHandshake, Sparkles } from 'lucide-react';

export default function Footer({ t }) {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '2.5rem',
      paddingBottom: '2rem',
      marginTop: '3.5rem'
    }}>
      <div className="container">
        
        {/* Guarantees Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border-color)',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255, 43, 74, 0.1)', padding: '0.6rem', borderRadius: '12px', flexShrink: 0 }}>
              <ShieldCheck size={22} color="var(--primary-red)" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.2rem' }}>{t('footerBuyerProtection')}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t('footerMoneyBack')}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255, 106, 0, 0.1)', padding: '0.6rem', borderRadius: '12px', flexShrink: 0 }}>
              <Truck size={22} color="var(--primary-orange)" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.2rem' }}>{t('footerExpress')}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t('footerExpressDesc')}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.6rem', borderRadius: '12px', flexShrink: 0 }}>
              <RotateCcw size={22} color="#10b981" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.2rem' }}>{t('footerEasyReturns')}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t('footerReturnsDesc')}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255, 200, 0, 0.15)', padding: '0.6rem', borderRadius: '12px', flexShrink: 0 }}>
              <HeartHandshake size={22} color="#ffaa00" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.2rem' }}>{t('footerTrustedDeals')}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t('footerDealsDesc')}</p>
            </div>
          </div>
        </div>

        {/* Brand & Rights */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={16} color="var(--primary-red)" />
            <strong style={{ color: 'var(--text-main)' }}>diaaCatch © 2026</strong>
            <span>- AliExpress Choice Hub</span>
          </div>
          <div>
            {t('footerRights')}
          </div>
        </div>

      </div>
    </footer>
  );
}
