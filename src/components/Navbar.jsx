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
        fontSize: '0.8rem',
        fontWeight: '700',
        padding: '0.4rem 1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <Tag size={14} />
        <span>عروض AliExpress Choice اليومية: شحن مجاني وتخفيضات تصل إلى 80% + خصم إضافي عند الطلب الأول!</span>
      </div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.85rem',
        paddingBottom: '0.85rem',
        gap: '1rem'
      }}>
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--primary-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 14px rgba(255, 43, 74, 0.4)'
          }}>
            <Sparkles size={24} />
          </div>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <span style={{
                fontSize: '1.55rem',
                fontWeight: '900',
                letterSpacing: '-0.5px',
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                diaaCatch
              </span>
              <span className="badge-choice" style={{ fontSize: '0.7rem' }}>ضياء كَاتش</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '700' }}>
              منصة ضياء لاصتياد أفضل صفقات AliExpress الـ Choice
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div style={{
          flex: '1',
          maxWidth: '520px',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="ابحث عن منتج، ساعة، كاميرا، أو جهاز ذكي في AliExpress..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 2.8rem 0.75rem 1rem',
              borderRadius: '50px',
              border: '2px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.9rem',
              fontWeight: '500',
              outline: 'none',
              transition: 'all 0.25s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
          <Search size={18} style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)'
          }} />
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          {/* Currency Switcher */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)',
            borderRadius: '50px',
            padding: '0.35rem 0.75rem',
            fontSize: '0.85rem',
            fontWeight: '700'
          }}>
            <Globe size={15} color="var(--primary-red)" />
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {Object.keys(CURRENCIES).map((curr) => (
                <option key={curr} value={curr} style={{ background: 'var(--bg-card)', color: 'var(--text-main)' }}>
                  {CURRENCIES[curr].code} ({CURRENCIES[curr].symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title="تغيير المظهر"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {darkMode ? <Sun size={19} color="#ffaa00" /> : <Moon size={19} color="#475569" />}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Heart size={19} color="var(--primary-red)" />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                background: 'var(--primary-red)',
                color: '#fff',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '0.7rem',
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
              padding: '0.55rem 1.1rem',
              fontSize: '0.85rem'
            }}
          >
            <ShoppingBag size={18} />
            <span>السلة</span>
            {cartCount > 0 && (
              <span style={{
                background: '#ffffff',
                color: 'var(--primary-red)',
                borderRadius: '50%',
                padding: '0.1rem 0.45rem',
                fontSize: '0.75rem',
                fontWeight: '900',
                marginRight: '0.2rem'
              }}>
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}
