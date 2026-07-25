// NorthPeak Digital

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation buttons
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });

    console.log("NorthPeak Digital website loaded successfully.");

});
