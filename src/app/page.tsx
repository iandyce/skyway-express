'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Plane, Ship, Truck, Globe } from 'lucide-react'

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

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
    // Back to the original beautiful Unsplash one that was working for you
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
      {/* HERO SLIDER */}
      <section className="relative h-screen overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-50"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-metal-950/80 via-sky-900/60 to-teal-900/80" />
                
                <div className="relative h-full flex items-center justify-center text-center px-6">
                  <div className="max-w-5xl">
                    <div className="text-teal-400 mb-8 flex justify-center">
                      {slide.icon}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-3xl text-sky-300 mb-12">
                      {slide.subtitle}
                    </p>
                    <div className="space-x-6">
                      <button className="btn-primary text-xl px-10 py-5">Get Instant Quote</button>
                      <button className="btn-secondary text-xl px-10 py-5">Track Shipment</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-white/50 hover:bg-teal-400 transition" />
          ))}
        </div>
      </section>

      {/* Quick services below hero (optional – looks pro) */}
      <section className="bg-metal-950 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {slides.map((s, i) => (
            <div key={i} className="text-teal-400">
              {s.icon}
              <p className="mt-4 text-white font-semibold">{s.title.split(" ")[0]} Freight</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}