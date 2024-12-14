document.addEventListener('DOMContentLoaded', function() {
    const selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    
    const recipes = {
        '김치볶음밥': {
            ingredients: ['김치', '쌀밥', '베이컨', '달걀', '양파', '참기름', '식용유', '깨', '물엿', '고추가루', '후추'],
            description: '김치볶음밥은 내가 더 잘 만들어.',
            steps: [
                '배추김치는 1cm 크기로 자르고, 양파는 굵게 다져주세요',
                '실파는 송송 썰고, 베이컨은 한입 크기로 잘라주세요',
                '물에 양념 재료를 넣어 섞어주세요',
                '달군 팬에 약간의 기름을 두르고 베이컨을 볶다가, 양파와 김치를 넣어 중간불에서 2분 정도 볶은 후 양념을 넣어 섞어주세요',
                '밥을 넣고, 주걱으로 밥을 가르듯이 고루 섞어가며 고루 섞어가며 볶은 후 마지막에 참기름을 넣어주세요',
                '그릇에 김치볶음밥을 담고, 통깨와 실파를 뿌려주세요',
                '달걀프라이를 곁들이면 더욱 맛이 좋아요'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/iPkDxFTy5k1dxUrnCGhnvQd5'
        },
        '스팸돈부리덮밥 간단한 한그릇음식': {
            ingredients: ['스팸', '양파', '달걀', '파', '간장', '설탕', '물'],
            description: '내 집에서 만드는 스팸돈부리 덮밥.',
            steps: [
                '스팸은 큰 거 한통에서 1/2만 썼어요. 길게 썰어서 뜨거운 물에 살짝 데쳐주세요. 불순물과 짠맛을 걸러주는 단계랍니다. 데친 스팸은 프라이팬에 앞뒤로 구워줍니다.',
                '밥숟가락 계란으로 간장 4, 설탕 2, 물 12를 넣고 양념장을 만들고 설탕이 녹을 때까지 저어주세요.',
                '양파 1개는 채 썰어서 팬에 볶아주는데 뻣뻣함이 사라질 정도로 볶은 후에 양파 위로 부어줍니다.',
                '스팸을 양파 위에 올려줍니다.',
                '계란을 2개를 풀었고요. 흰자와 노른자가 다 섞이지 않고 살짝만 섞이게 해주세요.',
                '초록 초록이 보이게 위에 파를 썰어서 올려줍니다.',
                '돈부리 완성.'
            ],
            recipeUrl: 'https://m.10000recipe.com/recipe/6883797'
        },
        '백종원 마늘볶음밥': {
            ingredients: ['마늘', '식용유', '버터', '진간장', '소금'],
            description: '백선생표 실패하지 않는 마늘볶음밥.',
            steps: [
                '먼저 마늘을 얇게 썰어주세요.',
                '중약 불로 예열한 팬에 식용유를 두르고, 얇게 썬 마늘과 다진 마늘을 넣고 달달 볶아 마늘 기름을 만들어요.',
                '마늘이 노릇노릇해지면 소금과 간장을 넣고 가볍게 섞은 뒤 가스불을 꺼요.',
                '밥 한 공기를 넣고 양념과 잘 섞어줍니다.',
                '다시 가스불을 켜고, 버터를 넣어 잘 섞어주세요.'
            ],
            recipeUrl: 'https://www.10000recipe.com/recipe/6909229'
        },
        '차슈덮밥': {
            ingredients: ['삼겹살', '양파', '쪽파', '진간장', '맛술', '올리고당', '마늘', '소금', '후추'],
            description: '일본식 삽겹살 덮밥.',
            steps: [
                '수육용으로 사온 삼겹살이어서 약간 녹여서 덮밥에 올릴 크기로 잘라주었어요. 크게 잘라서 굽고 나중에 잘라주셔도 되요. 소금, 후추를 골고루 솔솔솔 뿌려서20분 정도 놔두셔요.',
                '삼겹살을 팬에 우선 구워주셔야 해요. 이때 노릇노릇 바삭하게 구워주셔야 나중에 맛있게 올려드실 수 있답니다.',
                '구워진 삼겹살은 잠시 놔두고, 삼겹살을 졸여줄 간장양념을 만들어주세요. 양파 1/2개를 채썰어서 같이 끓여주세요.',
                '끓기 시작하면 아까 구워놓은 삼겹살을 넣고 졸여주시면 됩니다.',
                '우선 처음에는 센불로 좀 졸여주세요',
                '바짝 졸이시면 안되고 간장양념이 약간 자작히 남아 있어야 나중에 밥에 양념을 해줄 수 있답니다.',
                '이제 뜨끈한 밥 위에 양파와 간장 국물을 3-4스푼 정도 둘러주세요.',
                '완성된 차슈를 위에 가지런히 올려주시면 됩니다.',
                '쪽파를 쫑쫑 썰어서 가운데 올려주시면 보기에도 좋고 자칫 약간의 느끼함도 잡아줄 수 있답니다.'
            ],
            recipeUrl: 'https://www.10000recipe.com/recipe/6878934'
        },
        '소고기볶음밥': {
            ingredients: ['소고기', '파', '쌀밥', '소금', '식용유', '버터', '소금', '깨', '달걀', '올리브오일', '후추'],
            description: '반찬이 애매하게 남았을 때 최고의 선택',
            steps: [
                '파를 비롯 냉장고속 채소들 꺼내 잘게 썰어준다',
                '소고기는 채소보다는 좀 크게, 너무 잘지 않게 썰어준다.',
                '팬에 식용유 넉넉히 두르고 파 먼저 볶아 파기름을 만들고, 다진채소 넣고 볶는데 이때 소금간 살짝해준다.',
                '소고기도 넣어 볶는다',
                '채소와 고기를 팬 한쪽으로 밀어놓고 버터와 밥 넣어 볶다가 모든 재료를 합체시킨다.',
                '계란을 풀어 스크럼블드에그를 만들어, 접시에 볶음밥을 담고 그 위에 올린다'
            ],
            recipeUrl: 'https://www.10000recipe.com/recipe/6879822'
        },
        '스팸 덮밥': {
            ingredients: ['스팸', '달걀', '쪽파', '쌀밥', '식용유', '깨', '진간장', '설탕', '맛술', '물', '참기름', '후추'],
            description: '스팸으로 일본 갔다오기.',
            steps: [
                '체망에 스팸을 올리고 뜨거운 물을 부어 기름을 제거해주세요.',
                '스팸은 편으로 먹기좋게 자르고 쪽파는 송송 썰어주세요. 볼에 소스 재료를 넣고 섞어주세요.',
                '달군 팬에 약간의 기름을 두르고 스팸을 넣어 앞 뒤로 굽다가 양념재료를 넣어 중간불에서 조려가며 익혀주세요.',
                '그릇에 밥을 담고 스팸을 돌려 담은 후 팬에 남은 소스를 스팸위에 얹어주세요. 실파를 뿌린 후 가운데 달걀 노른자를 얹어주세요.',
                '스팸덮밥 위에 통깨를 뿌려 맛있게 즐겨주세요.',
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/4ppRSuubyKqPTz7TaS86shNz?_branch_match_id=1385607136546547753&utm_source=web&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL08uzSzOzEvVSywo0MvJzMvWz3TK8XJyD%2FEL9E6yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAGFbycT8AAAA%3D'
        },
        '달걀 볶음밥': {
            ingredients: ['달걀', '쌀밥', '대파', '스팸', '깨', '식용유', '굴소스', '소금', '후추'],
            description: '간장계란밥 말고 달걀볶음밥.',
            steps: [
                '대파는 얇게 송송 썰어주세요. 스팸은 작은 큐브모양으로 먹기 좋게 잘라주세요.',
                '볼에 달걀을 풀어 달걀물을 만들어주세요.',
                '달군 팬에 기름을 두르고 대파를 1분 정도 볶다가 스팸을 넣어 볶아주세요.',
                '팬 한쪽에 달걀물을 넣어 부드럽게 스크램블드에그를 만들어 주세요.',
                '밥과 양념재료를 넣어 고루 섞어가며 볶아주세요.',
                '그릇에 담고 통깨를 뿌려 맛있게 즐겨주세요'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/LwhjysLeq31Nt9UxLX4ienm1'
        },
        '간단 달걀말이': {
            ingredients: ['달걀', '물', '맛술', '소금', '식용유'],
            description: '간단한 달걀말이 레시피',
            steps: [
                '볼에 달걀을 넣고 풀어준 후 맛술과 소금을 넣어 섞어주세요',
                '따뜻한 물에 코인 육수 한 알을 넣어 녹인 후 만들어준 달걀물에 조금씩 부어가며 섞어주세요',
                '중약불로 달군 팬에 약간의 식용유를 두르고 달걀물을 붓고 윗면이 반쯤 익으면 돌돌 말아주세요.',
                '말아진 달걀을 팬 머리쪽으로 밀어 놓고 달걀물을 붓고 3회 정도 같은 방법으로 반복해서 말아주세요',
                '완성된 달걀 말이는 한 김 식혀 먹기 좋게 썰어 맛있게 즐겨주세요'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/F9w3SRV2sxEqW1afF48NAcRc'
        },
        '배추 크림 스튜': {
            ingredients: ['배추', '양파', '마늘', '생크림', '우유', '베이컨', '치킨스톡', '소금', '후추', '올리브유'],
            description: '속이 따뜻해지는 건강 스튜',
            steps: [
                '배추는 먹기 좋은 크기로 자르고, 양파는 채를 썰어주세요. 베이컨은 1cm 간격으로 잘라 주세요.',
                '팬에 올리브 오일을 두르고, 베이컨을 볶다가 양파와 다진 마늘을 넣어 볶아 주세요.',
                '배추를 넣고 소금, 후춧가루를 넣어 볶아 주세요.',
                '생크림과 우유, 치킨스톡을 넣어 10분 정도 끓여 주세요.',
                '그릇에 담아 맛있게 즐겨 주세요.'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/eVoYdnrxYv2Rmuhd9mhNfzvw?location=recipe_home'
        },
        '원 팬 파스타': {
            ingredients: ['치킨스톡', '파스타면', '물', '올리브유', '마늘', '페퍼론치노', '후추'],
            description: '팬 하나로 만드는 파스타',
            steps: [
                '팬에 올리브오일과 다진 마늘을 넣고 볶다가 페퍼론치노를 넣고 약불에서 천천히 볶아주세요',
                '마늘이 투명해지고 색이 나기 시작하면 파스타면과 치킨 육수부말 한 큰 술, 물을 넣어 15분간 저어가며 끓어주세요',
                '파스타에 후추, 다진 파슬리, 파마산 치즈 등을 뿌려 한번 더 볶아주세요.',
                '완성된 원팬 파스타를 맛있게 즐겨주세요'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/rSNjfYcjJD8qKmMFZ4ptup1z'
        },
        '파전': {
            ingredients: ['대파', '식용유', '고추', '다시다', '부침가루', '물', '진간장', '식초', '고추가루', '깨'],
            description: '엄마가 만들어준 그 파전',
            steps: [
                '대파는 깨끗이 씻어 송송 썰어주세요.',
                '청양고추도 송송 썰어주세요',
                '초간장 재료는 모두 섞어주세요',
                '볼에 부침가루와 튀김가루를 넣고 만들어 둔 해물육수를 부어 젓가락으로 가볍게 섞은 후 손질해 둔 대파와 고추를 넣어 가볍게 버무려주세요.',
                '달군 팬에 기름을 넉넉히 두르고 반죽을 올려 얇게 펴준 후 앞,뒤를 노릇노릇하게 부쳐주세요',
                '완성된 대파전을 접시에 담고 초간장을 곁들여 맛있게 즐겨주세요.'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/3s4bdRaxUQkM1tohxLqJUwA5'
        },
        '양대파 차돌박이 볶음': {
            ingredients: ['대파', '소고기', '양배추', '깨', '참기름', '식용유', '간장', '맛술', '설탕', '마늘', '후추'],
            description: '대파향 가득한 차돌박이 볶음',
            steps: [
                '차돌박이는 키친타월에 올려 핏물을 제거해주세요. 고기 양념 재료에 10분정도 밑간을 해주세요',
                '깨끗이 씻은 양대파와 알배추는 먹기 좋은 크기로 잘라 주세요',
                '달군 팬에 기름을 두르고 양대파를 넣어 볶아주세요',
                '차돌박이와 알배추를 넣어 볶아주세요',
                '마지막에 참기름과 통깨를 뿌려주세요',
                '접시에 담아 맛있게 즐겨주세요'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/14QwZhakeaBFgbGcxbhqRbXa#google_vignette'
        },
        '쪽파 비빔국수': {
            ingredients: ['소면', '쪽파', '진간장', '설탕', '식초', '마늘', '깨', '참기름'],
            description: '간단하게 먹을 수 있는 비빔국수',
            steps: [
                '끓는 물에 소면을 넣고 저어가며 끓여주세요',
                '거품이 올라오면 찬물 1컵을 세 번에 나눠 넣어가며 소면을 삶아주세요',
                '끓는 물에 쪽파를 넣고 1분 정도 데친 후 찬물에 헹궈 물기를 짜주세요',
                '쪽파를 먹기 좋게 썰어주세요',
                '쪽파를 먹기 좋게 썰어주세요. 김은 잘게 찢어주세요.',
                '볼에 양념 재료를 넣어 섞어주세요. 통깨는 절구로 갈아서 넣어주세요',
                '볼에 쪽파와 김, 양념을 넣고 버무려 주세요.'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/RFkWBMmvted4S2Kt3QhsRFyg'
        },
        '양배추 대패삼겹살 찜': {
            ingredients: ['양배추', '돼지고기', '맛술', '깨', '소금', '후추', '굴소스', '설탕', '쪽파'],
            description: '집에 있는 재료로 만드는 외식요리',
            steps: [
                '양배추는 식초를 탄 물에 10분 정도 담가 두었다가 흐르는 물에 깨끗이 씻어주세요.',
                '대패삼겹살은 청주와 소금, 후춧가루를 뿌려 10분간 재워주세요.',
                '양배추 잎을 찜기에 10분간 쪄주세요.',
                '양배추를 찐 찜기에 삼겹살을 넣고 10분간 쪄주세요.',
                '볼에 소스 재료를 넣어 섞어주세요.',
                '접시에 양배추와 삼겹살을 담고 소스를 얹은 후 쪽파와 통깨를 뿌려 맛있게 즐겨주세요.'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/DFQuwmKU3MfHU8etnS6PkH9h'
        },
        '콩나물밥': {
            ingredients: ['쌀밥', '콩나물', '물', '쪽파', '진간장', '맛술', '참기름', '물엿', '마늘', '고추가루', '깨', '후추'],
            description: '든든하고 건강한 한 끼를 먹고싶을 때',
            steps: [
                '쌀은 씻어 30분 정도 찬물에 불렸다가 체에 받쳐 물기를 빼주세요.',
                '콩나물은 꼬리를 다듬어 씻고, 부추는 송송 썰어주세요.',
                '냄비에 불린 쌀과 물을 넣어 센불에서 끓이다가, 끓어오르면 약불로 줄여 12분 정도 뚜껑을 닫고 끓여주세요.',
                '밥물이 잦아들면 콩나물을 넣고 약한 불에서 5분 정도 뚜껑을 닫아 익혀주세요. 불을 끄고 뚜껑을 닫은 채로 10분 정도 뜸을 들여주세요.',
                '볼에 양념장 재료와 부추를 넣고 섞어 양념장을 만들어주세요.',
                '콩나물밥에 양념장과 기호에 따라 달걀 프라이를 곁들여 맛있게 즐겨주세요.'
            ],
            recipeUrl: 'https://wtable.co.kr/recipes/tBQMXavU48zPFg8QgQRj1TM4'
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