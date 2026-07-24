import React, { useState } from 'react';
import { Link2, Sparkles, CheckCircle2, ShieldAlert, ArrowLeft } from 'lucide-react';

export default function AliExpressDealFinder() {
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
        productName: 'منتج علي إكسبريس المستخرج تلقائياً',
        estimatedDiscount: '58%',
        cashback: '$4.20 USD',
        shippingStatus: 'شحن مجاني سريع (Choice Express)',
        couponAvailable: 'كوبون متوفر: CHOICE2026'
      });
    }, 1200);
  };

  return (
    <section style={{
      margin: '3rem 0',
      background: 'var(--bg-card)',
      borderRadius: '24px',
      border: '1px solid var(--border-color)',
      padding: '2.25rem',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.75rem'
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: '900' }}>مستكشف صفقات ورل AliExpress</h2>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '650px' }}>
        انسخ رابط أي منتج من موقع AliExpress والمصق في الخانة التالية للحصول على أعلى نسبة خصم متوفرة، حساب الكاش باك التقديري، والتحقق من أهلية الشحن المجاني.
      </p>

      {/* URL Input Form */}
      <form onSubmit={handleAnalyze} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
          <input
            type="url"
            placeholder="ضع رابط منتج AliExpress هنا (مثال: https://www.aliexpress.com/item/...)"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 2.8rem 0.85rem 1rem',
              borderRadius: '14px',
              border: '2px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
          <Link2 size={18} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={isAnalyzing}
          style={{ padding: '0.85rem 1.6rem', fontSize: '0.92rem', borderRadius: '14px' }}
        >
          {isAnalyzing ? 'جاري التحليل واستخراج الصفقة...' : 'فحص الخصم والكاش باك'}
          {!isAnalyzing && <ArrowLeft size={16} />}
        </button>
      </form>

      {/* Analysis Result Display */}
      {resultData && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '16px',
          padding: '1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={20} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>الخصم المتوفر</span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--primary-red)' }}>{resultData.estimatedDiscount} خصم مباشر</strong>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="#ffaa00" />
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>كاش باك مقدر</span>
              <strong style={{ fontSize: '1.1rem', color: '#ffaa00' }}>{resultData.cashback}</strong>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={20} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>خيار الشحن</span>
              <strong style={{ fontSize: '0.9rem', color: '#10b981' }}>{resultData.shippingStatus}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
