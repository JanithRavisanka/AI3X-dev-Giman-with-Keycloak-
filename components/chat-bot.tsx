"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Maximize2, Minimize2, X, Zap, Eye, Lightbulb, MessageSquare } from "lucide-react"

export function ChatBot() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Thank you for your message: "${userMessage}". I'm Orion, your AI assistant. I can help you learn about our AI3X platform, services, and capabilities. How can I assist you today?`,
        },
      ])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleInputFocus = () => {
    if (!isExpanded) {
      setIsExpanded(true)
    }
  }

  const suggestions = [
    {
      icon: Zap,
      title: "Platform Overview",
      text: "How does this platform work?",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      hoverColor: "group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: MessageSquare,
      title: "Capabilities",
      text: "What can you help me with?",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      hoverColor: "group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Eye,
      title: "Key Features",
      text: "Show me what you can do",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      hoverColor: "group-hover:bg-green-200 dark:group-hover:bg-green-900/50",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: Lightbulb,
      title: "Use Cases",
      text: "Explain your capabilities",
      bgColor: "bg-amber-100 dark:bg-amber-900/30",
      hoverColor: "group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
  ]

  const insertSuggestion = (text: string) => {
    setInput(text)
  }

  // Minimal input-only state
  if (!isExpanded) {
    return (
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 p-2">
          <div className="flex items-center space-x-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={handleInputFocus}
              onKeyPress={handleKeyPress}
              placeholder="Let's chat - powered by Orion..."
              className="flex-1 border-0 bg-transparent resize-none min-h-[40px] max-h-[40px] focus:ring-0 focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="bg-blue-600 hover:bg-blue-700 rounded-full h-10 w-10 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Expanded state
  return (
    <div
      className={`fixed z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 ${
        isFullscreen ? "inset-0" : "bottom-0 left-0 right-0 h-1/2"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex items-center space-x-3">
          <div className="text-blue-600 dark:text-cyan-400 text-xl font-bold">AI3X</div>
          <h3 className="text-blue-600 dark:text-cyan-400 font-semibold">Orion AI Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="text-blue-600 dark:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(false)}
            className="text-blue-600 dark:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4"
        style={{ height: isFullscreen ? "calc(100vh - 140px)" : "calc(50vh - 140px)" }}
      >
        {messages.length === 0 && (
          <div className="text-center py-8 px-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="text-blue-600 dark:text-cyan-400 text-xl font-bold">AI3X</div>
              <h1 className="text-2xl font-bold text-blue-600 dark:text-cyan-400">Orion AI Assistant</h1>
            </div>
            <p className="text-green-500 dark:text-green-400 text-lg mb-8">How can I assist you today?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => insertSuggestion(suggestion.text)}
                  className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 text-left transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <div
                      className={`${suggestion.bgColor} p-2 rounded-lg mr-3 ${suggestion.hoverColor} transition-colors`}
                    >
                      <suggestion.icon className={`w-5 h-5 ${suggestion.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-gray-800 dark:text-gray-200 font-medium">{suggestion.title}</h4>
                      <p className="text-green-500 dark:text-green-400 text-sm mt-1">{suggestion.text}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex space-x-2 max-w-4xl mx-auto">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Let's chat - powered by Orion..."
            className="flex-1 min-h-[50px] max-h-[120px] resize-none border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="bg-blue-600 hover:bg-blue-700 h-[50px] w-[50px] rounded-xl"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
