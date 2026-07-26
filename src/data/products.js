export const CATEGORIES = [
  { id: 'all', nameKey: 'filterAll', icon: 'Sparkles' },
  { id: 'electronics', nameKey: 'filterElectronics', icon: 'Smartphone' },
  { id: 'smarthome', nameKey: 'filterSmarthome', icon: 'Home' },
  { id: 'gaming', nameKey: 'filterGaming', icon: 'Gamepad2' },
  { id: 'fashion', nameKey: 'filterFashion', icon: 'Watch' },
  { id: 'gadgets', nameKey: 'filterGadgets', icon: 'Zap' },
];

export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1, name: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: 'Euro' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound' },
  SAR: { code: 'SAR', symbol: 'SAR', rate: 3.75, name: 'Saudi Riyal' },
  EGP: { code: 'EGP', symbol: 'EGP', rate: 48.5, name: 'Egyptian Pound' },
  AED: { code: 'AED', symbol: 'AED', rate: 3.67, name: 'UAE Dirham' },
};

// Real Target AliExpress Deal URL provided by user
const REAL_ALIEXPRESS_URL = 'https://www.aliexpress.com/item/1005007502032342.html?spm=oneshop.sub_buy_again.waterfall.17.97007f6bhIWI49&skuId=12000059381325615';

export const PRODUCTS = [
  {
    id: 1,
    title: 'AliExpress Choice Verified Deal Item #1005007502032342',
    category: 'electronics',
    priceUSD: 29.90,
    originalPriceUSD: 85.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 3840,
    ordersCount: 15200,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-9 Days',
    colors: ['Original Edition'],
    specs: {
      'Item Code': '1005007502032342',
      'SKU ID': '12000059381325615',
      'Guarantee': 'AliExpress Choice Official Guarantee',
      'Shipping': 'Choice Express Free Shipping'
    },
    aliExpressUrl: REAL_ALIEXPRESS_URL,
    description: 'Verified top-tier seller deal curated directly from AliExpress Choice with guaranteed fast shipping and maximum discount.'
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18;
