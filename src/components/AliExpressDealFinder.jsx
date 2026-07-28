import React, { useState } from 'react';
import { Link2, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, PlusCircle, ExternalLink, Globe } from 'lucide-react';
import { parseAliExpressUrlOrQuery } from '../utils/aliExpressSyncEngine';

export default function AliExpressDealFinder({ t, dir, onImportProduct }) {
  const [inputUrl, setInputUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [imported, setImported] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    setIsAnalyzing(true);
    setResultData(null);
    setImported(false);

    setTimeout(() => {
      const parsed = parseAliExpressUrlOrQuery(inputUrl);
      setIsAnalyzing(false);
      if (parsed) {
        setResultData({
          ...parsed,
          estimatedDiscount: `${parsed.discount}%`,
          cashback: `$${(parsed.priceUSD * 0.08).toFixed(2)} USD (8% الكاش باك)`,
          shippingStatus: 'AliExpress Choice Free Global Express'
        });
      }
    }, 600);
  };

  const handleImportToStore = () => {
    if (resultData && onImportProduct) {
      onImportProduct(resultData);
      setImported(true);
    }
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
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: 'var(--choice-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          fontWeight: '900'
        }}>
          <Sparkles size={20} />
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '900', margin: 0 }}>{t('dealFinderTitle')}</h2>
          <span style={{ fontSize: '0.75rem', color: '#ffaa00', fontWeight: '700' }}>⚡ محرك استيراد وتحديث منتجات علي اكسبريس المباشر</span>
        </div>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem', maxWidth: '650px' }}>
        ضع رابط أي منتج أو رقم المنتج أو اسم السلعة من علي اكسبريس لاستيراده تلقائياً مع أعلى نسبة خصم، تحويل العملة، وتحديث الأسعار التلقائي على مدار الساعة.
      </p>

      {/* URL Input Form */}
      <form onSubmit={handleAnalyze} style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
          <input
            type="text"
            placeholder="ضع رابط منتج من AliExpress أو اسم السلعة..."
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
          {isAnalyzing ? t('analyzing') : 'استيراد وفحص الخصم ⚡'}
          {!isAnalyzing && <ArrowIcon size={15} />}
        </button>
      </form>

      {/* Quick Suggestion Chips */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>أمثلة سريعة للاستيراد:</span>
        {[
          'ساعة ذكية مقاومة للماء',
          'سماعات لاسلكية نويز كانسلنج',
          'كاميرا مراقبة ذكية للسيارة',
          'حقيبة سفر جلدية بريميوم'
        ].map((chip, idx) => (
          <button
            key={idx}
            onClick={() => {
              setInputUrl(chip);
              const parsed = parseAliExpressUrlOrQuery(chip);
              setResultData({
                ...parsed,
                estimatedDiscount: `${parsed.discount}%`,
                cashback: `$${(parsed.priceUSD * 0.08).toFixed(2)} USD (8% الكاش باك)`,
                shippingStatus: 'AliExpress Choice Free Global Express'
              });
              setImported(false);
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '0.25rem 0.65rem',
              fontSize: '0.73rem',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
          >
            + {chip}
          </button>
        ))}
      </div>

      {/* Analysis Result Display & Import Action */}
      {resultData && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '14px',
          padding: '1.25rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
            <img 
              src={resultData.image} 
              alt={resultData.title} 
              style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }} 
            />
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ margin: '0 0 0.3rem 0', fontSize: '0.95rem', fontWeight: '800' }}>{resultData.title}</h4>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--primary-red)', fontWeight: '900', fontSize: '1.05rem' }}>${resultData.priceUSD} USD</span>
                <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.8rem' }}>${resultData.originalPriceUSD} USD</span>
                <span className="badge-choice" style={{ fontSize: '0.7rem' }}>Choice Express</span>
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '0.85rem',
            marginBottom: '1rem'
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
                <strong style={{ fontSize: '0.88rem', color: '#ffaa00' }}>{resultData.cashback}</strong>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Globe size={18} color="#3b82f6" />
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>شحن عالمي سريع</span>
                <strong style={{ fontSize: '0.82rem', color: '#3b82f6' }}>{resultData.shippingStatus}</strong>
              </div>
            </div>
          </div>

          {/* Action Row: Import to Store & Test Link */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            paddingTop: '0.85rem',
            borderTop: '1px dashed rgba(16, 185, 129, 0.2)'
          }}>
            <button
              onClick={handleImportToStore}
              disabled={imported}
              className="btn-primary"
              style={{
                background: imported ? '#10b981' : 'var(--primary-red)',
                fontSize: '0.85rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '10px'
              }}
            >
              {imported ? (
                <>
                  <CheckCircle2 size={16} /> تم استيراد المنتج وإضافته بنجاح للمعرض!
                </>
              ) : (
                <>
                  <PlusCircle size={16} /> استيراد المنتج تلقائياً وإضافته للمتجر الآن
                </>
              )}
            </button>

            <a
              href={resultData.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.65rem 1rem', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <ExternalLink size={15} /> التجربة المباشرة على علي اكسبريس
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
