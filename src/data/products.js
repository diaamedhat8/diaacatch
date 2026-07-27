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

// Direct target URL provided by user for exact product
const DIRECT_USER_PRODUCT_URL = getAffiliateLink('https://www.aliexpress.com/item/1005007502032342.html?spm=oneshop.sub_buy_again.waterfall.17.97007f6bhIWI49&skuId=12000059381325615');

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
    aliExpressUrl: DIRECT_USER_PRODUCT_URL,
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
      'الاتصال': 'три-mode (بلوتوث 5.0 + 2.4G لاسلكي + Type-C سلكي)',
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
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18;
