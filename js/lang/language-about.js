// /js/lang/language.js  (لصفحة about)
// ===== Simple i18n engine (no frameworks) =====

const translations = {
    en: {
        // Site / Nav (تعمل مع data-key الموجودة)
        "site.title": "City Events Guide",
        "nav.home": "Home",
        "nav.events": "Events",
        "nav.guide": "Guide",
        "nav.contact": "Contact Us",

        // <title>
        "page.about.title": "Guide",

        // Main content (about)
        about: {
            h2: "About City Events Guide",

            // Section 1: الهدف
            s1: {
                h4: "🎯 Project Goal",
                p: "This site makes it easy to find cultural, artistic, sports and family events in the city, with a simple, fast UI that lets users browse by category and view details, location and date."
            },

            // Section 2: المهارات والتقنيات
            s2: {
                h4: "🧠 Skills & Technologies",
                list: [
                    "HTML & CSS for page structure and styling",
                    "Bootstrap for easier responsive design",
                    "JavaScript to render event details dynamically",
                    "Organized images and links with a clear folder structure"
                ]
            },

            // Section 3: من نحن
            s3: {
                h4: "👨‍💻 About Us",
                p: "This project was built by a developer passionate about UX and simple, effective solutions—focused on engaging UIs, dynamic linking of events to details, with attention to performance and consistency."
            },

            // Section 4: ملاحظات الملف
            s4: {
                h4: "📁 Submission Notes",
                p: "We’ve followed all required criteria, including:",
                list: [
                    "Consistent page styling with a dark background",
                    "Clear categories for each event",
                    "Dynamic details page using JavaScript",
                    "Responsive design that works on all devices"
                ]
            },

            // زر العودة
            back: "← Back to home"
        },

        // Footer
        footer: {
            copy: "© 2025 City Events Guide | Contact: cityevents@example.com",
            fb: "Facebook",
            ig: "Instagram",
            privacy: "Privacy Policy"
        }
    },

    ar: {
        // Site / Nav (تعمل مع data-key الموجودة)
        "site.title": "دليل فعاليات المدينة",
        "nav.home": "الرئيسية",
        "nav.events": "الفعاليات",
        "nav.guide": "الدليل",
        "nav.contact": "اتصل بنا",

        // <title>
        "page.about.title": "دليل",

        // Main content (about)
        about: {
            h2: "عن دليل فعاليات المدينة",

            s1: {
                h4: "🎯 الهدف من المشروع",
                p: "يهدف هذا الموقع إلى تسهيل الوصول إلى الفعاليات الثقافية، الفنية، الرياضية والعائلية في المدينة، من خلال واجهة بسيطة وسريعة تتيح للمستخدمين تصفح الفعاليات حسب التصنيف، ومعرفة التفاصيل والموقع والتاريخ."
            },

            s2: {
                h4: "🧠 المهارات والتقنيات المستخدمة",
                list: [
                    "HTML و CSS لتصميم الصفحات وتنسيقها",
                    "Bootstrap لتسهيل التصميم المتجاوب",
                    "JavaScript لعرض تفاصيل الفعاليات ديناميكيًا",
                    "تنظيم الصور والروابط وفق هيكل ملفات واضح"
                ]
            },

            s3: {
                h4: "👨‍💻 من نحن",
                p: "تم تطوير هذا المشروع من قبل مطور شغوف بتجربة المستخدم وتقديم حلول بسيطة وفعالة. يركز على بناء واجهات جذابة، وربط الأحداث بالتفاصيل بطريقة ديناميكية، مع الحرص على الأداء والتناسق."
            },

            s4: {
                h4: "📁 ملاحظات ملف الوظيفة",
                p: "تم الالتزام بجميع المعايير المطلوبة، بما في ذلك:",
                list: [
                    "تنسيق الصفحات بشكل متناسق مع الخلفية الداكنة",
                    "استخدام تصنيفات واضحة لكل فعالية",
                    "ربط صفحة التفاصيل ديناميكيًا باستخدام JavaScript",
                    "تصميم متجاوب يعمل على جميع الأجهزة"
                ]
            },

            back: "← العودة إلى الصفحة الرئيسية"
        },

        footer: {
            copy: "© 2025 دليل فعاليات المدينة | للتواصل: cityevents@example.com",
            fb: "فيسبوك",
            ig: "إنستغرام",
            privacy: "سياسة الخصوصية"
        }
    }
};

