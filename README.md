# seat-reservation-app
# 🎟️ 좌석 예약 프로그램 (Seat Reservation Program)  

## 📅 프로젝트 개요  
이 프로젝트는 사용자들이 웹 또는 모바일 환경에서 좌석을 예약하고 관리할 수 있는 **좌석 예약 시스템**입니다.  
사용자는 좌석을 선택하고 예약하거나, 기존 예약을 취소하는 기능을 제공합니다.  
관리자는 전체 좌석 예약 상태를 모니터링하고, 필요시 모든 예약을 취소하는 기능을 수행할 수 있습니다.  

---

## ✨ 주요 기능  
### 1. 실시간 좌석 예약 및 관리  
- 사용자는 인터랙티브한 좌석 배치를 통해 빈 좌석을 선택하고 즉시 예약할 수 있습니다.  
- 이미 예약된 좌석은 다른 사용자가 예약할 수 없으며, 본인 좌석은 취소 가능합니다.  

### 2. 반응형 UI  
- **PC**와 모바일(아이폰, 안드로이드 등)에서도 **일관된 좌석 레이아웃**을 제공합니다.  
- 모바일에서는 터치 기반 드래그로 UI 하단 푸터를 조절할 수 있습니다.  

### 3. 실시간 DB 연동 (Firebase 사용)  
- **Firestore DB**를 사용하여 좌석 상태를 실시간으로 저장하고 업데이트합니다.  
- 사용자가 좌석을 예약하거나 취소하면 DB에 즉시 반영됩니다.  

### 4. 관리자 전용 페이지  
- 관리자는 전체 예약 상태를 확인하고, **모든 예약을 일괄 취소**할 수 있습니다.  
- 특정 클래스에 속한 학생들만 예약할 수 있도록 제한(예: A-클래스 학생들만 로그인 가능)하는 기능이 포함되어 있습니다.  

### 5. 웹 접근성 및 편의성 강화  
- 좌석 상태(예약 완료, 예약 가능, 선택 좌석)에 따라 색상으로 구분됩니다.  
- **드래그 가능한 푸터**로 사용자 경험을 향상시켰으며, 모바일에서도 조절이 가능합니다.  

---

## 🔧 기술 스택  
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Firebase Firestore (Realtime Sync)  
- **Deployment**: GitHub Pages(Static Sites) / Vercel(Frontend/Fullstack)

---

## 🖥️ 프로젝트 사용법  
1. **로그인**  
   - 학생 ID와 이름을 입력하여 로그인합니다.  
   - 정의된 특정 클래스 소속의 학생들만 로그인 및 좌석 예약이 가능합니다.  

2. **좌석 예약**  
   - 좌석을 클릭하여 예약을 진행합니다.  
   - 예약이 완료된 좌석은 **보라색**, 선택 중인 좌석은 **빨간색**으로 표시됩니다.  

3. **예약 취소**  
   - 이미 예약된 좌석을 다시 클릭하여 취소할 수 있습니다.  

4. **관리자 기능**  
   - 관리자(특정 관라자 ID 부여)는 **모든 예약을 초기화**할 수 있습니다.  
   - 예약 데이터는 **실시간으로 반영**됩니다.  

---

## 📱 모바일 환경 최적화  
- 모바일 기기에서도 좌석 배치가 **PC와 동일하게 유지**됩니다.  
- 푸터의 높이를 조절할 수 있는 기능이 포함되어 있으며, 터치 이벤트로 조작할 수 있습니다.  

---

## 🔗 프로젝트 배포 링크  
👉 링크 숨김


---

이 프로젝트는 클래스, 강의실, 영화관 등 **다양한 좌석 예약 시스템에 적용**할 수 있도록 설계되었습니다.  
차후, 기능을 확장하거나, **다양한 예약 규칙을 추가**하여 맞춤형으로 활용할 예정입니다.
