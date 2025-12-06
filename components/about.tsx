import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Shield,
  PieChart,
  Globe,
  Users,
} from "lucide-react"

export function About() {
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
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">안녕</h4>
              <p className="text-sm text-muted-foreground">ㅋㅋ</p>
            </div>
