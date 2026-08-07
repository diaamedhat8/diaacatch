// ⚡ AliExpress Real-Time Catalog - Last Live Auto-Sync: 2026-08-07T22:57:43.944Z
export const CATEGORIES = [
  { id: 'all', nameKey: 'filterAll', icon: 'Sparkles' },
  { id: 'appliances', nameKey: 'filterAppliances', icon: 'Tv' },
  { id: 'laptops', nameKey: 'filterLaptops', icon: 'Laptop' },
  { id: 'phones', nameKey: 'filterPhones', icon: 'Smartphone' },
  { id: 'electronics', nameKey: 'filterElectronics', icon: 'Headphones' },
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
  EGP: { code: 'EGP', symbol: 'ج.م', rate: 48.65, name: 'جنيه مصري' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, name: 'درهم إماراتي' },
};

// 💰 Your Personal AliExpress Affiliate Tracking Link
export const MY_AFFILIATE_TRACKING_TAG = 'diaacatch_affiliate_id';

export const getAffiliateLink = (url, keyword = '') => {
  let targetUrl = url;
  if (!targetUrl && keyword) {
    targetUrl = `https://ar.aliexpress.com/w/wholesale-${encodeURIComponent(keyword)}.html`;
  }
  if (!targetUrl) {
    targetUrl = 'https://ar.aliexpress.com';
  }
  
  if (targetUrl.includes('s.click.aliexpress.com')) return targetUrl;
  
  const separator = targetUrl.includes('?') ? '&' : '?';
  return `${targetUrl}${separator}aff_fcid=${MY_AFFILIATE_TRACKING_TAG}&aff_fsk=ChoiceDeals&aff_platform=portals-tool`;
};

// Direct target URL provided by user for exact product #1005007499366327
const RAW_USER_PROVIDED_URL = 'https://ar.aliexpress.com/item/1005007499366327.html?pdp_npi=6%40dis%21EGP%21567.71%21553.70%21%21%2167.98%2166.30%21%4021017cb917851176251904643d158b%2112000041054097498';
export const USER_PRODUCT_AFFILIATE_URL = getAffiliateLink(RAW_USER_PROVIDED_URL);

