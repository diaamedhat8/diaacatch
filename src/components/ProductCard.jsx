import React from 'react';
import { 
  Star, 
  Heart, 
  Eye, 
  ExternalLink, 
  ShoppingBag, 
  Truck 
} from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function ProductCard({
  product,
  currencyCode,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  t
}) {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const currentPrice = (product.priceUSD * currency.rate).toFixed(2);
  const originalPrice = (product.originalPriceUSD * currency.rate).toFixed(2);

  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: '16px',
      border: '1px solid var(--border-color)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }}
    >
      {/* Product Image Area */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '80%',
        overflow: 'hidden',
        background: '#000'
      }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
        />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem',
          zIndex: 2
        }}>
          {product.isChoice && <span className="badge-choice">CHOICE</span>}
          <span className="badge-discount">-{product.discount}%</span>
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          style={{
            position: 'absolute',
            top: '0.5rem',
            left: '0.5rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(6px)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
          }}
        >
          <Heart
            size={16}
            fill={isWishlisted ? 'var(--primary-red)' : 'none'}
            color={isWishlisted ? 'var(--primary-red)' : '#64748b'}
          />
        </button>

        {/* Quick View Floating Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '0.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}>
          <button
            onClick={() => onQuickView(product)}
            style={{
              background: 'rgba(0, 0, 0, 0.78)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '0.35rem 0.75rem',
              fontSize: '0.72rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              backdropFilter: 'blur(4px)',
              whiteSpace: 'nowrap'
            }}
          >
            <Eye size={13} />
            <span>{t('quickView')}</span>
          </button>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="product-card-body" style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          {/* Rating & Sales Volume */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '0.4rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#ffaa00', fontWeight: '800' }}>
              <Star size={13} fill="#ffaa00" />
              <span>{product.rating}</span>
            </div>
            <div style={{ fontWeight: '600' }}>
              {(product.ordersCount / 1000).toFixed(1)}k+ {t('ordersCount')}
            </div>
          </div>

          {/* Title */}
          <h3 className="product-card-title" style={{
            fontSize: '0.9rem',
            fontWeight: '700',
            lineHeight: '1.35',
            color: 'var(--text-main)',
            marginBottom: '0.5rem',
            height: '2.7em',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {product.title}
          </h3>

          {/* Shipping Badge Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.75rem' }}>
            <Truck size={13} color="#10b981" />
            <span className="badge-shipping">{product.deliveryDays}</span>
          </div>
        </div>

        {/* Pricing & Buy CTA */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '0.65rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.4rem',
            marginBottom: '0.65rem',
            flexWrap: 'wrap'
          }}>
            <span className="product-card-price" style={{
              fontSize: '1.25rem',
              fontWeight: '900',
              color: 'var(--primary-red)'
            }}>
              {currency.symbol}{currentPrice}
            </span>
            <span className="product-card-orig-price" style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              textDecoration: 'line-through',
              fontWeight: '500'
            }}>
              {currency.symbol}{originalPrice}
            </span>
          </div>

          {/* Action Buttons Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.4rem' }}>
            <a
              href={product.aliExpressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-buy-aliexpress"
              style={{
                textDecoration: 'none',
                padding: '0.5rem 0.4rem',
                fontSize: '0.78rem',
                borderRadius: '10px',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{t('buyOnAliExpress')}</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={() => onAddToCart(product)}
              title={t('addToCart')}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                borderRadius: '10px',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ShoppingBag size={16} color="var(--primary-red)" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
