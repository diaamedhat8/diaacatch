import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck, Truck, RefreshCw, ArrowLeft } from 'lucide-react';
import { FLASH_DEAL_TIMER_INITIAL } from '../data/products';

export default function HeroBanner({ onExploreClick }) {
  const [timeLeft, setTimeLeft] = useState(FLASH_DEAL_TIMER_INITIAL);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : FLASH_DEAL_TIMER_INITIAL));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <section style={{
      padding: '2.5rem 0 1.5rem 0',
      background: 'radial-gradient(circle at 80% 20%, rgba(255, 106, 0, 0.15) 0%, rgba(255, 43, 74, 0.05) 50%, transparent 100%)'
    }}>
      <div className="container">
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>

          {/* Decorative Glow Blob */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'var(--primary-gradient)',
            filter: 'blur(70px)',
            opacity: 0.2,
            pointerEvents: 'none'
          }} />

          {/* Left Column Content */}
          <div style={{ zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 43, 74, 0.1)',
              color: 'var(--primary-red)',
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>
              <Zap size={16} color="var(--primary-red)" />
              <span>الصفقات الخاطفة - FLASH SALE</span>
            </div>

            <h1 style={{
              fontSize: '2.4rem',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '1rem',
              color: 'var(--text-main)'
            }}>
              أفضل صيدات وتخفيضات <span style={{
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>diaaCatch (ضياء كَاتش)</span> بخصومات تصل إلى 80%
            </h1>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              maxWidth: '540px'
            }}>
              استكشف تشكيلة واسعة من المنتجات المضمونة ذات الجودة العالية: أجهزة ذكية، جيمنج، إلكترونيات، ومستلزمات منزلية مع ضمان الشحن المجاني والتوصيل السريع.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onExploreClick} className="btn-primary pulse-animation" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>تصفح العروض الآن</span>
                <ArrowLeft size={18} />
              </button>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontWeight: '600'
              }}>
                <Truck size={18} color="#10b981" />
                <span>شحن مجاني للطلبات المختارة</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flash Countdown & Choice Banner Card */}
          <div style={{
            background: 'var(--bg-main)',
            border: '2px solid var(--primary-red)',
            borderRadius: '20px',
            padding: '1.75rem',
            textAlign: 'center',
            zIndex: 2,
            boxShadow: '0 10px 30px rgba(255, 43, 74, 0.15)'
          }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '800',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}>
              <span>ينتهي العرض الخاطف خلال:</span>
            </div>

            {/* Countdown Numbers */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              direction: 'ltr',
              marginBottom: '1.25rem'
            }}>
              <div style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.6rem 0.9rem',
                borderRadius: '12px',
                fontSize: '1.6rem',
                fontWeight: '900',
                minWidth: '55px'
              }}>
                {hours}
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary-red)' }}>:</span>
              <div style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.6rem 0.9rem',
                borderRadius: '12px',
                fontSize: '1.6rem',
                fontWeight: '900',
                minWidth: '55px'
              }}>
                {minutes}
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary-red)' }}>:</span>
              <div style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.6rem 0.9rem',
                borderRadius: '12px',
                fontSize: '1.6rem',
                fontWeight: '900',
                minWidth: '55px'
              }}>
                {seconds}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '1rem',
              fontSize: '0.78rem',
              color: 'var(--text-muted)'
            }}>
              <div>
                <Truck size={18} color="var(--primary-red)" style={{ marginBottom: '0.2rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>شحن سريع</div>
                <div>7-10 أيام</div>
              </div>
              <div>
                <ShieldCheck size={18} color="var(--primary-red)" style={{ marginBottom: '0.2rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>دفع آمن</div>
                <div>حماية المشترين</div>
              </div>
              <div>
                <RefreshCw size={18} color="var(--primary-red)" style={{ marginBottom: '0.2rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>إرجاع مجاني</div>
                <div>خلال 15 يوم</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
