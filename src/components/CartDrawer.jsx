import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ExternalLink, ShoppingBag, Tag, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  currencyCode
}) {
  if (!isOpen) return null;

  const [coupon, setCoupon] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  const rawSubtotalUSD = cartItems.reduce((acc, item) => acc + item.priceUSD * (item.quantity || 1), 0);
  const discountMultiplier = discountApplied ? 0.9 : 1.0;
  const finalSubtotalUSD = rawSubtotalUSD * discountMultiplier;

  const subtotalFormatted = (finalSubtotalUSD * currency.rate).toFixed(2);
  const savingsFormatted = ((rawSubtotalUSD - finalSubtotalUSD) * currency.rate).toFixed(2);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'CHOICE' || coupon.trim().toUpperCase() === 'ALI2026') {
      setDiscountApplied(true);
    } else {
      alert('كوبون غير صالح. جرب استخدام الكوبون: CHOICE');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(6px)',
      zIndex: 250,
      display: 'flex',
      justifyContent: 'flex-start'
    }}
    onClick={onClose}
    >
      <div style={{
        background: 'var(--bg-card)',
        width: '100%',
        maxWidth: '440px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-md)',
        borderLeft: '1px solid var(--border-color)',
        animation: 'slideInLeft 0.3s ease'
      }}
      onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={22} color="var(--primary-red)" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: '800' }}>سلة المشتريات المحفوظة</h2>
            <span style={{
              background: 'var(--primary-red)',
              color: '#fff',
              borderRadius: '50%',
              padding: '0.15rem 0.5rem',
              fontSize: '0.75rem',
              fontWeight: '800'
            }}>
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '0.2rem'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: 'var(--text-muted)'
            }}>
              <ShoppingBag size={48} strokeWidth={1} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p style={{ fontWeight: '700', fontSize: '1.05rem', marginBottom: '0.5rem' }}>سلتك فارغة حالياً</p>
              <p style={{ fontSize: '0.85rem' }}>اختر أفضل المنتجات من عروض علي إكسبريس وأضفها هنا.</p>
            </div>
          ) : (
            cartItems.map((item) => {
              const itemPrice = (item.priceUSD * currency.rate * (item.quantity || 1)).toFixed(2);

              return (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '0.85rem',
                  borderRadius: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '70px', height: '70px', borderRadius: '10px', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        marginBottom: '0.25rem',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {item.title}
                      </h4>
                      {item.selectedColor && (
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          اللون: {item.selectedColor}
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--primary-red)' }}>
                        {itemPrice} {currency.symbol}
                      </span>

                      {/* Quantity Controls */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'var(--bg-card)',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        padding: '0.15rem 0.4rem'
                      }}>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                          style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontSize: '0.82rem', fontWeight: '800', minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                        title="حذف"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-card)'
          }}>
            {/* Coupon Code Input Form */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  placeholder="رمز الكوبون (جرب CHOICE)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 2rem 0.5rem 0.75rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                />
                <Tag size={14} style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
              <button type="submit" className="btn-secondary" style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderRadius: '8px' }}>
                تطبيق
              </button>
            </form>

            {discountApplied && (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                padding: '0.4rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: '700',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Check size={14} />
                <span>تم تطبيق خصم الكوبون بنجاح (10% خصم إضافي)!</span>
              </div>
            )}

            {/* Total Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>إجمالي المشتريات:</span>
                {discountApplied && (
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700' }}>
                    وفرت: {savingsFormatted} {currency.symbol}
                  </span>
                )}
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--primary-red)' }}>
                {subtotalFormatted} {currency.symbol}
              </span>
            </div>

            {/* Checkout Button */}
            <a
              href="https://www.aliexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '12px'
              }}
            >
              <span>إتمام الطلب في AliExpress</span>
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
