import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { PlatformSection } from "@/components/platform-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ChatBot } from "@/components/chat-bot"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <PlatformSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
      <ChatBot />
    </main>
  )
}
