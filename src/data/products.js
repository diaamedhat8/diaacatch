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

export const PRODUCTS = [
  {
    id: 1,
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
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '7-10 Days',
    colors: ['Premium Black', 'Titanium Silver', 'Rose Gold'],
    specs: {
      'Display': '1.43" Ultra AMOLED 60Hz',
      'Battery': '450mAh (Up to 14 Days)',
      'Waterproof': 'IP68 5ATM',
      'Connectivity': 'Bluetooth 5.3 + Direct Calls'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005001234567.html',
    description: 'Advanced smartwatch featuring a sleek design and crystal-clear AMOLED display. Supports SpO2 tracking, heart rate monitoring, sleep analysis, and Bluetooth calling.'
  },
  {
    id: 2,
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
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-8 Days',
    colors: ['Matte Black', 'Snow White', 'Navy Blue'],
    specs: {
      'Noise Control': 'ANC Active Noise Cancellation -38dB',
      'Playtime': '40 Hours with Charging Case',
      'Port': 'USB Type-C Fast Charge',
      'Codec': 'AAC / SBC HD Audio'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005009876543.html',
    description: 'Immersive sound experience with ANC active noise cancellation. Delivers deep bass response and crystal-clear microphone audio for calls and gaming.'
  },
  {
    id: 3,
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
      'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '7-12 Days',
    colors: ['Pure White'],
    specs: {
      'Resolution': '4K Ultra HD Dual Lens',
      'Power Source': 'Solar Panel + 12000mAh Battery',
      'Night Vision': 'Color Night Vision with LED Spotlights',
      'Storage': 'MicroSD up to 128GB + Cloud Storage'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005003334445.html',
    description: 'Advanced solar-powered security camera requiring zero wiring. Sends instant mobile alerts on motion detection with two-way audio.'
  },
  {
    id: 4,
    title: 'Pro Wireless Gaming Controller RGB Hall Effect Joysticks PC/Switch/Mobile',
    category: 'gaming',
    priceUSD: 21.80,
    originalPriceUSD: 54.99,
    discount: 60,
    rating: 4.8,
    reviewsCount: 2890,
    ordersCount: 11400,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '6-9 Days',
    colors: ['Translucent Black RGB', 'Cyber White'],
    specs: {
      'Joysticks': 'Hall Effect Sensors (Zero Drift)',
      'Connection': 'Bluetooth 5.0 + 2.4G Receiver + Type-C',
      'Lighting': 'Dynamic 7-Color RGB',
      'Rumble': 'Dual HD Vibration Motors'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005007778889.html',
    description: 'High-precision game controller equipped with Hall Effect sensor sticks to prevent drift. Zero-latency wireless response with programmable macro buttons.'
  },
  {
    id: 5,
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
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-10 Days',
    colors: ['Space Gray'],
    specs: {
      'Screen Size': 'Up to 150 Inches Full HD / 4K Decoding',
      'Brightness': '8000 ANSI Lumens',
      'OS': 'Android 11 Built-in with App Store',
      'Connectivity': 'Wi-Fi 6 + Bluetooth + HDMI + USB'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005005556667.html',
    description: 'Turn your room into a cinema! Smart projector with Netflix, YouTube, powerful speakers, and auto keystone correction.'
  },
  {
    id: 6,
    title: 'Precision Electric Screwdriver Set with 24 Titanium S2 Bits',
    category: 'gadgets',
    priceUSD: 14.20,
    originalPriceUSD: 36.00,
    discount: 60,
    rating: 4.8,
    reviewsCount: 1430,
    ordersCount: 6500,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '6-8 Days',
    colors: ['Aluminum Gray'],
    specs: {
      'Torque': '0.35 N.m Electric / 3 N.m Manual',
      'Bits Count': '24 S2 Steel Magnetic Bits',
      'Battery': 'Type-C Rechargeable 350mAh',
      'Lighting': '3 Shadowless LED Lights'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005002221114.html',
    description: 'Essential repair tool! Pen-sized aluminum electric screwdriver with strong magnetic bit lock for phone and electronics repair.'
  },
  {
    id: 7,
    title: '120W GaN Pro 5-Port Fast Charger for Laptops & Phones',
    category: 'electronics',
    priceUSD: 16.90,
    originalPriceUSD: 45.00,
    discount: 62,
    rating: 4.9,
    reviewsCount: 3100,
    ordersCount: 14200,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-7 Days',
    colors: ['Black', 'White'],
    specs: {
      'Max Output': '120W GaN Fast Charge',
      'Ports': '3x USB-C PD3.0 + 2x USB-A QC4.0',
      'Protection': 'Overheat & Overvoltage Smart Chip',
      'Compatibility': 'MacBook, iPhone, Samsung, iPad'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005004443332.html',
    description: 'Compact 120W Gallium Nitride (GaN) fast charger. Charge your laptop, phone, and tablet simultaneously at maximum speed.'
  },
  {
    id: 8,
    title: 'Smart RGBIC Ambient Desk Lamp Music Sync & Voice Control',
    category: 'smarthome',
    priceUSD: 19.99,
    originalPriceUSD: 49.99,
    discount: 60,
    rating: 4.7,
    reviewsCount: 980,
    ordersCount: 4500,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '7-11 Days',
    colors: ['Matte Black RGB'],
    specs: {
      'Colors': '16 Million Gradient RGBIC Colors',
      'Control': 'Mobile App + Alexa + Google Assistant',
      'Mode': 'Music & Gaming Sync',
      'Power': 'USB Powered 5V 2A'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005008889991.html',
    description: 'Stunning ambient lighting for your desk setup! Syncs with music rhythm and game sound effects.'
  },
  {
    id: 9,
    title: 'AliExpress Choice Premium Selected Deal Item #1005007502032342',
    category: 'gadgets',
    priceUSD: 29.90,
    originalPriceUSD: 85.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 2410,
    ordersCount: 9800,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: '5-9 Days',
    colors: ['Original Edition'],
    specs: {
      'Item ID': '1005007502032342',
      'Guarantee': 'AliExpress Choice Official Guarantee',
      'Shipping': 'Choice Express Free Shipping'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005007502032342.html?spm=oneshop.sub_buy_again.waterfall.17.97007f6bhIWI49&skuId=12000059381325615',
    description: 'Featured high-demand product curated directly from AliExpress Choice top deals with maximum discount and fast shipping.'
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18;
