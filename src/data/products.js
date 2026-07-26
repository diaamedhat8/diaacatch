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
  SAR: { code: 'SAR', symbol: 'ر.س', rate: 3.75, name: 'ريال سعودي' },
  EGP: { code: 'EGP', symbol: 'ج.م', rate: 48.5, name: 'جنيه مصري' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, name: 'درهم إماراتي' },
};

// 💰 Your Personal AliExpress Affiliate Tracking Link
export const MY_AFFILIATE_TRACKING_TAG = 'diaacatch_affiliate_id';

export const getAffiliateLink = (url) => {
  if (!url) return 'https://www.aliexpress.com';
  if (url.includes('s.click.aliexpress.com')) return url;
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}aff_fcid=${MY_AFFILIATE_TRACKING_TAG}&aff_fsk=ChoiceDeals&aff_platform=portals-tool`;
};

// Direct target URL provided by user
const TARGET_ALIEXPRESS_URL = getAffiliateLink('https://www.aliexpress.com/item/1005007502032342.html?spm=oneshop.sub_buy_again.waterfall.17.97007f6bhIWI49&skuId=12000059381325615');

export const PRODUCTS = [
  {
    id: 1,
    title: 'عرض AliExpress Choice المختار المميز #1005007502032342',
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
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['رمادي فضائي', 'فضيات متألقة'],
    specs: {
      'رقم المنتج': '1005007502032342',
      'كود SKU': '12000059381325615',
      'حجم المبيعات': 'أكثر من 68,400 طلب حول العالم',
      'الضمان': 'ضمان رسمي من AliExpress Choice',
      'الشحن': 'شحن مجاني سريع خلال 5-7 أيام'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'المنتج الأكثر مبيعاً على منصة AliExpress Choice بخصم استثنائي 65% مع ضمان الشحن السريع والإرجاع المجاني.'
  },
  {
    id: 2,
    title: 'سماعات لينوفو ThinkPlus TH10 اللاسلكية بنظام عزل الضوضاء ANC وصوت Hi-Fi',
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
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود مات', 'أبيض لؤلؤي', 'ذهبي بيج'],
    specs: {
      'الماركة': 'Lenovo الأصلي',
      'عزل الضوضاء': 'نظام عزل نشط ANC -35dB',
      'البطارية': '40 ساعة تشغيل متواصل',
      'المحرك الصوتي': '40mm دبل باس احترافي',
      'البلوتوث': 'إصدار 5.3 سريع جداً'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'السماعة الأكثر مبيعاً عالمياً من شركة لينوفو! صوت سينمائي مجسم، وسادات أذن مريحة، وعزل كامل للضوضاء المحيطة.'
  },
  {
    id: 3,
    title: 'ساعة ذكية بشاشة AMOLED 2026 ضد الماء وتدعم المكالمات وتتبع نبضات القلب',
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
    deliveryDays: 'شحن 6-9 أيام',
    colors: ['أسود تيتانيوم', 'فضي ملائم', 'وردي ملكي'],
    specs: {
      'الشاشة': '1.43 بوصة AMOLED فائقة الوضوح (466x466 بكسل)',
      'تتبع الصحة': 'مراقبة نبضات القلب والكسجين ونوم 24/7',
      'الرياضة': 'أكثر من 100 وضع رياضي احترافي',
      'مقاومة الماء': 'معيار IP68 حتى عمق 50 متراً'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'ساعة ذكية متكاملة بشاشة AMOLED ألوان مشبعة، دعم إجراء واستقبال المكالمات، وبطارية تدوم حتى 14 يوماً.'
  },
  {
    id: 4,
    title: 'كاميرا الأكشن الرياضية 4K 60FPS بشاشتين مزدوجتين ومقاومة للماء',
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
    deliveryDays: 'شحن 5-9 أيام',
    colors: ['أسود مات دبل'],
    specs: {
      'دقة الفيديو': 'تصوير 4K بدقة 60 إطار بالثانية فائقة النقاء',
      'مانع الاهتزاز': 'محور مانع اهتزاز 6-Axis EIS',
      'مقاومة الماء': 'حتى عمق 30 متراً مع الكفر المرفق',
      'الشاشات': 'شاشة لمس خلفية 2 بوصة + شاشة سيلفي أمامية'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'كاميرا الأكشن الأفضل لصناع المحتوى والرياضيين! تصوير مقاطع فيديو ثابتة بنقاء 4K وشاشتين لمتابعة تصوير السيلفي.'
  },
  {
    id: 5,
    title: 'جهاز الألعاب اللاسلكي Data Frog 4K HDMI يضم أكثر من 20,000 لعبة ريترو',
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
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود سايبر دبل'],
    specs: {
      'الألعاب': 'أكثر من 20,000 لعبة أركيد كلاسيكية مدمجة',
      'أذرع التحكم': '2 ذراع تحكم لاسلكي 2.4G بدون تأخير',
      'الجودة': 'دعم توصيل HDMI 4K على التلفزيون مباشرة',
      'المحاكيات': 'دعم ألعاب PS1, GBA, SNES, NES'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'جهاز الألعاب الأكثر مبيعاً وانتشاراً على AliExpress! يوصل بالتلفاز مباشرة للعب ألعابك الكلاسيكية المفضلة مع يدين لاسلكيتين.'
  },
  {
    id: 6,
    title: 'شاحن جداري سريع 120W GaN بخمسة منافذ للابتوب والهواتف الذكية',
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
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود GaN', 'أبيض GaN'],
    specs: {
      'القوة الكلية': '120 واط شحن سريع فائق',
      'التقنية': 'شريحة جاليوم نيترايد GaN المتطورة',
      'المنافذ': '3 منافذ USB-C PD3.0 + منفذين USB-A QC4.0',
      'الأمان': 'حماية متكاملة من السخونة والجهد العالي'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'شاحن GaN سريع وصغير الحجم! اشحن اللابتوب، الهاتف، والآيباد في وقت واحد وبأقصى سرعة أمان.'
  },
  {
    id: 7,
    title: 'بروجيكتور السينما المنزلية الذكي 4K نظام Android 11 و Wi-Fi 6',
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
    deliveryDays: 'شحن 5-10 أيام',
    colors: ['أبيض فضائي'],
    specs: {
      'الدقة': 'دقة 1080P حقيقية ودعم تشغيل 4K',
      'السطوع': '9000 لومن سطوع شاشة عالي',
      'النظام': 'أندرويد 11 مدمج مع يوتيوب ونتفلكس',
      'التعديل': 'تعديل تلقائي لزاوية العرض Keystone'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'حول غرفتك إلى صالة سينما! بروجيكتور ذكي بنظام أندرويد 11، سماعات صوت نقية، وعرض يصل إلى 150 بوصة.'
  },
  {
    id: 8,
    title: 'إضاءة الجيمنج الذكية RGBIC المزودة بمزامنة الصوت والألعاب',
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
    deliveryDays: 'شحن 6-9 أيام',
    colors: ['أسود RGBIC'],
    specs: {
      'الألوان': '16 مليون لون متدرج RGBIC',
      'المزامنة': 'مايك مدمج لمزامنة الإضاءة مع الموسيقى والألعاب',
      'التحكم': 'تطبيق جوال + دعم أليكسا وجوجل',
      'الطاقة': 'تغذية USB آمنة 5V'
    },
    aliExpressUrl: TARGET_ALIEXPRESS_URL,
    description: 'إضاءة محيطية ساحرة لسطح المكتب والتلفزيون تتفاعل وتتحرك تلقائياً مع أصوات الألعاب والموسيقى.'
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18;
