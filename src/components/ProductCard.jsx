import React from 'react';
import { 
  Star, 
  Heart, 
  Eye, 
  ExternalLink, 
  ShoppingBag, 
  Truck, 
  CheckCircle2 
} from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function ProductCard({
  product,
  currencyCode,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart
}) {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const currentPrice = (product.priceUSD * currency.rate).toFixed(2);
  const originalPrice = (product.originalPriceUSD * currency.rate).toFixed(2);

  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: '20px',
      border: '1px solid var(--border-color)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-6px)';
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
        paddingTop: '75%', /* 4:3 Aspect Ratio */
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
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
        />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          zIndex: 2
        }}>
          {product.isChoice && <span className="badge-choice">CHOICE</span>}
          <span className="badge-discount">خصم {product.discount}%</span>
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            transition: 'all 0.2s ease'
          }}
        >
          <Heart
            size={18}
            fill={isWishlisted ? 'var(--primary-red)' : 'none'}
            color={isWishlisted ? 'var(--primary-red)' : '#64748b'}
          />
        </button>

        {/* Quick View Floating Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}>
          <button
            onClick={() => onQuickView(product)}
            style={{
              background: 'rgba(0, 0, 0, 0.75)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '0.4rem 0.9rem',
              fontSize: '0.78rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backdropFilter: 'blur(6px)',
              transition: 'all 0.2s ease'
            }}
          >
            <Eye size={14} />
            <span>نظرة سريعة</span>
          </button>
        </div>
      </div>

      {/* Card Details Body */}
      <div style={{
        padding: '1.2rem',
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
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginBottom: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#ffaa00', fontWeight: '800' }}>
              <Star size={14} fill="#ffaa00" />
              <span>{product.rating}</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>({product.reviewsCount.toLocaleString()})</span>
            </div>
            <div style={{ fontWeight: '600' }}>
              {(product.ordersCount / 1000).toFixed(1)}k+ طلبيات
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: '0.98rem',
            fontWeight: '700',
            lineHeight: '1.4',
            color: 'var(--text-main)',
            marginBottom: '0.75rem',
            height: '2.8em',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {product.title}
          </h3>

          {/* Shipping Badge Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem' }}>
            <Truck size={14} color="#10b981" />
            <span className="badge-shipping">شحن مجاني السريع ({product.deliveryDays})</span>
          </div>
        </div>

        {/* Pricing & Buy CTA */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '0.85rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.5rem',
            marginBottom: '0.85rem'
          }}>
            <span style={{
              fontSize: '1.4rem',
              fontWeight: '900',
              color: 'var(--primary-red)'
            }}>
              {currentPrice} {currency.symbol}
            </span>
            <span style={{
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              textDecoration: 'line-through',
              fontWeight: '500'
            }}>
              {originalPrice} {currency.symbol}
            </span>
          </div>

          {/* Action Buttons Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem' }}>
            <a
              href={product.aliExpressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                textDecoration: 'none',
                padding: '0.55rem',
                fontSize: '0.85rem',
                borderRadius: '12px'
              }}
            >
              <span>شراء من AliExpress</span>
              <ExternalLink size={15} />
            </a>

            <button
              onClick={() => onAddToCart(product)}
              title="إضافة للسلة"
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                borderRadius: '12px',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ShoppingBag size={18} color="var(--primary-red)" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
