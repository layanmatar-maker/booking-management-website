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

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("checkin_date").value;
    let packageChoice = document.getElementById("package").value;

    if (!name || !email || !phone || !date || !packageChoice) {
        document.getElementById("error-message").textContent = "⚠️ Please fill out all fields!";
        return false;
    }

    alert("✅ Booking Confirmed!");
});

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let cardName = document.getElementById("card_name").value;
    let cardNumber = document.getElementById("card_number").value;
    let expiryDate = document.getElementById("expiry_date").value;
    let cvv = document.getElementById("cvv").value;

    if (!cardName || !cardNumber || !expiryDate || !cvv) {
        alert("⚠️ Please fill out all fields!");
        return false;
    }

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("⚠️ Invalid card number! Must be 16 digits.");
        return false;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("⚠️ Invalid CVV! Must be 3 digits.");
        return false;
    }

    alert("✅ Payment Successful! Redirecting...");
    window.location.href = "booking_confirmation.html";
});
