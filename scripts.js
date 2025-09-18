
// زر "استكشف المزيد"
// document.addEventListener("DOMContentLoaded", function() {
//     const moreBtn = document.getElementById("moreBtn");
//     moreBtn.addEventListener("click", function() {
//         alert("🌿 استمتع برحلة لذيذة في عالم المأكولات اليمنية!");
//     });
// });

// ✅ التحقق من الحقول عند تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // منع الإرسال الافتراضي

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("⚠️ يرجى إدخال اسم المستخدم وكلمة المرور");
  } else {
    alert("✅ تم تسجيل الدخول بنجاح (تجريبي)");
    // هنا ممكن ترسل البيانات إلى السيرفر (Backend) لاحقاً
  }
});

// ✅ زر إظهار/إخفاء كلمة المرور
document.getElementById("togglePassword").addEventListener("click", function() {
  let passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    this.textContent = "🙈";
  } else {
    passwordField.type = "password";
    this.textContent = "👁";
  }
});