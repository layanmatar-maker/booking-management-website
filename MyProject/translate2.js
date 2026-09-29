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
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
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
        "courses-title": "Our Golf Courses & Facilities",
        "courses-desc": "Welcome to Hole In One Golf Resort, where we offer world-class golfing experiences and premium facilities.",
        "course1-title": "Sea View Course",
        "course1-desc": "A breathtaking golf course with stunning ocean views.",
        "course2-title": "The Valley Course",
        "course2-desc": "A challenging course surrounded by lush greenery.",
        "course3-title": "The Sunset Course",
        "course3-desc": "An elegant course with a spectacular sunset backdrop.",
        "hotels-title": "🏨 Our Hotels",
        "hotel1-title": "Luxury Golf Hotel",
        "hotel1-desc": "Enjoy a luxurious stay with premium services.",
        "hotel2-title": "Resort & Spa",
        "hotel2-desc": "Relax with world-class spa and resort facilities.",
        "clubs-title": "🎭 Exclusive Clubs",
        "club1-title": "Dance Club",
        "club1-desc": "Join exciting dance classes and social nights.",
        "club2-title": "Gaming Club",
        "club2-desc": "Experience top-tier gaming tournaments.",
        "dining-title": "🍽️ Fine Dining",
        "restaurant1-title": "Gourmet Restaurant",
        "restaurant1-desc": "Indulge in exquisite fine dining.",
        "restaurant2-title": "Casual Bistro",
        "restaurant2-desc": "Enjoy a cozy and relaxed coffee shop.",
        "proshop-title": "🏌️‍♂️ Pro Shop",
        "proshop-name": "Golf Pro Shop",
        "proshop-desc": "Find premium golf equipment and accessories.",
        "visit-desc": "Experience the best of golf and luxury at Hole In One Golf Resort. Book your visit today!",
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
        "courses-title": "ملاعب الجولف والمرافق",
        "courses-desc": "مرحبًا بكم في منتجع Hole In One للجولف، حيث نقدم تجارب جولف عالمية المستوى ومرافق متميزة.",
        "course1-title": "ملعب الإطلالة البحرية",
        "course1-desc": "ملعب جولف رائع مع إطلالات خلابة على المحيط.",
        "course2-title": "ملعب الوادي",
        "course2-desc": "ملعب مليء بالتحديات محاط بالمناظر الطبيعية الخضراء.",
        "course3-title": "ملعب الغروب",
        "course3-desc": "ملعب أنيق مع إطلالة مذهلة على الغروب.",
        "hotels-title": "🏨 فنادقنا",
        "hotel1-title": "فندق جولف فاخر",
        "hotel1-desc": "استمتع بإقامة فاخرة مع خدمات متميزة.",
        "hotel2-title": "منتجع وسبا",
        "hotel2-desc": "استرخِ مع منتجعات عالمية المستوى.",
        "clubs-title": "🎭 الأندية الحصرية",
        "club1-title": "نادي الرقص",
        "club1-desc": "انضم إلى دروس الرقص والليالي الاجتماعية الممتعة.",
        "club2-title": "نادي الألعاب",
        "club2-desc": "استمتع ببطولات الألعاب الإلكترونية الاحترافية.",
        "dining-title": "🍽️ تجارب الطعام",
        "restaurant1-title": "مطعم الذواقة",
        "restaurant1-desc": "استمتع بأشهى الأطباق الراقية.",
        "restaurant2-title": "المقهى الكلاسيكي",
        "restaurant2-desc": "مكان دافئ ومريح لتناول القهوة.",
        "proshop-title": "🏌️‍♂️ متجر الجولف الاحترافي",
        "proshop-name": "متجر محترفي الجولف",
        "proshop-desc": "اكتشف معدات وإكسسوارات جولف متميزة.",
        "visit-desc": "عِش تجربة الجولف والرفاهية في منتجع Hole In One. احجز زيارتك اليوم!",
        "dark-mode": "🌓 الوضع الليلي",
        "increase-font": "🔍 تكبير الخط",
        "decrease-font": "🔍 تصغير الخط",
        "play-sound": "🔊 تشغيل الصوت",
        "pause-sound": "🔇 إيقاف الصوت"
    }
};
