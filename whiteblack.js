document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("recipe-grid");
    const modal = document.getElementById("recipe-modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const recipeText = document.getElementById("recipe-text");
    const recipeUrl = document.getElementById("recipe-url");
    const outputUrl = document.getElementById("output-url");
    const backButton = document.getElementById("back-button");

    // 카기 상태에서 모달 숨기기
    modal.classList.remove("active");
    modal.classList.add("hidden");

    // 카드 클릭 시 모달 표시
    grid.addEventListener("click", (e) => {
        const card = e.target.closest(".recipe-card");
        if (!card) return;

        const recipeName = card.getAttribute("data-name");
        const recipeImage = card.querySelector("img").src;

        modalImage.src = recipeImage;
        modalTitle.textContent = recipeName;
        modal.classList.remove("hidden");
        modal.classList.add("active");

        backButton.style.display = "block";
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
            modal.classList.add("hidden");
            backButton.style.display = "none";
        }
    });

    // 레시피 URL 입력 시 출력
    recipeUrl.addEventListener("input", () => {
        outputUrl.textContent = recipeUrl.value;
        outputUrl.href = recipeUrl.value;
    });

    // 뒤로가기 버튼 클릭 시 모달 닫기
    backButton.addEventListener("click", () => {
        modal.classList.remove("active");
        modal.classList.add("hidden");
        backButton.style.display = "none";
    });
});