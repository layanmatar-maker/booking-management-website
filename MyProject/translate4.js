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
        "exclusive-packages": "Our Exclusive Packages",
        "package1-title": "Five Rounds Package",
        "package1-item1": "Five-night stay in a luxury suite",
        "package1-item2": "Five rounds - 18 holes",
        "package1-item3": "One guaranteed round at the famous Sea View Course",
        "package1-item4": "One free digital training session",
        "package2-title": "Triple Trip",
        "package2-item1": "Two-night stay in a double room with breakfast",
        "package2-item2": "Three rounds - 18 holes",
        "package2-item3": "Includes one round at the Sea View Course (if available)",
        "package2-item4": "Free golf cart rental",
        "package2-item5": "20% discount at the Pro Shop",
        "package3-title": "Relaxation Retreat",
        "package3-item1": "One-night stay with full breakfast",
        "package3-item2": "Dinner at any resort restaurant",
        "package3-item3": "Access to the golf courses (fees apply, Sea View excluded)",
        "package3-item4": "Free club rental",
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
        "exclusive-packages": "باقاتنا الحصرية",
        "package1-title": "باقة الجولات الخمس",
        "package1-item1": "إقامة خمس ليالٍ في جناح فاخر",
        "package1-item2": "خمس جولات - 18 حفرة",
        "package1-item3": "جولة واحدة مضمونة في ملعب الإطلالة البحرية",
        "package1-item4": "جلسة تدريب رقمية مجانية",
        "package2-title": "باقة الرحلة الثلاثية",
        "package2-item1": "إقامة لمدة ليلتين في غرفة مزدوجة مع الإفطار",
        "package2-item2": "ثلاث جولات - 18 حفرة",
        "package2-item3": "تشمل جولة واحدة في ملعب الإطلالة البحرية (إذا كان متاحًا)",
        "package2-item4": "تأجير عربة جولف مجانًا",
        "package2-item5": "خصم 20% في متجر المحترفين",
        "package3-title": "باقة الاسترخاء",
        "package3-item1": "إقامة ليلة واحدة مع إفطار كامل",
        "package3-item2": "عشاء في أي مطعم بالمنتجع",
        "package3-item3": "الوصول إلى ملاعب الجولف (تُطبق الرسوم، باستثناء ملعب الإطلالة البحرية)",
        "package3-item4": "تأجير مجاني لمعدات الجولف"
    }
};
