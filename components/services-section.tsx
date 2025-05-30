import { Cpu, MessageSquare, Database, Eye, Settings, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: "AI Augmentation for Enterprise",
      description:
        "Integrate advanced AI capabilities—like chat, automation, and intelligent decision‑making—into your existing systems with our Orion platform, protecting your technology investments and enabling AI‑driven innovation without costly re-architecture.",
      delay: "0.2s",
    },
    {
      icon: MessageSquare,
      title: "24/7 Multilingual AI Digital Assistants",
      description:
        "Introduce AI‑driven digital collaborators—your 24/7 multilingual customer‑service agents and employee side‑kicks—that engage like humans to handle routine tasks consistently, streamline workflows, and empower your teams to focus on high‑value work while ensuring security and compliance.",
      delay: "0.4s",
    },
    {
      icon: Database,
      title: "Data Consolidation for AI & Analytics",
      description:
        "Consolidate fragmented structured and unstructured data sources into a secure, scalable data lake that powers real‑time analytics, historical insights, and AI‑driven intelligence—empowering teams with self‑service BI while ensuring governance, security, and privacy.",
      delay: "0.6s",
    },
    {
      icon: Eye,
      title: "Computer Vision & Inspection Solutions",
      description:
        "Harness AI‑powered computer vision to automate inspections and visual workflows—detecting, classifying, and tracking objects in real time to boost accuracy, reduce errors, and streamline operations without disrupting your existing processes.",
      delay: "0.2s",
    },
    {
      icon: Settings,
      title: "AI Model Management & Orchestration",
      description:
        "Select, deploy, and govern AI models tailored to your needs—maximizing performance, compliance, and ROI across on‑premises and cloud—while we handle infrastructure, updates, and risk so your team can focus on strategic business innovation using AI.",
      delay: "0.4s",
    },
    {
      icon: Zap,
      title: "AI Prototyping & Acceleration Services",
      description:
        "Empowers businesses and technology organizations to adopt an AI‑first approach with on‑demand strategy, rapid prototyping, and expert coaching—so you can eXplore opportunities, eXperience fast prototypes, and eXecute at scale with confidence.",
      delay: "0.6s",
    },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Our Services</h2>
          <div className="w-16 h-1 mx-auto bg-green-400"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Comprehensive AI solutions tailored to enterprise needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 opacity-0 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: service.delay, animationFillMode: "forwards" }}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 dark:text-cyan-400 mr-4">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