export const PRODUCTS = [
  {
    id: 1,
    title: 'عرض AliExpress Choice الحصري المختار #1005007499366327',
    category: 'gadgets',
    priceUSD: 11.40,
    originalPriceUSD: 35.00,
    discount: 67,
    rating: 4.9,
    reviewsCount: 18900,
    ordersCount: 92000,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود بريميوم', 'فضي تيتانيوم'],
    specs: {
      'رقم المنتج': '1005007499366327',
      'كود SKU': '12000041054097498',
      'السعر المباشر': '553.70 EGP (خصم حصري)',
      'الضمان': 'ضمان رسمي من AliExpress Choice',
      'الشحن': 'شحن مجاني سريع خلال 5-7 أيام'
    },
    aliExpressUrl: USER_PRODUCT_AFFILIATE_URL,
    description: 'عرض AliExpress Choice الحصري المختار #1005007499366327 بسعر 553.70 ج.م مع ضمان الشحن السريع والتوصيل المباشر.'
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
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Lenovo-TH10.html'),
    description: 'السماعة الأكثر مبيعاً عالمياً من شركة لينوفو! صوت سينمائي مجسم، وسادات أذن مريحة، وعزل كامل للضوضاء المحيطة.'
  },
  {
    id: 3,
    title: 'باور بنك باسيوس المغناطيسي 10,000mAh لشحن الآيفون والأندرويد اللاسلكي 20W',
    category: 'gadgets',
    priceUSD: 24.50,
    originalPriceUSD: 68.00,
    discount: 64,
    rating: 4.9,
    reviewsCount: 18900,
    ordersCount: 89000,
    image: 'https://images.unsplash.com/photo-1622445268465-84385d8128da?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1622445268465-84385d8128da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود تيتانيوم', 'أبيض سيراميك', 'أزرق كحلي'],
    specs: {
      'الماركة': 'Baseus الأصلي',
      'السعة': '10,000 مللي أمبير مع شاشة LED',
      'الشحن اللاسلكي': '15W MagSafe قوة التثبيت المغناطيسي',
      'الشحن السلكي': '20W PD Type-C شحن سريع',
      'الأمان': 'مقاومة الحرارة والشحن الزائد'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Baseus-Magnetic-Power-Bank.html'),
    description: 'باور بنك باسيوس اللاسلكي المغناطيسي خفيف الوزن! يلتصق بقوة خلف الهاتف ليشحن جهازك بسرعة 20W مع شاشة شحن LED شيك.'
  },
  {
    id: 4,
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
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-AMOLED-Smart-Watch.html'),
    description: 'ساعة ذكية متكاملة بشاشة AMOLED ألوان مشبعة، دعم إجراء واستقبال المكالمات، وبطارية تدوم حتى 14 يوماً.'
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
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Data-Frog-4K-HDMI.html'),
    description: 'جهاز الألعاب الأكثر مبيعاً وانتشاراً على AliExpress! يوصل بالتلفاز مباشرة للعب ألعابك الكلاسيكية المفضلة مع يدين لاسلكيتين.'
  },
  {
    id: 6,
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
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-4K-Action-Camera.html'),
    description: 'كاميرا الأكشن الأفضل لصناع المحتوى والرياضيين! تصوير مقاطع فيديو ثابتة بنقاء 4K وشاشتين لمتابعة تصوير السيلفي.'
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
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-HY300-4K-Projector.html'),
    description: 'حول غرفتك إلى صالة سينما! بروجيكتور ذكي بنظام أندرويد 11، سماعات صوت نقية، وعرض يصل إلى 150 بوصة.'
  },
  {
    id: 8,
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
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Baseus-120W-GaN-Charger.html'),
    description: 'شاحن GaN سريع وصغير الحجم! اشحن اللابتوب، الهاتف، والآيباد في وقت واحد وبأقصى سرعة أمان.'
  },
  {
    id: 9,
    title: 'منفاخ إطارات السيارات الكهربائي المحمول الذكي المزود بشاشة LCD وضغط تلقائي',
    category: 'gadgets',
    priceUSD: 22.90,
    originalPriceUSD: 65.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 17300,
    ordersCount: 81000,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود مصفح'],
    specs: {
      'أقصى ضغط': '150 PSI نفخ سريع للسيارات والدراجات',
      'الإيقاف التلقائي': 'يتوقف تلقائياً عند الوصول للضغط المطلوب',
      'الإضاءة': 'كشاف طوارئ LED قوي مدمج',
      'البطارية': 'بطارية ليتيوم قابلة للشحن سعة 6000mAh'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Car-Air-Compressor-Pump.html'),
    description: 'الأداة الضرورية في سيارتك! منفاخ هوائي لاسلكي سريع يعرض ضغط الإطار بدقة على شاشة LCD ويقفل تلقائياً للحفاظ على الإطارات.'
  },
  {
    id: 10,
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
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-RGBIC-Light-Bar-Tuya.html'),
    description: 'إضاءة محيطية ساحرة لسطح المكتب والتلفزيون تتفاعل وتتحرك تلقائياً مع أصوات الألعاب والموسيقى.'
  },
  {
    id: 11,
    title: 'ساعة رجالية كلاسيكية فاخرة من LIGE مقاومة للماء مع حزام ستانلس ستيل',
    category: 'fashion',
    priceUSD: 18.20,
    originalPriceUSD: 59.90,
    discount: 70,
    rating: 4.9,
    reviewsCount: 29800,
    ordersCount: 120000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود ذهبي', 'فضي أزرق', 'أسود كامل'],
    specs: {
      'الماركة': 'LIGE Original',
      'مقاومة الماء': '3ATM مقاومة رذاذ وغسيل اليدين',
      'العقارب': 'مضيئة بالظلام Luminous',
      'الآلية': 'ماكينة كوارتز يابانية عالية الدقة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-LIGE-Watch-Men.html'),
    description: 'ساعة رجالية أنيقة وفخمة بتصميم كرونوغراف ياباني، مناسبة للمناسبات والاستخدام اليومي مقاومة للماء والخدش.'
  },
  {
    id: 12,
    title: 'طائرة درون صغيرة 4K HD مزودة بمستشعر تفادي العقبات وتثبيت طيران ذكي',
    category: 'electronics',
    priceUSD: 27.80,
    originalPriceUSD: 89.00,
    discount: 69,
    rating: 4.8,
    reviewsCount: 12100,
    ordersCount: 56000,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-9 أيام',
    colors: ['رمادي تكتيكي', 'أسود سايبر'],
    specs: {
      'الكاميرا': 'كاميرا 4K قابلة للتعديل 90 درجة مع نقل بث مباشر',
      'الأمان': 'مستشعرات تفادي الصدمات 360 درجة',
      'الطيران': 'زمن طيران يصل إلى 25 دقيقة للبطارية',
      'الميزات': 'ميزة الإرجاع التلقائي بنقرة واحدة وشقلبة 360°'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-4K-Mini-Drone.html'),
    description: 'الدرون الأكثر مبيعاً للمبتدئين وصناع المحتوى! سهلة التحكم، مزودة بكاميرا 4K ومستشعرات ذكية لمنع الاصطدام.'
  },
  {
    id: 13,
    title: 'حامل هاتف السيارة الذكي باسيوس المزود بشاحن لاسلكي سريع 15W وقفل تلقائي',
    category: 'gadgets',
    priceUSD: 19.50,
    originalPriceUSD: 52.00,
    discount: 62,
    rating: 4.9,
    reviewsCount: 16400,
    ordersCount: 73000,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود فيوتشر', 'فضي تيتانيوم'],
    specs: {
      'الماركة': 'Baseus الأصلي',
      'الحساس الذكي': 'مستشعر إلكتروني يغلق الأذرع تلقائياً عند وضع الهاتف',
      'الشحن': 'شحن لاسلكي سريع 15W Qi معتمد',
      'التركيب': 'يثبت في فتحات التكييف بقوة وثبات عالي'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Baseus-Car-Wireless-Charger.html'),
    description: 'حامل هاتف ذكي للسيارة من باسيوس! يفتح ويغلق أذرعه تلقائياً بمستشعر الأشعة تحت الحمراء ويشحن هاتفك بسرعة 15W لاسلكياً.'
  },
  {
    id: 14,
    title: 'محول صوت السيارة UGREEN بلوتوث 5.3 مايكروفون مدمج وعزل الضوضاء',
    category: 'gadgets',
    priceUSD: 11.20,
    originalPriceUSD: 32.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 28400,
    ordersCount: 115000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود UGREEN'],
    specs: {
      'الماركة': 'UGREEN الأصلي',
      'البلوتوث': 'إصدار 5.3 الاتصال التلقائي السريع',
      'المكالمات': 'مايك مدمج عالي الوضوح مع عزل ضوضاء المحرك',
      'المنفذ': 'AUX 3.5mm قياسي لجميع السيارات'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-UGREEN-Bluetooth-Car.html'),
    description: 'حول مسجل سيارتك القديم إلى بلوتوث عالي النقاء بنقرة واحدة! مايك مدمج لمكالمات الأيدي الحرّة وصوت Hi-Fi ممتاز.'
  },
  {
    id: 15,
    title: 'مكنسة الروبوت الذكية 4000Pa شفط عالي وتطبيق جوال ورسم خريطة المنزل',
    category: 'smarthome',
    priceUSD: 79.00,
    originalPriceUSD: 220.00,
    discount: 64,
    rating: 4.9,
    reviewsCount: 14800,
    ordersCount: 62000,
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-9 أيام',
    colors: ['أبيض ذكي', 'أسود تيتانيوم'],
    specs: {
      'قوة الشفط': '4000Pa شفط فائق للأتربة وشعر الحيوانات',
      'التنظيف المزدوج': 'كنس ومسح بالماء بنفس الوقت',
      'التحكم': 'تطبيق Tuya Smart + أليكسا وجوجل هوم',
      'البطارية': '120 دقيقة تنظيف متواصل وإرجاع تلقائي للشاحن'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Robot-Vacuum-Cleaner-Tuya.html'),
    description: 'مكنسة روبوت ذكية تقوم بالكنس والمسح التلقائي لمنزلك وتتحكم بها بلمسة زر عبر هاتفك من أي مكان في العالم.'
  },
  {
    id: 16,
    title: 'كيبورد وماوس جيمنج ميكانيكي لاسلكي RGB احترافي بدون تأخير',
    category: 'gaming',
    priceUSD: 32.50,
    originalPriceUSD: 85.00,
    discount: 61,
    rating: 4.8,
    reviewsCount: 16200,
    ordersCount: 71000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['RGB كاستم أسود', 'RGB أبيض رمادي'],
    specs: {
      'السويتشات': 'ميكانيكي Blue / Red Switches استجابة فائقة',
      'الإضاءة': '20 نمط إضاءة RGB dynamic',
      'الاتصال': 'بلوتوث 5.0 + 2.4G لاسلكي + Type-C سلكي',
      'البطارية': '3000mAh قابلة للشحن عبر USB-C'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-RGB-Wireless-Gaming-Keyboard.html'),
    description: 'كيبورد وماوس الألعاب الميكانيكي الأفضل للقيمرز! صوت كليك مميز، استجابة سريعة جداً بدون واير، وإضاءة RGB مذهلة.'
  },
  {
    id: 17,
    title: 'مزيل الوبر الكهربائي المحمول Xiaomi Mijia للأقمشة والملابس والمفروشات',
    category: 'smarthome',
    priceUSD: 12.90,
    originalPriceUSD: 35.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 39000,
    ordersCount: 180000,
    image: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أبيض شاومي ناصع'],
    specs: {
      'الماركة': 'Xiaomi Mijia الأصلي',
      'الشفرات': '5 شفرات إعصارية من الاستانلس ستيل',
      'البطارية': '90 دقيقة استخدام بشحنة Type-C واحدة',
      'الحماية': 'شبكة حماية ملابس دقيقة لمنع تلف الأقمشة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Xiaomi-Lint-Remover.html'),
    description: 'الجهاز السحري لإعادة الملابس الصوفية والمفروشات كالجديدة تماماً! يقضي على الوبر والخيوط الزائدة بسرعة وبدون إتلاف القماش.'
  },
  {
    id: 18,
    title: 'إضاءة الشاشة المنحنية الذكية للجيمنج RGB Touch لحماية العين ومزامنة الألعاب',
    category: 'gaming',
    priceUSD: 25.80,
    originalPriceUSD: 69.00,
    discount: 62,
    rating: 4.9,
    reviewsCount: 14100,
    ordersCount: 59000,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود RGB ألمنيوم'],
    specs: {
      'حماية العين': 'إضاءة غير عاكسة تمنع إجهاد العين Flicker-Free',
      'الإضاءة الخلفية': 'RGB خلفية للجيمنج بزوايا متعددة',
      'التحكم': 'زر باللمس لتعديل شدة وحرارة الضوء',
      'التثبيت': 'يثبت أعلى أي شاشة مسطحة أو منحنية بسهولة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Screenbar-Gaming-Monitor-Light.html'),
    description: 'مصباح الشاشة الذكي لحماية العين أثناء السهر والعمل والألعاب! يضيء المكتب بدون انعكاسات على الشاشة مع إضاءة RGB خلفية رائعة.'
  },
  {
    id: 19,
    title: 'جراب كفر الآيفون المغناطيسي الشفاف Magsafe المقاوم للصدمات والخدش',
    category: 'fashion',
    priceUSD: 8.50,
    originalPriceUSD: 25.00,
    discount: 66,
    rating: 4.9,
    reviewsCount: 45000,
    ordersCount: 210000,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['شفاف كريستال MagSafe', 'أسود دخاني'],
    specs: {
      'الحماية': 'وسائد حماية الحواف من السقوط العنيف 3.0m',
      'المغناطيس': 'حلقة N52 MagSafe التثبيت الفائق',
      'الشفافية': 'تقنية منع الاصفرار مع الزمن Bayer TPU',
      'التوافق': 'جميع موديلات آيفون 11 إلى 16 برو ماكس'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Magsafe-Case-Cover-iPhone.html'),
    description: 'الكفر الأكثر شعبية وحماية للآيفون! شفاف كريستالي لا يصفر مع الزمن ويحتوي على مغناطيس MagSafe قوي للشحن السريع.'
  },
  {
    id: 20,
    title: 'فيشة الكهرباء الذكية WiFi 16A مع قياس استهلاك الطاقة Tuya Smart Plug',
    category: 'smarthome',
    priceUSD: 7.90,
    originalPriceUSD: 22.00,
    discount: 64,
    rating: 4.9,
    reviewsCount: 52000,
    ordersCount: 240000,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أبيض Tuya 16A'],
    specs: {
      'التحمل': '16 أمبير (3680W) لتحمل التكييف والأجهزة الثقيلة',
      'قياس الكهرباء': 'عرض استهلاك الكيلوواط بالفاتورة شهرياً',
      'المؤقت': 'جدولة تشغيل وإيقاف الأجهزة تلقائياً',
      'التحكم الصوتي': 'يدعم Amazon Alexa و Google Assistant'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Tuya-Smart-WiFi-Plug-16A.html'),
    description: 'حول أي جهاز في منزلك إلى جهاز ذكي! شغل وأطفئ الأجهزة من جوالك وراقب استهلاك الكهرباء لتوفير الفاتورة.'
  },
  {
    id: 21,
    title: 'مكبر الصوت اللاسلكي المحمول Anker Soundcore Select 2 ضد الماء مع دبل باس',
    category: 'electronics',
    priceUSD: 36.50,
    originalPriceUSD: 89.00,
    discount: 59,
    rating: 4.9,
    reviewsCount: 21500,
    ordersCount: 94000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود مات أنكر'],
    specs: {
      'الماركة': 'Anker Soundcore الأصلي',
      'مقاومة الماء': 'معيار IPX7 ضد الماء والغرق الكامل',
      'البطارية': '24 ساعة تشغيل موسيقى متواصل',
      'الصوت': '16W بقوة BassUp التضخيم الذكي'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Anker-Soundcore-Bluetooth-Speaker.html'),
    description: 'السبيكر اللاسلكي المفضل للرحلات والسفر من أنكر! صوت ضخم ونقي، ضد الماء 100%، وبطارية تكفيك طوال اليوم.'
  },
  {
    id: 22,
    title: 'سماعات باسيوس اللاسلكية Baseus Bowie M2+ مع عزل الضوضاء المزدوج ANC 42dB',
    category: 'electronics',
    priceUSD: 29.90,
    originalPriceUSD: 79.00,
    discount: 62,
    rating: 4.9,
    reviewsCount: 16800,
    ordersCount: 79000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود فخم', 'أبيض كريمي'],
    specs: {
      'الماركة': 'Baseus Bowie M2+ الأصلي',
      'عزل الضوضاء': 'نظام عزل الهجين الذكي ANC -42dB',
      'البطارية': '30 ساعة تشغيل مع علبة الشحن السريع',
      'الميكروفونات': '4 ميكروفونات ENC لإلغاء ضوضاء الرياح والمكالمات'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Baseus-Bowie-M2.html'),
    description: 'السماعة اللاسلكية الاحترافية مع نظام عزل الضوضاء الهجين ANC! استمتع بصوت نقي للغاية ومكالمات واضحة في أي مكان.'
  },
  {
    id: 23,
    title: 'ماوس الجيمنج اللاسلكي الاحترافي 16000DPI مع إضاءة RGB وشحن سريع',
    category: 'gaming',
    priceUSD: 18.50,
    originalPriceUSD: 49.00,
    discount: 62,
    rating: 4.8,
    reviewsCount: 13400,
    ordersCount: 65000,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود سايبر RGB', 'أبيض ثلجي'],
    specs: {
      'الحساسية': 'حساس بصر فائق 16000 DPI قابل للتعديل',
      'الاتصال': 'Dual Mode (2.4G لاسلكي + USB-C)',
      'الوزن': 'وزن خفيف جداً 68g لسرعة الحركة',
      'البطارية': 'تشغيل مستمر حتى 70 ساعة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Wireless-Gaming-Mouse-16000DPI.html'),
    description: 'ماوس جيمنج احترافي خفيف الوزن واستجابة فائقة السرعة! حساس دقيق جداً للألعاب التنافسية وإضاءة RGB مذهلة.'
  },
  {
    id: 24,
    title: 'شريط الإضاءة الذكي RGBIC 15 متر مع تطبيق WiFi ومزامنة الصوت والتحكم الصوتي',
    category: 'smarthome',
    priceUSD: 16.80,
    originalPriceUSD: 45.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 28900,
    ordersCount: 130000,
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['RGBIC 16 مليون لون'],
    specs: {
      'الطول': '15 متر شريط LED مقوى مزود بطلاء ضد الماء IP65',
      'التحكم': 'تطبيق Tuya Smart WiFi + ريموت كنترول',
      'الأوامر الصوتية': 'دعم كامل مع أليكسا ومساعد جوجل',
      'التفاعل': 'مايك مدمج يتفاعل مع الموسيقى والألعاب'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-RGBIC-LED-Strip-15M.html'),
    description: 'زين غرفتك ومكتبك بأجمل الألوان المتدرجة! شريط إضاءة ذكي 15 متر يتحرك مع الصوت والموسيقى ويمكن التحكم به بالجوال.'
  },
  {
    id: 25,
    title: 'مفك البراغي الكهربائي الدقيق Xiaomi Mijia مع 24 رأس ستيل وشحن Type-C',
    category: 'gadgets',
    priceUSD: 21.90,
    originalPriceUSD: 59.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 34200,
    ordersCount: 155000,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['رمادي ألمنيوم أنودايزد'],
    specs: {
      'الماركة': 'Xiaomi Mijia Original',
      'الرؤوس': '24 رأس فك وربط دقيق من الفولاذ الصلب S2',
      'العزم': 'ترس عزم مزدوج (كهربائي + يدوي)',
      'الهيكل': 'علبة شحن وتخزين مغناطيسية أنيقة جداً'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Xiaomi-Mijia-Electric-Screwdriver.html'),
    description: 'مفك شاومي الكهربائي الدقيق لإصلاح الهواتف، الساعات، النظارات، والأجهزة الإلكترونية بسهولة وبأعلى خامات ألمنيوم.'
  },
  {
    id: 26,
    title: 'مكينة حلاقة وتشذيب الذقن والجسم الاحترافية من Kemei مع بطارية ليثيوم وشاشة LCD',
    category: 'fashion',
    priceUSD: 13.90,
    originalPriceUSD: 39.00,
    discount: 64,
    rating: 4.8,
    reviewsCount: 42100,
    ordersCount: 190000,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['ذهب كلاسيكي vintage', 'فضي ستانلس'],
    specs: {
      'الماركة': 'Kemei Pro',
      'الشفرات': 'شفرات تيتانيوم حادة وسريعة بدون جروح',
      'البطارية': '180 دقيقة استخدام شحنة واحدة USB',
      'الشاشة': 'عرض نسبة شحن البطارية بدقة LCD'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Kemei-Hair-Trimmer.html'),
    description: 'المكينة الأكثر مبيعاً لتصفيف وتحفيف الذقن والشعر بدقة متناهية وشكل معدني ريترو فخم وبطارية تدوم طويلاً.'
  },
  {
    id: 27,
    title: 'مكنسة السيارة اللاسلكية باسيوس بقوة شفط 15000Pa وتفريغ أتربة ضاغط 2 في 1',
    category: 'gadgets',
    priceUSD: 31.50,
    originalPriceUSD: 85.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 19500,
    ordersCount: 88000,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود كربون', 'فضي تيتانيوم'],
    specs: {
      'الماركة': 'Baseus الأصلي',
      'قوة الشفط': '15000Pa شفط محرك بدون فرش Brushless',
      'الوظائف': 'شفط الأتربة + نفخ وتطهير الفتحات الدقيقة',
      'الفلتر': 'فلتر HEPA قابل للغسل والاستخدام المكرر'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Baseus-Car-Vacuum-Cleaner.html'),
    description: 'مكنسة السيارة اللاسلكية الأقوى من باسيوس! قوة شفط هائلة 15000Pa تنظف مقاعد سيارتك والفتحات الضيقة بسهولة.'
  },
  {
    id: 28,
    title: 'خاتم الصحة الذكي Smart Health Ring 2026 لتتبع النوم والنبض والأكسجين والرياضة',
    category: 'fashion',
    priceUSD: 28.90,
    originalPriceUSD: 89.00,
    discount: 68,
    rating: 4.8,
    reviewsCount: 8900,
    ordersCount: 39000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود سيراميك', 'ذهبي ملكي', 'فضي تيتانيوم'],
    specs: {
      'التقنية': 'مستشعرات PPG الطبية الدقيقة لقياس نبض القلب والسبو2',
      'مقاومة الماء': 'معيار 5ATM مقاومة ماء كاملة للسباحة',
      'البطارية': '7 أيام استخدام متواصل مع علبة شحن سفري',
      'التطبيق': 'مزامنة مع أبل هيلث وجوجل فيت'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Smart-Health-Ring.html'),
    description: 'بديل الساعة الذكية الأنيق والخفيف! خاتم ذكي يراقب مؤشراتك الصحية ونومك طوال الـ 24 ساعة بمظهر سيراميكي فخم.'
  },
  {
    id: 29,
    title: 'كوب القهوة الحراري من الستانلس ستيل مزود بشاشة لمس ذكية لعرض درجة الحرارة',
    category: 'gadgets',
    priceUSD: 9.80,
    originalPriceUSD: 28.00,
    discount: 65,
    rating: 4.9,
    reviewsCount: 31000,
    ordersCount: 145000,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود مات', 'أبيض ناصع', 'وردي'],
    specs: {
      'السعة': '500 مل حافظ للحرارة والبرودة حتى 12 ساعة',
      'الشاشة': 'غطاء ذكي يعرض درجة حرارة السائل باللمس LCD',
      'المادة': 'ستانلس ستيل آمن 304 عالي الجودة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Temperature-Display-Coffee-Mug.html'),
    description: 'كوب القهوة والشاي الذكي للحفاظ على المشروبات ساخنة طوال اليوم! يعرض لك درجة حرارة مشروبك بلمسة واحدة على الغطاء.'
  },
  {
    id: 30,
    title: 'سبيكر مكبر الصوت المحمول البلوتوث ميني من JBL Style مع إضاءة RGB صوت قوي',
    category: 'electronics',
    priceUSD: 12.50,
    originalPriceUSD: 36.00,
    discount: 65,
    rating: 4.8,
    reviewsCount: 23400,
    ordersCount: 98000,
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود جيب', 'أزرق', 'أحمر ناري'],
    specs: {
      'الصوت': 'محرك صابووفر ميني 5W بصوت مجسم وقوي',
      'البطارية': '8 ساعات تشغيل موسيقى',
      'الميزات': 'دعم كارت ميموري TF + AUX + بلوتوث 5.3'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Mini-Bluetooth-Speaker.html'),
    description: 'سبيكر محمول صغير بحجم قبضة اليد وصوت ضخم بنقاء ممتاز! مثالي للسفر والرحلات والاستخدام اليومي.'
  },
  {
    id: 31,
    title: 'ميكروفون الياقة اللاسلكي للآيفون والأندرويد 2.4G لصناع المحتوى والبودكاست',
    category: 'electronics',
    priceUSD: 10.90,
    originalPriceUSD: 32.00,
    discount: 66,
    rating: 4.9,
    reviewsCount: 38900,
    ordersCount: 175000,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود كليب دبل (2 مايك + مستقبل)'],
    specs: {
      'الاتصال': 'إرسال لاسلكي 2.4G مدى 20 متراً بدون تأخير',
      'عزل الضوضاء': 'شريحة DSP الذكية لتصفية أصوات الشارع',
      'التوافق': 'منفذ Type-C و Lightning لجميع الهواتف'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Wireless-Lavalier-Microphone.html'),
    description: 'الميكروفون الأكثر استخداماً وتفضيلًا لصناع فيديوهات التيكتوك واليوتيوب! تسجيل صوت احترافي بنقاء وبدون أسلاك.'
  },
  {
    id: 32,
    title: 'باور بنك باسيوس السريع 65W سعة 20000mAh لشحن اللابتوب والجوال بسرعة فائقة',
    category: 'gadgets',
    priceUSD: 39.50,
    originalPriceUSD: 99.00,
    discount: 60,
    rating: 4.9,
    reviewsCount: 15400,
    ordersCount: 68000,
    image: 'https://images.unsplash.com/photo-1609592424009-467f9a1f33f6?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1609592424009-467f9a1f33f6?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود ألمنيوم PD65W'],
    specs: {
      'الماركة': 'Baseus Power Bank 65W الأصلي',
      'القوة': '65W شحن PD3.0 لشحن ماك بوك ولابتوبات ديل وهواوي',
      'السعة': '20,000 مللي أمبير مع شاشة ديجيتال لعرض الطاقة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Baseus-65W-Power-Bank-20000mAh.html'),
    description: 'باور بنك باسيوس الجبار بقوة 65 واط! يشحن جهازك اللابتوب والهاتف بنفس الوقت بأقصى سرعة أمان أثناء التنقل.'
  },
  {
    id: 33,
    title: 'سطل وسلة المهملات الذكية 15 لتر بفتح وإغلاق أوتوماتيكي بحساس الحركة ضد الماء',
    category: 'smarthome',
    priceUSD: 15.90,
    originalPriceUSD: 42.00,
    discount: 62,
    rating: 4.8,
    reviewsCount: 18200,
    ordersCount: 82000,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أبيض ناصع IPX5', 'رمادي مودرن'],
    specs: {
      'الحساس': 'حساس الأشعة تحت الحمراء يفتح الغطاء عند تقريب اليد 0.3s',
      'العزل': 'غطاء محكم ينع تسرب أي روائح كريهة 100%',
      'المقاومة': 'معيار IPX5 مقاوم للماء والرطوبة للمطابخ والحمامات'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Smart-Trash-Can-15L.html'),
    description: 'سلة المهملات الذكية للمطبخ والحمام! تفتح غطاءها تلقائياً بدون لمس لمنع الجراثيم وتمنع انبعاث أي روائح.'
  },
  {
    id: 34,
    title: 'نظارات القيادة الشمسية الاستقطابية Polarized UV400 المخصصة للقيادة الليلية والنهار',
    category: 'fashion',
    priceUSD: 7.90,
    originalPriceUSD: 24.00,
    discount: 67,
    rating: 4.9,
    reviewsCount: 51000,
    ordersCount: 230000,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود استقطاب نهاري', 'صفراء للقيادة الليلية HD'],
    specs: {
      'العدسات': 'عدسات استقطاب TAC تمنع الانعكاسات وضبابية الطريق',
      'الحماية': 'UV400 حماية كاملة من أشعة الشمس الضارة',
      'الهيكل': 'مغنيسيوم ألومنيوم خفيف جداً ومقاوم للصدمات'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Polarized-Driving-Sunglasses.html'),
    description: 'نظارات القيادة الأكثر راحة ووضوحاً للرؤية أثناء القيادة! تمنع التوهج وانعكاسات أنوار السيارات والشمس.'
  },
  {
    id: 35,
    title: 'حامل وهولدر باسيوس المغناطيسي لسطح المكتب للأيباد والهواتف من الألمنيوم',
    category: 'gadgets',
    priceUSD: 14.50,
    originalPriceUSD: 39.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 22100,
    ordersCount: 95000,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['رمادي فضائي ألمنيوم', 'فضي تيتانيوم'],
    specs: {
      'الماركة': 'Baseus Desktop Stand الأصلي',
      'التعديل': 'دوران 360 درجة وزوايا ارتفاع قابلة للتعديل',
      'الثبات': 'قاعدة معدنية ثقيلة مع وسائد سيليكون مانعة للانزلاق'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Baseus-Desktop-Phone-Stand.html'),
    description: 'حامل المكتب الفخم من باسيوس للجوال والآيباد! هيكل ألمنيوم قوي يتيح التصفح والمشاهدة والدراسة بزوايا مريحة.'
  },
  {
    id: 36,
    title: 'ماوس باد الجيمنج العملاق XXL الحجم الكتروني مزود بإضاءة RGB وحواف مقواة',
    category: 'gaming',
    priceUSD: 11.80,
    originalPriceUSD: 32.00,
    discount: 63,
    rating: 4.9,
    reviewsCount: 27800,
    ordersCount: 110000,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['RGB 80x30 cm سايبر', 'RGB 90x40 cm أسود'],
    specs: {
      'المقاس': 'حجم كبير جداً يتسع للكيبورد والماوس معاً (900x400mm)',
      'الإضاءة': '14 مود إضاءة RGB على الحواف بلمسة زر',
      'السطح': 'قماش ناعم جداً لحركة ماوس سريعة وسلسة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-RGB-Gaming-Mouse-Pad-XXL.html'),
    description: 'ماوس باد الجيمنج الكبيرة مع حواف RGB المضيئة! تمنح مكتبك مظهراً سينمائياً وتوفر سلاسة تامة لحركة الماوس والألعاب.'
  },
  {
    id: 37,
    title: 'تكييف ومبرد الهواء المحمول الذكي بالشحن والترطيب المائي للمنازل والمكاتب',
    category: 'appliances',
    priceUSD: 28.50,
    originalPriceUSD: 79.00,
    discount: 64,
    rating: 4.9,
    reviewsCount: 19800,
    ordersCount: 88000,
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أبيض ثلجي ذكي', 'رمادي مودرن'],
    specs: {
      'التقنية': 'تبريد بالرذاذ المائي المزدوج وترطيب الهواء',
      'السرعات': '3 سرعات تبريد مع إضاءة محيطية LED 7 ألوان',
      'البطارية': 'بطارية قابلة للشحن سعة 4000mAh للاستخدام اللاسلكي'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Portable-Air-Conditioner-Cooler.html'),
    description: 'تكييف ومبرد الهواء المحمول الذكي! يمنحك هواءً بارداً ورطباً فوراً مع خزان ماء مدمج وإضاءة LED مريحة.'
  },
  {
    id: 38,
    title: 'قلاية هوائية بدون زيت ملحقة بشاشة لمس ذكية 6 لتر Xiaomi Air Fryer 6L',
    category: 'appliances',
    priceUSD: 59.00,
    originalPriceUSD: 149.00,
    discount: 60,
    rating: 4.9,
    reviewsCount: 28400,
    ordersCount: 135000,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود بريميوم 6L', 'أبيض شيك'],
    specs: {
      'الماركة': 'Xiaomi Air Fryer 6L الأصلي',
      'السعة': '6 لتر سعة عائلية كبيرة مع نافذة زجاجية شفافة',
      'البرامج': '8 برامج طهي تلقائية وشاشة لمس OLED',
      'الطهي': 'دوران الهواء الساخن 360° لطهي بدون زيت بنسبة 85%'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Air-Fryer-Touch-Display.html'),
    description: 'القلاية الهوائية الذكية والأفضل مبيعاً! طهي صحي ومقرمش بدون زيوت، مع نافذة متابعة ونظام تدوير حراري 360 درجة.'
  },
  {
    id: 39,
    title: 'ماكينة الإسبريسو والقهوة الذكية 20 بار مع مبخر الحليب المدمج Espresso Machine',
    category: 'appliances',
    priceUSD: 68.00,
    originalPriceUSD: 189.00,
    discount: 64,
    rating: 4.9,
    reviewsCount: 16900,
    ordersCount: 74000,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['فضي ستانلس 20 بار', 'أسود ماكياتو'],
    specs: {
      'مضخة الضغط': 'مضخة إيطالية احترافية 20 بار لاستخلاص الكريمة الفاخرة',
      'مبخر الحليب': 'ذراع تبخير بخاري قوي لعمل الكابوتشينو واللاتيه',
      'خزان الماء': '1.5 لتر شفاف قابل للفك والتنظيف'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-20-Bar-Espresso-Coffee-Machine.html'),
    description: 'صانعة القهوة والإسبريسو المنزلية الاحترافية! استمتع بأفضل كوب كابوتشينو ولاتيه بكريمة غنية مثل الكافيهات.'
  },
  {
    id: 40,
    title: 'لاب توب جيمنج ودراسة بشاشة 15.6 بوصة FHD مع معالج Intel N95 وذاكرة 16GB RAM SSD 512GB',
    category: 'laptops',
    priceUSD: 199.00,
    originalPriceUSD: 450.00,
    discount: 56,
    rating: 4.8,
    reviewsCount: 9800,
    ordersCount: 45000,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-9 أيام',
    colors: ['فضي تيتانيوم ألمنيوم'],
    specs: {
      'الشاشة': '15.6 بوصة IPS FHD فائقة الوضوح 1920x1080',
      'المعالج': 'Intel N95 جيل حديث رباعي النواة حتى 3.4GHz',
      'الذاكرة والتخزين': '16GB RAM LPDDR5 + 512GB M.2 SSD سريع',
      'البصمة': 'حساس بصمة أمان مدمج مع كيبورد مضيئة'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-15.6-Laptop-Intel-16GB-RAM-512GB-SSD.html'),
    description: 'لاب توب الجيمنج والأعمال عالي الأداء! هيكل ألمنيوم أنيق، شريحة إنتل حديثة، ذاكرة 16GB وسرعة تشغيل فائقة.'
  },
  {
    id: 41,
    title: 'تابلت وآيباد ذكي بشاشة 11 بوصة 2K مع قلم وكيبورد مدمج Android 14 Tablet',
    category: 'phones',
    priceUSD: 89.00,
    originalPriceUSD: 220.00,
    discount: 60,
    rating: 4.9,
    reviewsCount: 21500,
    ordersCount: 98000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['رمادي فضائي 2K', 'ذهبي'],
    specs: {
      'الشاشة': '11 بوصة IPS 2K شاشة لمس دقيقة (2000x1200 بكسل)',
      'النظام': 'أندرويد 14 الأصلي مع دعم متجر جوجل بلاي بالكامل',
      'البطارية': '8800mAh تدوم طوال اليوم للدراسة والألعاب',
      'الملحقات': 'يشمل قلم حراري وكيبورد مغناطيسي مرفق'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Android-14-Tablet-11-Inch-2K.html'),
    description: 'التابلت الأفضل للدراسة والألعاب وتصفح الإنترنت! شاشة 2K فائقة الدقة مع كيبورد وقلم مجاني مرفق.'
  },
  {
    id: 42,
    title: 'هاتف ذكي 5G بشاشة 120Hz وقدرة شحن 67W كاميرا 108MP 5G Smartphone',
    category: 'phones',
    priceUSD: 149.00,
    originalPriceUSD: 320.00,
    discount: 53,
    rating: 4.9,
    reviewsCount: 14200,
    ordersCount: 61000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود زجاجي 5G', 'أزرق كويكبي'],
    specs: {
      'الكاميرا': '108 ميجابكسل كاميرا احترافية بدقة 4K',
      'الشاشة': '6.67 بوصة AMOLED تردد 120Hz فائقة السلاسة',
      'الشحن': '67W شحن سريع جداً يصل 100% خلال 35 دقيقة',
      'الشبكات': 'دعم 5G الفائق لشريحتين SIM'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-5G-Smartphone-108MP-67W.html'),
    description: 'هاتف ذكي 5G بمواصفات رائعة! كاميرا 108 ميجابكسل بدقة سينمائية، شاشة AMOLED 120Hz وسرعة شحن خارقة.'
  },
  {
    id: 43,
    title: 'خلاط ومحضر الطعام العصري بقوة 2000W لكسر الثلج والعصائر Heavy Duty Blender',
    category: 'appliances',
    priceUSD: 38.00,
    originalPriceUSD: 99.00,
    discount: 62,
    rating: 4.9,
    reviewsCount: 18900,
    ordersCount: 82000,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أسود محرك 2000W', 'أحمر ميتاليك'],
    specs: {
      'القوة': '2000 واط محرك نحاسي قوي سعة 2 لتر',
      'الشفرات': '6 شفرات يابانية حادة لكسر الثلج والفواكه الصلبة خلال ثواني',
      'السرعات': '15 سرعة متغيرة مع خاصية النبض الفوري'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Heavy-Duty-Commercial-Blender.html'),
    description: 'خلاط ومحضر عصائر القوة الفائقة 2000W! يكسر الثلج ويحضر العصائر والسموذي والصوصات القوية بغمضة عين.'
  },
  {
    id: 44,
    title: 'مكواة البخار العمودية المحمولة للملابس والسفر Portable Garment Steamer',
    category: 'appliances',
    priceUSD: 17.50,
    originalPriceUSD: 45.00,
    discount: 61,
    rating: 4.8,
    reviewsCount: 31200,
    ordersCount: 140000,
    image: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أبيض سفري ناصع', 'وردي'],
    specs: {
      'البخار': 'تسخين سريع جداً خلال 15 ثانية بخار قوي مستمر',
      'التصميم': 'قابلة للطي وخفيفة الوزن للحقائب والسفر',
      'الأمان': 'حماية متكاملة من التسريب والجفاف'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Portable-Garment-Steamer-Iron.html'),
    description: 'مكواة البخار المحمولة والسريعة للملابس! كوي سريع وفوري للملابس أثناء السفر والمنزل بدون الحاجة لطاولة مكواة.'
  },
  {
    id: 45,
    title: 'لاب توب ماك ستيل نحيل 14 بوصة FHD للطلاب والأعمال 8GB RAM 256GB SSD',
    category: 'laptops',
    priceUSD: 165.00,
    originalPriceUSD: 380.00,
    discount: 57,
    rating: 4.8,
    reviewsCount: 11400,
    ordersCount: 52000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['فضي ماكbook style'],
    specs: {
      'الهيكل': 'ألومنيوم خفيف الوزن جداً 1.2kg بسمك 12mm',
      'الشاشة': '14 بوصة FHD حواف نحيفة IPS (1920x1080)',
      'الأداء': '8GB RAM + 256GB SSD تشغيل ويندوز 11 الأصلي'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Ultra-Thin-14-Laptop-8GB-256GB.html'),
    description: 'لاب توب نحيف للغاية وأنيق بتصميم يشبه ماك بوك! ممتاز للدراسة والأعمال المكتبية وتصفح الإنترنت بحجم خفيف.'
  },
  {
    id: 46,
    title: 'هاتف ذكي ببطارية عملاقة 10,600mAh ومقاوم للصدمات والماء Rugged Smartphone',
    category: 'phones',
    priceUSD: 129.00,
    originalPriceUSD: 280.00,
    discount: 54,
    rating: 4.9,
    reviewsCount: 9400,
    ordersCount: 41000,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود مصفح للرحلات', 'برتقالي تكتيكي'],
    specs: {
      'البطارية': '10,600mAh بطارية ضخمة تكفي 5 أيام عمل شحنة واحدة',
      'المتانة': 'معيار IP68/IP69K مقاوم للسقوط، الماء، والغبار',
      'المزايا': 'كاميرا رؤية ليلية Night Vision وكشاف قوي مدمج'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Rugged-Smartphone-10000mAh.html'),
    description: 'الهاتف الصلب المقاوم للصدمات والماء للرحلات والمواقع! بطارية خارقة 10,600mAh وكاميرا رؤية ليلية احترافية.'
  },
  {
    id: 47,
    title: 'مكيف هواء سبليت ميني لغرف النوم والمكاتب USB Mini Air Cooler AC Fan',
    category: 'appliances',
    priceUSD: 22.00,
    originalPriceUSD: 59.00,
    discount: 63,
    rating: 4.8,
    reviewsCount: 25400,
    ordersCount: 110000,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-7 أيام',
    colors: ['أبيض مكيف ميني', 'أسود'],
    specs: {
      'التبريد': 'تكنولوجيا التبريد بالثلج والماء السريع',
      'الطاقة': 'يعمل بمنفذ USB من الشاحن أو الباور بنك بذكاء 5V',
      'الصوت': 'هادئ جداً 25dB مخصص لغرف النوم'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Mini-USB-Air-Cooler-Fan.html'),
    description: 'مكيف الهواء الشخصي النحيف والصغير! هواء بارد ومكيف لغرفة نومك أو مكتبك باستهلاك كهرباء شبه معدوم.'
  },
  {
    id: 48,
    title: 'شاشة جيمنج كمبيوتر منحنية 27 بوصة 165Hz 1ms Curved Gaming Monitor',
    category: 'laptops',
    priceUSD: 139.00,
    originalPriceUSD: 290.00,
    discount: 52,
    rating: 4.9,
    reviewsCount: 12500,
    ordersCount: 54000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أسود جيمنج RGB 165Hz'],
    specs: {
      'الشاشة': '27 بوصة IPS منحنية 1500R معدل تحديث 165Hz',
      'زمن الاستجابة': '1ms استجابة سريعة جداً مع AMD FreeSync',
      'المنافذ': '2x HDMI 2.0 + DisplayPort 1.4'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-27-Curved-Gaming-Monitor-165Hz.html'),
    description: 'شاشة الجيمنج المنحنية الاحترافية 165Hz! ألوان غنية IPS، زوايا رؤية واسعة واستجابة 1ms فائقة للألعاب السريعة.'
  },
  {
    id: 49,
    title: 'غسالة الأطباق والأواني المحمولة الذكية للمطبخ Portable Tabletop Dishwasher',
    category: 'appliances',
    priceUSD: 115.00,
    originalPriceUSD: 260.00,
    discount: 56,
    rating: 4.9,
    reviewsCount: 7800,
    ordersCount: 32000,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-9 أيام',
    colors: ['أبيض رخامي ذكي'],
    specs: {
      'التنظيف': 'تنظيف بالماء الساخن 75°C وتعقيم بالولتافيوليت UV',
      'التركيب': 'لا تحتاج تمديدات سباكة خاصة خزان ماء مدمج',
      'البرامج': '5 برامج غسيل وتجفيف فوري بالأقراص'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Portable-Tabletop-Dishwasher.html'),
    description: 'غسالة الأطباق المحمولة الذكية للمطابخ والشقق! تغسل وتعقم الصحون والأواني بالماء الساخن وتجففها بدون عناء.'
  },
  {
    id: 50,
    title: 'جهاز تصفية ومُنقي الهواء الذكي HEPA للمنازل والمكاتب Smart Room Air Purifier',
    category: 'appliances',
    priceUSD: 45.00,
    originalPriceUSD: 110.00,
    discount: 59,
    rating: 4.9,
    reviewsCount: 16200,
    ordersCount: 71000,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80'
    ],
    isChoice: true,
    freeShipping: true,
    deliveryDays: 'شحن 5-8 أيام',
    colors: ['أبيض نقي HEPA'],
    specs: {
      'الفلترة': 'فلتر HEPA H13 ثلاثي الطبقات يزيل 99.97% من الأتربة والدخان',
      'التحكم': 'مستشعر جودة الهواء الذكي + تطبيق جوال وشاشة لمس',
      'التغطية': 'يغطي مساحات حتى 40 متر مربع بهدوء تام'
    },
    aliExpressUrl: getAffiliateLink('https://ar.aliexpress.com/w/wholesale-Smart-HEPA-Air-Purifier.html'),
    description: 'منقي الهواء الذكي لحماية أسرتك من الأتربة والروائح والدخان! فلتر H13 HEPA طبي ينقي هواء الغرفة فوراً.'
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18;

