document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach((container) => {
        const carousel = container.querySelector(".carousel");
        const prevBtn = container.querySelector(".prev-btn");
        const nextBtn = container.querySelector(".next-btn");

        let scrollAmount = 0;

        prevBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: -carousel.clientWidth / 4, behavior: "smooth" });
        });

        nextBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: carousel.clientWidth / 4, behavior: "smooth" });
        });
    });
});
