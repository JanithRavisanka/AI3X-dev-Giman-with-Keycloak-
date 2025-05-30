import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const offices = [
    {
      country: "United States",
      city: "Orlando, Florida",
      address: "4700 Millenia Blvd Suite 500,\nOrlando, FL 32829,\nUSA",
      phone: "+1 689 304 5252",
    },
    {
      country: "United Kingdom",
      city: "London",
      address: "CodeGen Limited,\n87-89 Baker Street,\nLondon, W1U 6RJ, UK",
      phone: "+44 (0) 7946 629 423",
    },
    {
      country: "U.A.E",
      city: "Dubai",
      address: "#5, 29th Floor Al Saqr Business Tower,\nSheikh Zayed Rd,\nDubai",
      phone: "+971 52 916 3580",
    },
    {
      country: "Sri Lanka",
      city: "Colombo",
      address: "Bay 1-5, Trace Expert City,\nColombo 10,\nSri Lanka",
      phone: "+94 11 202 4400",
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ai3x", color: "bg-[#0077B5]" },
    { name: "Twitter", href: "https://twitter.com/ai3x", color: "bg-black" },
    { name: "GitHub", href: "https://github.com/ai3x", color: "bg-[#333]" },
    { name: "YouTube", href: "https://youtube.com/@ai3x", color: "bg-[#FF0000]" },
    { name: "Medium", href: "https://medium.com/@ai3x", color: "bg-black" },
  ]

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-cyan-400">Contact Us</h2>
          <div className="w-16 h-1 mx-auto bg-green-400 mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">Global Presence, Local Excellence</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-5">
            <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">Global Office Locations</p>
              </div>
            </div>
          </div>

          {/* Office Locations Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-cyan-400">{office.country}</h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p className="font-semibold">{office.city}</p>
                    <p className="whitespace-pre-line">{office.address}</p>
                    <p className="flex items-center mt-4">
                      <Phone className="w-5 h-5 mr-2 text-green-400" />
                      {office.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Get in Touch */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-cyan-400">Get in Touch</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <a
                  href="mailto:info@ai3x.tech"
                  className="inline-flex items-center text-lg hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2 text-green-400" />
                  info@ai3x.tech
                </a>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-cyan-400">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform"
                  >
                    <div className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-xs font-bold">{social.name.slice(0, 2)}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
