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
        "package-title": "Triple Trip Package",
        "price": "Price: 400 dollars",
        "desc1": "Enjoy a two-night stay at the Royal Green Hotel",
        "desc2": "Three 18-hole golf rounds",
        "desc3": "Sea View Course",
        "desc4": "Free golf cart rental",
        "desc5": "20% discount at the Pro Shop",
        "feature1": "🏨 Two nights stay at Royal Green Hotel in a double room + breakfast",
        "feature2": "⛳ Three rounds of 18-hole golf",
        "feature3": "🌊 Chance to play at the Sea View Course (if available, opening at 10am close at 6pm)",
        "feature4": "🚗 Free golf cart rental",
        "feature5": "🏪 20% discount at the Pro Shop",
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
        "package-title": "باقة الرحلة الثلاثية",
        "price": "السعر: 400 دولار",
        "desc1": "استمتع بإقامة لمدة ليلتين في فندق رويال جرين",
        "desc2": "ثلاث جولات جولف - 18 حفرة لكل منها",
        "desc3": "ملعب الإطلالة البحرية",
        "desc4": "تأجير عربة جولف مجانية",
        "desc5": "خصم 20% في متجر المحترفين",
        "feature1": "🏨 إقامة لمدة ليلتين في فندق رويال جرين + إفطار",
        "feature2": "⛳ ثلاث جولات جولف - 18 حفرة لكل منها",
        "feature3": "🌊 فرصة للعب في ملعب الإطلالة البحرية (حسب التوفر)",
        "feature4": "🚗 تأجير عربة جولف مجانًا",
        "feature5": "🏪 خصم 20% في متجر المحترفين",
        "dark-mode": "🌓 الوضع الليلي",
        "increase-font": "🔍 تكبير الخط",
        "decrease-font": "🔍 تصغير الخط",
        "play-sound": "🔊 تشغيل الصوت",
        "pause-sound": "🔇 إيقاف الصوت"
    }
};
