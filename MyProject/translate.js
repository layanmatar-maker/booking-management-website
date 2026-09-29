document.addEventListener("DOMContentLoaded", function() {
    let langToggle = document.getElementById("language-toggle");
    let currentLang = localStorage.getItem("language") || "en"; // تحميل اللغة المحفوظة أو الافتراضية

    applyLanguage(currentLang);

    langToggle.addEventListener("click", function() {
        let newLang = (currentLang === "en") ? "ar" : "en";
        applyLanguage(newLang);
        localStorage.setItem("language", newLang);
    });

    function applyLanguage(lang) {
        let elements = document.querySelectorAll("[data-lang]");

        elements.forEach(el => {
            let key = el.getAttribute("data-lang");
            el.innerHTML = translations[lang][key] || el.innerHTML;
        });

        currentLang = lang;
        langToggle.innerHTML = (lang === "en") ? "العربية" : "English"; 
        document.documentElement.setAttribute("lang", lang);
    }
});

const translations = {
    "en": {
        "home": "Home",
        "offers": "Our Offers",
        "packages": "Our Packages",
        "about": "About Us",
        "contact": "Contact Us",
        "book": "Book Now",
        "welcome": "Welcome to Hole In One Golf Resort ⛳",
        "description": "Escape to a golfer’s paradise at Hole In One Golf Resort, where luxury meets passion for the game. Immerse yourself in breathtaking landscapes, world-class courses, and premium hospitality.",
        "login": "Login",
        "email": "Email:",
        "password": "Password:",
        "login-btn": "Login",
        "dark-mode": "🌓 Dark Mode",
        "increase-font": "🔍 A+",
        "decrease-font": "🔍 A-",
        "play-sound": "🔊 Play Sound",
        "pause-sound": "🔇 Pause Sound"
    },
    "ar": {
        "home": "الرئيسية",
        "offers": "عروضنا",
        "packages": "الباقات",
        "about": "من نحن",
        "contact": "اتصل بنا",
        "book": "احجز الآن",
        "welcome": "مرحبًا بكم في منتجع هول إن ون للجولف ⛳",
        "description": "اهرب إلى جنة عشاق الجولف في منتجع هول إن ون، حيث يلتقي الفخامة والشغف باللعبة. استمتع بالمناظر الخلابة، والملاعب العالمية، والضيافة المتميزة.",
        "login": "تسجيل الدخول",
        "email": "البريد الإلكتروني:",
        "password": "كلمة المرور:",
        "login-btn": "تسجيل الدخول",
        "dark-mode": "🌓 الوضع الليلي",
        "increase-font": "🔍 تكبير الخط",
        "decrease-font": "🔍 تصغير الخط",
        "play-sound": "🔊 تشغيل الصوت",
        "pause-sound": "🔇 إيقاف الصوت"
    }
};
// 🔹 تشغيل الصوت
function playAudio() {
    let audio = document.getElementById("backgroundAudio");
    if (audio) {
        audio.play();
    }
}

// 🔹 إيقاف الصوت
function pauseAudio() {
    let audio = document.getElementById("backgroundAudio");
    if (audio) {
        audio.pause();
    }
}