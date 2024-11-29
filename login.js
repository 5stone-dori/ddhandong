// 예시로 Node.js와 Express를 사용하는 서버 측 코드 (서버는 Node.js 환경에서 실행됩니다)

// 서버 세팅
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = {}; // 예시로 임시로 사용자 정보를 저장하는 객체

app.use(bodyParser.json());

// 로그인 엔드포인트
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // 사용자가 입력한 아이디와 비밀번호를 확인
    if (users[username] && users[username].password === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.' });
    }
});

// 회원가입 엔드포인트 (회원가입 정보를 저장)
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    
    // 임시로 객체에 저장 (실제 서비스에서는 데이터베이스에 저장)
    users[username] = { password: password };
    
    res.json({ success: true });
});

// 서버 실행
app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행되고 있습니다.');
});
