import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    title: 'Design and Installation',
    description: 'For a range of electrical systems, our team of skilled engineers and technicians provides professional design and installation services. Whether you\'re renovating an old facility or constructing a new one, we make sure the electrical infrastructure is planned and built to satisfy your unique demands.',
  },
  {
    title: 'Maintenance and Repairs',
    description: 'Maintaining the best possible state for your electrical systems is crucial to guaranteeing safety and reducing downtime. Our comprehensive range of maintenance and repair services guarantees dependable, effective operation — from scheduled examinations to urgent fixes.',
  },
  {
    title: 'Upgrades and Retrofits',
    description: 'It\'s critical to keep your electrical systems up to date as rules and technology evolve. To update your systems, increase energy efficiency, and guarantee compliance with current standards and laws, we provide upgrade and retrofit services.',
  },
]

const gallery = [
  { alt: 'Engineer inspecting an electrical panel with a tablet', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
  { alt: 'Close-up of mechanical engine components', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80' },
  { alt: 'Industrial electrical switchgear panels', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80' },
]

const Electrical = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-block').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        })
      })

      gsap.from('.solution-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.solution-grid', start: 'top 78%' },
      })

      gsap.from('.gallery-item', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-[#F6F2E9]">
      <PageHero
        eyebrow="Our Services"
        title="Electrical Systems"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Electrical Systems' },
        ]}
        image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28 reveal-block">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-7 font-lato">
              Your <span className="text-[#A85A28]">premier electrical systems</span> solutions provider.
            </h2>
            <p className="text-[#4B5459] max-w-md">
              At Delta Galaxy, our specialty is providing complete electrical system services to
              satisfy our clients' various demands. Focusing on quality, dependability, and
              safety, we provide a broad range of solutions suited to different project
              requirements and sectors.
            </p>
          </div>
          <div className="h-[340px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
              alt="Delta Galaxy electrical systems technician"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- SWITCHING CONTROL HIGHLIGHT ---------------- */}
      <section className="relative py-32 overflow-hidden reveal-block">
        <img
          src="https://images.unsplash.com/photo-1620974319248-bf37738a7cef?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#12181C]/72" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl ml-auto">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">Explore the features</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F6F2E9] mb-6 leading-tight font-lato">
              Switching Control
            </h2>
            <p className="text-[#F6F2E9]/80 mb-9">
              We supply, install, test and commission HT & LT cables in trenches, trays and pipes
              — applicable across diverse industries with efficient, long-term performance for
              power management. Our organisation has the capacity to supply, install, test and
              commission overhead HT/LT transmission lines, including poles, conductors/cables,
              insulators, hardware fittings and ACBs. Our installation and testing of panels
              covers HT & LT switchboards, power control centers, motor control centers,
              distribution boards, automatic control panels, generator panels, electronic panels,
              PLC panels, relay and control panels, rising mains, control desks, capacitor panels,
              bus bars, AC & DC drives, and AMF control panels — all at market-leading prices.
            </p>
            <Link
	            to="/contact"
	            className="px-7 py-3.5 bg-[#F6F2E9] text-[#12181C] font-semibold text-sm hover:bg-orange-200 transition-colors rounded-lg"
	          >
	            Contact Now
	          </Link>
          </div>
        </div>
      </section>

      {/* ---------------- ELECTRICAL SYSTEMS GALLERY ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-2xl mb-12 reveal-block">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
            Our Electrical Systems
          </h2>
        </div>

        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-3 gap-5">
          {gallery.map((item) => (
            <div key={item.alt} className="gallery-item h-64 overflow-hidden">
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SOLUTIONS GRID ---------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="max-w-xl mb-16 reveal-block">
          <p className="text-[#A85A28] text-xl font-semibold tracking-wide mb-4 font-lato">What we offer</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
            Our Electrical Systems Solutions
          </h2>
        </div>

        <div className="solution-grid grid md:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div key={item.title} className="solution-card bg-white border border-[#DDD2BE] p-8">
              <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
              <p className="text-sm text-[#4B5459] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      <section className="bg-gray-600 text-[#F6F2E9] py-20 reveal-block">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold max-w-lg font-lato">
            Have a problem regarding our services? Let's talk it through.
          </h2>
          <Link
            to="/contact"
            className="px-7 py-3.5 bg-[#F6F2E9] text-[#12181C] font-semibold text-sm hover:bg-orange-200 transition-colors rounded-lg"
          >
            Contact Now 
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Electrical