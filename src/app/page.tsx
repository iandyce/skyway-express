'use client'

import Image from 'next/image'
import Link from 'next/link'                     // ← ADDED
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Plane, Ship, Truck, Globe } from 'lucide-react'

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4500 })])

  const slides = [
    {
      title: "Air Freight Masters",
      subtitle: "Fastest routes from East Africa to the world",
      icon: <Plane className="w-20 h-20" />,
      img: "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
  title: "Ocean Giants",
  subtitle: "Full container loads · LCL · Project cargo",
  icon: <Ship className="w-20 h-20" />,
  img: "https://images.pexels.com/photos/104346/pexels-photo-104346.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
},
    {
      title: "Land & Rail Experts",
      subtitle: "Door-to-door across the continent",
      icon: <Truck className="w-20 h-20" />,
      img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1920&q=80",
    },
    {
    title: "Global Network",
    subtitle: "Offices & partners in 50+ countries",
    icon: <Globe className="w-20 h-20" />,
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1920&q=80",
  },
  ]

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0 h-full">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

                <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-teal-400 mb-8 animate-pulse">{slide.icon}</div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl text-sky-300 mb-16 max-w-4xl drop-shadow-lg">
                    {slide.subtitle}
                  </p>

                  {/* FULLY CLICKABLE BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-6 z-10">
                    <Link
                      href="/contact"
                      className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-12 py-6 rounded-xl text-xl lg:text-2xl transition-all transform hover:scale-110 hover:shadow-2xl shadow-lg"
                    >
                      Get Instant Quote
                    </Link>
                    <Link
                      href="/track"
                      className="bg-transparent border-4 border-white hover:bg-white hover:text-black text-white font-bold px-12 py-6 rounded-xl text-xl lg:text-2xl transition-all transform hover:scale-110 shadow-lg"
                    >
                      Track Shipment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-white/70 hover:bg-teal-400 transition" />
          ))}
        </div>
      </section>
    </>
  )
}