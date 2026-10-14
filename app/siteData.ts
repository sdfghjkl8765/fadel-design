export type Language = "ar" | "en";
export type Currency = "IQD" | "USD";

export const SITE_CONFIG = {
  brandName: "Fadel Design",
  whatsappNumber: "9647712601500",
  localPhone: "07712601500",
  tiktokUrl: "https://tiktok.com/@f.f72959",
  exchangeRateUSD: 1500,
};

export const SERVICES = [
  {
    id: "web",
    icon: "Globe",
    price: 15000,
    ar: { title: "تصميم مواقع الويب", description: "مواقع عصرية سريعة الاستجابة تجمع بين الهوية البصرية القوية وتجربة المستخدم السلسة.", features: ["مواقع شخصية وتعريفية", "مواقع للشركات والأعمال", "صفحات هبوط تسويقية", "مواقع تفاعلية وثلاثية الأبعاد", "تصميم متجاوب مع الهواتف والحواسيب"] },
    en: { title: "Web Design & Development", description: "Modern, responsive websites combining a strong visual identity with a seamless user experience.", features: ["Personal & portfolio websites", "Corporate & business websites", "Marketing landing pages", "Interactive & 3D web experiences", "Responsive on mobile and desktop"] },
  },
  {
    id: "app",
    icon: "Smartphone",
    price: 20000,
    ar: { title: "تصميم وتطوير التطبيقات", description: "واجهات تطبيقات احترافية ونماذج تفاعلية مبنية على أسس تجربة المستخدم الحديثة.", features: ["تصميم واجهات تطبيقات الموبايل", "نماذج أولية تفاعلية", "واجهات Android و iOS", "لوحات تحكم وتجربة مستخدم", "تنفيذ التطبيقات وفق نطاق المشروع"] },
    en: { title: "Mobile App Design & Dev", description: "Professional mobile UI/UX and interactive prototypes built on modern usability standards.", features: ["Mobile app UI/UX design", "Interactive prototyping", "Android & iOS interfaces", "Dashboards & user experience systems", "App development per agreed scope"] },
  },
  {
    id: "presentations",
    icon: "Presentation",
    price: 10000,
    ar: { title: "العروض التقديمية", description: "عروض تقديمية ثنائية وثلاثية الأبعاد تجذب الانتباه وتوصل فكرتك بوضوح.", features: ["عروض PowerPoint احترافية", "عروض ثنائية الأبعاد", "عروض ثلاثية الأبعاد بطابع سينمائي", "عروض تعليمية وتجارية", "عروض مناقشة مشاريع التخرج"] },
    en: { title: "Presentations (2D & 3D)", description: "Cinematic presentations designed to captivate audiences and communicate clearly.", features: ["Professional PowerPoint presentations", "Modern 2D slide decks", "Cinematic 3D presentations", "Educational & commercial pitches", "Graduation defense presentations"] },
  },
  {
    id: "graduation",
    icon: "GraduationCap",
    price: 15000,
    ar: { title: "مشاريع التخرج والجامعة", description: "دعم متكامل للطلاب في تصميم مشاريعهم وإعداد عروض المناقشة بصورة منظمة.", features: ["واجهات مشاريع الويب والتطبيقات", "تصميم عرض المناقشة", "تنظيم المحتوى المرئي", "نماذج توضيحية وتجريبية", "إخراج نهائي منظم وجذاب"] },
    en: { title: "University & Graduation Projects", description: "Complete design support for students presenting academic projects professionally.", features: ["Web & mobile UI for academic projects", "Defense presentation design", "Visual content organization", "Interactive mockups & demos", "Polished final project output"] },
  },
] as const;

