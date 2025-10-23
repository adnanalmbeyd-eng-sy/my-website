// بيانات الفعاليات
const events = [
    { title: "معرض دمشق الدولي", date: "2025-10-18", category: "ثقافة", img: "img/معرض_دمشق_الدولي.PNG" },
    { title: "مباراة كرة قدم", date: "2025-11-19", category: "رياضة", img: "img/كرة_قدم.png" },
    { title: "احتفال رمضان", date: "2025-10-15", category: "عائلي", img: "img/رمضان.jpg" },
    { title: "حفل سهرة رأس السنة", date: "2025-12-31", category: "موسيقى", img: "img/فندق_جوليا.jpg" },
    { title: "احتفال عيد النصر", date: "2025-10-20", category: "تسوق", img: "img/عيد.png" }
];

// عناصر الصفحة
const categoryButtons = document.querySelectorAll(".category-btn");
const messageBox = document.getElementById("category-message");
const clearFilterBtn = document.getElementById("clear-filter");
const featuredContainer = document.getElementById("featuredContainer");

// ✅ دالة تحديد حالة الفعالية
function getStatus(dateStr) {
    const today = new Date().toISOString().split("T")[0];
    if (dateStr < today) return "⛔️ منتهية";
    if (dateStr === today) return "📍 اليوم";
    return `✅ قادمة بتاريخ ${dateStr}`;
}

