function validateLogin(event) {
    event.preventDefault(); // منع تحديث الصفحة

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    // التحقق من أن الحقول ليست فارغة
    if (email === "" || password === "") {
        errorMessage.textContent = "⚠️ Please fill in all fields!";
        return false;
    }

    // التحقق من صحة الإيميل
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "⚠️ Please enter a valid email address!";
        return false;
    }

    // التحقق من قوة كلمة المرور
    if (password.length < 6) {
        errorMessage.textContent = "⚠️ Password must be at least 6 characters!";
        return false;
    }

    // نجاح تسجيل الدخول
    alert("✅ Welcome back to Hole In One Resort!");
    window.location.href = "index.html"; // تحويل المستخدم للصفحة الرئيسية بعد تسجيل الدخول
    return true;
}

// تفعيل الوضع الداكن
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // تحديث جميع النصوص في الصفحة
    let elements = document.querySelectorAll("h1, h2, h3, p, a, button, li, .navbar, .package-card");
    elements.forEach(el => {
        el.classList.toggle("dark-mode-text");
    });
}

// تكبير حجم الخط
function increaseFontSize() {
    let textElements = document.querySelectorAll("h1, h2, h3, p, a, button, li");
    textElements.forEach(element => {
        let currentSize = window.getComputedStyle(element).fontSize;
        element.style.fontSize = (parseFloat(currentSize) + 2) + "px";
    });
}

// تصغير حجم الخط
function decreaseFontSize() {
    let textElements = document.querySelectorAll("h1, h2, h3, p, a, button, li");
    textElements.forEach(element => {
        let currentSize = window.getComputedStyle(element).fontSize;
        element.style.fontSize = (parseFloat(currentSize) - 2) + "px";
    });
}

// تشغيل الصوت
function playAudio() {
    let audio = document.getElementById("backgroundAudio");
    if (audio) {
        audio.play();
    }
}

// إيقاف الصوت
function pauseAudio() {
    let audio = document.getElementById("backgroundAudio");
    if (audio) {
        audio.pause();
    }
}
