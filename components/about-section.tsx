export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-cyan-400">About AI3X</h2>
          <div className="w-16 h-1 mx-auto bg-green-400 mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">A CodeGen Company</p>

          {/* CodeGen Logo */}
          <div className="mb-12">
            <div className="h-20 mx-auto bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-2xl font-bold">
              CodeGen
            </div>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CodeGen Column */}
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-cyan-400">Backed by CodeGen</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Part of the CodeGen group, we build on 25 + years of travel technology leadership—powering global
              airlines, tour operators, and OTAs.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our heritage in large scale, mission critical systems gives us the engineering rigour, security posture,
              and delivery discipline required to bring proven AI integration capabilities to any industry.
            </p>
          </div>

          {/* Vision Column */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-cyan-400">Four Pillars of AI Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Driving innovation through four strategic pillars, we're reshaping how enterprises adopt and leverage AI:
            </p>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {[
                "TravelBox.AI - Reimagined Travel Experiences",
                "Lia Platform - AI First Core Systems",
                "AI3X Solutions - Enterprise-grade AI",
                "CodeGen Xcelerate - Internal AI excellence",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI3X Column */}
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-cyan-400">Transform with AI3X</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We enable rapid, secure, and impactful AI adoption by seamlessly integrating with your existing systems.
            </p>
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-400/10 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
                Proven expertise for enterprise AI innovation.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                From strategic planning to full stack implementation and ongoing MLOps, we're the partner that turns AI
                ambition into measurable results—without disrupting your existing tech investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
