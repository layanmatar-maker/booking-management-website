function validateBooking(event) {
    event.preventDefault(); // منع تحديث الصفحة

    let fullName = document.getElementById("full_name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let checkinDate = document.getElementById("checkin_date").value;
    let errorMessage = document.getElementById("error-message");

    // التحقق من أن الحقول ليست فارغة
    if (fullName === "" || email === "" || phone === "" || checkinDate === "") {
        errorMessage.textContent = "⚠️ Please fill in all fields!";
        return false;
    }

    // التحقق من صحة الإيميل
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "⚠️ Please enter a valid email address!";
        return false;
    }

    // نجاح الحجز
    alert("✅ Your booking is confirmed! We look forward to welcoming you.");
    window.location.href = "index.html";
    return true;
}
