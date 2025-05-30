export function TechStackSection() {
  const techCategories = [
    {
      title: "Compute Infrastructure",
      icon: "🖥️",
      color: "text-blue-600",
      subcategories: [
        {
          title: "High-Performance GPUs",
          items: ["NVIDIA", "AMD", "Groq", "Intel Arc"],
        },
        {
          title: "Cloud Infrastructure",
          items: ["OCI", "AWS", "Azure", "GCP"],
        },
      ],
    },
    {
      title: "Models & Engines",
      icon: "🧠",
      color: "text-cyan-400",
      subcategories: [
        {
          title: "Proprietary Models",
          items: ["OpenAI", "Claude", "Gemini", "Grok"],
        },
        {
          title: "Open Source",
          items: ["LLaMA", "Mistral", "DeepSeek", "Hugging Face"],
        },
      ],
    },
    {
      title: "Frameworks",
      icon: "⚡",
      color: "text-green-400",
      subcategories: [
        {
          title: "RAG",
          items: ["LangChain", "LlamaIndex", "Haystack", "Semantic Kernel"],
        },
        {
          title: "Agents",
          items: ["CrewAI", "LangGraph", "AutoGen", "MCP"],
        },
      ],
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      color: "text-blue-600",
      subcategories: [
        {
          title: "AI Coding",
          items: ["Copilot", "Cursor", "WindSurf", "Replit"],
        },
        {
          title: "MLOps",
          items: ["MLflow", "Kubeflow", "Jenkins", "Terraform"],
        },
      ],
    },
    {
      title: "Data & Storage",
      icon: "💾",
      color: "text-cyan-400",
      subcategories: [
        {
          title: "Databases",
          items: ["PostgreSQL", "MongoDB", "Oracle23ai", "Redis"],
        },
        {
          title: "Vector Stores",
          items: ["Pinecone", "Weaviate", "Chroma", "Milvus"],
        },
      ],
    },
    {
      title: "Security",
      icon: "🔒",
      color: "text-green-400",
      subcategories: [
        {
          title: "Enterprise Security",
          items: ["Vault", "RBAC", "KMS", "WAF"],
        },
        {
          title: "Compliance",
          items: ["Auditing", "Encryption", "MFA/SSO", "Data Masking"],
        },
      ],
    },
  ]

  return (
    <section id="tech" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 dark:text-cyan-400 mb-4">
          Our Technology Stack
        </h2>
        <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
        <p className="text-gray-600 dark:text-gray-400 text-center text-xl mb-16">
          Enterprise-grade solutions—from silicon through hyperscaler clouds to developer tooling
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className={`text-xl font-semibold ${category.color}`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex}>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{subcategory.title}</h4>
                    <div className="flex flex-wrap gap-3">
                      {subcategory.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-4 group hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer w-24"
                        >
                          <div className="h-8 w-auto mb-2 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-xs font-medium">
                            {item.slice(0, 3)}
                          </div>
                          <span className={`text-sm group-hover:${category.color} transition-colors duration-300`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
