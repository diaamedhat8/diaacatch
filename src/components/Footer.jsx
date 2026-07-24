import React from 'react';
import { ShieldCheck, Truck, RotateCcw, HeartHandshake, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '3rem',
      paddingBottom: '2rem',
      marginTop: '4rem'
    }}>
      <div className="container">
        
        {/* Guarantees Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255, 43, 74, 0.1)', padding: '0.65rem', borderRadius: '12px' }}>
              <ShieldCheck size={24} color="var(--primary-red)" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.2rem' }}>حماية المشترين 100%</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ضمان استرجاع الأموال في حال عدم استلام الشحنة.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255, 106, 0, 0.1)', padding: '0.65rem', borderRadius: '12px' }}>
              <Truck size={24} color="var(--primary-orange)" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.2rem' }}>AliExpress Choice Express</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>شحن سريع خلال 5 إلى 10 أيام للبلدان العربية.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.65rem', borderRadius: '12px' }}>
              <RotateCcw size={24} color="#10b981" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.2rem' }}>إرجاع مجاني وسهل</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>إمكانية الإرجاع خلال 15 يوماً بدون رسوم إضافية.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255, 200, 0, 0.15)', padding: '0.65rem', borderRadius: '12px' }}>
              <HeartHandshake size={24} color="#ffaa00" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.2rem' }}>صفقات حقيقية وموثوقة</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>جميع العروض مأخوذة مباشرة من بائعين معتمدين.</p>
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
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--primary-red)" />
            <strong style={{ color: 'var(--text-main)' }}>diaaCatch | ضياء كَاتش © 2026</strong>
            <span>- منصة ضياء لاصتياد أفضل صفقات وعروض AliExpress</span>
          </div>
          <div>
            جميع الحقوق محفوظة. يتم التحويل والشراء المباشر عبر منصة AliExpress الرسمية.
          </div>
        </div>

      </div>
    </footer>
  );
}
