// Import Firebase SDKs (v9 방식)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyAaQidiW6eGEUMFHdTfNny4aU3lvXcwK6g",
  authDomain: "seat-reservation-app-3d3d0.firebaseapp.com",
  projectId: "seat-reservation-app-3d3d0",
  storageBucket: "seat-reservation-app-3d3d0.firebasestorage.app",
  messagingSenderId: "621636443229",
  appId: "1:621636443229:web:672c35274dcac276a2c1b4",
  measurementId: "G-2QPD4FS4CX"
};

// Firebase 초기화 (v9 이상 CDN 방식)
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const messaging = firebase.messaging();

// Firebase 초기화 상태 확인
console.log("Firebase 초기화 완료:", app.name);


