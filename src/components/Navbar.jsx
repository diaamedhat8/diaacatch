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
      transition: 'all 0.3s ease'
    }}>
      {/* Top Banner Notice */}
      <div style={{
        background: 'var(--primary-gradient)',
        color: '#ffffff',
        fontSize: '0.75rem',
        fontWeight: '700',
        padding: '0.35rem 0.75rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.4rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }}>
        <Tag size={13} style={{ flexShrink: 0 }} />
        <span>عروض diaaCatch اليومية: شحن مجاني وتخفيضات حتى 80%!</span>
      </div>

      <div className="container navbar-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        gap: '1rem'
      }}>
        {/* Top Row / Brand & Quick Actions */}
        <div className="navbar-top-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(255, 43, 74, 0.4)',
              flexShrink: 0
            }}>
              <Sparkles size={22} />
            </div>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <span style={{
                  fontSize: '1.4rem',
                  fontWeight: '900',
                  letterSpacing: '-0.5px',
                  background: 'var(--primary-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  diaaCatch
                </span>
                <span className="badge-choice" style={{ fontSize: '0.65rem' }}>ضياء</span>
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                صفقات AliExpress Choice
              </div>
            </div>
          </div>

          {/* Controls: Currency, Theme, Wishlist, Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Currency Switcher */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              borderRadius: '50px',
              padding: '0.25rem 0.6rem',
              fontSize: '0.8rem',
              fontWeight: '700'
            }}>
              <Globe size={14} color="var(--primary-red)" />
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontWeight: '700',
                  fontSize: '0.8rem',
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
                width: '36px',
                height: '36px',
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
              {darkMode ? <Sun size={17} color="#ffaa00" /> : <Moon size={17} color="#475569" />}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              style={{
                position: 'relative',
                width: '36px',
                height: '36px',
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
              <Heart size={17} color="var(--primary-red)" />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '-4px',
                  background: 'var(--primary-red)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Toggle Button */}
            <button
              onClick={onOpenCart}
              className="btn-primary"
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.8rem',
                borderRadius: '50px'
              }}
            >
              <ShoppingBag size={16} />
              {cartCount > 0 && (
                <span style={{
                  background: '#ffffff',
                  color: 'var(--primary-red)',
                  borderRadius: '50%',
                  padding: '0.1rem 0.35rem',
                  fontSize: '0.7rem',
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
          flex: '1',
          maxWidth: '520px',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="ابحث عن منتج، ساعة، كاميرا، أو جهاز ذكي..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 2.6rem 0.65rem 0.85rem',
              borderRadius: '50px',
              border: '2px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.85rem',
              fontWeight: '500',
              outline: 'none',
              transition: 'all 0.25s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
          <Search size={16} style={{
            position: 'absolute',
            right: '0.85rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)'
          }} />
        </div>

      </div>
    </header>
  );
}
