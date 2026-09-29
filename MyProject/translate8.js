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
        "book-title": "Book Your Golf Experience 🏌️‍♂️",
        "book-desc": "Select your preferred package and enjoy an unforgettable golf getaway!",
        "full-name": "Full Name:",
        "email": "Email Address:",
        "phone": "Phone Number:",
        "checkin": "Check-in Date:",
        "select-package": "Select Package:",
        "package1": "Five Rounds Package",
        "package2": "Relaxation Retreat",
        "package3": "Triple Trip Package (20% Discount on Pro Shop & Rentals!)",
        "confirm-booking": "Confirm Booking",
        "payment-title": "Credit Card Payment 💳",
        "payment-desc": "Please enter your payment details below:",
        "card-name": "Cardholder Name:",
        "card-number": "Card Number:",
        "expiry-date": "Expiry Date:",
        "cvv": "CVV:",
        "complete-payment": "Complete Payment",
        "dark-mode": "🌓 Dark Mode",
        "increase-font": "🔍 A+",
        "decrease-font": "🔍 A-"
    },
    "ar": {
        "home": "الرئيسية",
        "offers": "عروضنا",
        "packages": "الباقات",
        "about": "من نحن",
        "contact": "اتصل بنا",
        "book": "احجز الآن",
        "book-title": "احجز تجربتك في الجولف 🏌️‍♂️",
        "book-desc": "اختر باقتك المفضلة واستمتع بإجازة جولف لا تُنسى!",
        "full-name": "الاسم الكامل:",
        "email": "البريد الإلكتروني:",
        "phone": "رقم الهاتف:",
        "checkin": "تاريخ تسجيل الوصول:",
        "select-package": "اختر الباقة:",
        "package1": "باقة الجولات الخمس",
        "package2": "باقة الاسترخاء",
        "package3": "باقة الرحلة الثلاثية (خصم 20% في متجر المحترفين وتأجير المعدات!)",
        "confirm-booking": "تأكيد الحجز",
        "payment-title": "الدفع ببطاقة الائتمان 💳",
        "payment-desc": "يرجى إدخال تفاصيل الدفع أدناه:",
        "card-name": "اسم حامل البطاقة:",
        "card-number": "رقم البطاقة:",
        "expiry-date": "تاريخ الانتهاء:",
        "cvv": "رمز CVV:",
        "complete-payment": "إكمال الدفع"
    }
};
