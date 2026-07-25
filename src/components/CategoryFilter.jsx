import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Home, 
  Gamepad2, 
  Watch, 
  Zap, 
  SlidersHorizontal,
  Check,
  DollarSign
} from 'lucide-react';
import { CATEGORIES, CURRENCIES } from '../data/products';

const ICON_MAP = {
  Sparkles,
  Smartphone,
  Home,
  Gamepad2,
  Watch,
  Zap
};

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  choiceOnly,
  setChoiceOnly,
  freeShippingOnly,
  setFreeShippingOnly,
  maxPrice,
  setMaxPrice,
  currencyCode,
  sortBy,
  setSortBy,
  t
}) {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const maxPriceDisplay = (maxPrice * currency.rate).toFixed(0);

  return (
    <div style={{
      marginBottom: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      {/* Category Pills Slider */}
      <div className="hide-scrollbar" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.4rem'
      }}>
        {CATEGORIES.map((cat) => {
          const IconComponent = ICON_MAP[cat.icon] || Sparkles;
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1.1rem',
                borderRadius: '50px',
                border: isActive ? 'none' : '1px solid var(--border-color)',
                background: isActive ? 'var(--primary-gradient)' : 'var(--bg-card)',
                color: isActive ? '#ffffff' : 'var(--text-main)',
                fontWeight: isActive ? '800' : '600',
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 14px rgba(255, 43, 74, 0.3)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              <IconComponent size={15} color={isActive ? '#ffffff' : 'var(--primary-red)'} />
              <span>{t(cat.nameKey)}</span>
            </button>
          );
        })}
      </div>

      {/* Filter Options & Sort Row */}
      <div style={{
        background: 'var(--bg-card)',
        padding: '0.85rem 1.1rem',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Toggle Checkboxes */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          
          {/* Choice Only Checkbox */}
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
            fontSize: '0.82rem',
            fontWeight: '700',
            userSelect: 'none'
          }}>
            <input
              type="checkbox"
              checked={choiceOnly}
              onChange={(e) => setChoiceOnly(e.target.checked)}
              style={{ display: 'none' }}
            />
            <div style={{
              width: '18px',
              height: '18px',
              borderRadius: '5px',
              border: choiceOnly ? 'none' : '2px solid var(--border-color)',
              background: choiceOnly ? 'var(--primary-gradient)' : 'var(--bg-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              transition: 'all 0.2s ease'
            }}>
              {choiceOnly && <Check size={13} strokeWidth={3} />}
            </div>
            <span className="badge-choice">{t('choiceOnly')}</span>
          </label>

          {/* Free Shipping Checkbox */}
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
            fontSize: '0.82rem',
            fontWeight: '700',
            userSelect: 'none'
          }}>
            <input
              type="checkbox"
              checked={freeShippingOnly}
              onChange={(e) => setFreeShippingOnly(e.target.checked)}
              style={{ display: 'none' }}
            />
            <div style={{
              width: '18px',
              height: '18px',
              borderRadius: '5px',
              border: freeShippingOnly ? 'none' : '2px solid var(--border-color)',
              background: freeShippingOnly ? '#10b981' : 'var(--bg-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              transition: 'all 0.2s ease'
            }}>
              {freeShippingOnly && <Check size={13} strokeWidth={3} />}
            </div>
            <span>{t('freeShippingOnly')}</span>
          </label>
        </div>

        {/* Price Slider & Sort Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          
          {/* Price Filter Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: '700' }}>
            <DollarSign size={14} color="var(--primary-red)" />
            <span style={{ color: 'var(--text-muted)' }}>{t('maxPriceFilter')}</span>
            <strong style={{ color: 'var(--primary-red)', minWidth: '55px' }}>
              {currency.symbol}{maxPriceDisplay}
            </strong>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ accentColor: 'var(--primary-red)', cursor: 'pointer', width: '90px' }}
            />
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <SlidersHorizontal size={15} color="var(--text-muted)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>{t('sortBy')}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                padding: '0.4rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="featured">{t('sortFeatured')}</option>
              <option value="discount">{t('sortDiscount')}</option>
              <option value="price-asc">{t('sortPriceAsc')}</option>
              <option value="price-desc">{t('sortPriceDesc')}</option>
              <option value="rating">{t('sortRating')}</option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
}
