import React, { useState } from 'react';
import { Link2, Sparkles, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AliExpressDealFinder({ t, dir }) {
  const [inputUrl, setInputUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resultData, setResultData] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    setIsAnalyzing(true);
    setResultData(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setResultData({
        productName: 'AliExpress Extracted Item',
        estimatedDiscount: '58%',
        cashback: '$4.20 USD',
        shippingStatus: 'Choice Express Free Shipping'
      });
    }, 1200);
  };

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section style={{
      margin: '2.5rem 0 1.5rem 0',
      background: 'var(--bg-card)',
      borderRadius: '20px',
      border: '1px solid var(--border-color)',
      padding: '1.75rem 1.25rem',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        marginBottom: '0.65rem'
      }}>
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '8px',
          background: 'var(--choice-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          fontWeight: '900'
        }}>
          <Sparkles size={18} />
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '900' }}>{t('dealFinderTitle')}</h2>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem', maxWidth: '650px' }}>
        {t('dealFinderDesc')}
      </p>

      {/* URL Input Form */}
      <form onSubmit={handleAnalyze} style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
          <input
            type="url"
            placeholder={t('dealFinderPlaceholder')}
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 2.6rem 0.75rem 0.85rem',
              borderRadius: '12px',
              border: '2px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.85rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          <Link2 size={16} style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={isAnalyzing}
          style={{ padding: '0.75rem 1.35rem', fontSize: '0.88rem', borderRadius: '12px' }}
        >
          {isAnalyzing ? t('analyzing') : t('dealFinderBtn')}
          {!isAnalyzing && <ArrowIcon size={15} />}
        </button>
      </form>

      {/* Analysis Result Display */}
      {resultData && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '14px',
          padding: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.85rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>{t('availableDiscount')}</span>
              <strong style={{ fontSize: '1rem', color: 'var(--primary-red)' }}>{resultData.estimatedDiscount} OFF</strong>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={18} color="#ffaa00" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>{t('estimatedCashback')}</span>
              <strong style={{ fontSize: '1rem', color: '#ffaa00' }}>{resultData.cashback}</strong>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>{t('shippingMethod')}</span>
              <strong style={{ fontSize: '0.82rem', color: '#10b981' }}>{resultData.shippingStatus}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
