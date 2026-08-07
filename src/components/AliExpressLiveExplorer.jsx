import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Layers, 
  Tag, 
  ExternalLink, 
  PlusCircle, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  SlidersHorizontal,
  Flame,
  ArrowRight,
  ArrowLeft,
  ChevronDown
} from 'lucide-react';
import { buildAliExpressAffiliateUrl, ALIEXPRESS_CATALOG_SEGMENTS } from '../utils/aliExpressApi';
import { CURRENCIES } from '../data/products';

// Comprehensive catalog from smallest to largest items
const EXTENDED_LIVE_EXPLORER_CATALOG = [
  // Tier 1: Micro & Small Accessories ($0.50 - $5)
  {
    id: 901,
    title: 'وصلة محول OTG ميني USB Type-C فائقة السرعة للأجهزة والهواتف',
    tier: 'micro',
    category: 'gadgets',
    priceUSD: 0.99,
    originalPriceUSD: 4.50,
    discount: 78,
    rating: 4.9,
    ordersCount: 145000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    description: 'أصغر محول Type-C سريع لنقل البيانات والتوصيل المباشر بالهاتف والفلاش ميموري.'
  },
  {
    id: 902,
    title: 'كابل شحن مغناطيسي سريع 3 في 1 مضيء ضد القطع بطول 2 متر',
    tier: 'micro',
    category: 'electronics',
    priceUSD: 1.85,
    originalPriceUSD: 6.90,
    discount: 73,
    rating: 4.8,
    ordersCount: 89000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    description: 'رأس مغناطيسي قابل للدوران 540 درجة لجميع أنواع الهواتف مع شحن سريع وحماية للبطارية.'
  },
  {
    id: 903,
    title: 'ميدالية أداة جيب متعددة الوظائف من الفولاذ المقاوم للصدأ 18 في 1',
    tier: 'micro',
    category: 'gadgets',
    priceUSD: 2.30,
    originalPriceUSD: 9.00,
    discount: 74,
    rating: 4.9,
    ordersCount: 67000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    description: 'أداة ندفة الثلج متعددة الاستخدامات لفحص البراغي، الفتح، والطوارئ بحجم ميدالية المفاتيح.'
  },
  {
    id: 904,
    title: 'حامل هاتف مغناطيسي دوار 360 درجة لفتحات مكيف السيارة فائق الثبات',
    tier: 'micro',
    category: 'gadgets',
    priceUSD: 3.20,
    originalPriceUSD: 12.00,
    discount: 73,
    rating: 4.9,
    ordersCount: 112000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
    description: 'مغناطيس نيوديميوم N52 قوي يثبت الهاتف بإحكام أثناء القيادة على أصعب الطرق.'
  },

  // Tier 2: Daily Gadgets & Tools ($5 - $20)
  {
    id: 905,
    title: 'سماعات لينوفو ThinkPlus اللاسلكية بنظام عزل الضوضاء وصوت Hi-Fi',
    tier: 'daily',
    category: 'electronics',
    priceUSD: 13.90,
    originalPriceUSD: 45.00,
    discount: 69,
    rating: 4.9,
    ordersCount: 105000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: 'صوت محيطي نقي، وسادات مريحة مع بطارية تدوم 40 ساعة متواصلة.'
  },
  {
    id: 906,
    title: 'مصباح استشعار حركة ذكي قابل للشحن للممرات وخزائن الملابس بإضاءة LED دافئة',
    tier: 'daily',
    category: 'smarthome',
    priceUSD: 6.70,
    originalPriceUSD: 19.99,
    discount: 66,
    rating: 4.8,
    ordersCount: 43000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80',
    description: 'إضاءة أوتوماتيكية عند المرور مع تثبيت مغناطيسي سهل بدون حفر أو أسلاك.'
  },
  {
    id: 907,
    title: 'ماكينة حلاقة كهربائية صغيرة للجيب ومقاومة للماء Type-C سريعة الشحن',
    tier: 'daily',
    category: 'fashion',
    priceUSD: 8.90,
    originalPriceUSD: 28.00,
    discount: 68,
    rating: 4.8,
    ordersCount: 78000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80',
    description: 'شفرات توربينية من الفولاذ وحجم فائق الصغر مناسب للسفر والتنقل اليومي.'
  },

  // Tier 3: Smart Tech & Phones ($20 - $80)
  {
    id: 908,
    title: 'ساعة ذكية عسكرية رياضية بشاشة AMOLED ومقاومة للماء 5ATM وإجراء المكالمات',
    tier: 'smart',
    category: 'fashion',
    priceUSD: 27.50,
    originalPriceUSD: 89.00,
    discount: 69,
    rating: 4.9,
    ordersCount: 62000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    description: 'هيكل معدني قوي، شاشة تعمل دائماً، تتبع لأكثر من 100 وضع رياضي وتنبيهات كاملة.'
  },
  {
    id: 909,
    title: 'باور بنك باسيوس اللاسلكي المغناطيسي 20W سريع الشحن بسعة 10,000mAh',
    tier: 'smart',
    category: 'gadgets',
    priceUSD: 24.50,
    originalPriceUSD: 65.00,
    discount: 62,
    rating: 4.9,
    ordersCount: 54000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1622445268465-84385d8128da?auto=format&fit=crop&w=600&q=80',
    description: 'يدعم MagSafe المغناطيسي والشحن السريع لجميع أنواع الهواتف الذكية مع شاشة رقمية.'
  },
  {
    id: 910,
    title: 'كاميرا مراقبة ذكية 4K مزدوجة العدسة تدور 360 درجة مع رؤية ليلية ملونة وتتبع الحركة',
    tier: 'smart',
    category: 'smarthome',
    priceUSD: 36.00,
    originalPriceUSD: 95.00,
    discount: 62,
    rating: 4.9,
    ordersCount: 31000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
    description: 'ربط مباشر بالواي فاي والهاتف مع إنذار ذكي، وتحدث باتجاهين بدقة فائقة.'
  },

  // Tier 4: Laptops & Displays ($80 - $500)
  {
    id: 911,
    title: 'شاشة قيمنق محمولة 15.6 بوصة IPS بدقة 2K وتردد 144Hz للابتوب والبلايستيشن',
    tier: 'laptops',
    category: 'laptops',
    priceUSD: 98.00,
    originalPriceUSD: 240.00,
    discount: 59,
    rating: 4.9,
    ordersCount: 19000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
    description: 'شاشة نحيفة للغاية تدعم Type-C و HDMI، ألوان 100% sRGB وتناسب العمل والألعاب والتنقل.'
  },
  {
    id: 912,
    title: 'بروجكتر سينمائي منزلي ذكي 4K أندرويد بنظام واي فاي 6 مدمج ونتفليكس ويوتيوب',
    tier: 'laptops',
    category: 'electronics',
    priceUSD: 85.00,
    originalPriceUSD: 210.00,
    discount: 60,
    rating: 4.9,
    ordersCount: 28000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
    description: 'عرض حتى 200 بوصة بوضوح ساطع مع تصحيح زوايا تلقائي وصوت ستيريو مدمج.'
  },
  {
    id: 913,
    title: 'كمبيوتر مصغر Mini PC للأعمال والألعاب بمعالج 16-Core ورام 16GB و 512GB SSD',
    tier: 'laptops',
    category: 'laptops',
    priceUSD: 175.00,
    originalPriceUSD: 390.00,
    discount: 55,
    rating: 4.8,
    ordersCount: 14000,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80',
    description: 'جهاز كمبيوتر مكتبي فائق القوة بحجم راحة اليد يدعم تشغيل 3 شاشات 4K معاً.'
  },

  // Tier 5: Heavy Appliances & Big Devices ($500+)
  {
    id: 914,
    title: 'سكوتر كهربائي ذكي للبالغين سرعة 45 كم/س ومدى 60 كم مع نظام فرامل هيدروليك وتطبيق هاتف',
    tier: 'heavy',
    category: 'appliances',
    priceUSD: 520.00,
    originalPriceUSD: 1100.00,
    discount: 53,
    rating: 4.9,
    ordersCount: 8200,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    description: 'محرك قوي 800W، إطارات هوائية 10 بوصة ضد الانزلاق وهيكل ألومنيوم طيران قابل للطي.'
  },
  {
    id: 915,
    title: 'محطة طاقة شمسية محمولة 1200W للتخييم والطوارئ مع مخارج 220V وشحن سريع 1000Wh',
    tier: 'heavy',
    category: 'appliances',
    priceUSD: 680.00,
    originalPriceUSD: 1450.00,
    discount: 53,
    rating: 4.9,
    ordersCount: 5400,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    description: 'تشغيل الثلاجات، الأجهزة المنزلية، شاشات التلفزيون وأدوات العمل في أي مكان بكفاءة كاملة.'
  },
  {
    id: 916,
    title: 'طائرة درون احترافية للتصوير الجوي 4K بكاميرا جيمبال ثلاثية المحاور ومدى 10 كم وتتبع GPS',
    tier: 'heavy',
    category: 'gadgets',
    priceUSD: 580.00,
    originalPriceUSD: 1200.00,
    discount: 52,
    rating: 4.9,
    ordersCount: 9600,
    isChoice: true,
    freeShipping: true,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80',
    description: 'تجنب العوائق بزاوية 360 درجة، بث فيديو مباشر بدقة عالية وبطارية تدوم 42 دقيقة طيران.'
  }
];

