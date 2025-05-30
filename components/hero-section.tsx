"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 300)
    const timer2 = setTimeout(() => setAnimationStep(2), 900)
    const timer3 = setTimeout(() => setAnimationStep(3), 1500)
    const timer4 = setTimeout(() => setAnimationStep(4), 2100)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen pt-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-green-400/30 dark:from-cyan-400/50 dark:to-green-400/50"></div>
        <div className="absolute inset-0 bg-white/60 dark:bg-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-[90vh] container mx-auto px-4 flex flex-col justify-center text-center mt-10 mb-8 lg:mb-32">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="mb-12">
            <div className="flex flex-col items-center space-y-4 md:space-y-6">
              <div className="w-full flex justify-center">
                <div className="w-[400px] flex justify-start">
                  <span
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 transition-all duration-800 ${
                      animationStep >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                  >
                    eXplore
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-[400px] flex justify-start">
                  <span
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400 transition-all duration-800 ${
                      animationStep >= 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                  >
                    eXperience
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-[400px] flex justify-start">
                  <span
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold text-green-400 transition-all duration-800 ${
                      animationStep >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                  >
                    eXecute
                  </span>
                </div>
              </div>
            </div>
          </h2>

          <div
            className={`space-y-6 transition-all duration-800 ${
              animationStep >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-white/10 dark:bg-black/40 backdrop-blur-sm px-8 py-6 rounded-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-white font-semibold tracking-wide">
                Accelerating Enterprise <span className="font-bold">AI</span> Adoption
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-white/90 font-normal tracking-wide max-w-4xl mx-auto mt-8">
                <p>
                  Unify Data • Empower <span className="font-bold">AI</span> Agents • Automate Outcomes
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16 transition-all duration-800 ${
              animationStep >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 text-lg">
              Let's Chat
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-800 dark:border-white hover:bg-green-400 hover:text-white hover:border-transparent font-bold py-4 px-10 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 w-full text-center">
        <a href="#services" className="text-gray-800 dark:text-white inline-block animate-bounce">
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  )
}
