'use client'

import { Plane, Ship, Truck, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Air Freight",
      icon: <Plane className="w-16 h-16" />,
      features: ["Same-day & next-flight-out", "Charter services", "Dangerous goods certified", "Door-to-door worldwide"],
      color: "from-sky-500 to-sky-700",
    },
    {
      title: "Ocean Freight",
      icon: <Ship className="w-16 h-16" />,
      features: ["FCL · LCL · Breakbulk", "Port-to-port & door-to-door", "Reefer containers", "Project cargo specialists"],
      color: "from-teal-500 to-cyan-600",
    },
    {
      title: "Land & Rail",
      icon: <Truck className="w-16 h-16" />,
      features: ["Cross-border trucking", "Rail solutions EA", "Last-mile delivery", "Temperature-controlled transport"],
      color: "from-emerald-500 to-teal-700",
    },
  ]

  return (
    <section className="min-h-screen bg-metal-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-2xl text-center text-gray-300 mb-20">End-to-end logistics. One trusted partner.</p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.title} className="bg-metal-900 rounded-2xl p-10 border border-metal-800 hover:border-teal-500 transition-all hover:scale-105 shadow-2xl">
              <div className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl w-fit mb-8 text-white`}>
                {service.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-8">{service.title}</h3>
              <ul className="space-y-4">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-4 text-gray-300">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                    <span className="text-lg">{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 btn-primary w-full py-4 text-xl">Get Quote</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}