export const PRICING = [
  { service: "web", price: 15000, ar: ["تصميم واجهة موقع", "تصميم واجهة مستخدم متجاوبة وعصرية للصفحة الرئيسية"], en: ["Website UI Design", "Modern responsive UI design for a main landing page"] },
  { service: "web", price: 35000, featured: true, ar: ["موقع شخصي بسيط", "موقع تعريفي أو بورتفوليو متجاوب لعرض الأعمال والمهارات"], en: ["Simple Personal Website", "Responsive portfolio or bio website to showcase your work"] },
  { service: "web", price: 75000, ar: ["موقع متكامل", "موقع متعدد الصفحات مع أقسام ديناميكية ونماذج تواصل"], en: ["Full Website", "Multi-page website with dynamic sections and contact forms"] },
  { service: "app", price: 20000, featured: true, ar: ["تصميم واجهات تطبيق", "شاشات تطبيق موبايل مع تجربة استخدام سلسة ومتناسقة"], en: ["Mobile App UI Design", "Mobile app screens with a clean, consistent UX flow"] },
  { service: "presentations", price: 10000, ar: ["عرض PowerPoint", "شرائح احترافية ثنائية الأبعاد مع انتقالات أنيقة"], en: ["PowerPoint Presentation", "Professional 2D slide deck with polished transitions"] },
  { service: "presentations", price: 25000, featured: true, ar: ["عرض تقديمي ثلاثي الأبعاد", "عرض سينمائي يوظف العمق والعناصر ثلاثية الأبعاد"], en: ["3D Cinematic Presentation", "Cinematic presentation with 3D depth and transitions"] },
  { service: "graduation", price: 15000, ar: ["عرض مشروع تخرج", "عرض مناقشة أكاديمي منظم يبرز البحث والنتائج"], en: ["Graduation Defense Deck", "Structured academic presentation highlighting research and results"] },
  { service: "graduation", price: 25000, ar: ["واجهات مشروع تخرج", "تصميم واجهات النظام أو التطبيق مع نماذج العرض"], en: ["Graduation Project UI", "System or app UI design tailored to your academic project"] },
] as const;

