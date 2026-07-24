import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Home, 
  Gamepad2, 
  Watch, 
  Zap, 
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

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
  sortBy,
  setSortBy
}) {
  return (
    <div style={{
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
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
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '50px',
                border: isActive ? 'none' : '1px solid var(--border-color)',
                background: isActive ? 'var(--primary-gradient)' : 'var(--bg-card)',
                color: isActive ? '#ffffff' : 'var(--text-main)',
                fontWeight: isActive ? '800' : '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 4px 14px rgba(255, 43, 74, 0.3)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              <IconComponent size={17} color={isActive ? '#ffffff' : 'var(--primary-red)'} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Filter Options & Sort Row */}
      <div style={{
        background: 'var(--bg-card)',
        padding: '0.9rem 1.25rem',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Toggle Checkboxes */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          
          {/* Choice Only Checkbox */}
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.88rem',
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
              width: '20px',
              height: '20px',
              borderRadius: '6px',
              border: choiceOnly ? 'none' : '2px solid var(--border-color)',
              background: choiceOnly ? 'var(--primary-gradient)' : 'var(--bg-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              transition: 'all 0.2s ease'
            }}>
              {choiceOnly && <Check size={14} strokeWidth={3} />}
            </div>
            <span className="badge-choice">AliExpress CHOICE</span>
          </label>

          {/* Free Shipping Checkbox */}
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.88rem',
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
              width: '20px',
              height: '20px',
              borderRadius: '6px',
              border: freeShippingOnly ? 'none' : '2px solid var(--border-color)',
              background: freeShippingOnly ? '#10b981' : 'var(--bg-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              transition: 'all 0.2s ease'
            }}>
              {freeShippingOnly && <Check size={14} strokeWidth={3} />}
            </div>
            <span>شحن مجاني فقط</span>
          </label>
        </div>

        {/* Sort Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={16} color="var(--text-muted)" />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>الترتيب حسب:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.45rem 0.85rem',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: '700',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="featured">الأكثر شعبية (الموصى به)</option>
            <option value="discount">أعلى نسبة تخفيض %</option>
            <option value="price-asc">السعر: من الأقل للأعلى</option>
            <option value="price-desc">السعر: من الأعلى للأقل</option>
            <option value="rating">الأعلى تقييماً ★</option>
          </select>
        </div>

      </div>
    </div>
  );
}
