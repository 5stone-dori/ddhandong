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

    // 선택된 재료들을 localStorage에 저장
    localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));
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
document.getElementById('ingredient-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 선택된 체크박스들의 값을 배열로 수집
    const selectedIngredients = [];
    const checkboxes = this.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        selectedIngredients.push(checkbox.value);
    });
    
    // 선택된 재료들을 localStorage에 저장
    localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));
    
    // cooler-cooking.html로 이동
    window.location.href = 'cooler-cooking.html';
});
// notice
document.addEventListener("DOMContentLoaded", () => {
    const noticeItems = document.querySelectorAll(".notice-item");

    noticeItems.forEach(item => {
        const title = item.querySelector(".notice-title");

        title.addEventListener("click", () => {
            // 해당 공지사항 아이템에 'open' 클래스를 토글
            item.classList.toggle("open");
        });
    });
});
