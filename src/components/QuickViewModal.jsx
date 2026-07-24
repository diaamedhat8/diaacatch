import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Truck, 
  ShieldCheck, 
  ExternalLink, 
  ShoppingBag, 
  Heart, 
  Check,
  Package
} from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function QuickViewModal({
  product,
  currencyCode,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [quantity, setQuantity] = useState(1);

  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const currentPrice = (product.priceUSD * currency.rate * quantity).toFixed(2);
  const originalPrice = (product.originalPriceUSD * currency.rate * quantity).toFixed(2);

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem',
      animation: 'fadeIn 0.2s ease'
    }}
    onClick={onClose}
    >
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '24px',
        border: '1px solid var(--border-color)',
        maxWidth: '900px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: 'var(--shadow-md)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        padding: '2rem'
      }}
      onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Gallery Section */}
        <div>
          {/* Main Large Display Image */}
          <div style={{
            width: '100%',
            paddingTop: '80%',
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '1rem',
            background: '#000'
          }}>
            <img
              src={imagesList[activeImageIndex]}
              alt={product.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {product.isChoice && (
              <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                <span className="badge-choice">CHOICE</span>
              </div>
            )}
          </div>

          {/* Thumbnails Row */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
            {imagesList.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '10px',
                  border: activeImageIndex === idx ? '2px solid var(--primary-red)' : '1px solid var(--border-color)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  padding: 0,
                  background: 'none'
                }}
              >
                <img src={imgUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge-discount">خصم {product.discount}%</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                رقم التتبع: #{product.id}00500
              </span>
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', lineHeight: '1.4', marginBottom: '0.75rem' }}>
              {product.title}
            </h2>

            {/* Rating & Reviews */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#ffaa00', fontWeight: '800' }}>
                <Star size={16} fill="#ffaa00" />
                <span>{product.rating}</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>({product.reviewsCount.toLocaleString()} مراجعة مشتري)</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ color: '#10b981', fontWeight: '700' }}>{product.ordersCount.toLocaleString()} تم شحنها</span>
            </div>

            {/* Price Box */}
            <div style={{
              background: 'var(--bg-main)',
              padding: '1rem',
              borderRadius: '14px',
              border: '1px solid var(--border-color)',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem'
            }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary-red)' }}>
                {currentPrice} {currency.symbol}
              </span>
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                {originalPrice} {currency.symbol}
              </span>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem' }}>اللون المختار: {selectedColor}</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px',
                        border: selectedColor === color ? '2px solid var(--primary-red)' : '1px solid var(--border-color)',
                        background: selectedColor === color ? 'rgba(255, 43, 74, 0.1)' : 'var(--bg-main)',
                        color: selectedColor === color ? 'var(--primary-red)' : 'var(--text-main)',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        cursor: 'pointer'
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Grid */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem' }}>المواصفات التقنية:</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.5rem',
                fontSize: '0.8rem'
              }}>
                {Object.entries(product.specs || {}).map(([key, val]) => (
                  <div key={key} style={{
                    background: 'var(--bg-main)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                  }}>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>{key}</span>
                    <strong style={{ color: 'var(--text-main)' }}>{val}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem'
            }}>
              <Truck size={18} color="#10b981" />
              <span>تسليم متوقع خلال <strong>{product.deliveryDays}</strong> مع ضمان AliExpress لسلامة الشحنة</span>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={product.aliExpressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                flex: 1,
                padding: '0.75rem',
                fontSize: '0.95rem',
                textDecoration: 'none'
              }}
            >
              <span>شراء الآن من AliExpress</span>
              <ExternalLink size={18} />
            </a>

            <button
              onClick={() => {
                onAddToCart({ ...product, selectedColor, quantity });
                onClose();
              }}
              className="btn-secondary"
              style={{ padding: '0.75rem 1.25rem' }}
            >
              <ShoppingBag size={18} />
              <span>إضافة للسلة</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
