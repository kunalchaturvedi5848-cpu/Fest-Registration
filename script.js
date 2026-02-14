document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (yesBtn && noBtn) {

        let size = 18;

        noBtn.addEventListener("click", () => {
            size += 10;
            yesBtn.style.fontSize = size + "px";
            yesBtn.style.padding = (12 + size/5) + "px " + (25 + size/3) + "px";
        });

        yesBtn.addEventListener("click", () => {
            window.location.href = "love.html";
        });
    }

});
