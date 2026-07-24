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
      padding: '1.25rem 0 0.85rem 0',
      background: 'radial-gradient(circle at 80% 20%, rgba(255, 106, 0, 0.15) 0%, rgba(255, 43, 74, 0.05) 50%, transparent 100%)',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      <div className="container">
        <div className="hero-card" style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          padding: '1.75rem 1.25rem',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          boxSizing: 'border-box'
        }}>

          {/* Left Column Content */}
          <div style={{ zIndex: 2, width: '100%' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(255, 43, 74, 0.1)',
              color: 'var(--primary-red)',
              padding: '0.3rem 0.75rem',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '0.75rem',
              marginBottom: '0.65rem'
            }}>
              <Zap size={14} color="var(--primary-red)" />
              <span>الصفقات الخاطفة - FLASH SALE</span>
            </div>

            <h1 className="hero-title" style={{
              fontSize: '1.85rem',
              fontWeight: '900',
              lineHeight: '1.25',
              marginBottom: '0.75rem',
              color: 'var(--text-main)',
              maxWidth: '100%'
            }}>
              أفضل صيدات وتخفيضات <span style={{
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>diaaCatch</span> بخصومات حتى 80%
            </h1>

            <p className="hero-desc" style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              marginBottom: '1rem',
              maxWidth: '540px'
            }}>
              استكشف تشكيلة واسعة من المنتجات المضمونة ذات الجودة العالية: أجهزة ذكية، جيمنج، وإلكترونيات مع ضمان الشحن المجاني والتوصيل السريع.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={onExploreClick} className="btn-primary pulse-animation" style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}>
                <span>تصفح العروض الآن</span>
                <ArrowLeft size={15} />
              </button>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontWeight: '600'
              }}>
                <Truck size={15} color="#10b981" />
                <span>شحن مجاني مختار</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flash Countdown */}
          <div className="hero-countdown-box" style={{
            background: 'var(--bg-main)',
            border: '2px solid var(--primary-red)',
            borderRadius: '16px',
            padding: '1.25rem 1rem',
            textAlign: 'center',
            zIndex: 2,
            boxShadow: '0 10px 30px rgba(255, 43, 74, 0.15)',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: '800',
              color: 'var(--text-muted)',
              marginBottom: '0.5rem'
            }}>
              ينتهي العرض الخاطف خلال:
            </div>

            {/* Countdown Numbers */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              direction: 'ltr',
              marginBottom: '0.85rem',
              width: '100%'
            }}>
              <div className="countdown-num" style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.45rem 0.65rem',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: '900',
                minWidth: '42px'
              }}>
                {hours}
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-red)' }}>:</span>
              <div className="countdown-num" style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.45rem 0.65rem',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: '900',
                minWidth: '42px'
              }}>
                {minutes}
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-red)' }}>:</span>
              <div className="countdown-num" style={{
                background: 'var(--primary-gradient)',
                color: '#fff',
                padding: '0.45rem 0.65rem',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: '900',
                minWidth: '42px'
              }}>
                {seconds}
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.25rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '0.75rem',
              fontSize: '0.72rem',
              color: 'var(--text-muted)'
            }}>
              <div>
                <Truck size={15} color="var(--primary-red)" style={{ marginBottom: '0.15rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>شحن سريع</div>
                <div>7-10 أيام</div>
              </div>
              <div>
                <ShieldCheck size={15} color="var(--primary-red)" style={{ marginBottom: '0.15rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>دفع آمن</div>
                <div>حماية كاملة</div>
              </div>
              <div>
                <RefreshCw size={15} color="var(--primary-red)" style={{ marginBottom: '0.15rem' }} />
                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>إرجاع مجاني</div>
                <div>15 يوم</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
