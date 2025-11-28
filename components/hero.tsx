"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  Instagram,
  MessageCircle,
  Mail,
  Youtube,
  Facebook,
  Twitter,
  Globe,
  Linkedin,
  Settings,
  X,
  Plus,
  Github,
  Twitch,
  Send,
  MessageSquare,
} from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"

// 사용 가능한 아이콘 정의
const AVAILABLE_ICONS = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  discord: MessageSquare,
  twitch: Twitch,
  telegram: Send,
  globe: Globe,
  message: MessageCircle,
  mail: Mail,
  plus: Plus,
  settings: Settings,
  x: X,
  arrowDown: ArrowDown,
}

export function Hero() {
  const { getData, saveData, isEditMode, saveToFile, saveFieldToFile } = useInlineEditor()

  const defaultSocialLinks = [
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/yen._.ig?igsh=MXZucWFudTVpbXRtNQ%3D%3D&utm_source=qr",
    },
  ]

  const defaultInfo = {
    greeting: "살기 좋은 도시, 살아가는 부동산을 분석하는",
    name: "최예은",
    title: "단국대 도시계획부동산학부 재학생입니다",
    description: "저장이 안돼",
    profileImage: "/uploads/hero-profile-1763952312233.png",
    backgroundImage: "",
    backgroundVideo: "",
    backgroundOpacity: 0.1,
    projectButton: "프로젝트 보기",
    background: {"image":"","video":"","color":"#036635","opacity":0.1}
  }

  const [backgroundData, setBackgroundData] = useState<{
    image: string
    video: string
    color: string
    opacity: number
  } | null>(null)
  const [heroInfo, setHeroInfo] = useState(defaultInfo)
  const [socialLinks, setSocialLinks] = useState(defaultSocialLinks)
  const [showSocialEditor, setShowSocialEditor] = useState(false)
  const [showIconPicker, setShowIconPicker] = useState<number | null>(null)

  useEffect(() => {
    const savedData = getData("hero-info") as typeof defaultInfo | null
    if (savedData) {
      setHeroInfo({ ...defaultInfo, ...savedData })
    }

    const savedSocial = getData("hero-social-links") as { name: string; icon: string; url: string }[] | null
    if (savedSocial) {
      setSocialLinks(savedSocial)
    }

    const savedBg = getData("hero-background") as {
      image: string
      video: string
      color: string
      opacity: number
    } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode])

  const updateHeroInfo = (key: string, value: string) => {
    const newInfo = {
      ...heroInfo,
      [key]: value,
    }
    setHeroInfo(newInfo)
    saveData("hero-info", newInfo)
  }

  const addSocialLink = () => {
    const newLinks = [...socialLinks]
    newLinks.push({ name: "새 링크", icon: "globe", url: "" })
    setSocialLinks(newLinks)
    saveData("hero-social-links", newLinks)
  }

  const updateSocialLink = (index: number, field: "name" | "icon" | "url", value: string) => {
    const newLinks = [...socialLinks]
    newLinks[index] = { ...newLinks[index], [field]: value }
    setSocialLinks(newLinks)
    saveData("hero-social-links", newLinks)
  }

  const removeSocialLink = (index: number) => {
    const newLinks = socialLinks.filter((_, i) => i !== index)
    setSocialLinks(newLinks)
    saveData("hero-social-links", newLinks)
  }

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const renderSocialIcon = (link: { name: string; icon: string; url: string }, index: number) => {
    const Icon = AVAILABLE_ICONS[link.icon as keyof typeof AVAILABLE_ICONS] || Globe
    if (!link.url && !isEditMode) return null

    const isEmail = link.icon === "mail" || link.url.startsWith("mailto:")
    const href = isEmail && !link.url.startsWith("mailto:") ? `mailto:${link.url}` : link.url

    return (
      <a
        key={index}
        href={href || "#"}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110"
        onClick={!link.url ? (e) => e.preventDefault() : undefined}
        title={link.name}
      >
        <Icon className="h-5 w-5" />
      </a>
    )
  }

  return (
    <EditableBackground
      image={backgroundData?.image || ""}
      video={backgroundData?.video || ""}
      color={backgroundData?.color || ""}
      opacity={backgroundData?.opacity || 0.1}
      onChange={(data) => {
        const newData = {
          image: backgroundData?.image || "",
          video: backgroundData?.video || "",
          color: backgroundData?.color || "",
          opacity: backgroundData?.opacity || 0.1,
          ...data,
        }
        setBackgroundData(newData)
        saveData("hero-background", newData)

        const updatedHeroInfo = { ...heroInfo, background: newData }
        setHeroInfo(updatedHeroInfo)
        saveData("hero-info", updatedHeroInfo)
      }}
      storageKey="hero-background"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <section id="hero" className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-2">
                <EditableText
                  value={heroInfo.greeting}
                  onChange={(value) => updateHeroInfo("greeting", value)}
                  storageKey="hero-greeting"
                />
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <EditableText
                  value={heroInfo.name}
                  onChange={(value) => updateHeroInfo("name", value)}
                  storageKey="hero-name"
                />
              </h1>
              <p className="text-2xl mb-4 text-muted-foreground">
                <EditableText
                  value={heroInfo.title}
                  onChange={(value) => updateHeroInfo("title", value)}
                  storageKey="hero-title"
                />
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                <EditableText
                  value={heroInfo.description}
                  onChange={(value) => updateHeroInfo("description", value)}
                  storageKey="hero-description"
                  multiline
                />
              </p>

              <div className="mb-8">
                {isEditMode ? (
                  <div className="flex flex-col gap-2 w-fit">
                    <input
                      type="text"
                      value={heroInfo.projectButton}
                      onChange={(e) => updateHeroInfo("projectButton", e.target.value)}
                      placeholder="프로젝트 버튼 텍스트"
                      className="px-3 py-2 border rounded-lg bg-background text-sm text-center"
                    />
                    <Button onClick={scrollToProjects} size="lg" disabled className="justify-center">
                      {heroInfo.projectButton || "프로젝트 보기"}
                    </Button>
                  </div>
                ) : (
                  heroInfo.projectButton && (
                    <Button onClick={scrollToProjects} size="lg" className="justify-center">
                      {heroInfo.projectButton}
                    </Button>
                  )
                )}
              </div>

              <div className="flex gap-4 flex-wrap items-center">
                {socialLinks.map((link, index) => renderSocialIcon(link, index))}

                {isEditMode && (
                  <button
                    onClick={() => setShowSocialEditor(true)}
                    className="w-10 h-10 rounded-full border-2 border-dashed border-foreground/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                    title="소셜 링크 편집"
                  >
                    <Settings className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted overflow-hidden shadow-2xl">
                  <EditableMedia
                    src={heroInfo.profileImage}
                    onChange={(src) => updateHeroInfo("profileImage", src)}
                    type="image"
                    storageKey="hero-profileImage"
                    className="w-full h-full object-contain"
                    alt="프로필"
                    purpose="hero-profile"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </section>

      {showSocialEditor && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          {/* ... 이하 소셜 편집 모달 부분은 기존 코드 그대로 쓰면 돼, 필요하면 거기도 다시 붙여넣자 */}
        </div>
      )}
    </EditableBackground>
  )
}