const DEFAULT_LANG = "ar";

// 1) lang/dir
function applyLangMeta(lang) {
    const isRTL = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.dataset.lang = lang;
}

// 2) ترجمة العناصر التي تحمل data-key (الهيدر/الناف)
function translateDataKeys(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        const val = dict[key];
        if (!val) return;
        const attr = el.getAttribute("data-attr");
        if (!attr) el.textContent = val;
        else attr.split(",").map(a => a.trim()).forEach(a => a && el.setAttribute(a, val));
    });
}

// 3) ترجمة محتوى صفحة about عبر محددات بسيطة (بدون لمس HTML)
function translateAbout(lang) {
    const dict = (translations[lang] || translations[DEFAULT_LANG]);
    const a = dict.about;

    // <title>
    if (dict["page.about.title"]) document.title = dict["page.about.title"];

    const main = document.querySelector("main.container");
    if (!main) return;

    // العنوان الرئيسي
    const h2 = main.querySelector("h2.text-warning");
    if (h2) h2.textContent = a.h2;

    const sections = main.querySelectorAll("section.mb-5");

    // Section 1
    if (sections[0]) {
        const h4 = sections[0].querySelector("h4");
        const p = sections[0].querySelector("p");
        if (h4) h4.textContent = a.s1.h4;
        if (p) p.textContent = a.s1.p;
    }

    // Section 2 (قائمة)
    if (sections[1]) {
        const h4 = sections[1].querySelector("h4");
        const lis = sections[1].querySelectorAll("ul li");
        if (h4) h4.textContent = a.s2.h4;
        a.s2.list.forEach((txt, i) => { if (lis[i]) lis[i].textContent = txt; });
    }

    // Section 3
    if (sections[2]) {
        const h4 = sections[2].querySelector("h4");
        const p = sections[2].querySelector("p");
        if (h4) h4.textContent = a.s3.h4;
        if (p) p.textContent = a.s3.p;
    }

    // Section 4 (نص + قائمة)
    if (sections[3]) {
        const h4 = sections[3].querySelector("h4");
        const p = sections[3].querySelector("p");
        const lis = sections[3].querySelectorAll("ul li");
        if (h4) h4.textContent = a.s4.h4;
        if (p) p.textContent = a.s4.p;
        a.s4.list.forEach((txt, i) => { if (lis[i]) lis[i].textContent = txt; });
    }

    // زر العودة
    const backBtn = main.querySelector('a.btn.btn-outline-warning[href="index.html"]');
    if (backBtn) backBtn.textContent = a.back;

    // الفوتر
    const footer = document.querySelector("footer");
    if (footer) {
        const p = footer.querySelector("p");
        const links = footer.querySelectorAll("a");
        if (p) p.textContent = dict.footer.copy;
        if (links[0]) links[0].textContent = dict.footer.fb;
        if (links[1]) links[1].textContent = dict.footer.ig;
        if (links[2]) links[2].textContent = dict.footer.privacy;
    }

    // تمييز الأعلام (اختياري)
    const arBtn = document.getElementById("arabicBtn");
    const enBtn = document.getElementById("englishBtn");
    if (arBtn) arBtn.style.outline = lang === "ar" ? "2px solid #6c757d" : "none";
    if (enBtn) enBtn.style.outline = lang === "en" ? "2px solid #6c757d" : "none";
}

// 4) API
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLangMeta(lang);
    translateDataKeys(lang); // الهيدر/الناف
    translateAbout(lang); // محتوى صفحة about
}

// 5) تشغيل تلقائي + ربط الأعلام
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || DEFAULT_LANG;
    setLanguage(saved);

    const ar = document.getElementById("arabicBtn");
    const en = document.getElementById("englishBtn");
    if (ar) ar.addEventListener("click", () => setLanguage("ar"));
    if (en) en.addEventListener("click", () => setLanguage("en"));
});

// إتاحة الدالة لو احتجت تناديها يدويًا من مكان آخر
window.setLanguage = setLanguage;