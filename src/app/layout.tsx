'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { Menu, X, Plane } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

// ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
// WE MOVED THE METADATA TO A SEPARATE FILE SO IT WORKS AGAIN
// ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Track Shipment', href: '/track' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* HEADER */}
        <header className="bg-metal-950 text-white sticky top-0 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-sky-500 to-teal-500 p-3 rounded-xl group-hover:scale-110 transition">
                  <Plane className="w-10 h-10 text-white" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                  Skyway Company Express
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-10">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="hover:text-sky-400 transition font-medium text-lg">
                    {item.name}
                  </Link>
                ))}
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition">
                  Get Quote
                </button>
              </nav>

              {/* Mobile */}
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
                {mobileOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
              <nav className="md:hidden pb-6 border-t border-metal-800 pt-6 space-y-5">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="block text-xl hover:text-sky-400" onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 w-full rounded-lg">
                  Get Quote
                </button>
              </nav>
            )}
          </div>
        </header>

        {children}
        <Toaster position="top-right" />
        <footer className="bg-black py-16 border-t border-metal-800">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <div className="flex justify-center items-center gap-4 mb-8">
      <Plane className="w-12 h-12 text-teal-400" />
      <span className="text-4xl font-black bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
        Skyway Company Express
      </span>
    </div>
    <p className="text-gray-400 text-lg mb-8">Your Cargo. Our Sky. Delivered.</p>
    <p className="text-gray-500">© 2025 Skyway Company Express. All rights reserved.</p>
  </div>
</footer>
      </body>
    </html>
  )
}