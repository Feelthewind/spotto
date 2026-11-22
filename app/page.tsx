/**
 * Main landing page - mobile-first design
 * Following Vercel React best practices:
 * - Server component by default
 * - Mobile-first responsive design
 * - Optimized bundle size
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            영상 속 장소를 지도로
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            유튜브 여행 영상 속 장소를 자동으로 찾아,
            <br />
            지도와 함께 보여주는 웹 서비스
          </p>
        </div>

        <div className="pt-8">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 space-y-4">
            <h2 className="text-xl font-semibold">MVP 개발 중</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              영상 → 장소 저장 흐름을 검증하는 웹 MVP를 준비하고 있습니다
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 text-sm">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="font-semibold mb-2">모바일 중심</div>
            <div className="text-gray-600 dark:text-gray-400">
              휴대폰 화면 기준으로 최적화
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="font-semibold mb-2">영상 속 장소</div>
            <div className="text-gray-600 dark:text-gray-400">
              유튜브 영상의 타임스탬프와 연결
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="font-semibold mb-2">지도 연동</div>
            <div className="text-gray-600 dark:text-gray-400">
              네이버·카카오 지도 앱 연결
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
