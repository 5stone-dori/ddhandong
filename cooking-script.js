document.addEventListener('DOMContentLoaded', function() {
    const selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    
    const recipes = {
        '김치볶음밥': {
            ingredients: ['김치', '쌀밥', '베이컨', '계란', '양파', '참기름', '식용유', '깨', '물엿', '고추가루', '후추'],
            description: '맛있는 김치볶음밥 레시피입니다.',
            steps: [
                '배추김치는 사방 1cm 크기로 자르고, 양파는 굵게 다져주세요',
                '실파는 송송 썰고, 베이컨은 한입 크기로 잘라주세요',
                '물에 양념 재료를 넣어 섞어주세요',
                '달군 팬에 약간의 기름을 두르고 베이컨을 볶다가, 양파와 김치를 넣어 중간불에서 2분 정도 볶은 후 양념을 넣어 섞어주세요',
                '밥을 넣고, 주걱으로 밥을 가르듯이 고루 섞어가며 고루 섞어가며 볶은 후 마지막에 참기름을 넣어주세요',
                '그릇에 김치볶음밥을 담고, 통깨와 실파를 뿌려주세요',
                '달걀프라이를 곁들이면 더욱 맛이 좋아요'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/iPkDxFTy5k1dxUrnCGhnvQd5'
        },
        '파스타': {
            ingredients: ['파스타면', '마늘', '올리브유', '베이컨'],
            description: '간단한 파스타 레시피입니다.'
        },
        // 더 많은 레시피 추가 가능
    };
    
    const recommendedRecipes = findRecommendedRecipes(selectedIngredients, recipes);
    displayRecommendedRecipes(recommendedRecipes, selectedIngredients);
});

function findRecommendedRecipes(selectedIngredients, recipes) {
    const recommended = [];
    
    for (const [recipeName, recipe] of Object.entries(recipes)) {
        // 레시피의 재료 중 하나라도 선택된 재료에 포함되어 있는지 확인
        const matchingIngredients = recipe.ingredients.filter(ingredient => 
            selectedIngredients.includes(ingredient)
        );
        
        // 하나라도 일치하는 재료가 있으면 추천 목록에 추가
        if (matchingIngredients.length > 0) {
            // 부족한 재료 찾기
            const missingIngredients = recipe.ingredients.filter(ingredient => 
                !selectedIngredients.includes(ingredient)
            );
            
            recommended.push({
                name: recipeName,
                ...recipe,
                matchingCount: matchingIngredients.length,
                matchingIngredients: matchingIngredients,
                missingIngredients: missingIngredients
            });
        }
    }
    
    // 일치하는 재료가 많은 순으로 정렬
    return recommended.sort((a, b) => b.matchingCount - a.matchingCount);
}

function displayRecommendedRecipes(recipes, selectedIngredients) {
    const container = document.getElementById('recommended-recipes');
    
    if (recipes.length === 0) {
        container.innerHTML = '<p>선택하신 재료로 만들 수 있는 요리가 없습니다.</p>';
        return;
    }
    
    const html = recipes.map(recipe => `
        <div class="recipe-card">
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <h3>보유한 재료:</h3>
            <ul class="has-ingredients">
                ${recipe.matchingIngredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>추가로 필요한 재료:</h3>
            <ul class="missing-ingredients">
                ${recipe.missingIngredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>조리 순서:</h3>
            <ol class="recipe-steps">
                ${recipe.steps ? recipe.steps.map(step => `<li>${step}</li>`).join('') : ''}
            </ol>
            <p><a href="${recipe.recipeUrl}" target="_blank">상세 레시피 보기</a></p>
        </div>
    `).join('');
    
    container.innerHTML = html;
} 