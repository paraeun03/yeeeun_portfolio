"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4">
        {/* 섹션 제목 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">소개</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            인문사회적 소통 역량과 데이터 기반 분석 역량을 함께 키워가고 있는
            단국대 도시계획부동산학부 재학생 최예은입니다.
          </p>
        </div>

        {/* 경험 카드 3개 */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <div className="bg-background border rounded-3xl p-6 shadow-sm">
            <p className="text-xs font-medium text-primary mb-1">학부 전공</p>
            <p className="font-semibold mb-1">
              단국대학교 도시계획부동산학부
            </p>
            <p className="text-xs text-muted-foreground">
              도시계획 · 부동산 복수전공
            </p>
          </div>

          <div className="bg-background border rounded-3xl p-6 shadow-sm">
            <p className="text-xs font-medium text-primary mb-1">
              데이터 · 코딩
            </p>
            <p className="font-semibold mb-1">R · Python 기초 활용</p>
            <p className="text-xs text-muted-foreground">
              공공데이터 수집·전처리 및 시각화, 간단한 분석 파이프라인 구현
            </p>
          </div>

          <div className="bg-background border rounded-3xl p-6 shadow-sm">
            <p className="text-xs font-medium text-primary mb-1">
              교환학생 경험
            </p>
            <p className="font-semibold mb-1">
              Nürtingen-Geislingen University
            </p>
            <p className="text-xs text-muted-foreground">
              2024.9 ~ 2025.2 독일 교환학생, 도시·부동산 관련 수업 수강
            </p>
          </div>
        </div>

      {/* 자기소개 스토리 + 이미지 */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center mb-16">
          {/* 텍스트 박스 */}
          <div className="bg-background/60 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Insight: "공간의 가치를 넘어, 지속 가능한 도시의 미래를 설계합니다."
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-2">
              단순히 "살고 싶은 집"을 그리는 것을 넘어, 우리가 살아갈 도시와 그 안에서 움직이는 사람·자본·데이터의 흐름을 함께 바라봅니다.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-2">
              부동산과 도시를 '자산'이자 '생활 인프라'로 이해하며, 고객과 기업의 자산을 Ownership 관점에서 책임감 있게 다루고자 합니다.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              현실에만 안주하지 않고, 데이터와 현장을 함께 읽어내며 시장을 선도하는 새로운 인사이트를 만드는 사람이 되고 싶습니다.
            </p>
          </div>

          {/* 바나나 이미지 */}
          <div className="relative h-56 md:h-72">
            <Image
              src="/banana-image.jpg"   // "C:\Users\Jin&Sun\Desktop\바나나이미지.jpg"
              alt="도시와 데이터를 바라보는 사람"
              fill
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Insight Books 섹션 */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Insight Books
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Book 1 */}
            <div className="bg-muted/40 rounded-3xl p-6 flex flex-col items-center shadow-sm">
              <div className="w-24 h-32 mb-4 relative">
                <Image
                  src="/books/book1.jpg"
                  alt="Book 1"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="font-semibold mb-1">책 제목 1</p>
              <p className="text-xs text-muted-foreground text-center">
                이 책에서 배운 핵심 인사이트 한두 문장을 적어둘 자리입니다.
              </p>
            </div>

            {/* Book 2 */}
            <div className="bg-muted/40 rounded-3xl p-6 flex flex-col items-center shadow-sm">
              <div className="w-24 h-32 mb-4 relative">
                <Image
                  src="/books/book2.jpg"
                  alt="Book 2"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="font-semibold mb-1">책 제목 2</p>
              <p className="text-xs text-muted-foreground text-center">
                도시·부동산, 데이터, 금융 등 예은이 관심사와 연결되는 문장으로
                바꿔 넣으면 좋아.
              </p>
            </div>

            {/* Book 3 */}
            <div className="bg-muted/40 rounded-3xl p-6 flex flex-col items-center shadow-sm">
              <div className="w-24 h-32 mb-4 relative">
                <Image
                  src="/books/book3.jpg"
                  alt="Book 3"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="font-semibold mb-1">책 제목 3</p>
              <p className="text-xs text-muted-foreground text-center">
                이 책을 왜 좋아하는지, 나의 도시·부동산 시각과 어떻게 연결되는지
                짧게 소개해줘.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
