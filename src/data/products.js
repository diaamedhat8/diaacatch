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

// Target base URL for affiliate link transformation
const BASE_ALIEXPRESS_ITEM_URL = 'https://www.aliexpress.com/item/1005007502032342.html?spm=oneshop.sub_buy_again.waterfall.17.97007f6bhIWI49&skuId=12000059381325615';

export const PRODUCTS = [
  {
    id: 1,
    title: 'AliExpress Choice Verified Top Best Seller Item #1005007502032342',
    category: 'gadgets',
    priceUSD: 29.90,
    originalPriceUSD: 85.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 14250,
    ordersCount: 68400,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-7 Days',
    colors: ['Space Gray', 'Silver Metallic'],
    specs: {
      'Item Code': '1005007502032342',
      'SKU ID': '12000059381325615',
      'Sales Volume': '68,400+ Units Sold Globally',
      'Guarantee': 'AliExpress Choice Official Guarantee',
      'Shipping': 'Choice Express 5-Day Delivery'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: '#1 Best-selling official Choice deal curated directly from top verified AliExpress stores with guaranteed fast 5-day shipping and maximum discount.'
  },
  {
    id: 2,
    title: 'Lenovo ThinkPlus TH10 ANC Wireless Headphones Hi-Fi Stereo Sound 40H',
    category: 'electronics',
    priceUSD: 14.80,
    originalPriceUSD: 49.99,
    discount: 70,
    rating: 4.9,
    reviewsCount: 22800,
    ordersCount: 105000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-8 Days',
    colors: ['Matte Black', 'Pearl White', 'Beige Gold'],
    specs: {
      'Brand': 'Lenovo Official',
      'Noise Reduction': 'Active Noise Cancelling -35dB',
      'Battery Life': '40 Hours Playback / 300mAh',
      'Driver Unit': '40mm Dynamic Bass Unit',
      'Bluetooth': 'V5.3 Ultra Low Latency'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: 'AliExpress Global #1 Headphone Best-Seller! Lenovo ThinkPlus TH10 provides HD acoustic sound, soft protein earmuffs, and active noise isolation.'
  },
  {
    id: 3,
    title: 'AMOLED Smartwatch Ultra 2026 Waterproof Heart Rate & SpO2 Bluetooth Call',
    category: 'fashion',
    priceUSD: 23.50,
    originalPriceUSD: 75.00,
    discount: 69,
    rating: 4.8,
    reviewsCount: 18400,
    ordersCount: 84000,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '6-9 Days',
    colors: ['Titanium Black', 'Silver Armor', 'Rose Edition'],
    specs: {
      'Display': '1.43" Ultra Always-On AMOLED (466x466 px)',
      'Health Monitoring': '24/7 Heart Rate, Blood Oxygen & Sleep',
      'Sports Modes': '100+ Professional Workout Modes',
      'Water Resistance': 'IP68 50M Waterproof'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: 'Top-selling premium smartwatch with 60Hz AMOLED display, Bluetooth phone calls, customizable watch faces, and 14-day battery standby.'
  },
  {
    id: 4,
    title: '4K 60FPS Action Camera Dual Screen Waterproof Helmet Cam WiFi',
    category: 'electronics',
    priceUSD: 34.20,
    originalPriceUSD: 99.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 9400,
    ordersCount: 42000,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-9 Days',
    colors: ['Matte Black Duo'],
    specs: {
      'Video Resolution': '4K 60FPS Ultra HD Video Recording',
      'Stabilization': '6-Axis EIS Gyro Anti-Shake',
      'Waterproof': '30M Underwater with Included Housing',
      'Screens': '2.0" Touch Main Screen + 1.4" Front Selfie Screen'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: 'Top action camera for vloggers, bikers, and outdoor sports. Capture ultra-smooth 4K footage with dual selfie screens and wireless app transfer.'
  },
  {
    id: 5,
    title: 'Data Frog Wireless Retro Video Game Console 4K HDMI 20,000+ Games',
    category: 'gaming',
    priceUSD: 19.90,
    originalPriceUSD: 59.99,
    discount: 67,
    rating: 4.8,
    reviewsCount: 31200,
    ordersCount: 140000,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-7 Days',
    colors: ['Cyber Black Duo'],
    specs: {
      'Built-in Games': '20,000+ Classic Retro Arcade Games',
      'Controllers': '2x 2.4G Wireless Game Controllers',
      'Output': '4K HDMI Plug and Play Stick',
      'Emulators': 'PS1, GBA, MAME, SNES, NES Support'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: 'The viral #1 gaming stick on AliExpress! Plug directly into your TV HDMI port to play over 20,000 retro games with two wireless controllers.'
  },
  {
    id: 6,
    title: '120W GaN 5-Port Fast Wall Charger PD3.0 Quick Charge for Laptops & Phones',
    category: 'gadgets',
    priceUSD: 16.50,
    originalPriceUSD: 45.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 15600,
    ordersCount: 78000,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-8 Days',
    colors: ['Black GaN', 'White GaN'],
    specs: {
      'Total Output': '120W Max Fast Charging Power',
      'Technology': 'GaN (Gallium Nitride) Semiconductor',
      'Ports': '3x USB-C Power Delivery + 2x USB-A QC4.0',
      'Safety': 'Multi-protect Temperature & Overcurrent Safety'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: 'Charge your laptop, smartphone, tablet, and earbuds simultaneously with this high-efficiency 120W GaN fast charger.'
  },
  {
    id: 7,
    title: '4K Smart Home Theater LED Projector Wi-Fi 6 & Android 11 Native 1080P',
    category: 'electronics',
    priceUSD: 58.00,
    originalPriceUSD: 169.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 24500,
    ordersCount: 96000,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-10 Days',
    colors: ['Space White'],
    specs: {
      'Resolution': 'Native 1080P Full HD / 4K Video Decoding',
      'Brightness': '9000 Lumens / 300 ANSI',
      'Operating System': 'Android 11 with Netflix & YouTube',
      'Keystone Correction': 'Automatic 4D Keystone Correction'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: 'Transform any wall into a 150-inch cinema screen! Built-in Android 11 OS, Wi-Fi 6 wireless mirroring, and high-fidelity stereo speakers.'
  },
  {
    id: 8,
    title: 'Smart RGBIC Gradient LED Light Bar Music Sync Smart Home Ambient Lamp',
    category: 'smarthome',
    priceUSD: 17.90,
    originalPriceUSD: 49.99,
    discount: 64,
    rating: 4.8,
    reviewsCount: 11200,
    ordersCount: 52000,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '6-9 Days',
    colors: ['Matte Black RGBIC'],
    specs: {
      'Color Output': '16 Million Colors RGBIC Segment Control',
      'Audio Sync': 'Built-in High Sensitivity Microphone',
      'Smart App': 'Tuya / Smart Life App + Alexa Support',
      'Power': 'USB 5V Safe Power Supply'
    },
    aliExpressUrl: BASE_ALIEXPRESS_ITEM_URL,
    description: 'Enhance your gaming desk or TV setup with RGBIC dynamic ambient lighting that syncs in real-time to your music and gaming sound.'
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18;
