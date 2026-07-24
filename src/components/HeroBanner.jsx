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
      padding: '1.5rem 0 1rem 0',
      background: 'radial-gradient(circle at 80% 20%, rgba(255, 106, 0, 0.15) 0%, rgba(255, 43, 74, 0.05) 50%, transparent 100%)'
    }}>
      <div className="container">
        <div className="hero-card" style={{
          background: 'var(--bg-card)',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          padding: '2.25rem',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>

          {/* Left Column Content */}
          <div style={{ zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 43, 74, 0.1)',
              color: 'var(--primary-red)',
              padding: '0.35rem 0.85rem',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '0.8rem',
              marginBottom: '0.75rem'
            }}>
              <Zap size={15} color="var(--primary-red)" />
              <span>الصفقات الخاطفة - FLASH SALE</span>
            </div>

            <h1 className="hero-title" style={{
              fontSize: '2.2rem',
              fontWeight: '900',
              lineHeight: '1.25',
              marginBottom: '0.85rem',
              color: 'var(--text-main)'
            }}>
              أفضل صيدات وتخفيضات <span style={{
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>diaaCatch (ضياء كَاتش)</span> بخصومات تصل إلى 80%
            </h1>

            <p className="hero-desc" style={{
              color: 'var(--text-muted)',
              fontSize: '0.98rem',
              lineHeight: '1.5',
              marginBottom: '1.25rem',
              maxWidth: '540px'
            }}>
              استكشف تشكيلة واسعة من المنتجات المضمونة ذات الجودة العالية: أجهزة ذكية، جيمنج، إلكترونيات، ومستلزمات منزلية مع ضمان الشحن المجاني والتوصيل السريع.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button onClick={onExploreClick} className="btn-primary pulse-animation" style={{ padding: '0.75rem 1.5rem', fontSize: '0.92rem' }}>
                <span>تصفح العروض الآن</span>
                <ArrowLeft size={17} />
              </button>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontWeight: '600'
              }}>
                <Truck size={16} color="#10b981" />
                <span>شحن مجاني للطلبات المختارة</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flash Countdown */}
          <div className="hero-countdown-box" style={{
            background: 'var(--bg-main)',
            border: '2px solid var(--primary-red)',
            borderRadius: '20px',
            padding: '1.5rem',
            textAlign: 'center',
            zIndex: 2,
            boxShadow: '0 10px 30px rgba(255, 43, 74, 0.15)'
          }}>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: '800',
              color: 'var(--text-muted)',
              marginBottom: '0.65rem'
            }}>
              ينتهي العرض الخاطف خلال:
            </div>

            {/* Countdown Numbers */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              direction: 'ltr',
              marginBottom: '1rem'
            }}>
              <div className="countdown-num" style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.5rem 0.8rem',
                borderRadius: '10px',
                fontSize: '1.4rem',
                fontWeight: '900',
                minWidth: '50px'
              }}>
                {hours}
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary-red)' }}>:</span>
              <div className="countdown-num" style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.5rem 0.8rem',
                borderRadius: '10px',
                fontSize: '1.4rem',
                fontWeight: '900',
                minWidth: '50px'
              }}>
                {minutes}
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary-red)' }}>:</span>
              <div className="countdown-num" style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.5rem 0.8rem',
                borderRadius: '10px',
                fontSize: '1.4rem',
                fontWeight: '900',
                minWidth: '50px'
              }}>
                {seconds}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.35rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '0.85rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}>
              <div>
                <Truck size={16} color="var(--primary-red)" style={{ marginBottom: '0.2rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>شحن سريع</div>
                <div>7-10 أيام</div>
              </div>
              <div>
                <ShieldCheck size={16} color="var(--primary-red)" style={{ marginBottom: '0.2rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>دفع آمن</div>
                <div>حماية كاملة</div>
              </div>
              <div>
                <RefreshCw size={16} color="var(--primary-red)" style={{ marginBottom: '0.2rem' }} />
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
