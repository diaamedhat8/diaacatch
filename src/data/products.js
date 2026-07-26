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
    title: 'AliExpress Choice Premium Verified Deal #1005007502032342',
    category: 'gadgets',
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
    colors: ['Black', 'Silver'],
    specs: {
      'Item Code': '1005007502032342',
      'SKU': '12000059381325615',
      'Shipping': 'AliExpress Choice Express Free'
    },
    aliExpressUrl: REAL_ALIEXPRESS_URL,
    description: 'Verified top-tier seller deal curated directly from AliExpress Choice with guaranteed fast shipping and maximum discount.'
  },
  {
    id: 2,
    title: 'AMOLED Smartwatch Waterproof Ultra Pulse & Sleep Tracker Pro 2026',
    category: 'fashion',
    priceUSD: 24.99,
    originalPriceUSD: 79.99,
    discount: 68,
    rating: 4.9,
    reviewsCount: 3840,
    ordersCount: 15200,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '7-10 Days',
    colors: ['Premium Black', 'Titanium Silver'],
    specs: {
      'Display': '1.43" Ultra AMOLED 60Hz',
      'Battery': '450mAh (Up to 14 Days)',
      'Waterproof': 'IP68 5ATM'
    },
    aliExpressUrl: REAL_ALIEXPRESS_URL,
    description: 'Advanced smartwatch featuring a sleek design and crystal-clear AMOLED display with Bluetooth calling.'
  },
  {
    id: 3,
    title: 'Wireless ANC Headphones Active Noise Cancelling Hi-Fi 40H Battery',
    category: 'electronics',
    priceUSD: 18.50,
    originalPriceUSD: 59.00,
    discount: 68,
    rating: 4.8,
    reviewsCount: 5120,
    ordersCount: 22400,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-8 Days',
    colors: ['Matte Black', 'Snow White'],
    specs: {
      'Noise Control': 'ANC Active Noise Cancellation -38dB',
      'Playtime': '40 Hours'
    },
    aliExpressUrl: REAL_ALIEXPRESS_URL,
    description: 'Immersive sound experience with ANC active noise cancellation and deep bass response.'
  },
  {
    id: 4,
    title: '4K Smart Outdoor Solar Security Camera AI Motion Tracking',
    category: 'smarthome',
    priceUSD: 39.90,
    originalPriceUSD: 119.00,
    discount: 66,
    rating: 4.9,
    reviewsCount: 1950,
    ordersCount: 8300,
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '7-12 Days',
    colors: ['Pure White'],
    specs: {
      'Resolution': '4K Ultra HD Dual Lens',
      'Power Source': 'Solar Panel + 12000mAh Battery'
    },
    aliExpressUrl: REAL_ALIEXPRESS_URL,
    description: 'Advanced solar-powered security camera requiring zero wiring with instant mobile alerts.'
  },
  {
    id: 5,
    title: 'Pro Wireless Gaming Controller RGB Hall Effect Joysticks',
    category: 'gaming',
    priceUSD: 21.80,
    originalPriceUSD: 54.99,
    discount: 60,
    rating: 4.8,
    reviewsCount: 2890,
    ordersCount: 11400,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '6-9 Days',
    colors: ['Translucent Black RGB'],
    specs: {
      'Joysticks': 'Hall Effect Sensors (Zero Drift)',
      'Connection': 'Bluetooth 5.0 + 2.4G Receiver'
    },
    aliExpressUrl: REAL_ALIEXPRESS_URL,
    description: 'High-precision game controller equipped with Hall Effect sensor sticks to prevent drift.'
  },
  {
    id: 6,
    title: '4K Smart Home Theater Projector Wi-Fi 6 & Android 11 Built-in',
    category: 'electronics',
    priceUSD: 56.00,
    originalPriceUSD: 149.99,
    discount: 62,
    rating: 4.9,
    reviewsCount: 4200,
    ordersCount: 18900,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-10 Days',
    colors: ['Space Gray'],
    specs: {
      'Screen Size': 'Up to 150 Inches Full HD',
      'OS': 'Android 11 Built-in'
    },
    aliExpressUrl: REAL_ALIEXPRESS_URL,
    description: 'Turn your room into a cinema! Smart projector with Netflix, YouTube, and powerful speakers.'
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18;
