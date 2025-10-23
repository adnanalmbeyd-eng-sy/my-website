// /js/lang/contact-lang.js
// Simple i18n for contact page (no HTML changes)

// 1) Translations
const CONTACT_T = {
    ar: {
        pageTitle: "اتصل بنا",
        siteTitle: " دليل فعاليات المدينة",
        nav: { home: "الرئيسية", events: "الفعاليات", about: "عن الدليل", contact: "اتصل بنا" },

        h2: "📬 اتصل بنا",
        intro: "إذا كان لديك أي استفسار، اقتراح، أو فعالية ترغب بإضافتها إلى الدليل، يسعدنا تواصلك معنا عبر النموذج التالي أو عبر البريد الإلكتروني.",

        cinfo: { h4: "📞 معلومات التواصل" },
        labels: { email: "البريد الإلكتروني:", phone: "الهاتف:", address: "العنوان:" },
        values: { email: "cityevents@example.com", phone: "+963-999-999999", address: "دمشق، سوريا" },

        form: {
            h4: "📝 أرسل رسالة مباشرة",
            nameLabel: "الاسم الكامل",
            namePh: "اكتب اسمك هنا",
            emailLabel: "البريد الإلكتروني",
            emailPh: "example@email.com",
            msgLabel: "رسالتك",
            msgPh: "اكتب رسالتك هنا...",
            submit: "إرسال"
        },

        back: "← العودة إلى الصفحة الرئيسية",

        footer: {
            copy: "© 2025 دليل فعاليات المدينة | للتواصل: cityevents@example.com",
            fb: "فيسبوك",
            ig: "إنستغرام",
            privacy: "سياسة الخصوصية"
        }
    },

    en: {
        pageTitle: "Contact Us",
        siteTitle: " City Events Guide",
        nav: { home: "Home", events: "Events", about: "About", contact: "Contact Us" },

        h2: "📬 Contact Us",
        intro: "If you have any question, suggestion, or an event you’d like to add, we’re happy to hear from you via the form below or by email.",

        cinfo: { h4: "📞 Contact Information" },
        labels: { email: "Email:", phone: "Phone:", address: "Address:" },
        values: { email: "cityevents@example.com", phone: "+963-999-999999", address: "Damascus, Syria" },

        form: {
            h4: "📝 Send a Direct Message",
            nameLabel: "Full Name",
            namePh: "Type your name here",
            emailLabel: "Email",
            emailPh: "example@email.com",
            msgLabel: "Your Message",
            msgPh: "Type your message here...",
            submit: "Send"
        },

        back: "← Back to Home",

        footer: {
            copy: "© 2025 City Events Guide | Contact: cityevents@example.com",
            fb: "Facebook",
            ig: "Instagram",
            privacy: "Privacy Policy"
        }
    }
};

const CONTACT_DEFAULT_LANG = "ar"; // افتراضيًا RTL

// 2) Helpers
function contactApplyMeta(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; // يجعل الاتجاه RTL عند العربية
    document.documentElement.dataset.lang = lang;
}

function contactTranslate(lang) {
    const t = CONTACT_T[lang] || CONTACT_T[CONTACT_DEFAULT_LANG];

    // <title>
    document.title = t.pageTitle;

    // Header / Nav (selectors بدون data-key)
    const logo = document.querySelector("header .logo");
    if (logo) logo.textContent = t.siteTitle;

    const navHome = document.querySelector('nav a[href="index.html"]');
    const navEvents = document.querySelector('nav a[href="events.html"]');
    const navAbout = document.querySelector('nav a[href="about.html"]');
    const navContact = document.querySelector('nav a[href="contact.html"]');
    if (navHome) navHome.textContent = t.nav.home;
    if (navEvents) navEvents.textContent = t.nav.events;
    if (navAbout) navAbout.textContent = t.nav.about;
    if (navContact) navContact.textContent = t.nav.contact;

    // Main content
    const main = document.querySelector("main.container");
    if (main) {
        // H2
        const h2 = main.querySelector("h2.text-warning");
        if (h2) h2.textContent = t.h2;

        // Intro paragraph (أول section p)
        const introP = main.querySelector("section.mb-5 p");
        if (introP) introP.textContent = t.intro;

        // Contact info section
        const sections = main.querySelectorAll("section.mb-5");
        const infoSec = sections[1];
        if (infoSec) {
            const h4 = infoSec.querySelector("h4");
            if (h4) h4.textContent = t.cinfo.h4;
            const lis = infoSec.querySelectorAll("ul li");
            if (lis[0]) lis[0].innerHTML = `<strong>${t.labels.email}</strong> ${t.values.email}`;
            if (lis[1]) lis[1].innerHTML = `<strong>${t.labels.phone}</strong> ${t.values.phone}`;
            if (lis[2]) lis[2].innerHTML = `<strong>${t.labels.address}</strong> ${t.values.address}`;
        }

        // Form section
        const formSec = sections[2];
        if (formSec) {
            const h4 = formSec.querySelector("h4");
            if (h4) h4.textContent = t.form.h4;

            const nameLabel = formSec.querySelector('label[for="name"]');
            const nameInput = formSec.querySelector('#name');
            if (nameLabel) nameLabel.textContent = t.form.nameLabel;
            if (nameInput) nameInput.placeholder = t.form.namePh;

            const emailLabel = formSec.querySelector('label[for="email"]');
            const emailInput = formSec.querySelector('#email');
            if (emailLabel) emailLabel.textContent = t.form.emailLabel;
            if (emailInput) emailInput.placeholder = t.form.emailPh;

            const msgLabel = formSec.querySelector('label[for="message"]');
            const msgInput = formSec.querySelector('#message');
            if (msgLabel) msgLabel.textContent = t.form.msgLabel;
            if (msgInput) msgInput.placeholder = t.form.msgPh;

            const submitBtn = formSec.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.textContent = t.form.submit;
        }

        // Back button
        const backBtn = main.querySelector('a.btn[href="index.html"]');
        if (backBtn) backBtn.textContent = t.back;
    }

    // Footer
    const footer = document.querySelector("footer");
    if (footer) {
        const p = footer.querySelector("p");
        const links = footer.querySelectorAll("a");
        if (p) p.textContent = t.footer.copy;
        if (links[0]) links[0].textContent = t.footer.fb;
        if (links[1]) links[1].textContent = t.footer.ig;
        if (links[2]) links[2].textContent = t.footer.privacy;
    }

    // Optional: outline flags if present
    const arBtn = document.getElementById("arabicBtn");
    const enBtn = document.getElementById("englishBtn");
    if (arBtn) arBtn.style.outline = lang === "ar" ? "2px solid #6c757d" : "none";
    if (enBtn) enBtn.style.outline = lang === "en" ? "2px solid #6c757d" : "none";
}

// 3) API
function setContactLanguage(lang) {
    try { localStorage.setItem("lang", lang); } catch {}
    contactApplyMeta(lang);
    contactTranslate(lang);
}

// 4) Init (defaults to AR → RTL)
document.addEventListener("DOMContentLoaded", () => {
    const saved = (() => { try { return localStorage.getItem("lang"); } catch { return null; } })();
    const lang = saved || CONTACT_DEFAULT_LANG;
    setContactLanguage(lang);

    // flag buttons if present
    const ar = document.getElementById("arabicBtn");
    const en = document.getElementById("englishBtn");
    if (ar) ar.addEventListener("click", () => setContactLanguage("ar"));
    if (en) en.addEventListener("click", () => setContactLanguage("en"));
});

// expose if needed
window.setContactLanguage = setContactLanguage;