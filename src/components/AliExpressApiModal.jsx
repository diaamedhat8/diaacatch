import React, { useState, useEffect } from 'react';
import { 
  X, 
  KeyRound, 
  Zap, 
  CheckCircle2, 
  Globe, 
  RefreshCw, 
  ShieldCheck, 
  ExternalLink,
  Sliders,
  Server,
  GitBranch,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { 
  getStoredApiConfig, 
  saveStoredApiConfig, 
  testAliExpressApiConnection,
  ALIEXPRESS_API_CONFIG 
} from '../utils/aliExpressApi';

export default function AliExpressApiModal({ isOpen, onClose, t, dir }) {
  const [config, setConfig] = useState(getStoredApiConfig());
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setConfig(getStoredApiConfig());
      setSavedSuccess(false);
      handleTestPing();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    saveStoredApiConfig(config);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleTestPing = async () => {
    setIsTesting(true);
    setTestResult(null);
    const res = await testAliExpressApiConnection();
    setIsTesting(false);
    setTestResult(res);
  };

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '1rem'
    }} onClick={onClose}>
      <div 
        style={{
          background: 'var(--bg-card)',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '1.75rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ff4747 0%, #ff8800 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <KeyRound size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '900', margin: 0 }}>
                لوحة إعدادات AliExpress Open Platform (API)
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                الربط البرمجي الرسمي لجلب وتحديث ملايين المنتجات الحية
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Live Status Badge */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '14px',
          padding: '0.85rem 1rem',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Server size={18} color="#10b981" />
            <div>
              <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#10b981' }}>
                بوابة AliExpress API متصلة ومفعلة
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Gateway: {ALIEXPRESS_API_CONFIG.apiGateway}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handleTestPing}
              disabled={isTesting}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.78rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <RefreshCw size={13} className={isTesting ? 'spin-animation' : ''} />
              {isTesting ? 'جاري الفحص...' : 'فحص السرعة والاتصال'}
            </button>
            {testResult && (
              <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: '800' }}>
                ⚡ {testResult.latencyMs}ms
              </span>
            )}
          </div>
        </div>

        {/* Form Settings */}
        <form onSubmit={handleSave}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '800', marginBottom: '0.35rem' }}>
                🏷️ كود التتبع التسويقي (Affiliate Tracking Tag / ID):
              </label>
              <input
                type="text"
                value={config.trackingTag}
                onChange={(e) => setConfig({ ...config, trackingTag: e.target.value })}
                placeholder="diaacatch_affiliate_id"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  fontSize: '0.88rem',
                  boxSizing: 'border-box'
                }}
              />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                يتم دمج هذا الكود تلقائياً في جميع روابط المنتجات وعمليات الشراء لاحتساب عمولتك.
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '800', marginBottom: '0.35rem' }}>
                  🔑 Portals App Key:
                </label>
                <input
                  type="text"
                  value={config.appKey}
                  onChange={(e) => setConfig({ ...config, appKey: e.target.value })}
                  placeholder="50012345"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '800', marginBottom: '0.35rem' }}>
                  🔒 Portals App Secret:
                </label>
                <input
                  type="password"
                  value={config.appSecret}
                  onChange={(e) => setConfig({ ...config, appSecret: e.target.value })}
                  placeholder="••••••••••••••••"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--bg-main)',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <input
                type="checkbox"
                id="autoSyncCheck"
                checked={config.autoSync}
                onChange={(e) => setConfig({ ...config, autoSync: e.target.checked })}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <label htmlFor="autoSyncCheck" style={{ fontSize: '0.82rem', fontWeight: '700', cursor: 'pointer' }}>
                تفعيل المزامنة اللحظية للأسعار ومعدلات الصرف كل 30 ثانية تلقائياً
              </label>
            </div>
          </div>

          {/* GitHub Sync Status Section */}
          <div style={{
            background: 'rgba(255, 170, 0, 0.08)',
            border: '1px solid rgba(255, 170, 0, 0.25)',
            borderRadius: '14px',
            padding: '1rem',
            marginBottom: '1.5rem',
            fontSize: '0.82rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', color: '#ffaa00', marginBottom: '0.4rem' }}>
              <GitBranch size={17} />
              <span>مزامنة المستودع التلقائية (GitHub Repository Sync)</span>
            </div>
            <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-muted)' }}>
              المستودع متصل بـ: <code style={{ color: 'var(--text-main)', background: 'var(--bg-main)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>diaamedhat8/diaacatch</code>
            </p>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              💡 لتحديث ورفع المنتجات والأسعار إلى GitHub في أي وقت، يمكنك تشغيل: <code style={{ color: '#10b981' }}>npm run sync:push</code>
            </span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <a
                href="https://portals.aliexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8rem',
                  color: 'var(--primary-red)',
                  textDecoration: 'none',
                  fontWeight: '700'
                }}
              >
                <span>فتح بوابة AliExpress Portals</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {savedSuccess && (
                <span style={{ color: '#10b981', fontSize: '0.82rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CheckCircle2 size={16} /> تم الحفظ بنجاح!
                </span>
              )}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '12px',
                  fontWeight: '800',
                  fontSize: '0.88rem'
                }}
              >
                حفظ الإعدادات
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
