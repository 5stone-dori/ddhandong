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
        img.style.left = '10%'; // 고정된 위치로 변경 (예: 10%)
        img.style.top = '10%';  // 고정된 위치로 변경 (예: 10%)
        overlay.appendChild(img);
    });
});

document.getElementById("cancel-button").addEventListener("click", function () {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = false;
    });
    document.getElementById("overlay").innerHTML = ""; // 선택된 재료 초기화
});

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const ingredientImg = document.getElementById(`${this.value}-img`);
        if (this.checked) {
            ingredientImg.style.display = 'block';
        } else {
            ingredientImg.style.display = 'none';
        }
    });
});


// submit 버튼 클릭 시 cooler-cooking.html로 이동
document.getElementById('ingredient-form').addEventListener('submit', function(event) {
    event.preventDefault();  // 기본 제출 동작 방지
    window.location.href = 'cooler-cooking.html';  // 페이지 이동
});
