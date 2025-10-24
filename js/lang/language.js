const translations = {
    en: {
        // Site / Nav
        "site.title": "City Events Guide",
        "nav.home": "Home",
        "nav.events": "Events",
        "nav.guide": "Guide",
        "nav.contact": "Contact Us",

        // Featured section
        "featured.title": "Featured Events This Week",

        // Event 1 (Ramadan)
        "featured.event1.title": "Ramadan Celebration in Damascus",
        "featured.event1.text": "Magical Ramadan vibes in Old Damascus, with chanting performances and a nightly market.",
        "featured.event1.imgAlt": "Ramadan Celebration in Damascus",

        // Event 2 (Damascus International Fair)
        "featured.event2.title": "Damascus International Fair",
        "featured.event2.text": "Syria’s largest economic and cultural event, with international participation and special artistic shows.",
        "featured.event2.imgAlt": "Damascus International Fair",

        // Buttons
        "btn.details": "Details",

        // Team section
        "team.title": "Our Team",
        "team.members": [
            "سدرا حرب sedra_313693",
            "راما غدارة rama_133388", ,
            "عبد الغني الطويل abdalghani_238667",
            "عدنان المبيض adnan_291183",
        ],

        // Page title
        "page.index.title": "City Events Guide - Home"
    },

    ar: {
        // Site / Nav
        "site.title": "دليل فعاليات المدينة",
        "nav.home": "الرئيسية",
        "nav.events": "الفعاليات",
        "nav.guide": "الدليل",
        "nav.contact": "اتصل بنا",

        // Featured section
        "featured.title": "فعاليات بارزة هذا الأسبوع",

        // Event 1 (Ramadan)
        "featured.event1.title": "احتفال رمضان في دمشق",
        "featured.event1.text": "أجواء رمضانية ساحرة في قلب دمشق القديمة، مع عروض إنشاد وسوق شعبي ليلي.",
        "featured.event1.imgAlt": "احتفال رمضان في دمشق",

        // Event 2 (Damascus International Fair)
        "featured.event2.title": "معرض دمشق الدولي",
        "featured.event2.text": "أكبر حدث اقتصادي وثقافي في سوريا، بمشاركة دولية وعروض فنية مميزة.",
        "featured.event2.imgAlt": "معرض دمشق الدولي",

        // Buttons
        "btn.details": "تفاصيل",

        // Team section
        "team.title": "فريق العمل",
        "team.members": [
            "سدرا حرب sedra_313693",
            "راما غدارة rama_133388", ,
            "عبد الغني الطويل abdalghani_238667",
            "عدنان المبيض adnan_291183",

        ],

        // Page title
        "page.index.title": "دليل فعاليات المدينة - الرئيسية"
    }
};

const DEFAULT_LANG = "en";

// <html lang> & direction
function applyLangMeta(lang) {
    const isRTL = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.dataset.lang = lang;
}

// ترجمة العناصر التي تحتوي على السمة [data-key]
function translatePage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    // Translate elements with data-key
    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        const val = dict[key];
        if (!val) return;

        const attr = el.getAttribute("data-attr");
        if (!attr) {
            el.textContent = val;
        } else {
            attr.split(",").map(a => a.trim()).forEach(a => {
                if (a) el.setAttribute(a, val);
            });
        }
    });

    // تعديل page title
    if (dict["page.index.title"]) document.title = dict["page.index.title"];

    // 🟡 Team section translation
    const teamSection = document.getElementById("team");
    if (teamSection) {
        const title = teamSection.querySelector("h2");
        const members = teamSection.querySelectorAll("ul li");
        if (title) title.textContent = dict["team.title"];
        const teamList = dict["team.members"];
        if (Array.isArray(teamList)) {
            teamList.forEach((txt, i) => {
                if (members[i]) members[i].textContent = txt;
            });
        }
    }

    // Highlight language buttons
    const arBtn = document.getElementById("arabicBtn");
    const enBtn = document.getElementById("englishBtn");
    if (arBtn) arBtn.style.outline = lang === "ar" ? "2px solid #6c757d" : "none";
    if (enBtn) enBtn.style.outline = lang === "en" ? "2px solid #6c757d" : "none";
}

// Switch language
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLangMeta(lang);
    translatePage(lang);
}


document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || DEFAULT_LANG;
    applyLangMeta(saved);
    translatePage(saved);

    // ازرار الاعلام
    const ar = document.getElementById("arabicBtn");
    const en = document.getElementById("englishBtn");
    if (ar) ar.addEventListener("click", () => setLanguage("ar"));
    if (en) en.addEventListener("click", () => setLanguage("en"));
});