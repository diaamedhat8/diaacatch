export const CATEGORIES = [
  { id: 'all', name: 'كل المنتجات', icon: 'Sparkles' },
  { id: 'electronics', name: 'إلكترونيات وهواتف', icon: 'Smartphone' },
  { id: 'smarthome', name: 'الأجهزة الذكية', icon: 'Home' },
  { id: 'gaming', name: 'ألعاب وجيمنج', icon: 'Gamepad2' },
  { id: 'fashion', name: 'ساعات وموضة', icon: 'Watch' },
  { id: 'gadgets', name: 'أدوات ومبتكرات', icon: 'Zap' },
];

export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1, name: 'دولار أمريكي' },
  SAR: { code: 'SAR', symbol: 'ر.س', rate: 3.75, name: 'ريال سعودي' },
  EGP: { code: 'EGP', symbol: 'ج.م', rate: 48.5, name: 'جنيه مصري' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, name: 'درهم إماراتي' },
};

export const PRODUCTS = [
  {
    id: 1,
    title: 'ساعة ذكية AMOLED مقاومة للماء مع تتبع كامل للأنشطة والنبض Pro 2026',
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
    deliveryDays: '7-10 أيام',
    colors: ['أسود بريميوم', 'فضي تيتانيوم', 'ذهبي وردي'],
    specs: {
      'الشاشة': '1.43 بوصة Ultra AMOLED 60Hz',
      'البطارية': '450mAh (تصل إلى 14 يوم)',
      'مقاومة الماء': 'IP68 5ATM',
      'الاتصال': 'بلوتوث 5.3 + مكالمات مباشرة'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005001234567.html',
    description: 'ساعة ذكية متطورة بتصميم فاخر وشاشة AMOLED فائقة الوضوح. تدعم قياس الأكسجين بالدم وضربات القلب ومراقبة النوم، بالإضافة إلى إجراء وتلقي المكالمات بصوت عالي النقاء.'
  },
  {
    id: 2,
    title: 'سماعات لاسلكية ANC لعزل الضوضاء النشط مع صوت Hi-Fi وبطارية 40 ساعة',
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
    deliveryDays: '5-8 أيام',
    colors: ['أسود مات', 'أبيض ثلجي', 'أزرق كحلي'],
    specs: {
      'تقنية العزل': 'ANC Active Noise Cancellation -38dB',
      'مدة التشغيل': '40 ساعة مع علبة الشحن',
      'منفذ الشحن': 'USB Type-C شحن سريع',
      'الترميز': 'AAC / SBC HD Audio'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005009876543.html',
    description: 'تجربة صوتية مذهلة مع تقنية عزل الضوضاء المحيطة ANC. تمنحك استجابة جهير عميقة (Deep Bass) وميكروفون نقي جداً للمكالمات والألعاب.'
  },
  {
    id: 3,
    title: 'كاميرا مراقبة خارجية ذكية 4K تعمل بالطاقة الشمسية مع تتبع الحركة بالذكاء الاصطناعي',
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
    deliveryDays: '7-12 يوم',
    colors: ['أبيض ناصع'],
    specs: {
      'الدقة': '4K Ultra HD Dual Lens',
      'مصدر الطاقة': 'لوح شمسي + بطاريات 12000mAh',
      'الرؤية الليلية': 'رؤية ليلية ملونة مع كشافات LED',
      'التخزين': 'كارت MicroSD حتى 128GB + تخزين سحابي'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005003334445.html',
    description: 'كاميرا حماية متطورة جداً تعمل بالكامل بالطاقة الشمسية بدون الحاجة لأسلاك. ترسل تنبيهات فورية للهاتف عند كشف أي حركة وتدعم التحدث باتجاهين.'
  },
  {
    id: 4,
    title: 'دراع تحكم لاسلكي احترافي للجيمنج RGB متوافق مع PC / Switch / Android / iOS',
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
    deliveryDays: '6-9 أيام',
    colors: ['أسود شفاف RGB', 'أبيض سايبر'],
    specs: {
      'الحساسات': 'Hall Effect Joysticks (بدون Drift)',
      'الربط': 'Bluetooth 5.0 + 2.4G Receiver + Type-C',
      'الإضاءة': 'Dynamic RGB Lighting 7 ألوان',
      'الاهتزاز': 'محرك اهتزاز مزدوج HD Rumble'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005007778889.html',
    description: 'يد تحكم ألعاب عالية الدقة مزودة بحساسات Hall Effect الاستشعارية لمنع الانحراف نهائياً. استجابة فورية بدون تأخير مع أزرار ماكرو قابلة للبرمجة.'
  },
  {
    id: 5,
    title: 'جهاز عرض بروجيكتور سمارت 4K بدعم Wi-Fi 6 و Android 11 وضوح خيالي للمنزل',
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
    deliveryDays: '5-10 أيام',
    colors: ['رمادي فلكي'],
    specs: {
      'حجم العرض': 'حتى 150 بوصة Full HD / 4K Decoding',
      'السطوع': '8000 Lumens ANSI',
      'النظام': 'Android 11 مدمج مع متجر التطبيقات',
      'الاتصال': 'Wi-Fi 6 + Bluetooth + HDMI + USB'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005005556667.html',
    description: 'حّول غرفتك إلى سينما منزلية متكاملة! جهاز عرض ذكي يدعم تشغيل نتفليكس ويوتيوب مباشرة بصوت مدمج قوي وتعديل زوايا العرض تلقائياً.'
  },
  {
    id: 6,
    title: 'مفك كهربائي دقيق قابل للشحن مع 24 رأس تيتانيوم صلب لإصلاح الهواتف والأجهزة',
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
    deliveryDays: '6-8 أيام',
    colors: ['ألومنيوم رمادي'],
    specs: {
      'العزم': '0.35 N.m كهربائي / 3 N.m يدوياً',
      'عدد الرؤوس': '24 bit S2 Steel Magnetic',
      'البطارية': 'Type-C Rechargable 350mAh',
      'الإضاءة': '3 أضواء Shadowless LED'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005002221114.html',
    description: 'أداة لا غنى عنها لكل عاشق للتكنولوجيا والصيانة! مفك كهربائي أنيق جداً بحجم القلم مع مغناطيس قوي لثبات الرؤوس والبراغي الصغيرة.'
  },
  {
    id: 7,
    title: 'شاحن سريع 120W GaN Pro بخمس منافذ للهواتف واللابتوب والمكثفات الذكية',
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
    deliveryDays: '5-7 أيام',
    colors: ['أسود', 'أبيض'],
    specs: {
      'القوة القصوى': '120W GaN V Fast Charger',
      'المنافذ': '3x USB-C PD3.0 + 2x USB-A QC4.0',
      'الحماية': 'شريحة حماية من السخونة والجهد العالي',
      'التوافق': 'iPhone, Samsung, MacBook, iPad, Xiaomi'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005004443332.html',
    description: 'شاحن جاليوم نيترايد (GaN) قوي وصغير الحجم. يشحن جهاز ماك بوك وهاتفك واثنين من الأجهزة الأخرى في نفس الوقت بأقصى سرعة أمان.'
  },
  {
    id: 8,
    title: 'مصباح طاولة ذكي LED بروتوكول RGBIC مع مزامنة مع الموسيقى والتحكم الصوتي',
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
    deliveryDays: '7-11 يوم',
    colors: ['أسود مات RGB'],
    specs: {
      'الألوان': '16 مليون لون متدرج RGBIC',
      'التحكم': 'تطبيق هاتف + Alexa + Google Assistant',
      'النمط': 'مزامنة مع الألعاب والموسيقى',
      'الطاقة': 'USB Powered 5V 2A'
    },
    aliExpressUrl: 'https://www.aliexpress.com/item/1005008889991.html',
    description: 'إضاءة محيطية رائعة جداً لمكتبك أو السيت أب، تتفاعل مع نغمات الموسيقى وأصوات الألعاب وتضفي أجواء ساحرة على الغرفة.'
  }
];

export const FLASH_DEAL_TIMER_INITIAL = 5 * 3600 + 42 * 60 + 18; // 5 hours 42 mins 18 secs
