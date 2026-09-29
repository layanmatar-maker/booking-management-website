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
        "package-title": "Relaxation Retreat Package",
        "price": "Price: 100 dollars",
        "desc1": "Enjoy a peaceful one-night stay",
        "desc2": "Dinner at any of our resort restaurants",
        "desc3": "Access to the golf courses",
        "desc4": "Free club rental",
        "feature1": "🏨 One-night stay with a full breakfast",
        "feature2": "🍽️ Dinner at any of our resort restaurants",
        "feature3": "⛳ Access to the golf courses (fees apply, excluding Sea View Course)",
        "feature4": "💃 Free dancing party club rental",
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
        "package-title": "باقة الاسترخاء",
        "price": "السعر: 100 دولار",
        "desc1": "استمتع بإقامة ليلة واحدة هادئة",
        "desc2": "عشاء في أي من مطاعم المنتجع لدينا",
        "desc3": "الوصول إلى ملاعب الجولف",
        "desc4": "تأجير مجاني لمعدات الرقص",
        "feature1": "🏨 إقامة ليلة واحدة مع وجبة إفطار كاملة",
        "feature2": "🍽️ عشاء في أي من مطاعم المنتجع",
        "feature3": "⛳ الوصول إلى ملاعب الجولف (تُطبق الرسوم، باستثناء ملعب الإطلالة البحرية)",
        "feature4": "💃 تأجير مجاني لنادي الرقص",
        "dark-mode": "🌓 الوضع الليلي",
        "increase-font": "🔍 تكبير الخط",
        "decrease-font": "🔍 تصغير الخط",
        "play-sound": "🔊 تشغيل الصوت",
        "pause-sound": "🔇 إيقاف الصوت"
    }
};