export default function AliExpressLiveExplorer({ 
  onImportProduct, 
  currencyCode = 'SAR',
  t, 
  dir 
}) {
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [importedMap, setImportedMap] = useState({});

  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  const filteredItems = useMemo(() => {
    return EXTENDED_LIVE_EXPLORER_CATALOG.filter((item) => {
      if (selectedSegment !== 'all' && item.tier !== selectedSegment) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedSegment, searchQuery]);

  const handleImport = (item) => {
    if (onImportProduct) {
      onImportProduct({
        ...item,
        priceUSD: item.priceUSD,
        originalPriceUSD: item.originalPriceUSD,
        specs: {
          'الفئة': item.tier,
          'التقييم': `${item.rating} / 5`,
          'الطلبيات': `+${item.ordersCount.toLocaleString()}`,
          'الشحن': 'AliExpress Choice Fast Express'
        },
        aliExpressUrl: buildAliExpressAffiliateUrl('', undefined, item.title)
      });
      setImportedMap((prev) => ({ ...prev, [item.id]: true }));
    }
  };

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section style={{
      background: 'var(--bg-card)',
      borderRadius: '24px',
      border: '1px solid var(--border-color)',
      padding: '1.75rem 1.25rem',
      marginBottom: '2rem',
      boxShadow: 'var(--shadow-md)'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--choice-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontWeight: '900'
          }}>
            <Layers size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '900', margin: 0 }}>
              مستكشف منتجات AliExpress الشامل (من أصغر منتج إلى أكبر منتج)
            </h2>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              استعراض مباشر لجميع الفئات والأسعار مع كود الخصم ورابط الإفلييت المباشر
            </span>
          </div>
        </div>

        {/* Quick Search inside Explorer */}
        <div style={{ position: 'relative', minWidth: '260px', flex: 1, maxWidth: '380px' }}>
          <Search size={16} style={{ position: 'absolute', [dir === 'rtl' ? 'right' : 'left']: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="ابحث في الكتالوج الشامل..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              [dir === 'rtl' ? 'paddingRight' : 'paddingLeft']: '2.4rem',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-main)',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>

      {/* Segments Filter Pills */}
      <div className="hide-scrollbar" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.75rem',
        marginBottom: '1rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <button
          onClick={() => setSelectedSegment('all')}
          style={{
            padding: '0.45rem 0.9rem',
            borderRadius: '10px',
            border: 'none',
            fontSize: '0.8rem',
            fontWeight: '800',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            background: selectedSegment === 'all' ? 'var(--primary-red)' : 'var(--bg-main)',
            color: selectedSegment === 'all' ? '#fff' : 'var(--text-main)',
            transition: 'all 0.2s ease'
          }}
        >
          🌟 جميع الفئات والأسعار ({EXTENDED_LIVE_EXPLORER_CATALOG.length})
        </button>

        {ALIEXPRESS_CATALOG_SEGMENTS.map((seg) => {
          const isActive = selectedSegment === seg.id;
          return (
            <button
              key={seg.id}
              onClick={() => setSelectedSegment(seg.id)}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: '10px',
                border: 'none',
                fontSize: '0.8rem',
                fontWeight: '800',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                background: isActive ? 'var(--primary-red)' : 'var(--bg-main)',
                color: isActive ? '#fff' : 'var(--text-main)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>{seg.nameAr}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Products */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {filteredItems.map((item) => {
          const priceConverted = (item.priceUSD * currency.rate).toFixed(2);
          const origConverted = (item.originalPriceUSD * currency.rate).toFixed(2);
          const isImported = importedMap[item.id];
          const directUrl = buildAliExpressAffiliateUrl('', undefined, item.title);

          return (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-main)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative'
              }}
            >
              {/* Image & Discount Badge */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '8px',
                  [dir === 'rtl' ? 'right' : 'left']: '8px',
                  background: 'var(--primary-red)',
                  color: '#fff',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: '800'
                }}>
                  -{item.discount}%
                </span>
                <span style={{
                  position: 'absolute',
                  bottom: '8px',
                  [dir === 'rtl' ? 'right' : 'left']: '8px',
                  background: 'rgba(0,0,0,0.75)',
                  color: '#ffd700',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '6px',
                  fontSize: '0.68rem',
                  fontWeight: '700'
                }}>
                  Choice Deal
                </span>
              </div>

              {/* Info Body */}
              <div style={{ padding: '0.85rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: '0.88rem',
                  fontWeight: '800',
                  lineHeight: '1.35',
                  margin: '0 0 0.4rem 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  minHeight: '2.4rem'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  margin: '0 0 0.6rem 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {item.description}
                </p>

                {/* Pricing Row */}
                <div style={{ marginTop: 'auto', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-red)' }}>
                      {currency.symbol} {priceConverted}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                      {currency.symbol} {origConverted}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '700' }}>
                    ⚡ شحن سريع + حماية المشتري
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
                  <a
                    href={directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      padding: '0.45rem',
                      fontSize: '0.75rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.3rem',
                      fontWeight: '800'
                    }}
                  >
                    <span>شراء</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => handleImport(item)}
                    style={{
                      padding: '0.45rem',
                      fontSize: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      background: isImported ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
                      color: isImported ? '#10b981' : 'var(--text-main)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.3rem',
                      fontWeight: '800'
                    }}
                  >
                    {isImported ? (
                      <>
                        <CheckCircle2 size={13} color="#10b981" />
                        <span>مستورد</span>
                      </>
                    ) : (
                      <>
                        <PlusCircle size={13} />
                        <span>إضافة للمتجر</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
