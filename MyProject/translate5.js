document.addEventListener("DOMContentLoaded", function() {
    let langToggle = document.getElementById("language-toggle");
    let currentLang = localStorage.getItem("language") || "en"; 

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
        "package-title": "Five Rounds Package 🏌️‍♂️",
        "price": "Price: 600 dollars",
        "desc1": "Enjoy an unforgettable 5-night stay",
        "desc2": "5 rounds of 18-hole golf",
        "desc3": "Sea View Course",
        "desc4": "Free digital training session",
        "feature1": "🏨 5 Nights in Ritz Carlton Hotel",
        "feature2": "⛳ 5 Rounds - 18 Holes Each⛳",
        "feature3": "🌊 Guaranteed Round at Sea View Course 🌊",
        "feature4": "🎓 Free Digital Training Session 🎓",
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
        "package-title": "باقة الجولات الخمس 🏌️‍♂️",
        "price": "السعر: 600 دولار",
        "desc1": "استمتع بإقامة لا تُنسى لمدة 5 ليالٍ",
        "desc2": "5 جولات جولف - 18 حفرة لكل منها",
        "desc3": "ملعب الإطلالة البحرية",
        "desc4": "جلسة تدريب رقمية مجانية",
        "feature1": "🏨 5 ليالٍ في فندق ريتز كارلتون",
        "feature2": "⛳ 5 جولات - 18 حفرة لكل منها ⛳",
        "feature3": "🌊 جولة مضمونة في ملعب الإطلالة البحرية 🌊",
        "feature4": "🎓 جلسة تدريب رقمية مجانية 🎓",
        "dark-mode": "🌓 الوضع الليلي",
        "increase-font": "🔍 تكبير الخط",
        "decrease-font": "🔍 تصغير الخط",
        "play-sound": "🔊 تشغيل الصوت",
        "pause-sound": "🔇 إيقاف الصوت"
    }
};
