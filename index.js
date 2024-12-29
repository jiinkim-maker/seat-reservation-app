const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Firebase Admin 초기화
admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

// public 폴더 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, '../public')));

// 기본 루트 경로에서 index.html 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 푸시 알림 API
app.post('/sendNotification', async (req, res) => {
    const { to, notification } = req.body;

    const message = {
        token: to,
        notification: notification
    };

    try {
        const response = await admin.messaging().send(message);
        console.log('푸시 알림 성공:', response);
        res.status(200).send('알림 전송 성공');
    } catch (error) {
        console.error('푸시 알림 실패:', error);
        res.status(500).send('알림 전송 실패');
    }
});

// 서버 실행
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
