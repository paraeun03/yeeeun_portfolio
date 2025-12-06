import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Shield,
  PieChart,
  Globe,
  Users,
} from "lucide-react"

export function About() {
  // 책 데이터 관리 (여기서 내용을 수정하면 화면에 반영됩니다)
  const books = [
    {
      id: 1,
      title: "도시는 무엇으로 사는가",
      desc: "도시와 교류하는 법, 소통하는 도시가 되는 법을 알게해주는 책. 도시는 하나의 유기체로 도시구성요소 간 끊임없는 상호작용을 주고 받는 곳",
      image: "/uploads/도시는무엇으로사는가.png", // 이미지 경로
    },
    {
      id: 2,
      title: "더 인간적인 건축",
      desc: "'빛나는 도시' 르코르뷔지에에 대한 비판, 연속적이고 반복적인 건축물이 주는 도시의 따분함. 살고 싶게 하는 도시의 매력은 무엇인지 생각해보게 하는 책",
      image: "/uploads/더 인간적인 건축.jpg", // 이미지가 없으면 빈 따옴표
    },
    {
      id: 3,
      title: "지리의 힘",
      desc: "'지리'에 따라 각기 다른 방향으로 발전한 전 세계 나라들의 케이스를 기반으로 부동산학 관점의 '입지'가 한 건물에 미치는 영향, 지역이 갖는 위치를 생각해보게 하는 책",
      image: "/uploads/지리의 힘.jpg", // 이미지가 없으면 빈 따옴표
    },
  ]

  return (
    <section id="about" className="w-full py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            소개
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            인문사회적 소통 역량과 AI 활용 역량을 균형적으로 갖춘 인재입니다.
          </p>
        </div>

        {/* 2. 경험 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* 카드 1 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">단국대학교 도시계획부동산학부</h3>
                <p className="text-sm text-primary mb-2">2022~</p>
                <p className="text-sm text-muted-foreground">도시계획, 부동산 복수전공</p>
              </div>
            </CardContent>
          </Card>

          {/* 카드 2 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">R, Python 활용</h3>
                <p className="text-sm text-primary mb-2">데이터 분석 역량</p>
                <p className="text-sm text-muted-foreground">
                  R 프로그래밍을 통한 빅데이터 수집 및 분석<br/>
                  Python을 활용한 기초적 코딩 능력
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 카드 3 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">독일 교환학생 파견</h3>
                <p className="text-sm text-primary mb-2">2024.9 ~ 2025.2</p>
                <p className="text-sm text-muted-foreground">Nürtingen-Geislingen University (NGU)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. 핵심 역량 (Skills) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">핵심 역량</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 스킬 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">빅데이터 분석</h4>
              <p className="text-sm text-muted-foreground">R studio를 활용한 공공 모빌리티 데이터 분석</p>
            </div>

            {/* 스킬 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">글로벌 소통능력</h4>
              <p className="text-sm text-muted-foreground">OPIC IH</p>
            </div>

            {/* 스킬 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">다수 팀 프로젝트 경험</h4>
              <p className="text-sm text-muted-foreground">부동산 입지 분석, 도시재생사업 평가 등</p>
            </div>
          </div>
        </div>

        {/* 4. 스토리 (Insight) - 바나나 이미지 포함 */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Insight: "공간의 가치를 넘어, 지속 가능한 도시의 미래를 설계합니다."
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                단순히 살고 싶은 집을 그리는 것을 넘어, 우리가 살아갈 도시를 면밀히 분석합니다.
                고객과 기업의 자산을 'Ownership' 으로 대하며 깊은 신뢰를 구축해나가겠습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                또한, 현실에 안주하지 않고 시장을 선도하는 혁신적, 창조적 가치를 창출하겠습니다.
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="bg-muted h-64 lg:h-auto min-h-[300px] flex items-center justify-center overflow-hidden">
               <img 
                 src="/uploads/바나나이미지.jpg" 
                 alt="Insight 이미지" 
                 className="w-full h-full object-cover" 
               />
            </div>
          </div>
        </div>

        {/* 5. Insight Books (수정됨) */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Insight Books</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {books.map((book) => (
              <div key={book.id} className="bg-muted/40 rounded-3xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                {/* 이미지가 있으면 이미지 표시, 없으면 회색 박스 표시 */}
                {book.image ? (
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-24 h-32 object-cover rounded-xl mb-4 shadow-sm"
                  />
                ) : (
                  <div className="w-24 h-32 bg-muted rounded-xl mb-4 flex items-center justify-center text-xs text-muted-foreground">
                    Book Cover
                  </div>
                )}
                
                <p className="font-semibold mb-1">{book.title}</p>
                <p className="text-xs text-muted-foreground">{book.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