export const PORTFOLIO = [
  { id: "fadel-video-work", category: "presentations", isOwnWork: true, videoUrl: "/fadel-design-work.mp4", image: "", tools: "Video · Showreel", ar: ["لقطات من عملي", "مقطع فيديو", "مقطع من العمل الذي أرسلته، يعرض بعض اللقطات كما هي."], en: ["Selected Work Clips", "Video clip", "A clip from the work you shared, presented as supplied."] },
  { id: "text-scale", category: "graduation", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85", tools: "Next.js · Python · Figma", ar: ["Text Scale لكشف وتحليل النصوص", "مشروع تخرج جامعي + واجهة ويب", "واجهة تحليل ذكية ولوحة نتائج إحصائية لمشروع أكاديمي."], en: ["Text Scale · AI Text Analysis", "Graduation project + web UI", "An analytical dashboard and defense deck for an academic project."] },
  { id: "mazariuna", category: "apps", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85", tools: "Flutter · Figma · UI/UX", ar: ["تطبيق مزارعنا للحجز والاستكشاف", "تطبيق موبايل", "تجربة عربية سلسة لاستكشاف وحجز المزارع والاستراحات."], en: ["Mazariuna Farm Booking App", "Mobile application", "An Arabic-first experience for discovering and booking local retreats."] },
  { id: "biology-3d", category: "3d", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85", tools: "Three.js · GLTF · PowerPoint 3D", ar: ["عرض تعليمي تفاعلي ثلاثي الأبعاد", "عرض 3D + ويب تفاعلي", "مجسمات تفاعلية تشرح الهياكل العلمية والمعمارية بطريقة سينمائية."], en: ["Interactive 3D Learning Experience", "3D presentation + interactive web", "Cinematic 3D models that make complex structures easier to explore."] },
  { id: "agency-web", category: "web", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85", tools: "Next.js · TypeScript · Motion", ar: ["واجهة منصة تقنية مستقبلية", "تصميم موقع ويب", "صفحة هبوط لمنتج رقمي مع تقسيم واضح للمزايا والأسعار."], en: ["Futuristic Digital Studio", "Web design concept", "A bold landing page concept for a digital product with clear conversion paths."] },
  { id: "pitch-deck", category: "presentations", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=85", tools: "PowerPoint · Illustrator", ar: ["عرض تقديمي للأعمال", "عرض تقديمي احترافي", "شرائح تحول البيانات إلى رسوم بيانية واضحة ومتناسقة."], en: ["Business & Academic Pitch Deck", "Presentation design", "A clean slide deck turning dense text and data into visual stories."] },
] as const;

export const COPY = {
  ar: {
    nav: ["من أنا", "الخدمات", "الأعمال", "الأسعار", "الأسئلة"],
    heroEyebrow: "استوديو التصميم والتطوير الرقمي · العراق",
    heroTitle: "أفكارك،\nبشكلٍ لا يُنسى.",
    heroBody: "من مواقع الويب والتطبيقات إلى العروض ثلاثية الأبعاد ومشاريع التخرج، نحول فكرتك إلى تجربة رقمية استثنائية.",
    explore: "اكتشف الأعمال", order: "ابدأ مشروعك", scroll: "مرر لاستكشاف الاستوديو",
    available: "متاح لمشاريع جديدة", projects: "مشاريع مختارة", years: "خدمات رقمية متكاملة",
    aboutLabel: "01 / من أنا", aboutTitle: "تصميم جميل.\nتنفيذ متقن.",
    aboutBody: "أنا فاضل، مصمم ومطور واجهات رقمية ومؤسس Fadel Design. أصنع مواقع وتطبيقات وعروضاً تقديمية تجمع بين الحس البصري الواضح والتنفيذ المدروس.",
    aboutQuote: "جودة استوديو حديث، بأسعار واضحة تناسب الطلاب والأفراد والشركات الصغيرة.",
    serviceLabel: "02 / ماذا أقدم", serviceTitle: "كل فكرة تستحق\nتنفيذاً استثنائياً.", serviceIntro: "حلول رقمية مصممة بعناية لتلائم احتياج مشروعك وميزانيتك.", starts: "يبدأ من", details: "اكتشف الخدمة", orderService: "اطلب الخدمة",
    portfolioLabel: "03 / معرض الأعمال", portfolioTitle: "أفكار صارت\nتجارب ملموسة.", portfolioIntro: "نماذج مختارة من تصاميم الويب والتطبيقات والعروض.", filters: { all: "الكل", web: "ويب", apps: "تطبيقات", presentations: "عروض", "3d": "ثلاثي الأبعاد", graduation: "تخرج" },
    sample: "نموذج استعراضي", view: "اطلب عملاً مشابهاً",
    pricingLabel: "04 / استثمارك", pricingTitle: "أسعار واضحة.\nبداية سهلة.", pricingIntro: "أسعار ابتدائية مرنة تناسب الطلاب والأفراد والمشاريع الناشئة.", currency: "العملة", starting: "ابتداءً من", quote: "احصل على عرض سعر", exchange: "التحويل تقريبي وفق سعر مرجعي: 1$ = 1,500 د.ع. السعر النهائي يعتمد على نطاق المشروع.",
    reasonsLabel: "05 / لماذا Fadel Design", reasonsTitle: "شريك يفهم\nفكرتك وميزانيتك.", reasons: [["سعر واضح", "باقات مرنة دون مفاجآت، تناسب الطلاب وأصحاب المشاريع الصغيرة."], ["مصمم لمشروعك", "كل واجهة وشريحة تنطلق من هوية فكرتك، لا من قالب جاهز."], ["تفاصيل محسوبة", "اهتمام بالتناسق وسهولة الاستخدام على الهاتف والحاسوب."], ["تواصل مباشر", "متابعة شخصية عبر واتساب من الفكرة حتى تسليم الملفات."]],
    faqLabel: "06 / أسئلة شائعة", faqTitle: "قبل أن نبدأ.", faqs: [["كيف يتم تحديد السعر النهائي؟", "الأسعار المعروضة ابتدائية. نحدد التكلفة بعد مراجعة عدد الصفحات أو الشاشات أو الشرائح والميزات المطلوبة."], ["كم تستغرق مدة التنفيذ؟", "التصاميم البسيطة والعروض تستغرق عادة من يومين إلى خمسة أيام عمل. نتفق على جدول المشاريع الأكبر مسبقاً."], ["هل يمكنني طلب تعديلات؟", "بالتأكيد. نراجع العمل خلال مراحل التنفيذ للتأكد من مطابقته لتصورك ومتطلبات مشروعك."], ["كيف أستلم الملفات؟", "تُسلّم الملفات بصيغها الأصلية عالية الدقة أو كملفات وروابط برمجية، حسب نوع الخدمة."]],
    contactLabel: "07 / لنبدأ", contactTitle: "لديك فكرة؟\nلنصنعها معاً.", contactBody: "أرسل تفاصيل مشروعك، وسأعود إليك لمناقشة النطاق والتكلفة والجدول الزمني.", contactCta: "راسلني على واتساب", phone: "أو اتصل مباشرة", footer: "جميع الحقوق محفوظة لاستوديو Fadel Design", formName: "اسمك", formPhone: "رقم الهاتف", formService: "نوع الخدمة", formBrief: "حدثني عن فكرتك", send: "إرسال الطلب عبر واتساب", namePlaceholder: "الاسم الكامل", phonePlaceholder: "077XXXXXXXX", briefPlaceholder: "ما الذي ترغب في تصميمه؟",
  },
  en: {
    nav: ["About", "Services", "Work", "Pricing", "FAQ"],
    heroEyebrow: "Digital design & development studio · Iraq",
    heroTitle: "Your ideas,\nunforgettable.",
    heroBody: "From websites and apps to 3D presentations and graduation projects, we turn your vision into an exceptional digital experience.",
    explore: "Explore the work", order: "Start a project", scroll: "Scroll to explore the studio",
    available: "Available for new projects", projects: "Selected projects", years: "Complete digital services",
    aboutLabel: "01 / About", aboutTitle: "Thoughtful design.\nCrafted to work.",
    aboutBody: "I'm Fadel, a digital designer and developer, and the founder of Fadel Design. I build websites, apps, and presentations with a clear visual point of view and careful execution.",
    aboutQuote: "Studio-grade visual quality, with clear pricing for students, individuals, and small businesses.",
    serviceLabel: "02 / What I do", serviceTitle: "Good ideas deserve\nexceptional craft.", serviceIntro: "Digital solutions designed around your project goals and budget.", starts: "Starts at", details: "Explore service", orderService: "Order service",
    portfolioLabel: "03 / Selected work", portfolioTitle: "Ideas made\ninto experiences.", portfolioIntro: "A selection of web, app, and presentation concepts.", filters: { all: "All", web: "Web", apps: "Apps", presentations: "Decks", "3d": "3D", graduation: "Academic" },
    sample: "Showcase sample", view: "Request similar work",
    pricingLabel: "04 / Investment", pricingTitle: "Clear pricing.\nAn easy start.", pricingIntro: "Flexible starting prices for students, individuals, and early-stage businesses.", currency: "Currency", starting: "Starting at", quote: "Get a quote", exchange: "Approximate conversion at a reference rate of $1 = 1,500 IQD. Final pricing depends on project scope.",
    reasonsLabel: "05 / Why Fadel Design", reasonsTitle: "A partner who gets\nyour idea and budget.", reasons: [["Clear pricing", "Flexible packages with no surprises, built for students and small businesses."], ["Made for your project", "Every screen and slide starts with your identity, not a generic template."], ["Details that matter", "Careful attention to visual balance and usability on every device."], ["Direct communication", "Personal follow-through on WhatsApp, from first idea to final files."]],
    faqLabel: "06 / Common questions", faqTitle: "Before we begin.", faqs: [["How is the final price determined?", "Prices are starting points. We confirm the cost after reviewing the number of pages, screens, or slides and the requested features."], ["How long does delivery take?", "Simple designs and presentations usually take two to five working days. Larger projects get an agreed timeline upfront."], ["Can I request revisions?", "Absolutely. We review the work at milestones to make sure it matches your vision and project needs."], ["How are final files delivered?", "Files are delivered in high-resolution editable formats or as code and deployment links, depending on the service."]],
    contactLabel: "07 / Let's begin", contactTitle: "Have an idea?\nLet's make it real.", contactBody: "Send over your project details and I'll get back to you to discuss scope, pricing, and timing.", contactCta: "Message on WhatsApp", phone: "Or call directly", footer: "All rights reserved to Fadel Design Studio", formName: "Your name", formPhone: "Phone number", formService: "Service type", formBrief: "Tell me about your idea", send: "Send request on WhatsApp", namePlaceholder: "Full name", phonePlaceholder: "+964 7XX XXX XXXX", briefPlaceholder: "What would you like to create?",
  },
} as const;