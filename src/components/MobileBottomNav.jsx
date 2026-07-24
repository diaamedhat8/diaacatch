import React from 'react';
import { Home, Grid, Heart, ShoppingBag } from 'lucide-react';

export default function MobileBottomNav({
  activeTab,
  setActiveTab,
  wishlistCount,
  cartCount,
  onOpenCart,
  onOpenWishlist,
  onScrollToTop
}) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 150,
      background: 'var(--bg-header)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-color)',
      padding: '0.4rem 0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)'
    }} className="mobile-bottom-nav">
      
      {/* Home Button */}
      <button
        onClick={() => {
          setActiveTab('home');
          onScrollToTop();
        }}
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === 'home' ? 'var(--primary-red)' : 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          fontSize: '0.72rem',
          fontWeight: activeTab === 'home' ? '800' : '600',
          cursor: 'pointer'
        }}
      >
        <Home size={20} color={activeTab === 'home' ? 'var(--primary-red)' : 'var(--text-muted)'} />
        <span>الرئيسية</span>
      </button>

      {/* Categories Scroll Button */}
      <button
        onClick={() => {
          setActiveTab('categories');
          onScrollToTop();
        }}
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === 'categories' ? 'var(--primary-red)' : 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          fontSize: '0.72rem',
          fontWeight: activeTab === 'categories' ? '800' : '600',
          cursor: 'pointer'
        }}
      >
        <Grid size={20} color={activeTab === 'categories' ? 'var(--primary-red)' : 'var(--text-muted)'} />
        <span>الأقسام</span>
      </button>

      {/* Wishlist Button */}
      <button
        onClick={() => {
          onOpenWishlist();
          setActiveTab('wishlist');
        }}
        style={{
          position: 'relative',
          background: 'none',
          border: 'none',
          color: activeTab === 'wishlist' ? 'var(--primary-red)' : 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          fontSize: '0.72rem',
          fontWeight: activeTab === 'wishlist' ? '800' : '600',
          cursor: 'pointer'
        }}
      >
        <Heart size={20} color={activeTab === 'wishlist' ? 'var(--primary-red)' : 'var(--text-muted)'} />
        {wishlistCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '10px',
            background: 'var(--primary-red)',
            color: '#fff',
            borderRadius: '50%',
            width: '15px',
            height: '15px',
            fontSize: '0.62rem',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {wishlistCount}
          </span>
        )}
        <span>المفضلة</span>
      </button>

      {/* Cart Button */}
      <button
        onClick={() => {
          onOpenCart();
          setActiveTab('cart');
        }}
        style={{
          position: 'relative',
          background: 'none',
          border: 'none',
          color: activeTab === 'cart' ? 'var(--primary-red)' : 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          fontSize: '0.72rem',
          fontWeight: activeTab === 'cart' ? '800' : '600',
          cursor: 'pointer'
        }}
      >
        <ShoppingBag size={20} color={activeTab === 'cart' ? 'var(--primary-red)' : 'var(--text-muted)'} />
        {cartCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '10px',
            background: 'var(--primary-red)',
            color: '#fff',
            borderRadius: '50%',
            width: '15px',
            height: '15px',
            fontSize: '0.62rem',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {cartCount}
          </span>
        )}
        <span>السلة</span>
      </button>

    </nav>
  );
}
