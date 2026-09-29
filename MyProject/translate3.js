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
        "contact-title": "Contact Us",
        "contact-intro": "For custom event packages and long-term stays, please contact our team to arrange your tailored experience.",
        "commitment": "Our Commitment",
        "commitment-desc": "At Hole In One Golf Resort, we strive to offer the best services for golf enthusiasts, corporate events, and extended stays. Reach out to us for personalized packages.",
        "get-in-touch": "Get in Touch",
        "phone": "Phone:",
        "email": "Email:",
        "request-callback": "Request a Callback",
        "phone-number": "Your Phone Number:",
        "email-address": "Your Email:",
        "submit": "Submit",
        "payment-method": "Choose Payment Method:",
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
        "contact-title": "اتصل بنا",
        "contact-intro": "للحصول على باقات فعاليات مخصصة أو إقامة طويلة، يرجى التواصل مع فريقنا لترتيب تجربتك الخاصة.",
        "commitment": "التزامنا",
        "commitment-desc": "في منتجع هول إن ون للجولف، نسعى لتقديم أفضل الخدمات لعشاق الجولف، والفعاليات الشركاتية، والإقامات الطويلة. تواصل معنا للحصول على باقات مخصصة.",
        "get-in-touch": "ابقَ على تواصل",
        "phone": "الهاتف:",
        "email": "البريد الإلكتروني:",
        "request-callback": "طلب معاودة الاتصال",
        "phone-number": "رقم هاتفك:",
        "email-address": "بريدك الإلكتروني:",
        "submit": "إرسال",
        "payment-method": "اختر طريقة الدفع:",
        "dark-mode": "🌓 الوضع الليلي",
        "increase-font": "🔍 تكبير الخط",
        "decrease-font": "🔍 تصغير الخط",
        "play-sound": "🔊 تشغيل الصوت",
        "pause-sound": "🔇 إيقاف الصوت"
    }
};
