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
        "about-title": "About Hole In One Golf Resort",
        "about-desc": "Welcome to Hole In One Golf Resort, the ultimate destination for golf enthusiasts in the heart of Portugal. Nestled in the stunning landscapes of the Algarve region, our resort offers world-class golfing experiences combined with luxury accommodations and top-tier facilities.",
        "golf-exp": "🏌️‍♂️ Experience Golf Like Never Before",
        "golf-desc": "Our championship-grade golf courses are designed to challenge and inspire players of all skill levels. Enjoy breathtaking views, perfectly maintained greens, and a variety of holes tailored to provide an unforgettable experience.",
        "location": "🌍 Prime Location in Portugal",
        "location-desc": "Located in the beautiful Algarve region, our resort provides a peaceful yet luxurious getaway. Whether you're here for golf, relaxation, or a mix of both, Hole In One Resort is the perfect escape.",
        "more-than-golf": "🏨 More Than Just Golf",
        "more-than-golf-desc": "Beyond our golf courses, our resort features luxury hotels, gourmet dining, wellness spas, and vibrant nightlife. Whether you want to unwind after a day on the course or explore our exclusive entertainment options, we have something for everyone.",
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
        "about-title": "عن منتجع Hole In One للجولف",
        "about-desc": "مرحبًا بك في منتجع Hole In One للجولف، الوجهة المثالية لعشاق الجولف في قلب البرتغال. يقع المنتجع في المناظر الطبيعية الخلابة لمنطقة الغارف، حيث يوفر تجارب جولف عالمية المستوى مع إقامة فاخرة ومرافق متميزة.",
        "golf-exp": "🏌️‍♂️ تجربة الجولف كما لم تعشها من قبل",
        "golf-desc": "تم تصميم ملاعب الجولف لدينا بمعايير بطولات عالمية لتحدي وتحفيز اللاعبين من جميع المستويات. استمتع بمناظر خلابة ومساحات خضراء مثالية وتشكيلة متنوعة من الحفر التي توفر تجربة لا تُنسى.",
        "location": "🌍 موقع متميز في البرتغال",
        "location-desc": "يقع منتجعنا في منطقة الغارف الجميلة، مما يوفر تجربة هادئة وفاخرة في نفس الوقت. سواء كنت هنا للجولف أو للاسترخاء أو لكليهما، Hole In One هو الخيار المثالي لك.",
        "more-than-golf": "🏨 أكثر من مجرد جولف",
        "more-than-golf-desc": "إلى جانب ملاعب الجولف، يضم المنتجع فنادق فاخرة ومطاعم راقية ومنتجعات صحية وحياة ليلية مفعمة بالحيوية."
    }
};
