document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("recipe-grid");
    const modal = document.getElementById("recipe-modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const recipeText = document.getElementById("recipe-text");
    const recipeUrl = document.getElementById("recipe-url");
    const backButton = document.getElementById("back-button");

    // 카기 상태에서 모달 숨기기
    modal.classList.remove("active");
    modal.classList.add("hidden");

    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeName = card.dataset.name;
            const recipe = recipeData[recipeName];
            
            const modal = document.getElementById('recipe-modal');
            const modalTitle = document.getElementById('modal-title');
            const recipeText = document.getElementById('recipe-text');
            const recipeUrl = document.getElementById('recipe-url');
            const modalImage = document.getElementById('modal-image');
            
            modalTitle.textContent = recipeName;
            recipeText.innerHTML = recipe.text.replace(/\n/g, '<br>');
            recipeUrl.href = recipe.url;
            modalImage.src = card.querySelector('img').src;
            
            modal.style.display = 'block';
        });
    });

    // 모달 외부 클릭 시 닫기
    window.onclick = function(event) {
        const modal = document.getElementById('recipe-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});