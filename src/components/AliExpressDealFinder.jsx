import React, { useState } from 'react';
import { Link2, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, PlusCircle, ExternalLink } from 'lucide-react';
import { getAffiliateLink } from '../data/products';

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

    // Extract product ID or numeric ID from URL if present
    const itemIdMatch = inputUrl.match(/\b(\d{10,16})\b/);
    const itemId = itemIdMatch ? itemIdMatch[1] : Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString();
    const convertedAffiliateUrl = getAffiliateLink(inputUrl);

    setTimeout(() => {
      setIsAnalyzing(false);
      setResultData({
        id: Date.now(),
        title: `منتج AliExpress Choice المستورد #${itemId}`,
        category: 'gadgets',
        priceUSD: 19.99,
        originalPriceUSD: 59.99,
        discount: 67,
        rating: 4.9,
        reviewsCount: 3820,
        ordersCount: 15400,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
        ],
        isChoice: true,
        freeShipping: true,
        deliveryDays: 'شحن 5-7 أيام',
        colors: ['أسود بريميوم', 'فضيات'],
        specs: {
          'رقم المنتج': itemId,
          'رابط الأفلييت': 'مربوط تلقائياً بـ diaacatch',
          'الشحن': 'شحن مجاني سريع'
        },
        aliExpressUrl: convertedAffiliateUrl,
        estimatedDiscount: '67%',
        cashback: '$3.50 USD',
        shippingStatus: 'Choice Express Free Shipping'
      });
    }, 1000);
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

      {/* Analysis Result Display & Import Action */}
      {resultData && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '14px',
          padding: '1.25rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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

          {/* Action Row: Import to Store & Test Affiliate Link */}
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
                padding: '0.6rem 1.1rem',
                borderRadius: '10px'
              }}
            >
              {imported ? (
                <>
                  <CheckCircle2 size={16} /> تم استيراد المنتج بنجاح!
                </>
              ) : (
                <>
                  <PlusCircle size={16} /> استيراد المنتج تلقائياً وإضافته للمتجر برابط الأفلييت
                </>
              )}
            </button>

            <a
              href={resultData.aliExpressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.6rem 1rem', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <ExternalLink size={15} /> اختبر رابط الأفلييت المولد
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
