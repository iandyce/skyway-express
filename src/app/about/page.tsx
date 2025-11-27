'use client'

import { Plane, Ship, Truck, Globe, Users, Award } from 'lucide-react'

export default function About() {
  return (
    <section className="min-h-screen bg-metal-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
            About Skyway
          </h1>
          <p className="text-2xl text-sky-300 max-w-4xl mx-auto">
            Born in East Africa. Built for the world.
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">From Nairobi With Purpose</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2018, Skyway Company Express started with one simple belief: 
              African businesses deserve world-class logistics — fast, reliable, and transparent.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              Today we move everything from perishables to project cargo across 5 continents, 
              with offices in Nairobi, Mombasa, Dubai, London, and Johannesburg.
            </p>
          </div>
          <div className="bg-gradient-to-br from-sky-900/50 to-teal-900/50 rounded-3xl p-12 border border-teal-500/30">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-black text-teal-400">50+</h3>
                <p className="text-gray-300">Countries Served</p>
              </div>
              <div>
                <h3 className="text-5xl font-black text-teal-400">10K+</h3>
                <p className="text-gray-300">Shipments Yearly</p>
              </div>
              <div>
                <h3 className="text-5xl font-black text-teal-400">24/7</h3>
                <p className="text-gray-300">Support Team</p>
              </div>
              <div>
                <h3 className="text-5xl font-black text-teal-400">100%</h3>
                <p className="text-gray-300">Customs Compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <Award className="w-12 h-12" />, title: "Reliability First", desc: "On-time delivery is not a goal — it’s our standard." },
            { icon: <Users className="w-12 h-12" />, title: "African Roots", desc: "We understand local markets because we live them." },
            { icon: <Globe className="w-12 h-12" />, title: "Global Reach", desc: "One partner for all your international needs." },
          ].map((v) => (
            <div key={v.title} className="bg-metal-900 rounded-2xl p-10 text-center border border-metal-800">
              <div className="text-teal-400 mb-6">{v.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}