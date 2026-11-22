# Spotto - 영상 속 장소 지도 웹 서비스

유튜브 여행 영상 속 장소를 자동으로 찾아, 장소마다 어느 영상 몇 분에 나오는지를 지도와 함께 보여주는 모바일 중심 웹 서비스입니다.

## 🎯 프로젝트 목표

지도가 "어디에 있는지"를 알려준다면, 이 서비스는 **"가면 어떤지"를 실제 영상 장면으로 보여줍니다**.

- **1단계 목표**: 웹 MVP로 "영상 → 장소 저장" 흐름을 검증
- **출시 형태**: 모바일 최적화 웹 서비스
- **향후 확장**: 사용자 반응이 좋으면 같은 코드베이스(Expo)로 네이티브 앱 추가

## 🛠 기술 스택

- **Next.js 16.4** - App Router, Server Components, Turbopack
- **React 19.3** - 최신 React 기능 활용
- **TypeScript 5** - 타입 안전성
- **Tailwind CSS 4.3** - 유틸리티 우선 스타일링
- **지도**: 네이버 지도 또는 카카오 지도 SDK

### Vercel React Best Practices 적용

이 프로젝트는 [Vercel의 React 성능 최적화 가이드라인](https://vercel.com/docs/frameworks/react)을 따릅니다:

- ✅ **Bundle Size Optimization**: 직접 import, dynamic imports, 지연 로딩
- ✅ **Server-Side Performance**: Server Components 우선, 병렬 데이터 페칭
- ✅ **Re-render Optimization**: Memoization, 불필요한 리렌더링 방지
- ✅ **Mobile-First Design**: 모바일 뷰포트 최적화, 터치 친화적 UI

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

```bash
cp .env.example .env.local
```

`.env.local` 파일에 필요한 API 키를 추가하세요:

```env
# YouTube Data API
NEXT_PUBLIC_YOUTUBE_API_KEY=your_api_key

# 지도 서비스 (네이버 또는 카카오 선택)
NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID=your_client_id
# 또는
NEXT_PUBLIC_KAKAO_MAPS_APP_KEY=your_app_key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
spotto/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 (모바일 최적화)
│   └── page.tsx           # 랜딩 페이지
├── components/            # React 컴포넌트
│   └── ui/               # 재사용 가능한 UI 컴포넌트
├── lib/
│   ├── types/            # TypeScript 타입 정의
│   │   └── index.ts      # 핵심 타입 (VideoLocation, MapMarker 등)
│   └── utils/            # 유틸리티 함수
│       └── cn.ts         # Tailwind 클래스 병합 유틸
├── hooks/                # 커스텀 React 훅
├── public/               # 정적 에셋
│   └── images/
├── .env.local            # 로컬 환경 변수 (커밋 제외)
└── .env.example          # 환경 변수 템플릿
```

## 🗺 MVP 기능 로드맵

### Phase 1: 기본 기능 (현재)
- [ ] YouTube URL 입력 인터페이스
- [ ] 영상 정보 표시
- [ ] 장소 수동 추가 기능
- [ ] 지도에 장소 마커 표시

### Phase 2: 지도 연동
- [ ] 네이버/카카오 지도 SDK 통합
- [ ] 마커 클릭 시 영상 정보 모달
- [ ] 지도 앱으로 길찾기 딥링크

### Phase 3: 데이터 저장
- [ ] Database 연동 (PostgreSQL/Supabase)
- [ ] 장소 저장/조회 API
- [ ] 사용자별 장소 관리

### Phase 4: 자동화
- [ ] 영상 자막/설명에서 장소 자동 추출
- [ ] 장소 좌표 자동 획득 (Geocoding)

## 📱 주요 기능

### 핵심 사용자 플로우
1. 유튜브 영상 URL 입력
2. 영상에 등장하는 장소 추가 (수동 또는 자동)
3. 지도에서 장소 위치 확인
4. 각 장소에서 재생되는 영상 타임스탬프 확인
5. 네이버/카카오 지도 앱으로 길찾기

### 차별화 포인트
- 단순 위치가 아닌 **실제 영상 장면과 연결**
- 한 장소에 여러 영상의 타임스탬프 집계
- 모바일 중심 UX, 빠른 로딩

## 🎨 디자인 원칙

- **Mobile-First**: 모든 UI는 모바일 화면 기준으로 설계
- **Fast Loading**: 번들 크기 최적화, 지연 로딩 활용
- **Touch-Friendly**: 충분한 터치 타겟 크기, 제스처 지원
- **Accessible**: 시맨틱 HTML, ARIA 레이블, 키보드 네비게이션

## 🔧 개발 명령어

```bash
# 개발 서버 (Turbopack 사용)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📝 참고사항

- **서비스 이름**: 현재 가칭 "Spotto" 사용 (최종 이름 미정)
- **지도 구현**: 직접 개발하지 않고 외부 지도 서비스 활용
- **네비게이션**: 각 지도 앱(네이버, 카카오)으로 딥링크 연결

## 📄 라이선스

Private project

---

더 자세한 정보는 [PROJECT.md](./PROJECT.md) 문서를 참고하세요.
