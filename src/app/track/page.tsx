'use client'

import { useState } from 'react'
import { Search, Package, Truck, Ship, Plane, CheckCircle, XCircle, Clock } from 'lucide-react'
import toast from 'react-hot-toast'

export default function TrackPage() {
  const [invoice, setInvoice] = useState('')
  const [trackingData, setTrackingData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fakeDatabase: Record<string, any> = {
    'SCE2025001': {
      status: 'Delivered',
      date: '28 Nov 2025',
      location: 'Nairobi, Kenya',
      details: 'Package delivered and signed for',
      icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
      steps: ['Picked Up', 'In Transit', 'At Customs', 'Out for Delivery', 'Delivered'],
      current: 4,
    },
    'SCE2025002': {
      status: 'In Transit',
      date: '27 Nov 2025',
      location: 'Dubai, UAE → London, UK',
      details: 'On board flight EK723',
      icon: <Plane className="w-8 h-8 text-sky-500" />,
      steps: ['Picked Up', 'In Transit', 'At Customs', 'Out for Delivery', 'Delivered'],
      current: 1,
    },
    'SCE2025003': {
      status: 'At Customs',
      date: '26 Nov 2025',
      location: 'Mombasa Port',
      details: 'Awaiting customs clearance',
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      steps: ['Picked Up', 'In Transit', 'At Customs', 'Out for Delivery', 'Delivered'],
      current: 2,
    },
  }

  const handleTrack = () => {
    if (!invoice.trim()) {
      toast.error('Please enter an invoice number')
      return
    }

    setLoading(true)
    setTimeout(() => {
      const data = fakeDatabase[invoice.toUpperCase()]
      if (data) {
        setTrackingData(data)
        toast.success('Shipment found!')
      } else {
        toast.error('Invoice number not found. Please check and try again.')
        setTrackingData(null)
      }
      setLoading(false)
    }, 1200)
  }

  return (
    <>
      <section className="min-h-screen bg-metal-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
            Track Your Shipment
          </h1>
          <p className="text-xl text-center text-gray-300 mb-12">
            Enter your invoice number below
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16">
            <input
              type="text"
              value={invoice}
              onChange={(e) => setInvoice(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
              placeholder="e.g. SCE2025001"
              className="flex-1 px-6 py-5 text-lg bg-metal-900 border border-metal-800 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder-gray-500"
            />
            <button
              onClick={handleTrack}
              disabled={loading}
              className="btn-primary text-xl px-10 flex items-center justify-center gap-3 whitespace-nowrap"
            >
              {loading ? 'Searching...' : <> <Search size={28} /> Track</>}
            </button>
          </div>

          {/* Result */}
          {trackingData && (
            <div className="bg-metal-900 rounded-2xl p-8 border border-teal-500/30 shadow-2xl">
              <div className="flex items-center gap-6 mb-8">
                {trackingData.icon}
                <div>
                  <h2 className="text-4xl font-bold text-white">{trackingData.status}</h2>
                  <p className="text-teal-400 text-lg">{trackingData.location}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8">{trackingData.details}</p>

              {/* Progress Steps */}
              <div className="space-y-6">
                {trackingData.steps.map((step: string, i: number) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      i <= trackingData.current
                        ? 'bg-teal-500 text-metal-950'
                        : 'bg-metal-800 text-gray-500'
                    }`}>
                      {i < trackingData.current ? '✓' : i + 1}
                    </div>
                    <p className={`text-xl ${i <= trackingData.current ? 'text-white' : 'text-gray-500'}`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}