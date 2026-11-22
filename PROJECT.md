# Spotto - 영상 속 장소 지도 웹 서비스

## 개요

유튜브 여행 영상 속 장소를 자동으로 찾아, 장소마다 어느 영상 몇 분에 나오는지를 지도와 함께 보여주는 모바일 중심 웹 서비스입니다.

**핵심 가치**: 지도가 "어디에 있는지"를 알려준다면, 이 서비스는 "가면 어떤지"를 실제 영상 장면으로 보여줍니다.

## 프로젝트 목표

- **1단계**: 웹 MVP로 "영상 → 장소 저장" 흐름을 사람들이 실제로 쓰는지 검증
- **형태**: 휴대폰 화면 기준의 웹으로 먼저 출시
- **확장**: 반응이 오면 같은 코드(Expo)로 앱 추가

## 기술 스택

### Frontend
- **Next.js 16.4** (App Router)
- **React 19.3**
- **TypeScript 5**
- **Tailwind CSS 4.3**

### 지도
- 네이버 지도 또는 카카오 지도 SDK
- 길찾기는 각 지도 앱으로 딥링크 연결

### 향후 추가 예정
- Database (PostgreSQL/Supabase 예정)
- YouTube Data API 연동
- 인증 시스템

## 프로젝트 구조

```
spotto/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (mobile-optimized)
│   └── page.tsx           # Landing page
├── components/            # React components
│   └── ui/               # Reusable UI components
├── lib/
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts      # Core types (VideoLocation, MapMarker)
│   └── utils/            # Utility functions
│       └── cn.ts         # Tailwind class merger
├── hooks/                # Custom React hooks
├── public/               # Static assets
│   └── images/
├── .env.local            # Local environment variables (not committed)
└── .env.example          # Environment variables template
```

## 개발 가이드

### 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Turbopack)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버는 http://localhost:3000 에서 실행됩니다.

### 환경 변수 설정

`.env.local` 파일을 생성하고 필요한 API 키를 추가하세요:

```bash
cp .env.example .env.local
```

필요한 API 키:
- YouTube Data API (영상 정보 조회)
- 네이버 지도 또는 카카오 지도 API

## Vercel React Best Practices 적용

이 프로젝트는 Vercel의 React 성능 최적화 가이드라인을 따릅니다:

### 적용된 주요 원칙

1. **Bundle Size Optimization** (`bundle-*`)
   - 직접 import 사용 (barrel file 회피)
   - `next/dynamic`으로 heavy component 지연 로딩
   - 분석/로깅 라이브러리는 hydration 후 로드

2. **Server-Side Performance** (`server-*`)
   - Server Component 우선 사용
   - `React.cache()` 로 요청별 중복 제거
   - 병렬 데이터 페칭

3. **Re-render Optimization** (`rerender-*`)
   - Memo 사용으로 비용 높은 연산 최적화
   - Effect보다 event handler 선호
   - `useTransition` 으로 비긴급 업데이트 처리

4. **Mobile-First Design**
   - 모바일 뷰포트 최적화
   - Touch-friendly UI
   - 반응형 레이아웃

## MVP 기능 로드맵

### Phase 1: 기본 기능
- [ ] YouTube URL 입력 인터페이스
- [ ] 영상 정보 표시
- [ ] 장소 수동 추가 기능
- [ ] 지도에 장소 표시

### Phase 2: 지도 연동
- [ ] 네이버/카카오 지도 SDK 통합
- [ ] 마커 클릭 시 영상 정보 표시
- [ ] 지도 앱으로 길찾기 연결

### Phase 3: 데이터 저장
- [ ] Database 연동
- [ ] 장소 저장/조회 API
- [ ] 사용자 별 장소 관리

### Phase 4: 자동화
- [ ] 영상 자막/설명에서 장소 자동 추출
- [ ] 장소 좌표 자동 획득

## 참고사항

- **서비스 이름**: 미정 (PlaceTube는 다른 서비스 이름)
- **지도**: 직접 구현하지 않고 외부 서비스 활용
- **목표**: 빠른 MVP 검증, 사용자 피드백 수집

## 라이선스

Private project
