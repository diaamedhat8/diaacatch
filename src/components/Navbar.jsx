import React from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Sun, 
  Moon, 
  Sparkles, 
  Globe,
  Tag
} from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function Navbar({
  searchTerm,
  setSearchTerm,
  selectedCurrency,
  setSelectedCurrency,
  darkMode,
  setDarkMode,
  wishlistCount,
  cartCount,
  onOpenCart,
  onOpenWishlist
}) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-header)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      {/* Top Banner Notice */}
      <div style={{
        background: 'var(--primary-gradient)',
        color: '#ffffff',
        fontSize: '0.72rem',
        fontWeight: '700',
        padding: '0.35rem 0.5rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.3rem',
        width: '100%'
      }}>
        <Tag size={12} style={{ flexShrink: 0 }} />
        <span style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '100%'
        }}>
          عروض diaaCatch اليومية: شحن مجاني وتخفيضات 80%!
        </span>
      </div>

      <div className="container navbar-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.65rem',
        paddingBottom: '0.65rem',
        gap: '0.65rem',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Top Row / Brand & Quick Actions */}
        <div className="navbar-top-row" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          width: '100%'
        }}>
          
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', flexShrink: 0 }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(255, 43, 74, 0.4)',
              flexShrink: 0
            }}>
              <Sparkles size={18} />
            </div>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: '900',
                  letterSpacing: '-0.5px',
                  background: 'var(--primary-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  diaaCatch
                </span>
                <span className="badge-choice" style={{ fontSize: '0.6rem', padding: '0.1rem 0.35rem' }}>ضياء</span>
              </div>
            </div>
          </div>

          {/* Controls: Currency, Theme, Wishlist, Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
            {/* Currency Switcher */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.15rem',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              borderRadius: '50px',
              padding: '0.2rem 0.45rem',
              fontSize: '0.75rem',
              fontWeight: '700'
            }}>
              <Globe size={13} color="var(--primary-red)" />
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontWeight: '700',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                {Object.keys(CURRENCIES).map((curr) => (
                  <option key={curr} value={curr} style={{ background: 'var(--bg-card)', color: 'var(--text-main)' }}>
                    {CURRENCIES[curr].code}
                  </option>
                ))}
              </select>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="تغيير المظهر"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-main)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {darkMode ? <Sun size={15} color="#ffaa00" /> : <Moon size={15} color="#475569" />}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              style={{
                position: 'relative',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-main)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <Heart size={15} color="var(--primary-red)" />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '-4px',
                  background: 'var(--primary-red)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '15px',
                  height: '15px',
                  fontSize: '0.6rem',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Toggle Button (Desktop) */}
            <button
              onClick={onOpenCart}
              className="btn-primary desktop-cart-btn"
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.78rem',
                borderRadius: '50px'
              }}
            >
              <ShoppingBag size={15} />
              {cartCount > 0 && (
                <span style={{
                  background: '#ffffff',
                  color: 'var(--primary-red)',
                  borderRadius: '50%',
                  padding: '0.1rem 0.35rem',
                  fontSize: '0.68rem',
                  fontWeight: '900'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Search Input Box */}
        <div className="navbar-search-box" style={{
          width: '100%',
          maxWidth: '520px',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="ابحث عن منتج أو ساعة أو جهاز ذكي..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.55rem 2.4rem 0.55rem 0.75rem',
              borderRadius: '50px',
              border: '2px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: '500',
              outline: 'none',
              transition: 'all 0.25s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
          <Search size={15} style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)'
          }} />
        </div>

      </div>
    </header>
  );
}
