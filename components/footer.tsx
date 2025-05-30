import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="text-blue-600 dark:text-cyan-400 text-2xl font-bold">AI3X</div>
            </div>
            <p className="text-sm mb-4">
              Enterprise-grade AI solutions for seamless integration and deployment. Transform your business with
              cutting-edge artificial intelligence technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#platform" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Orion Platform
                </Link>
              </li>
              <li>
                <Link href="#tech" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Enterprise AI Augmentation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  24x7 Digital Assistants
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Data Unification & Consolidation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  AI Model Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  AI Prototyping & Acceleration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 dark:text-cyan-400 mr-2" />
                <a
                  href="mailto:info@ai3x.tech"
                  className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  info@ai3x.tech
                </a>
              </li>
              <li className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/ai3x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077B5] hover:opacity-80 transition-opacity"
                >
                  <div className="w-6 h-6 bg-[#0077B5] rounded flex items-center justify-center text-white text-xs font-bold">
                    Li
                  </div>
                </a>
                <a
                  href="https://twitter.com/ai3x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:opacity-80 transition-opacity"
                >
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">
                    X
                  </div>
                </a>
                <a
                  href="https://github.com/ai3x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:opacity-80 transition-opacity"
                >
                  <div className="w-6 h-6 bg-[#333] rounded flex items-center justify-center text-white text-xs font-bold">
                    Gh
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Copyright */}
            <div className="text-sm">
              <p className="text-gray-600 dark:text-gray-400">&copy; 2024 AI3X by CodeGen. All rights reserved.</p>
            </div>
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm md:justify-end">
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* SEO Description */}
          <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            <p>
              AI3X by CodeGen delivers enterprise-grade AI solutions: Orion Agentic AI Platform, RAG-powered digital
              assistants, custom AI development, integration, consulting & 24/7 support
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
