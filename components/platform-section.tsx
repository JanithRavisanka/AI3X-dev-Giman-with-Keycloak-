import { Database, MessageSquare, Cog, Cloud, Shield, CheckCircle } from "lucide-react"

export function PlatformSection() {
  const features = [
    {
      icon: Database,
      title: "Data Hive for Unified Knowledge",
      description: "Unify structured and unstructured data into a single, governed Data Hive for AI-ready insights.",
      color: "text-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Retrieval‑Augmented Generation",
      description:
        "Fuse proprietary knowledge with foundation models for precise, contextual responses unified knowledge scope.",
      color: "text-cyan-400",
    },
    {
      icon: Cog,
      title: "Agentic Intelligence",
      description: "Autonomous digital workers that navigate processes and make decisions for AI enablement.",
      color: "text-green-400",
    },
    {
      icon: Cloud,
      title: "Overlay on Current Systems",
      description: "Deploy seamlessly on your ERP, CRM, finance, and custom apps with no replacement needed.",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Model‑ & Cloud‑Agnostic",
      description: "Use any AI model—OpenAI, Hugging Face, LLama, Mistral, or private deployments and run anywhere",
      color: "text-cyan-400",
    },
    {
      icon: CheckCircle,
      title: "End‑to‑End Delivery & Governance",
      description:
        "Seamlessly integrate AI outputs into BI tools and systems with SSO, MFA, encryption, and complete audit trails.",
      color: "text-green-400",
    },
  ]

  return (
    <section id="platform" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-cyan-400">Orion GenAI Platform</h2>
          <div className="w-16 h-1 mx-auto bg-green-400"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Seamlessly integrate AI capabilities into your existing tech stack—without expensive replacements or
            re-architecture
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 h-full flex flex-col">
              <div className="flex-grow space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-blue-600 dark:text-cyan-400">Platform Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    <div>
                      <h5 className="font-semibold text-blue-600 dark:text-cyan-400 mb-2">Data & Integration</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {[
                          "Unified data layer",
                          "Pre-built enterprise connectors",
                          "Real-time data enrichment & processing",
                          "Multi-source data consolidation",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-600 dark:text-cyan-400 mb-2">AI & Automation</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {[
                          "Multi-model LLM orchestration",
                          "Autonomous AI agents & workflows",
                          "Multilingual Digital Assistants",
                          "MCP Compliance",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-600 dark:text-cyan-400 mb-2">Security & Compliance</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {[
                          "Enterprise-grade security controls",
                          "Audit trails & compliance monitoring",
                          "Data privacy & governance",
                          "Role-based access control",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-600 dark:text-cyan-400 mb-2">Enterprise Ready</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {[
                          "Cloud & model agnostic",
                          "Bring your own AI models",
                          "Cost optimization & monitoring",
                          "24/7 enterprise support",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-white to-cyan-400/20 dark:from-gray-800 dark:to-cyan-400/20 rounded-lg shadow-lg h-full p-8">
              <div className="flex items-center justify-center h-full">
                <div className="text-blue-600 dark:text-cyan-400 text-6xl font-bold">ORION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center mb-4">
                <feature.icon className={`w-6 h-6 mr-3 ${feature.color}`} />
                <h3 className={`text-xl font-semibold ${feature.color}`}>{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
