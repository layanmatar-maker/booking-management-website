// 🔹 تبديل الوضع الداكن
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
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

