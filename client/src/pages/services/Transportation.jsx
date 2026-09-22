import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    title: 'Parcel Delivery',
    description: 'Our package delivery services are made so that your items arrive at their destination carefully and efficiently. We promise on-time delivery of your packages every time, thanks to our fleet of contemporary vehicles and skilled drivers.',
  },
  {
    title: 'Cargo Transportation',
    description: 'Our cargo shipping services handle any size of transportation, including large or bulky products. With our extensive experience and fleet of vehicles, we\'re capable of both short- and long-distance freight transportation with reliability and security.',
  },
  {
    title: 'Passenger Transport',
    description: 'Our passenger transport services offer dependable and secure transportation for people and groups of different sizes, from operations shuttles to airport transfers — arriving in style and on schedule, with an emphasis on comfort and convenience.',
  },
]

const Transportation = () => {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-[#F6F2E9]">
      <PageHero
        eyebrow="Our Services"
        title="Transportation Service"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Transportation Service' },
        ]}
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28 reveal-block">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-7 font-lato">
              Your partner for <span className="text-[#A85A28]">transportation solutions.</span>
            </h2>
            <p className="text-[#4B5459] max-w-md">
              At Delta Galaxy, we recognise the value of reliable transportation in the hectic
              world of today. We handle everything from moving products across town to securely
              and efficiently taking passengers wherever they need to go — a wide range of
              transportation services built around quality, dependability, and client satisfaction.
            </p>
          </div>
          <div className="h-[340px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80"
              alt="Delta Galaxy transportation and logistics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- HIGHLIGHT BAND ---------------- */}
      <section className="relative py-32 overflow-hidden reveal-block">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12181C] via-[#12181C]/75 to-[#12181C]/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-lg">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">On every route</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F6F2E9] mb-6 leading-tight font-lato">
              Reliable, affordable transportation
            </h2>
            <p className="text-[#F6F2E9]/80 mb-9">
              We provide transportation services that are reliable and affordable, with a wide
              variety of vehicles and options so you can find the perfect fit for your needs.
              We understand transportation can be a hassle — we're here to make it easy for you.
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

      {/* ---------------- SOLUTIONS GRID ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-xl mb-16 reveal-block">
          <p className="text-[#A85A28] text-xl font-semibold tracking-wide mb-4 font-lato">What we offer</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
            Our Transportation Solutions
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

export default Transportation