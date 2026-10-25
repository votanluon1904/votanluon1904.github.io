document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("actionBtn");
    const greeting = document.getElementById("greeting");

    btn.addEventListener("click", function() {
        greeting.textContent = "Bạn đã thay đổi DOM thành công!";
        greeting.style.color = "#28a745";
    });
});