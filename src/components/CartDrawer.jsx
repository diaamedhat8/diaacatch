import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ExternalLink, ShoppingBag, Tag, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  currencyCode,
  t
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
    if (coupon.trim().toUpperCase() === 'CHOICE' || coupon.trim().toUpperCase() === 'DIAA2026') {
      setDiscountApplied(true);
    } else {
      alert('Invalid coupon. Try: CHOICE');
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
      <div className="cart-drawer-content" style={{
        background: 'var(--bg-card)',
        width: '100%',
        maxWidth: '420px',
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
          padding: '1.1rem 1.25rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={20} color="var(--primary-red)" />
            <h2 style={{ fontSize: '1.05rem', fontWeight: '800' }}>{t('cartTitle')}</h2>
            <span style={{
              background: 'var(--primary-red)',
              color: '#fff',
              borderRadius: '50%',
              padding: '0.1rem 0.45rem',
              fontSize: '0.72rem',
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
            <X size={20} />
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: 'var(--text-muted)'
            }}>
              <ShoppingBag size={44} strokeWidth={1} style={{ marginBottom: '0.85rem', opacity: 0.5 }} />
              <p style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0.4rem' }}>{t('cartEmpty')}</p>
              <p style={{ fontSize: '0.82rem' }}>{t('cartEmptySub')}</p>
            </div>
          ) : (
            cartItems.map((item) => {
              const itemPrice = (item.priceUSD * currency.rate * (item.quantity || 1)).toFixed(2);

              return (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '0.85rem',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        marginBottom: '0.2rem',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {item.title}
                      </h4>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary-red)' }}>
                        {currency.symbol}{itemPrice}
                      </span>

                      {/* Quantity Controls */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: 'var(--bg-card)',
                        borderRadius: '6px',
                        border: '1px solid var(--border-color)',
                        padding: '0.1rem 0.35rem'
                      }}>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                          style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.78rem', fontWeight: '800', minWidth: '14px', textAlign: 'center' }}>
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                        title="Remove"
                      >
                        <Trash2 size={15} />
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
            padding: '1.1rem 1.25rem',
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-card)'
          }}>
            {/* Coupon Code Input Form */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.85rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  placeholder={t('couponPlaceholder')}
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.45rem 1.8rem 0.45rem 0.65rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.8rem',
                    outline: 'none'
                  }}
                />
                <Tag size={13} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
              <button type="submit" className="btn-secondary" style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem', borderRadius: '8px' }}>
                {t('applyCoupon')}
              </button>
            </form>

            {discountApplied && (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                padding: '0.35rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '700',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Check size={13} />
                <span>{t('couponSuccess')}</span>
              </div>
            )}

            {/* Total Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.85rem'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>{t('totalPrice')}</span>
                {discountApplied && (
                  <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: '700' }}>
                    {t('savings')} {currency.symbol}{savingsFormatted}
                  </span>
                )}
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary-red)' }}>
                {currency.symbol}{subtotalFormatted}
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
                padding: '0.75rem',
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderRadius: '10px'
              }}
            >
              <span>{t('checkoutBtn')}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
