// /js/lang/language.js
// Lightweight i18n + bilingual content for Events pages (listing + details).
// Uses [data-key] for text and [data-attr="..."] for attributes (e.g., alt/placeholder/title).
// Persists choice in localStorage; sets <html lang> and dir="rtl|ltr">.
// Exposes: I18N.setLanguage(lang), I18N.renderEvent(id)

(function() {
    // -------------------------
    // Static UI Translations
    // -------------------------
    const t = {
        en: {
            // Common / Site
            "site.title": "City Events Guide",

            // Page titles
            "page.events.title": "All Events",
            "page.event.title": "Event Details",

            // Navbar
            "nav.home": "Home",
            "nav.events": "Events",
            "nav.guide": "Guide",
            "nav.about": "About", // for "عن الدليل"
            "nav.contact": "Contact Us",

            // Events page: categories header + actions
            "categories.title": "🎯 Choose Event Category",
            "categories.shopping": "🛍️ Shopping",
            "categories.family": "👨‍👩‍👧‍👦 Family",
            "categories.music": "🎵 Music",
            "categories.sport": "🏃‍♂️ Sport",
            "categories.culture": "📚 Culture",
            "categories.clear": "Show All Events",

            // Events page: heading
            "allEvents.title": "All Events",

            // Badges
            "badge.family": "Family",
            "badge.culture": "Culture",
            "badge.sport": "Sport",
            "badge.national": "National",
            "badge.music": "Music",

            // Buttons
            "btn.details": "Details",
            "btn.back": "come back",

            // Footer
            "footer.copyPrefix": "© 2025 City Events Guide | Contact:",
            "footer.facebook": "Facebook",
            "footer.instagram": "Instagram",
            "footer.privacy": "Privacy Policy",

            // Event details labels & CTA
            "labels.date": "Date:",
            "labels.place": "Place:",
            "back.all": "← Back to all events",

            // Not found
            "notFound": "Event not found"
        },

        ar: {
            // Common / Site
            "site.title": "دليل فعاليات المدينة",

            // Page titles
            "page.events.title": "جميع الفعاليات",
            "page.event.title": "تفاصيل الفعالية",

            // Navbar
            "nav.home": "الرئيسية",
            "nav.events": "الفعاليات",
            "nav.guide": "الدليل",
            "nav.about": "عن الدليل",
            "nav.contact": "اتصل بنا",

            // Events page: categories header + actions
            "categories.title": "🎯 اختر تصنيف الفعاليات",
            "categories.shopping": "🛍️ تسوق",
            "categories.family": "👨‍👩‍👧‍👦 عائلي",
            "categories.music": "🎵 موسيقى",
            "categories.sport": "🏃‍♂️ رياضة",
            "categories.culture": "📚 ثقافة",
            "categories.clear": "عرض جميع الفعاليات",

            // Events page: heading
            "allEvents.title": "جميع الفعاليات",

            // Badges
            "badge.family": "عائلي",
            "badge.culture": "ثقافة",
            "badge.sport": "رياضة",
            "badge.national": "وطني",
            "badge.music": "موسيقى",

            // Buttons
            "btn.details": "تفاصيل",
            "btn.back": "العودة الى جميع الفعاليات",

            // Footer
            "footer.copyPrefix": "© 2025 دليل فعاليات المدينة | للتواصل:",
            "footer.facebook": "فيسبوك",
            "footer.instagram": "إنستغرام",
            "footer.privacy": "سياسة الخصوصية",

            // Event details labels & CTA
            "labels.date": "التاريخ:",
            "labels.place": "المكان:",
            "back.all": "← العودة إلى جميع الفعاليات",

            // Not found
            "notFound": "الفعالية غير موجودة"
        }
    };

    // ---------------------------------
    // Event Content (both languages)
    // ---------------------------------
    const events = {
        ar: {
            ramadan: {
                title: "احتفال رمضان في دمشق",
                image: "img/رمضان.jpg",
                category: "عائلي",
                categoryColor: "bg-warning text-dark",
                date: "15-3-2024",
                place: "دمشق القديمة – ساحة المسكية",
                description: "أجواء رمضانية ساحرة وسط الفوانيس والأنغام الروحانية، مع سوق شعبي ليلي وإنشاد ديني.",
                imgAlt: "صورة الفعالية"
            },
            expo: {
                title: "معرض دمشق الدولي",
                image: "img/معرض_دمشق_الدولي.PNG",
                category: "ثقافة",
                categoryColor: "bg-primary",
                date: "01-09-2025",
                place: "مدينة المعارض – طريق المطار",
                description: "حدث اقتصادي وثقافي ضخم بمشاركة دولية، عروض فنية، وأجنحة متنوعة من مختلف الدول.",
                imgAlt: "صورة الفعالية"
            },
            football: {
                title: "مباراة كرة قدم محلية",
                image: "img/كرة_قدم.PNG",
                category: "رياضة",
                categoryColor: "bg-success",
                date: "20 أكتوبر 2025",
                place: "ملعب العباسيين – دمشق",
                description: "مواجهة حماسية بين ناديي الوحدة والجيش، وسط جمهور متحمس وأجواء رياضية مشتعلة.",
                imgAlt: "صورة الفعالية"
            },
            victory: {
                title: "احتفال عيد النصر",
                image: "img/ساحة_الامويين.png",
                category: "وطني",
                categoryColor: "bg-danger",
                date: "22 أكتوبر 2025",
                place: "ساحة الأمويين – دمشق",
                description: "عرض عسكري مهيب، فقرات فنية وطنية، ومشاركة شعبية واسعة احتفالًا بالنصر الوطني.",
                imgAlt: "صورة الفعالية"
            },
            eid: {
                title: "احتفالات عيد الفطر",
                image: "img/عيد.PNG",
                category: "عائلي",
                categoryColor: "bg-warning text-dark",
                date: "20 أكتوبر 2025",
                place: "حديقة تشرين – دمشق",
                description: "فعاليات للأطفال، ألعاب وهدايا، عروض مسرحية، وأجواء بهجة بمناسبة عيد الفطر المبارك.",
                imgAlt: "صورة الفعالية"
            },
            newyear: {
                title: "سهرة رأس السنة",
                image: "img/جوليا_دومنا.PNG",
                category: "موسيقى",
                categoryColor: "bg-info text-dark",
                date: "31 ديسمبر 2025",
                place: "فندق الشام – دمشق",
                description: "حفلة موسيقية ضخمة، عروض ألعاب نارية، ومفاجآت منتصف الليل في أجواء احتفالية ساحرة.",
                imgAlt: "صورة الفعالية"
            }
        },

        en: {
            ramadan: {
                title: "Ramadan Celebration in Damascus",
                image: "img/رمضان.jpg",
                category: "Family",
                categoryColor: "bg-warning text-dark",
                date: "2024-03-15",
                place: "Old Damascus – Al-Maski Square",
                description: "Magical Ramadan vibes among lanterns and spiritual chants, with a nightly souq and religious chanting.",
                imgAlt: "Event image"
            },
            expo: {
                title: "Damascus International Fair",
                image: "img/معرض_دمشق_الدولي.PNG",
                category: "Culture",
                categoryColor: "bg-primary",
                date: "2025-09-01",
                place: "Fairgrounds – Airport Road",
                description: "A major economic and cultural event with international participation, artistic shows, and diverse pavilions.",
                imgAlt: "Event image"
            },
            football: {
                title: "Local Football Match",
                image: "img/كرة_قدم.PNG",
                category: "Sport",
                categoryColor: "bg-success",
                date: "2025-04-10",
                place: "Abbasiyyin Stadium – Damascus",
                description: "An exciting clash between Al-Wahda and Al-Jaish clubs, with an enthusiastic crowd and fiery atmosphere.",
                imgAlt: "Event image"
            },
            victory: {
                title: "Victory Day Celebration",
                image: "img/ساحة_الامويين.png",
                category: "National",
                categoryColor: "bg-danger",
                date: "2025-05-09",
                place: "Umayyad Square – Damascus",
                description: "A grand military parade with patriotic performances and broad public participation celebrating national victory.",
                imgAlt: "Event image"
            },
            eid: {
                title: "Eid Al-Fitr Celebrations",
                image: "img/عيد.PNG",
                category: "Family",
                categoryColor: "bg-warning text-dark",
                date: "2025-04-10",
                place: "Tishreen Park – Damascus",
                description: "Activities for children, games and gifts, stage shows, and festive vibes for the Eid holiday.",
                imgAlt: "Event image"
            },
            newyear: {
                title: "New Year’s Eve Party",
                image: "img/جوليا_دومنا.PNG",
                category: "Music",
                categoryColor: "bg-info text-dark",
                date: "31 December 2025",
                place: "Cham Hotel – Damascus",
                description: "A huge music party, fireworks show, and midnight surprises in a magical festive atmosphere.",
                imgAlt: "Event image"
            }
        }
    };

    // -------------------------
    // Core i18n engine
    // -------------------------
    const DEFAULT_LANG = "ar";

    function applyLangMeta(lang) {
        const isRTL = lang === "ar";
        document.documentElement.lang = lang;
        document.documentElement.dir = isRTL ? "rtl" : "ltr";
        document.documentElement.dataset.lang = lang;
    }

    // Translate elements with [data-key]; supports attributes via data-attr="alt,placeholder,title"
    function translateStatic(lang) {
        const dict = t[lang] || t[DEFAULT_LANG];

        document.querySelectorAll("[data-key]").forEach((el) => {
            const key = el.getAttribute("data-key");
            const val = dict[key];
            if (typeof val === "undefined") return;

            const attrList = (el.getAttribute("data-attr") || "")
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean);

            if (attrList.length === 0) {
                el.textContent = val;
            } else {
                attrList.forEach((attr) => el.setAttribute(attr, val));
            }
        });

        // Update <title> if it uses a key
        const titleEl = document.querySelector("title[data-key]");
        if (titleEl) {
            const k = titleEl.getAttribute("data-key");
            if (dict[k]) titleEl.textContent = dict[k];
        }

        // Optional: highlight current flag buttons if present
        const arBtn = document.getElementById("arabicBtn");
        const enBtn = document.getElementById("englishBtn");
        if (arBtn) arBtn.style.outline = lang === "ar" ? "2px solid #6c757d" : "none";
        if (enBtn) enBtn.style.outline = lang === "en" ? "2px solid #6c757d" : "none";
    }

    function setLanguage(lang) {
        localStorage.setItem("lang", lang);
        applyLangMeta(lang);
        translateStatic(lang);

        // If we're on an event details page, re-render the content
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (id) renderEvent(id);
    }

    // Render event details on the details page (by ?id=...)
    function renderEvent(id) {
        const lang = document.documentElement.lang || localStorage.getItem("lang") || DEFAULT_LANG;
        const dict = events[lang] || events[DEFAULT_LANG];
        const ev = id ? dict[id] : null;

        const titleEl = document.getElementById("event-title");
        const imgEl = document.getElementById("event-image");
        const catEl = document.getElementById("event-category");
        const dateEl = document.getElementById("event-date");
        const placeEl = document.getElementById("event-place");
        const descEl = document.getElementById("event-description");

        if (ev) {
            if (titleEl) titleEl.textContent = ev.title;
            if (imgEl) {
                imgEl.src = ev.image;
                imgEl.alt = ev.imgAlt || "";
            }
            if (catEl) {
                catEl.textContent = ev.category;
                catEl.className = "badge mb-3 " + (ev.categoryColor || "");
            }
            if (dateEl) dateEl.textContent = ev.date;
            if (placeEl) placeEl.textContent = ev.place;
            if (descEl) descEl.textContent = ev.description;

            // Title format: "<event> – <site>"
            const siteName = t[lang]["site.title"];
            document.title = `${ev.title} – ${siteName}`;
        } else {
            if (titleEl) titleEl.textContent = t[lang]["notFound"];
            document.title = `${t[lang]["notFound"]} – ${t[lang]["site.title"]}`;
        }
    }

    // -------------------------
    // Init
    // -------------------------
    document.addEventListener("DOMContentLoaded", () => {
        const saved = localStorage.getItem("lang") || DEFAULT_LANG;
        applyLangMeta(saved);
        translateStatic(saved);

        // If on event details page, render it once on load
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (id) renderEvent(id);

        // Hook up flags if present
        const ar = document.getElementById("arabicBtn");
        const en = document.getElementById("englishBtn");
        if (ar) ar.addEventListener("click", () => setLanguage("ar"));
        if (en) en.addEventListener("click", () => setLanguage("en"));
    });

    // Public API
    window.I18N = {
        setLanguage,
        renderEvent
    };
})();