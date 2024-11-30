document.getElementById("ingredient-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedIngredients = [];
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach((checkbox) => {
        selectedIngredients.push(checkbox.value);
    });

    // 선택된 재료를 화면에 표시
    const overlay = document.getElementById("overlay");
    overlay.innerHTML = ""; // 기존 이미지 초기화

    selectedIngredients.forEach((ingredient, index) => {
        const img = document.createElement("img");
        img.src = `images/${ingredient}.png`; // 재료 이미지 경로
        img.alt = ingredient;
        img.style.position = "absolute";
        img.style.width = "50px";
        img.style.left = `${Math.random() * 80}%`; // 냉장고 내 랜덤 위치
        img.style.top = `${Math.random() * 80}%`;
        overlay.appendChild(img);
    });
});

document.getElementById("cancel-button").addEventListener("click", function () {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = false;
    });
    document.getElementById("overlay").innerHTML = ""; // 선택된 재료 초기화
});



