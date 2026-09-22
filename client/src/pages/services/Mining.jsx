import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    title: 'Exploration and Site Assessment',
    description: 'To assist you in locating and assessing potential mining locations, our group of skilled geologists and engineers specialises in exploration and site assessment — covering everything from geological surveys to feasibility studies, so you can make informed decisions.',
  },
  {
    title: 'Site Development and Infrastructure',
    description: 'We provide infrastructure and site development services to get a region ready for mining operations once a site has been found — clearing land, building access roads, and putting in place necessary infrastructure like water supply and electrical lines.',
  },
  {
    title: 'Drilling and Blasting',
    description: 'For the safe and efficient extraction of minerals from the soil, our drilling and blasting services are essential. We guarantee accurate drilling and managed blasting to reduce environmental impact and optimise ore recovery using cutting-edge tools and methods.',
  },
]

const materials = [
  {
    title: 'Limestone',
    description: 'Delta Galaxy is a leading provider of limestone. We supply the best quality limestone in the market at a competitive price, and we\'re constantly innovating and improving our products to meet client needs.',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Marbles',
    description: 'If you\'re looking for the best marbles, look no further than Delta Galaxy. We\'re a leading provider of high-quality marbles, mined from the best quarries with the most advanced manufacturing process.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Sand',
    description: 'If you\'re in the market for sand, Delta Galaxy provides sand of the highest quality, with a wide variety perfect for any project you might have — a company you can trust.',
    image: 'https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Coal Mining',
    description: 'Our coal is of the highest quality, backed by a long history of satisfied customers. If you\'re looking for a coal mining company that delivers consistently, Delta Galaxy is the right choice.',
    image: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Granite',
    description: 'Delta Galaxy is committed to providing the highest quality granite. We have a wide variety to choose from, and our team of experts can help you find the perfect granite for your needs.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Manganese',
    description: 'We are a leading provider of manganese — we mine it, process it, and ship it to you. Manganese is essential for steel production, and Delta Galaxy provides the highest quality at the lowest price.',
    image: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=800&q=80',
  },
]

const Mining = () => {
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

      gsap.from('.capability-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.capability-grid', start: 'top 78%' },
      })

      gsap.from('.material-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.material-grid', start: 'top 78%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-[#F6F2E9]">
      <PageHero
        eyebrow="Our Services"
        title="Mining Works"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Mining Works' },
        ]}
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28 reveal-block">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-7 font-lato">
              Your partner in <span className="text-[#A85A28]">mining excellence.</span>
            </h2>
            <p className="text-[#4B5459] max-w-md">
              At Delta Galaxy, we understand the particular difficulties and nuances present in
              the mining sector. We're dedicated to offering complete solutions specifically
              designed to satisfy the wide range of demands of our mining industry clients — a
              broad variety of mining works services with an emphasis on sustainability,
              efficiency, and safety, to help enhance production and optimise operations.
            </p>
          </div>
          <div className="h-[340px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80"
              alt="Delta Galaxy mining operations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- MINING EXCELLENCE ---------------- */}
      <section className="bg-[#12181C] text-[#F6F2E9] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 reveal-block">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">What we provide</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
              Our Mining Excellence
            </h2>
          </div>

          <div className="capability-grid grid md:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div key={cap.title} className="capability-card bg-[#1C242A] border border-[#F6F2E9]/10 p-8">
                <h3 className="font-semibold text-lg mb-4">{cap.title}</h3>
                <p className="text-sm text-[#F6F2E9]/65 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CRUSHER HIGHLIGHT ---------------- */}
      <section className="relative py-32 bg-[#1C242A] overflow-hidden reveal-block">
        <img
          src="https://images.unsplash.com/photo-1610414481135-f0092c9d5ee7?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12181C] via-[#12181C]/70 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-lg">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">Equipment</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F6F2E9] mb-6 font-lato">Crusher</h2>
            <p className="text-[#F6F2E9]/75 mb-9">
              Our stone crushing plant includes vibrating feeder, jaw crusher, impact crusher,
              vibrating screen, belt conveyor and a centrally managed electric controlling system.
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

      {/* ---------------- MATERIALS GRID ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-xl mb-16 reveal-block">
          <p className="text-[#A85A28] text-xl font-semibold tracking-wide mb-4 font-lato">How mining works</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
            Materials We Supply
          </h2>
        </div>

        <div className="material-grid grid md:grid-cols-3 gap-6">
          {materials.map((item) => (
            <div key={item.title} className="material-card bg-white border border-[#DDD2BE] flex flex-col">
              <div className="h-52 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-[#4B5459] leading-relaxed mb-6 flex-1">{item.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#A85A28] hover:text-[#C97A3E] transition-colors w-fit"
                >
                  Let's talk now <ArrowRight size={15} />
                </Link>
              </div>
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

export default Mining