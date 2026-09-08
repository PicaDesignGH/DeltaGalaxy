import { useState, useEffect } from 'react'
import { Phone, Mail, Clock, ArrowUp, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaXTwitter,FaLinkedinIn} from 'react-icons/fa6'
import indiaMap from '../../assets/map.png'

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#12181C] text-[#F6F2E9] relative">

      {/* Contact strip */}
      <div className="border-b border-[#F6F2E9]/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[#F6F2E9]/70">
            <a href="tel:+919266804144" className="flex items-center gap-2 hover:text-[#C97A3E] transition-colors">
              <Phone size={15} /> +91 92668 04144
            </a>
            <a href="mailto:info@deltagalaxy.com" className="flex items-center gap-2 hover:text-[#C97A3E] transition-colors">
              <Mail size={15} /> info@deltagalaxy.com
            </a>
            <span className="flex items-center gap-2">
              <Clock size={15} /> Mon–Sat 10:00am – 6:00pm, Sunday Closed
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#F6F2E9]/70">
            <a href="#" aria-label="Facebook" className="hover:text-[#C97A3E] transition-colors">
              <FaFacebookF size={16} />
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-[#C97A3E] transition-colors">
              <FaInstagram size={16} />
            </a>

            <a href="#" aria-label="X" className="hover:text-[#C97A3E] transition-colors">
              <FaXTwitter size={16} />
            </a>

            <a href="#" aria-label="LinkedIn" className="hover:text-[#C97A3E] transition-colors">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Offices + map */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-14">
        <div>
          <h3 className="text-xl font-semibold mb-6">Registered Office</h3>
          <div className="flex gap-3 text-[#F6F2E9]/70 mb-5">
            <MapPin size={18} className="shrink-0 mt-0.5 text-[#C97A3E]" />
            <p>
              Delta Galaxy Engineering Services Ltd.<br />
              H/NO 152, Ward No 22B, Near Toyota Showroom<br />
              Patliputra Colony, Patna, Bihar 800013
            </p>
          </div>
          <a href="tel:+919155310575" className="flex items-center gap-3 text-[#F6F2E9]/70 hover:text-[#C97A3E] transition-colors">
            <Phone size={18} className="text-[#C97A3E]" /> +91 91553 10575
          </a>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Corporate Office</h3>
          <div className="flex gap-3 text-[#F6F2E9]/70 mb-5">
            <MapPin size={18} className="shrink-0 mt-0.5 text-[#C97A3E]" />
            <p>
              8A, Ground Floor, Behind D2<br />
              Bhawani Kunj, Vasant Kunj<br />
              New Delhi 110070
            </p>
          </div>
          <div className="space-y-3 text-[#F6F2E9]/70">
            <a href="tel:+919266804144" className="flex items-center gap-3 hover:text-[#C97A3E] transition-colors">
              <Phone size={18} className="text-[#C97A3E]" /> +91 92668 04144
            </a>
            <a href="mailto:info@deltagalaxy.com" className="flex items-center gap-3 hover:text-[#C97A3E] transition-colors">
              <Mail size={18} className="text-[#C97A3E]" /> info@deltagalaxy.com
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Our Location</h3>
          <img src={indiaMap} alt="Delta Galaxy locations across India" className="w-full max-w-[260px] mx-auto md:mx-0 opacity-90" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F6F2E9]/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-[#F6F2E9]/50 text-center">
          Copyright [{new Date().getFullYear()}] — Delta Galaxy Engineering Services Limited
        </div>
      </div>

      {/* Scroll to top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-[#A85A28] hover:bg-[#C97A3E] transition-colors flex items-center justify-center"
        >
          <ArrowUp size={18} className="text-[#F6F2E9]" />
        </button>
      )}
    </footer>
  )
}

export default Footer