// ✅ عرض الفعاليات كبطاقات
function renderEvents(list) {
    messageBox.innerHTML = list.map(e => `
    <div class="card shadow mb-3">
      <div class="row g-0 align-items-center">
        <div class="col-md-4">
          <img src="${e.img}" class="img-fluid rounded-start" alt="${e.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" data-key="featured.event1.title">${e.title}</h5>
            <p class="card-text">📅 ${getStatus(e.date)}</p>
            <span class="badge bg-warning text-dark">${e.category}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// ✅ حفظ واسترجاع التصنيف
function saveCategory(cat) {
    localStorage.setItem("lastCategory", cat);
}

function loadSavedCategory() {
    const saved = localStorage.getItem("lastCategory");
    if (saved) {
        const btn = Array.from(categoryButtons).find(b => b.textContent.trim() === saved);
        if (btn) btn.click();
    }
}

// ✅ عند الضغط على زر تصنيف
categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.textContent.trim();
        saveCategory(category);
        const filtered = events.filter(e => e.category === category);

        if (filtered.length === 0) {
            messageBox.innerHTML = `<p>لا توجد فعاليات ضمن تصنيف <strong>${category}</strong>.</p>`;
            return;
        }
        renderEvents(filtered);
    });
});

// ✅ زر مسح التصفية
if (clearFilterBtn) {
    clearFilterBtn.addEventListener("click", () => {
        localStorage.removeItem("lastCategory");
        messageBox.innerHTML = "";
    });
}

// ✅ عرض الفعاليات المميزة في البداية
function renderFeatured() {
    featuredContainer.innerHTML = events.slice(0, 3).map(e => `
    <div class="col-md-4">
      <div class="card h-100 shadow">
        <img src="${e.img}" class="card-img-top" alt="${e.title}">
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">${getStatus(e.date)}</p>
          <span class="badge bg-warning text-dark">${e.category}</span>
        </div>
      </div>
    </div>
  `).join("");
}



// ✅ زر للأعلى
const toTop = document.getElementById("toTop");
if (toTop) {
    window.addEventListener("scroll", () => {
        toTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

//وضع الظلام
// main.js
document.addEventListener("DOMContentLoaded", function() {
    const THEME_KEY = "site-theme"; // 'light' | 'dark'
    const root = document.documentElement; // <html>
    const btn = document.getElementById("themeToggle");

    // Exit early if page doesn't have toggle button
    if (!btn) return;

    // Determine initial theme: saved -> system -> default 'dark'
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);

    // Listen for button click
    btn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        setTheme(next);
    });

    function setTheme(mode) {
        root.setAttribute("data-theme", mode);
        localStorage.setItem(THEME_KEY, mode);

        // Update button icon and tooltip
        btn.textContent = mode === "light" ? "🌞" : "🌙";
        btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
        btn.setAttribute("title", mode === "light" ? "الوضع الفاتح" : "الوضع الداكن");
    }
});


// =====================
// Events page rendering + filtering (type & date) with i18n
// =====================
// =====================
// Events page rendering + filtering (type & date) with i18n
// =====================
(function () {
    // --- Data source (single place) ---
    const EVENTS = [
        { id: "newyear", date: "2025-12-31", category: "music",   badgeColor: "info text-dark",     img: "img/جوليا_دومنا.PNG",      link: "event.html?id=newyear",
            ar:{title:"سهرة رأس السنة",text:"حفلة موسيقية ضخمة في فندق جوليا دومنا، مع عروض ألعاب نارية عند منتصف الليل.",imgAlt:"سهرة رأس السنة",badge:"موسيقى",details:"تفاصيل"},
            en:{title:"New Year’s Eve Party",text:"A huge music party at the Julia Domna Hotel, with fireworks at midnight.",imgAlt:"New Year’s Eve",badge:"Music",details:"Details"} },
        { id: "ramadan", date: "2024-03-15", category: "family",  badgeColor: "warning text-dark", img: "img/رمضان.jpg",           link: "event.html?id=ramadan",
            ar:{title:"احتفال رمضان في دمشق",text:"أجواء رمضانية ساحرة في دمشق القديمة، مع عروض إنشاد وسوق شعبي ليلي.",imgAlt:"احتفال رمضان",badge:"عائلي",details:"تفاصيل"},
            en:{title:"Ramadan Celebration in Damascus",text:"Magical Ramadan vibes in Old Damascus, with chanting performances and a nightly market.",imgAlt:"Ramadan Celebration",badge:"Family",details:"Details"} },
        { id: "expo",    date: "2025-09-01", category: "culture", badgeColor: "primary",            img: "img/معرض_دمشق_الدولي.PNG", link: "event.html?id=expo",
            ar:{title:"معرض دمشق الدولي",text:"حدث اقتصادي وثقافي بمشاركة دولية، عروض فنية، وأجنحة متنوعة.",imgAlt:"معرض دمشق الدولي",badge:"ثقافة",details:"تفاصيل"},
            en:{title:"Damascus International Fair",text:"An economic and cultural event with international participation, artistic shows, and diverse pavilions.",imgAlt:"Damascus International Fair",badge:"Culture",details:"Details"} },
        { id: "football",date: "2025-04-10", category: "sport",   badgeColor: "success",            img: "img/كرة_قدم.PNG",         link: "event.html?id=football",
            ar:{title:"مباراة كرة قدم محلية",text:"مواجهة بين ناديي الوحدة والجيش على أرض ملعب العباسيين.",imgAlt:"مباراة كرة قدم",badge:"رياضة",details:"تفاصيل"},
            en:{title:"Local Football Match",text:"A face-off between Al-Wahda and Al-Jaish clubs at Abbasiyyin Stadium.",imgAlt:"Football Match",badge:"Sport",details:"Details"} },
        { id: "victory", date: "2025-05-09", category: "national",badgeColor: "danger",             img: "img/ساحة_الامويين.png",    link: "event.html?id=victory",
            ar:{title:"احتفال عيد النصر",text:"عرض عسكري مهيب في ساحة الأمويين، مع فقرات فنية وطنية ومشاركة شعبية واسعة.",imgAlt:"عيد النصر",badge:"وطني",details:"تفاصيل"},
            en:{title:"Victory Day Celebration",text:"A grand military parade at Umayyad Square, with patriotic performances and wide public participation.",imgAlt:"Victory Day",badge:"National",details:"Details"} },
        { id: "eid",     date: "2025-04-10", category: "family",  badgeColor: "warning text-dark",  img: "img/عيد.PNG",             link: "event.html?id=eid",
            ar:{title:"احتفالات عيد الفطر",text:"فعاليات للأطفال، ألعاب، وهدايا في الحدائق العامة بمناسبة العيد.",imgAlt:"عيد الفطر",badge:"عائلي",details:"تفاصيل"},
            en:{title:"Eid Al-Fitr Celebrations",text:"Activities for children, games, and gifts in public parks to celebrate the holiday.",imgAlt:"Eid Al-Fitr",badge:"Family",details:"Details"} },
        ];

    // --- Helpers ---
    function getLang() {
        return document.documentElement.dataset.lang || localStorage.getItem("lang") || "ar";
    }
    function parseISO(d) {
        return d ? new Date(d + "T00:00:00") : null;
    }

    // --- Rendering ---
    function renderEvents(list, grid, lang) {
        grid.innerHTML = "";
        if (!list.length) {
            grid.innerHTML = `
        <div class="col-12 text-center text-muted py-4">
          ${lang === "ar" ? "لا توجد فعاليات مطابقة" : "No matching events"}
        </div>`;
            return;
        }
        const frag = document.createDocumentFragment();
        list.forEach((ev) => {
            const t = ev[lang] || ev.ar;
            const col = document.createElement("div");
            col.className = "col-md-4";
            col.innerHTML = `
        <div class="card h-100 shadow">
          <img src="${ev.img}" class="card-img-top" alt="${t.imgAlt}">
          <div class="card-body">
            <span class="badge bg-${ev.badgeColor} mb-2">${t.badge}</span>
            <h5 class="card-title">${t.title}</h5>
            <p class="card-text">${t.text}</p>
            <p class="mb-2"><strong>${lang === "ar" ? "التاريخ:" : "Date:"}</strong> ${ev.date}</p>
            <a href="${ev.link}" class="btn btn-primary">${t.details}</a>
          </div>
        </div>`;
            frag.appendChild(col);
        });
        grid.appendChild(frag);
    }

    // --- Filtering ---
    function applyFilters() {
        const grid = document.getElementById("eventsGrid");
        if (!grid) return;

        const lang = getLang();
        const typeSel = document.getElementById("typeFilter");
        const from = document.getElementById("fromDate");
        const to = document.getElementById("toDate");

        const type  = ((typeSel && typeSel.value) || "").trim();
        const fromD = parseISO(from ? from.value : "");
        const toD   = parseISO(to ? to.value : "");

        let result = EVENTS.slice();

        if (type)  result = result.filter((e) => e.category === type);
        if (fromD) result = result.filter((e) => parseISO(e.date) >= fromD);
        if (toD)   result = result.filter((e) => parseISO(e.date) <= toD);

        renderEvents(result, grid, lang);
    }

    // --- Wire up (only on events page) ---
    document.addEventListener("DOMContentLoaded", function () {
        const grid = document.getElementById("eventsGrid");
        if (!grid) return; // not the events page

        // Initial render
        renderEvents(EVENTS, grid, getLang());

        // Filters bar
        const applyBtn = document.getElementById("applyFilters");
        const resetBtn = document.getElementById("resetFilters");
        if (applyBtn) applyBtn.addEventListener("click", applyFilters);
        if (resetBtn) resetBtn.addEventListener("click", () => {
            const typeSel = document.getElementById("typeFilter");
            const from = document.getElementById("fromDate");
            const to = document.getElementById("toDate");
            if (typeSel) typeSel.value = "";
            if (from) from.value = "";
            if (to) to.value = "";
            renderEvents(EVENTS, grid, getLang());
        });

        // Header category buttons (existing quick filters)
        document.querySelectorAll(".category-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const map = ["family", "culture", "sport", "music", "shopping", "national"];
                const cat = map.find((k) => btn.classList.contains(k)) || "";
                const typeSel = document.getElementById("typeFilter");
                if (typeSel) typeSel.value = cat || "";
                // Clear dates when clicking category quick filter
                const from = document.getElementById("fromDate");
                const to = document.getElementById("toDate");
                if (from) from.value = "";
                if (to) to.value = "";
                applyFilters();

                const msg = document.getElementById("category-message");
                if (msg) {
                    const lang = getLang();
                    msg.textContent = cat
                        ? (lang === "ar" ? "تم اختيار تصنيف: " : "Selected category: ") + cat
                        : "";
                }
            });
        });

        // Live language switching (react to language.js updates)
        const obs = new MutationObserver((muts) => {
            for (const m of muts) {
                if (m.type === "attributes" && m.attributeName === "data-lang") {
                    renderEvents(EVENTS, grid, getLang());
                }
            }
        });
        obs.observe(document.documentElement, { attributes: true });

        // Cross-tab language change safety
        window.addEventListener("storage", (e) => {
            if (e.key === "lang") {
                renderEvents(EVENTS, grid, getLang());
            }
        });
    });
})();

