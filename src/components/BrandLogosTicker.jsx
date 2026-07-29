import React from 'react';
import { Sparkles, ShieldCheck, Zap, Truck, CreditCard, Award } from 'lucide-react';

export default function BrandLogosTicker({
  variant = 'full', // 'full' | 'compact' | 'mini'
  title = null,
  t = (k) => k,
  dir = 'rtl'
}) {
  const brands = [
    {
      id: 'aliexpress-choice',
      name: 'AliExpress Choice',
      category: 'Official Partner',
      badge: 'Official',
      icon: (
        <span style={{
          background: 'linear-gradient(135deg, #ffe100 0%, #ff9d00 100%)',
          color: '#000',
          fontWeight: '900',
          fontSize: '0.75rem',
          padding: '0.2rem 0.5rem',
          borderRadius: '6px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          <Sparkles size={12} fill="#000" />
          Choice
        </span>
      )
    },
    {
      id: 'visa',
      name: 'VISA',
      category: 'Secure Payment',
      icon: (
        <span style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '1rem', color: '#1a1f71', letterSpacing: '0.5px' }}>
          VISA
        </span>
      )
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      category: 'Secure Payment',
      icon: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#eb001b', opacity: 0.9 }}></div>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#f79e1b', marginLeft: '-7px', opacity: 0.9 }}></div>
        </div>
      )
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      category: 'Instant Checkout',
      icon: (
        <span style={{ fontWeight: '800', fontSize: '0.85rem', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
           Pay
        </span>
      )
    },
    {
      id: 'paypal',
      name: 'PayPal',
      category: 'Global Protection',
      icon: (
        <span style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '0.9rem', color: '#003087' }}>
          Pay<span style={{ color: '#0079c1' }}>Pal</span>
        </span>
      )
    },
    {
      id: 'mada',
      name: 'مدى mada',
      category: 'Local Payment',
      icon: (
        <span style={{
          background: '#009639',
          color: '#fff',
          fontWeight: '800',
          fontSize: '0.7rem',
          padding: '0.15rem 0.45rem',
          borderRadius: '4px'
        }}>
          mada مدى
        </span>
      )
    },
    {
      id: 'anker',
      name: 'ANKER',
      category: 'Top Electronics',
      badge: 'Top Brand',
      icon: (
        <span style={{ fontWeight: '900', fontSize: '0.85rem', color: '#00a3e0', letterSpacing: '1px' }}>
          ANKER
        </span>
      )
    },
    {
      id: 'baseus',
      name: 'Baseus',
      category: 'Smart Gadgets',
      badge: 'Official Store',
      icon: (
        <span style={{
          background: '#ffcc00',
          color: '#000',
          fontWeight: '900',
          fontSize: '0.75rem',
          padding: '0.15rem 0.45rem',
          borderRadius: '4px'
        }}>
          Baseus
        </span>
      )
    },
    {
      id: 'xiaomi',
      name: 'Xiaomi',
      category: 'Smart Home & Phones',
      icon: (
        <span style={{
          background: '#ff6700',
          color: '#fff',
          fontWeight: '900',
          fontSize: '0.75rem',
          padding: '0.15rem 0.4rem',
          borderRadius: '6px'
        }}>
          mi
        </span>
      )
    },
    {
      id: 'lenovo',
      name: 'Lenovo',
      category: 'Laptops & Audio',
      icon: (
        <span style={{
          background: '#e2231a',
          color: '#fff',
          fontWeight: '800',
          fontSize: '0.75rem',
          padding: '0.15rem 0.45rem',
          borderRadius: '3px'
        }}>
          Lenovo
        </span>
      )
    },
    {
      id: 'ugreen',
      name: 'UGREEN',
      category: 'Chargers & Cables',
      icon: (
        <span style={{ fontWeight: '900', fontSize: '0.85rem', color: '#00b050', letterSpacing: '0.5px' }}>
          UGREEN
        </span>
      )
    },
    {
      id: 'dhl',
      name: 'DHL Express',
      category: 'Global Express',
      icon: (
        <span style={{
          background: '#ffcc00',
          color: '#d40511',
          fontWeight: '900',
          fontSize: '0.75rem',
          padding: '0.15rem 0.45rem',
          borderRadius: '4px',
          fontStyle: 'italic'
        }}>
          DHL
        </span>
      )
    },
    {
      id: 'fedex',
      name: 'FedEx',
      category: 'Priority Shipping',
      icon: (
        <span style={{ fontWeight: '900', fontSize: '0.85rem' }}>
          <span style={{ color: '#4d148c' }}>Fed</span>
          <span style={{ color: '#ff6600' }}>Ex</span>
        </span>
      )
    },
    {
      id: 'aramex',
      name: 'Aramex',
      category: 'Regional Express',
      icon: (
        <span style={{ fontWeight: '900', fontSize: '0.85rem', color: '#e31837' }}>
          aramex
        </span>
      )
    }
  ];

  // Duplicate list to guarantee smooth continuous looping marquee animation
  const duplicatedBrands = [...brands, ...brands, ...brands];

  const animationClass = dir === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee-ltr';

  // Compact variant (e.g., inside CartDrawer)
  if (variant === 'compact') {
    return (
      <div style={{
        marginTop: '0.75rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--border-color)',
        overflow: 'hidden',
        position: 'relative'
      }} className="logos-marquee-container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          fontWeight: '700'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <ShieldCheck size={13} color="#10b981" />
            <span>شركاء الدفع والتوصيل المعتمدين</span>
          </span>
          <span style={{ color: 'var(--primary-red)', fontSize: '0.68rem' }}>100% آمن</span>
        </div>

        <div style={{
          display: 'flex',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          padding: '0.2rem 0'
        }}>
          <div className={`logos-marquee-track ${animationClass}`} style={{ gap: '0.85rem' }}>
            {duplicatedBrands.map((b, idx) => (
              <div
                key={`${b.id}-compact-${idx}`}
                style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '0.3rem 0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap',
                  boxShadow: 'var(--shadow-sm)',
                  flexShrink: 0
                }}
              >
                {b.icon}
                <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--text-main)' }}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mini variant (e.g., inside QuickView Modal or Product Cards)
  if (variant === 'mini') {
    return (
      <div style={{
        marginTop: '0.85rem',
        padding: '0.65rem 0.85rem',
        borderRadius: '12px',
        background: 'rgba(255, 106, 0, 0.05)',
        border: '1px dashed rgba(255, 106, 0, 0.25)',
        overflow: 'hidden',
        position: 'relative'
      }} className="logos-marquee-container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.4rem',
          fontSize: '0.73rem',
          fontWeight: '800',
          color: 'var(--text-main)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Award size={14} color="var(--primary-orange)" />
            <span>علامات تجارية ووسائل دفع معتمدة لهذا المنتج</span>
          </div>
          <span className="badge-shipping">توصيل سريع</span>
        </div>

        <div style={{
          display: 'flex',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
        }}>
          <div className={`logos-marquee-track ${animationClass}`} style={{ gap: '0.75rem', animationDuration: '22s' }}>
            {duplicatedBrands.map((b, idx) => (
              <div
                key={`${b.id}-mini-${idx}`}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.55rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  whiteSpace: 'nowrap',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  flexShrink: 0
                }}
              >
                {b.icon}
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Full default variant (e.g., inside Footer or Main Landing Page)
  return (
    <div style={{
      margin: '2rem 0 1.5rem 0',
      padding: '1.25rem 1rem',
      background: 'var(--bg-card)',
      borderRadius: '20px',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      position: 'relative'
    }} className="logos-marquee-container">
      
      {/* Header Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            background: 'var(--primary-gradient)',
            padding: '0.45rem',
            borderRadius: '10px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Zap size={16} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '900', color: 'var(--text-main)', margin: 0 }}>
              {title || t('tickerTitle')}
            </h4>
            <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', margin: 0 }}>
              {t('tickerSubtitle')}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.73rem',
            background: 'rgba(16, 185, 129, 0.1)',
            color: '#10b981',
            padding: '0.25rem 0.65rem',
            borderRadius: '50px',
            fontWeight: '800'
          }}>
            <ShieldCheck size={14} />
            {t('tickerProtection')}
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div style={{
        display: 'flex',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        padding: '0.4rem 0'
      }}>
        <div className={`logos-marquee-track ${animationClass}`} style={{ gap: '1.25rem', animationDuration: '30s' }}>
          {duplicatedBrands.map((b, idx) => (
            <div
              key={`${b.id}-full-${idx}`}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                padding: '0.5rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-red)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '24px',
                minWidth: '24px'
              }}>
                {b.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.2' }}>
                  {b.name}
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  {b.category}
                </span>
              </div>
              {b.badge && (
                <span style={{
                  fontSize: '0.6rem',
                  fontWeight: '800',
                  background: 'rgba(255, 43, 74, 0.1)',
                  color: 'var(--primary-red)',
                  padding: '0.1rem 0.35rem',
                  borderRadius: '4px'
                }}>
                  {b.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
