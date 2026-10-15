"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  GraduationCap,
  Globe,
  Presentation,
  Smartphone,
} from "lucide-react";
import { COPY, PORTFOLIO, PRICING, SERVICES, SITE_CONFIG, type Currency, type Language } from "./siteData";
import HeroScene from "./HeroScene";

type Filter = "all" | "web" | "apps" | "presentations" | "3d" | "graduation";

const serviceIcons = {
  Globe,
  Smartphone,
  Presentation,
  GraduationCap,
};

const formatPrice = (price: number, currency: Currency, language: Language) => {
  const converted = currency === "USD" ? price / SITE_CONFIG.exchangeRateUSD : price;
  const formatted = new Intl.NumberFormat(language === "ar" ? "ar-IQ" : "en-US", {
    maximumFractionDigits: currency === "USD" ? 2 : 0,
  }).format(converted);
  return currency === "USD" ? `$${formatted}` : `${formatted} د.ع`;
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const [currency, setCurrency] = useState<Currency>("IQD");
  const [filter, setFilter] = useState<Filter>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", service: "", brief: "" });
  const t = COPY[language];
  const isArabic = language === "ar";
  const visibleProjects = PORTFOLIO.filter((project) => filter === "all" || project.category === filter);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const service = SERVICES.find((item) => item.id === form.service);
    const serviceName = service ? service[language].title : "";
    const message = isArabic
      ? `مرحباً Fadel Design، أود الاستفسار عن مشروع جديد.\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالخدمة: ${serviceName}\nتفاصيل الفكرة: ${form.brief}`
      : `Hello Fadel Design, I'd like to discuss a new project.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${serviceName}\nProject details: ${form.brief}`;
    openWhatsApp(message);
  };

  return (
    <main className={`site-shell${isArabic ? " is-arabic" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Fadel Design home">
          <span className="wordmark-symbol">F<span>.</span></span>
          <span className="wordmark-name">FADEL<br />DESIGN</span>
        </a>
        <nav className="main-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}>
          {t.nav.map((item, index) => (
            <a href={["#about", "#services", "#work", "#pricing", "#faq"][index]} key={item}>{item}</a>
          ))}
        </nav>
        <div className="header-socials" role="group" aria-label={isArabic ? "حسابات التواصل الاجتماعي" : "Social media"}>
          <a href={SITE_CONFIG.tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.57v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.18-.02-.36-.05-.53V11.5a6.46 6.46 0 1 0 3.62 5.8V9.74a8.36 8.36 0 0 0 4.89 1.57V7.77a4.82 4.82 0 0 1-1.12-.08Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/fx5_0/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLanguage(isArabic ? "en" : "ar")} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>
            <span className="language-globe"><Globe size={16} strokeWidth={1.7} /></span>
            {isArabic ? "EN" : "عربي"}
          </button>
          <a className="header-cta" href="#contact">{t.order}<ArrowUpRight size={16} /></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grain" />
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="status-dot" />{t.heroEyebrow}</div>
          <h1>{t.heroTitle.split("\n").map((line, index) => <span key={line} className={index === 1 ? "accent-line" : ""}>{line}</span>)}</h1>
          <p className="hero-description">{t.heroBody}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#work">{t.explore}<ArrowUpRight size={18} /></a>
            <a className="button button-text" href="#contact">{t.order}<ArrowDownRight size={18} /></a>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /><span>{t.scroll}</span><ArrowDown size={14} /></a>
        </div>
        <div className="hero-art">
          <div className="hero-art-topline"><span>FD / 2025—26</span><span>DESIGN · DIGITAL · DETAIL</span></div>
          <HeroScene label={isArabic ? "مشهد ثلاثي الأبعاد تفاعلي يضم شاشة حاسوب وهاتفاً وشريحة عرض" : "Interactive 3D scene featuring a computer monitor, phone, and presentation slide"} />
          <div className="hero-art-index"><span>01</span><i /> <span>05</span></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        </div>
        <div className="hero-bottom">
          <span><i className="status-dot" />{t.available}</span>
          <span>33°18&apos; N&nbsp; 44°22&apos; E</span>
          <span>IRAQ / WORLDWIDE</span>
        </div>
        <div className="hero-side-index">FD—001</div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="section-index"><span>{t.aboutLabel}</span><i /></div>
        <div className="intro-grid">
          <h2 className="display-heading">{t.aboutTitle}</h2>
          <div className="intro-copy">
            <p className="body-large">{t.aboutBody}</p>
            <p className="intro-quote"><span>“</span>{t.aboutQuote}</p>
            <a className="inline-link" href="#contact">{t.order}<ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="intro-mark" aria-hidden="true">F<span>.</span></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading-row">
          <div><div className="section-index"><span>{t.serviceLabel}</span><i /></div><h2 className="display-heading">{t.serviceTitle}</h2></div>
          <p className="section-intro">{t.serviceIntro}</p>
        </div>
        <div className="services-list">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const localized = service[language];
            return (
              <article className="service-row" key={service.id}>
                <span className="service-number">0{index + 1}</span>
                <div className="service-icon"><Icon size={23} strokeWidth={1.5} /></div>
                <div className="service-main"><h3>{localized.title}</h3><p>{localized.description}</p></div>
                <div className="service-features">{localized.features.slice(0, 3).map((feature) => <span key={feature}><Check size={13} />{feature}</span>)}</div>
                <a className="round-arrow" href="#contact" aria-label={`${t.orderService}: ${localized.title}`}><ArrowUpRight size={19} /></a>
                <div className="service-price"><span>{t.starts}</span><strong>{formatPrice(service.price, currency, language)}</strong></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading-row work-heading">
          <div><div className="section-index"><span>{t.portfolioLabel}</span><i /></div><h2 className="display-heading">{t.portfolioTitle}</h2></div>
          <p className="section-intro">{t.portfolioIntro}</p>
        </div>
        <div className="filter-bar" role="group" aria-label={isArabic ? "تصفية الأعمال حسب الفئة" : "Filter projects by category"}>
          {(Object.keys(t.filters) as Filter[]).map((key) => (
            <button className={filter === key ? "filter-button active" : "filter-button"} key={key} onClick={() => setFilter(key)} aria-pressed={filter === key}>{t.filters[key]}</button>
          ))}
          <span className="filter-count">0{visibleProjects.length} / 0{PORTFOLIO.length}</span>
        </div>
        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => {
            const content = project[language];
            return (
              <article className={`project-card project-card-${index + 1}`} key={project.id}>
                <div className={`project-image${"videoUrl" in project ? " project-video" : ""}`} aria-label={content[0]} style={project.image ? { backgroundImage: `url("${project.image}")` } : undefined}>
                  {"videoUrl" in project && <video src={project.videoUrl} autoPlay muted loop playsInline controls preload="metadata" aria-label={content[0]} />}
                  <span className="project-badge"><span className="status-dot" />{"isOwnWork" in project && project.isOwnWork ? (isArabic ? "من أعمالي" : "My Work") : t.sample}</span>
                  <span className="project-image-number">FD / 0{index + 1}</span>
                  <a className="project-open" href="#contact" aria-label={`${t.view}: ${content[0]}`}><ArrowUpRight size={21} /></a>
                </div>
                <div className="project-meta"><span>{content[1]}</span><span>{project.tools}</span></div>
                <h3>{content[0]}</h3>
                <p>{content[2]}</p>
              </article>
            );
          })}
        </div>
        <div className="work-footer"><span>SELECTED CONCEPTS / 2024—2026</span><a href="#contact">{t.view}<ArrowUpRight size={16} /></a></div>
      </section>

      <section className="pricing-section section-pad" id="pricing">
        <div className="pricing-heading">
          <div><div className="section-index"><span>{t.pricingLabel}</span><i /></div><h2 className="display-heading">{t.pricingTitle}</h2><p className="section-intro">{t.pricingIntro}</p></div>
          <div className="currency-control"><span>{t.currency}</span><div className="segmented-control" role="group" aria-label={t.currency}>
            {(["IQD", "USD"] as const).map((option) => <button className={currency === option ? "selected" : ""} key={option} onClick={() => setCurrency(option)} aria-pressed={currency === option}>{option}</button>)}
          </div></div>
        </div>
        <div className="pricing-grid">
          {PRICING.map((item, index) => {
            const content = item[language];
            const isFeatured = "featured" in item && item.featured;
            return <article className={`price-item${isFeatured ? " price-featured" : ""}`} key={`${item.service}-${index}`}>
              <div className="price-item-top"><span>0{index + 1}</span>{isFeatured && <span className="price-tag">{isArabic ? "الأكثر طلباً" : "POPULAR"}</span>}</div>
              <h3>{content[0]}</h3><p>{content[1]}</p>
              <div className="price-amount"><span>{t.starting}</span><strong>{formatPrice(item.price, currency, language)}</strong></div>
              <a href="#contact" aria-label={`${t.quote}: ${content[0]}`}><ArrowUpRight size={18} /></a>
            </article>;
          })}
        </div>
        <p className="pricing-note"><span>!</span>{t.exchange}</p>
      </section>

      <section className="reasons-section section-pad">
        <div className="reasons-top"><div><div className="section-index"><span>{t.reasonsLabel}</span><i /></div><h2 className="display-heading">{t.reasonsTitle}</h2></div><div className="reasons-symbol"><Code2 size={44} strokeWidth={1.2} /><span>DESIGN<br />WITH INTENT</span></div></div>
        <div className="reasons-grid">{t.reasons.map(([title, description], index) => <article className="reason-item" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="faq-heading"><div className="section-index"><span>{t.faqLabel}</span><i /></div><h2 className="display-heading">{t.faqTitle}</h2></div>
        <div className="faq-list">{t.faqs.map(([question, answer], index) => <article className={`faq-item${openFaq === index ? " open" : ""}`} key={question}>
          <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="faq-number">0{index + 1}</span><span>{question}</span><ChevronDown size={18} /></button>
          {openFaq === index && <p>{answer}</p>}
        </article>)}</div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-backdrop" aria-hidden="true">FD</div>
        <div className="contact-content"><div className="section-index"><span>{t.contactLabel}</span><i /></div><h2 className="display-heading">{t.contactTitle}</h2><p>{t.contactBody}</p>
          <a className="contact-whatsapp" href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer"><span className="whatsapp-glyph">↗</span>{t.contactCta}<ArrowUpRight size={19} /></a>
          <a className="contact-phone" href={`tel:${SITE_CONFIG.localPhone}`}><span>{t.phone}</span>{SITE_CONFIG.localPhone}</a>
        </div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          <label>{t.formName}<input required name="name" autoComplete="name" placeholder={t.namePlaceholder} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
          <label>{t.formPhone}<input required name="phone" type="tel" autoComplete="tel" placeholder={t.phonePlaceholder} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></label>
          <label>{t.formService}<span className="select-wrap"><select required name="service" value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}><option value="">{isArabic ? "اختر الخدمة" : "Choose a service"}</option>{SERVICES.map((service) => <option key={service.id} value={service.id}>{service[language].title}</option>)}</select><ChevronDown size={16} /></span></label>
          <label>{t.formBrief}<textarea required minLength={10} name="brief" rows={3} placeholder={t.briefPlaceholder} value={form.brief} onChange={(event) => setForm({ ...form, brief: event.target.value })} /></label>
          <button className="form-submit" type="submit">{t.send}<ArrowUpRight size={18} /></button>
        </form>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-symbol">F<span>.</span></span><span className="wordmark-name">FADEL<br />DESIGN</span></a>
        <span>{t.footer} · © 2026</span>
        <a href={SITE_CONFIG.tiktokUrl} target="_blank" rel="noreferrer">TIKTOK<ArrowRight size={14} /></a>
        <a href="#home" className="back-top" aria-label={isArabic ? "العودة للأعلى" : "Back to top"}><ArrowUpRight size={19} /></a>
      </footer>
    </main>
  );
}