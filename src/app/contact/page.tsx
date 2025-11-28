'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent! We'll reply within 2 hours.")
    setFormData({ name: '', company: '', email: '', phone: '', message: '' })
  }

  const inputClasses =
    'bg-metal-950 border border-metal-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition'

  return (
    <section className="min-h-screen bg-metal-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-2xl text-center text-gray-300 mb-16">
          Your cargo deserves the best. Let’s talk.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            {[
              { icon: <Phone className="w-8 h-8" />, label: 'Phone', value: '0207868575' },
              { icon: <Mail className="w-8 h-8" />, label: 'Email', value: 'operations@skyway.co.ke' },
              { icon: <MapPin className="w-8 h-8" />, label: 'Head Office', value: 'Nairobi CBD, Kenyatta Ave' },
              { icon: <MapPin className="w-8 h-8" />, label: 'Mombasa Office', value: 'Port Reitz, Moi International Airport' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-6 bg-metal-900 rounded-2xl p-8 border border-metal-800"
              >
                <div className="text-teal-400">{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-xl text-white font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-metal-900 rounded-2xl p-10 border border-teal-500/30">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                placeholder="Your Name"
                required
                className={inputClasses}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                placeholder="Company (Optional)"
                className={inputClasses}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className={inputClasses}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                placeholder="Phone"
                required
                className={inputClasses}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <textarea
              placeholder="How can we help you move the world?"
              rows={6}
              required
              className={`${inputClasses} w-full mb-8 resize-none`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-5 px-10 rounded-lg transition w-full flex items-center justify-center gap-3 text-xl"
            >
              <Send size={28} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}