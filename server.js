require('dotenv').config();  // 환경 변수 로딩
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(bodyParser.json());  // 요청 본문을 JSON으로 처리

// 임시로 사용자 정보를 저장할 객체 (DB를 대신)
const users = [];

// 회원가입 처리
app.post('/signup', async (req, res) => {
    const { username, password, email, nickname } = req.body;

    // 간단한 유효성 검사
    if (!username || !password || !email || !nickname) {
        return res.status(400).json({ success: false, message: '모든 필드를 채워주세요.' });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 정보 저장
    const newUser = { username, password: hashedPassword, email, nickname };
    users.push(newUser);

    res.status(201).json({ success: true, message: '회원가입이 완료되었습니다.' });
});

// 로그인 처리
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // 유효성 검사
    if (!username || !password) {
        return res.status(400).json({ success: false, message: '아이디와 비밀번호를 입력하세요.' });
    }

    // 사용자 찾기
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ success: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.' });
    }

    // 비밀번호 확인
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ success: false, message: '아이디 또는 비밀번호가 일치하지 않습니다.' });
    }

    // JWT 토큰 생성
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ success: true, message: '로그인 성공', token });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
