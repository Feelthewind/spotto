# 다음 개발 단계 (Next Steps)

이 문서는 MVP 개발을 위한 구체적인 다음 단계를 안내합니다.

## 🎯 즉시 시작할 수 있는 작업

### 1. YouTube 영상 입력 UI 구현

**작업 내용:**
- YouTube URL 입력 폼 컴포넌트 생성
- URL 유효성 검사 (정규식)
- 영상 ID 추출 로직

**파일 생성:**
```bash
components/video/VideoUrlInput.tsx
lib/utils/youtube.ts
```

**필요한 패키지:**
```bash
npm install zod react-hook-form @hookform/resolvers
```

---

### 2. YouTube Data API 연동

**작업 내용:**
- YouTube Data API v3 키 발급 (https://console.cloud.google.com)
- 영상 정보 조회 API 엔드포인트 생성
- 영상 메타데이터 표시 컴포넌트

**파일 생성:**
```bash
app/api/youtube/route.ts
components/video/VideoInfo.tsx
lib/services/youtube.ts
```

**API 키 설정:**
`.env.local` 파일에 추가:
```
NEXT_PUBLIC_YOUTUBE_API_KEY=your_api_key_here
```

---

### 3. 지도 SDK 선택 및 통합

**선택지 A: 네이버 지도**
- 발급: https://www.ncloud.com/product/applicationService/maps
- 무료 쿼터: 월 10만 건

**선택지 B: 카카오 지도**
- 발급: https://developers.kakao.com/console/app
- 무료 쿼터: 일 30만 건

**필요한 패키지:**
```bash
# 네이버 지도 선택 시
npm install @types/navermaps

# 카카오 지도 선택 시
npm install react-kakao-maps-sdk
```

**파일 생성:**
```bash
components/map/MapView.tsx
lib/services/maps.ts
```

---

### 4. 장소 추가 UI 구현

**작업 내용:**
- 장소 이름, 주소 입력 폼
- 영상 타임스탬프 연결
- 지도에서 위치 선택 (클릭 또는 검색)

**파일 생성:**
```bash
components/location/AddLocationForm.tsx
components/location/LocationItem.tsx
```

---

## 🗄️ 데이터베이스 설정 (Phase 3)

### Supabase 사용 추천

**이유:**
- PostgreSQL 기반 (관계형 DB)
- RESTful API 자동 생성
- 실시간 구독 기능
- 인증 시스템 내장
- 무료 티어 제공

**시작하기:**
```bash
# Supabase 클라이언트 설치
npm install @supabase/supabase-js

# 프로젝트 생성: https://supabase.com
```

**필요한 테이블:**
```sql
-- videos 테이블
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  video_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  channel_name TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- locations 테이블
CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  place_name TEXT NOT NULL,
  place_address TEXT,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- video_locations 연결 테이블
CREATE TABLE video_locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  video_id UUID REFERENCES videos(id) ON DELETE CASCADE,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE,
  timestamp INTEGER NOT NULL, -- 초 단위
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(video_id, location_id, timestamp)
);
```

---

## 📱 모바일 최적화 체크리스트

- [ ] 뷰포트 메타태그 설정 ✅ (완료)
- [ ] 터치 타겟 최소 44x44px
- [ ] 가로 스크롤 방지
- [ ] 로딩 스켈레톤 UI
- [ ] 오프라인 대응 (Service Worker)
- [ ] PWA 매니페스트
- [ ] 이미지 최적화 (next/image 사용)

---

## 🎨 디자인 시스템 구축

**추천 라이브러리:**
```bash
# shadcn/ui - 헤드리스 UI 컴포넌트
npx shadcn@latest init

# 자주 사용할 컴포넌트
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add form
```

---

## 🔐 환경 변수 체크리스트

현재 `.env.local` 에 추가 필요:

```env
# YouTube Data API
NEXT_PUBLIC_YOUTUBE_API_KEY=

# 지도 서비스 (하나 선택)
NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID=
# 또는
NEXT_PUBLIC_KAKAO_MAPS_APP_KEY=

# Supabase (Phase 3)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## 🧪 테스트 설정 (선택사항)

```bash
# Jest + React Testing Library
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Playwright (E2E)
npm install -D @playwright/test
```

---

## 📊 분석/모니터링 (선택사항)

```bash
# Vercel Analytics
npm install @vercel/analytics

# Google Analytics
npm install react-ga4
```

---

## 🚀 배포 준비

**Vercel 배포 (추천):**
1. GitHub 저장소 생성
2. Vercel에 연결: https://vercel.com/new
3. 환경 변수 설정 (대시보드에서)
4. 자동 배포 완료

**배포 전 체크리스트:**
- [ ] 프로덕션 빌드 성공 (`npm run build`)
- [ ] 환경 변수 모두 설정
- [ ] API 키 보안 확인 (NEXT_PUBLIC_* 주의)
- [ ] 오류 모니터링 설정
- [ ] robots.txt, sitemap.xml 추가

---

## 💡 개발 팁

### Vercel React Best Practices 적용

1. **Server Components 우선 사용**
   - 클라이언트 상태가 필요한 경우만 'use client'
   - 데이터 페칭은 서버에서

2. **Dynamic Imports로 번들 크기 줄이기**
   ```tsx
   const MapView = dynamic(() => import('@/components/map/MapView'), {
     ssr: false,
     loading: () => <MapSkeleton />
   });
   ```

3. **병렬 데이터 페칭**
   ```tsx
   const [video, locations] = await Promise.all([
     fetchVideo(id),
     fetchLocations(id)
   ]);
   ```

4. **이미지 최적화**
   ```tsx
   <Image
     src={thumbnailUrl}
     alt={title}
     width={480}
     height={360}
     loading="lazy"
   />
   ```

---

## 🎯 MVP 완성 기준

다음 기능이 모두 작동하면 MVP 완성:

1. ✅ YouTube URL 입력
2. ✅ 영상 정보 표시
3. ✅ 장소 추가 (이름, 위치, 타임스탬프)
4. ✅ 지도에 마커 표시
5. ✅ 마커 클릭 시 영상 정보 표시
6. ✅ 지도 앱으로 길찾기 연결
7. ✅ 모바일 반응형 디자인

---

궁금한 점이나 도움이 필요하면 언제든지 물어보세요!
