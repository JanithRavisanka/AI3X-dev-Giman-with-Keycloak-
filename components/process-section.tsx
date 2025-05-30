import { Search, Zap, Cog } from "lucide-react"

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            The <span className="text-green-400">3X</span> Process
          </h2>
          <div className="w-20 h-1 mx-auto bg-green-400"></div>
          <p className="mt-4 text-xl text-gray-300">Your journey to enterprise AI transformation</p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-green-400 opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* eXplore Step */}
            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-600/30">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-blue-600/20 flex-grow">
                <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                  <span className="text-3xl mr-2">eXplore</span>
                  <span className="text-lg text-gray-300">Discover & Strategize</span>
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Search,
                      title: "Identify Opportunities",
                      desc: "Identify high-impact AI use cases for your enterprise",
                    },
                    {
                      icon: Search,
                      title: "Assess Readiness",
                      desc: "Evaluate your organization's AI readiness and capabilities",
                    },
                    { icon: Search, title: "Unify Data", desc: "Connect and standardize your enterprise data sources" },
                    { icon: Search, title: "Build Roadmap", desc: "Create a strategic plan for AI implementation" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-7 h-7 bg-blue-600/20 rounded-lg flex items-center justify-center mt-1">
                        <item.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* eXperience Step */}
            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center z-10 shadow-lg shadow-cyan-400/30">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-cyan-400/20 flex-grow">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                  <span className="text-3xl mr-2">eXperience</span>
                  <span className="text-lg text-gray-300">Design & Validate</span>
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Zap,
                      title: "Rapid Prototyping",
                      desc: "Build and test AI solutions in controlled environments",
                    },
                    { icon: Zap, title: "Test Assistants", desc: "Validate AI assistants with real users and data" },
                    { icon: Zap, title: "Validate Outcomes", desc: "Measure and verify AI solution effectiveness" },
                    { icon: Zap, title: "Ensure Standards", desc: "Maintain compliance and ethical AI practices" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-7 h-7 bg-cyan-400/20 rounded-lg flex items-center justify-center mt-1">
                        <item.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* eXecute Step */}
            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center z-10 shadow-lg shadow-green-400/30">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-green-400/20 flex-grow">
                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                  <span className="text-3xl mr-2">eXecute</span>
                  <span className="text-lg text-gray-300">Deploy & Scale</span>
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Cog,
                      title: "Seamless Integration",
                      desc: "Deploy AI solutions into your existing workflow",
                    },
                    { icon: Cog, title: "Secure Deployment", desc: "Implement with enterprise-grade security" },
                    { icon: Cog, title: "Optimize Performance", desc: "Fine-tune AI models for maximum efficiency" },
                    {
                      icon: Cog,
                      title: "Scale Intelligently",
                      desc: "Expand AI capabilities across your organization",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-7 h-7 bg-green-400/20 rounded-lg flex items-center justify-center mt-1">
                        <item.icon className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
