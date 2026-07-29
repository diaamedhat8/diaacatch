import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Truck, 
  ExternalLink, 
  ShoppingBag
} from 'lucide-react';
import { CURRENCIES } from '../data/products';
import { getLocalizedProduct } from '../utils/productTranslations';
import BrandLogosTicker from './BrandLogosTicker';

export default function QuickViewModal({
  product,
  selectedLanguage = 'ar',
  currencyCode,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  t
}) {
  if (!product) return null;

  const displayProduct = getLocalizedProduct(product, selectedLanguage);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(displayProduct.colors ? displayProduct.colors[0] : null);
  const [quantity, setQuantity] = useState(1);

  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const currentPrice = (displayProduct.priceUSD * currency.rate * quantity).toFixed(2);
  const originalPrice = (displayProduct.originalPriceUSD * currency.rate * quantity).toFixed(2);

  const imagesList = displayProduct.images && displayProduct.images.length > 0 ? displayProduct.images : [displayProduct.image];

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
      padding: '1rem'
    }}
    onClick={onClose}
    >
      <div className="modal-box" style={{
        background: 'var(--bg-card)',
        borderRadius: '24px',
        border: '1px solid var(--border-color)',
        maxWidth: '850px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: 'var(--shadow-md)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        padding: '1.75rem'
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
            width: '32px',
            height: '32px',
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
          <X size={18} />
        </button>

        {/* Gallery Section */}
        <div>
          <div style={{
            width: '100%',
            paddingTop: '80%',
            position: 'relative',
            borderRadius: '14px',
            overflow: 'hidden',
            marginBottom: '0.85rem',
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
              <div style={{ position: 'absolute', top: '0.65rem', right: '0.65rem' }}>
                <span className="badge-choice">CHOICE</span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
            {imagesList.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '8px',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
              <span className="badge-discount">-{displayProduct.discount}%</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                ID: #{displayProduct.id}00500
              </span>
            </div>

            <h2 style={{ fontSize: '1.15rem', fontWeight: '800', lineHeight: '1.35', marginBottom: '0.65rem' }}>
              {displayProduct.title}
            </h2>

            {/* Rating & Reviews */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#ffaa00', fontWeight: '800' }}>
                <Star size={15} fill="#ffaa00" />
                <span>{displayProduct.rating}</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>({displayProduct.reviewsCount.toLocaleString()})</span>
              <span style={{ color: '#10b981', fontWeight: '700' }}>{(displayProduct.ordersCount / 1000).toFixed(1)}k+ {t('ordersCount')}</span>
            </div>

            {/* Price Box */}
            <div style={{
              background: 'var(--bg-main)',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary-red)' }}>
                {currency.symbol}{currentPrice}
              </span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                {currency.symbol}{originalPrice}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
              {displayProduct.description}
            </p>

            {/* Specifications */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.4rem' }}>Specs:</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '0.4rem',
                fontSize: '0.78rem'
              }}>
                {Object.entries(displayProduct.specs || {}).map(([key, val]) => (
                  <div key={key} style={{
                    background: 'var(--bg-main)',
                    padding: '0.4rem 0.65rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                  }}>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>{key}</span>
                    <strong style={{ color: 'var(--text-main)' }}>{val}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: '1.25rem'
            }}>
              <Truck size={16} color="#10b981" />
              <span>{t('fastShipping')}: <strong>{displayProduct.deliveryDays}</strong></span>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <a
              href={product.aliExpressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                flex: 1,
                padding: '0.65rem',
                fontSize: '0.88rem',
                textDecoration: 'none'
              }}
            >
              <span>{t('buyOnAliExpress')}</span>
              <ExternalLink size={16} />
            </a>

            <button
              onClick={() => {
                onAddToCart({ ...product, selectedColor, quantity });
                onClose();
              }}
              className="btn-secondary"
              style={{ padding: '0.65rem 1.1rem' }}
            >
              <ShoppingBag size={16} />
              <span>{t('addToCart')}</span>
            </button>
          </div>

          {/* Trusted Brand Logos Ticker under product details */}
          <BrandLogosTicker variant="mini" t={t} />

        </div>
      </div>
    </div>
  );
}
