(function() {
    const translations = {
        en: {
            // Page / Site
            "page.events.title": "All Events",
            "site.title": "City Events Guide",

            // Nav
            "nav.home": "Home",
            "nav.events": "Events",
            "nav.guide": "Guide",
            "nav.contact": "Contact Us",

            // Categories section
            "categories.title": "🎯 Choose Event Category",
            "categories.shopping": "🛍️ Shopping",
            "categories.family": "👨‍👩‍👧‍👦 Family",
            "categories.music": "🎵 Music",
            "categories.sport": "🏃‍♂️ Sport",
            "categories.culture": "📚 Culture",
            "categories.clear": "Show All Events",

            // Main title
            "allEvents.title": "All Events",

            // Badges
            "badge.family": "Family",
            "badge.culture": "Culture",
            "badge.sport": "Sport",
            "badge.national": "National",
            "badge.music": "Music",

            // Events (titles, texts, image alts)
            "events.ramadan.title": "Ramadan Celebration in Damascus",
            "events.ramadan.text": "Magical Ramadan vibes in Old Damascus, with chanting performances and a nightly market.",
            "events.ramadan.imgAlt": "Ramadan Celebration",

            "events.fair.title": "Damascus International Fair",
            "events.fair.text": "An economic and cultural event with international participation, artistic shows, and diverse pavilions.",
            "events.fair.imgAlt": "Damascus International Fair",

            "events.football.title": "Local Football Match",
            "events.football.text": "A face-off between Al-Wahda and Al-Jaish clubs at Abbasiyyin Stadium.",
            "events.football.imgAlt": "Football Match",

            "events.victory.title": "Victory Day Celebration",
            "events.victory.text": "A grand military parade at Umayyad Square, with patriotic performances and wide public participation.",
            "events.victory.imgAlt": "Victory Day",

            "events.eid.title": "Eid Al-Fitr Celebrations",
            "events.eid.text": "Activities for children, games, and gifts in public parks to celebrate the holiday.",
            "events.eid.imgAlt": "Eid Al-Fitr",

            "events.newyear.title": "New Year’s Eve Party",
            "events.newyear.text": "A huge music party at the Julia Domna Hotel, with fireworks at midnight.",
            "events.newyear.imgAlt": "New Year’s Eve",
            // inside translations.en
            "filters.type": "Type",
            "filters.from": "From",
            "filters.to": "To",
            "filters.apply": "Apply",
            "filters.reset": "Reset",

            // Buttons
            "btn.details": "Details",

            // Footer
            "footer.copyPrefix": "© 2025 City Events Guide | Contact:",
            "footer.facebook": "Facebook",
            "footer.instagram": "Instagram",
            "footer.privacy": "Privacy Policy"
        },

        ar: {
            // Page / Site
            "page.events.title": "جميع الفعاليات",
            "site.title": "دليل فعاليات المدينة",

            // Nav
            "nav.home": "الرئيسية",
            "nav.events": "الفعاليات",
            "nav.guide": "الدليل",
            "nav.contact": "اتصل بنا",

            // Categories section
            "categories.title": "🎯 اختر تصنيف الفعاليات",
            "categories.shopping": "🛍️ تسوق",
            "categories.family": "👨‍👩‍👧‍👦 عائلي",
            "categories.music": "🎵 موسيقى",
            "categories.sport": "🏃‍♂️ رياضة",
            "categories.culture": "📚 ثقافة",
            "categories.clear": "عرض جميع الفعاليات",

            // Main title
            "allEvents.title": "جميع الفعاليات",

            // Badges
            "badge.family": "عائلي",
            "badge.culture": "ثقافة",
            "badge.sport": "رياضة",
            "badge.national": "وطني",
            "badge.music": "موسيقى",

            // Events (titles, texts, image alts)
            "events.ramadan.title": "احتفال رمضان في دمشق",
            "events.ramadan.text": "أجواء رمضانية ساحرة في دمشق القديمة، مع عروض إنشاد وسوق شعبي ليلي.",
            "events.ramadan.imgAlt": "احتفال رمضان",

            "events.fair.title": "معرض دمشق الدولي",
            "events.fair.text": "حدث اقتصادي وثقافي بمشاركة دولية، عروض فنية، وأجنحة متنوعة.",
            "events.fair.imgAlt": "معرض دمشق الدولي",

            "events.football.title": "مباراة كرة قدم محلية",
            "events.football.text": "مواجهة بين ناديي الوحدة والجيش على أرض ملعب العباسيين.",
            "events.football.imgAlt": "مباراة كرة قدم",

            "events.victory.title": "احتفال عيد النصر",
            "events.victory.text": "عرض عسكري مهيب في ساحة الأمويين، مع فقرات فنية وطنية ومشاركة شعبية واسعة.",
            "events.victory.imgAlt": "عيد النصر",

            "events.eid.title": "احتفالات عيد الفطر",
            "events.eid.text": "فعاليات للأطفال، ألعاب، وهدايا في الحدائق العامة بمناسبة العيد.",
            "events.eid.imgAlt": "عيد الفطر",

            "events.newyear.title": "سهرة رأس السنة",
            "events.newyear.text": "حفلة موسيقية ضخمة في فندق جوليا دومنا، مع عروض ألعاب نارية عند منتصف الليل.",
            "events.newyear.imgAlt": "سهرة رأس السنة",
            // inside translations.ar

            "filters.type": "النوع",
            "filters.from": "من",
            "filters.to": "إلى",
            "filters.apply": "تطبيق",
            "filters.reset": "إعادة",
            // Buttons
            "btn.details": "تفاصيل",

            // Footer
            "footer.copyPrefix": "© 2025 دليل فعاليات المدينة | للتواصل:",
            "footer.facebook": "فيسبوك",
            "footer.instagram": "إنستغرام",
            "footer.privacy": "سياسة الخصوصية"
        }
    };

    const DEFAULT_LANG = "ar";

    function applyLangMeta(lang) {
        const isRTL = lang === "ar";
        document.documentElement.lang = lang;
        document.documentElement.dir = isRTL ? "rtl" : "ltr";
        document.documentElement.dataset.lang = lang;
    }

    // ترجمة العناصر التي تحوي [data-key]
    // ترجمة خصائص مثل  data-attr="alt,placeholder,title"
    function translatePage(lang) {
        const dict = translations[lang] || translations[DEFAULT_LANG];

        document.querySelectorAll("[data-key]").forEach((el) => {
            const key = el.getAttribute("data-key");
            const val = dict[key];
            if (typeof val === "undefined") return;

            const attrList = (el.getAttribute("data-attr") || "").split(",").map(s => s.trim()).filter(Boolean);
            if (attrList.length === 0) {
                el.textContent = val;
            } else {
                attrList.forEach((attr) => el.setAttribute(attr, val));
            }
        });

        // Update <title> if it holds a key
        const titleEl = document.querySelector("title[data-key]");
        if (titleEl) {
            const k = titleEl.getAttribute("data-key");
            if (dict[k]) titleEl.textContent = dict[k];
        }

        //عمل focus على اللغة الحالية
        const arBtn = document.getElementById("arabicBtn");
        const enBtn = document.getElementById("englishBtn");
        if (arBtn) arBtn.style.outline = lang === "ar" ? "2px solid #6c757d" : "none";
        if (enBtn) enBtn.style.outline = lang === "en" ? "2px solid #6c757d" : "none";
    }

    function setLanguage(lang) {
        localStorage.setItem("lang", lang);
        applyLangMeta(lang);
        translatePage(lang);
    }

    document.addEventListener("DOMContentLoaded", function() {
        const saved = localStorage.getItem("lang") || DEFAULT_LANG;
        applyLangMeta(saved);
        translatePage(saved);

        const ar = document.getElementById("arabicBtn");
        const en = document.getElementById("englishBtn");
        if (ar) ar.addEventListener("click", () => setLanguage("ar"));
        if (en) en.addEventListener("click", () => setLanguage("en"));
    });
})();