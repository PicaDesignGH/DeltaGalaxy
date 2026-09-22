import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    title: 'Equipment Sales and Rentals',
    description: 'We can help you whether you\'re looking to buy or rent equipment. We have a large selection of industrial machinery in our inventory, ranging from precision tools for manufacturing to heavy-duty machinery for building projects.',
  },
  {
    title: 'Equipment Leasing and Financing',
    description: 'We understand that purchasing new machinery might require a substantial financial outlay. That\'s why we provide various financing and lease alternatives so you can get the equipment you want without going over budget.',
  },
  {
    title: 'Equipment Maintenance and Repair',
    description: 'Maintaining optimal equipment condition is crucial to optimising output and reducing idle time. Our team of specialists offers thorough maintenance and repair services, including emergency repairs and periodic inspections.',
  },
]

const gallery = [
  { alt: 'Large mining truck on site', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80' },
  { alt: 'Tower cranes on a construction site', image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=600&q=80' },
  { alt: 'Excavator bucket close up', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { alt: 'Agricultural machinery in a field', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80' },
]

const miningEquipmentLeft = [
  'Large Mining Trucks',
  'Hydraulic Mining Shovels',
  'Large Dozers',
  'Electric Rope Shovels',
  'Rotary Drill Rigs and Rock Drills',
]

const miningEquipmentRight = [
  'Motor Graders',
  'Large Wheel Loaders',
  'Draglines',
  'Wheel Tractor Scrapers',
  'Underground Mining Loaders and Trucks',
]

const Equipment = () => {
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
        title="Equipment & Machinery for Industrial Works"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Equipments & Machinery' },
        ]}
        image="https://images.unsplash.com/photo-1580901369630-7a878e5fbe8b?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28 reveal-block">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-7 font-lato">
              Your partner for <span className="text-[#A85A28]">industrial equipment solutions.</span>
            </h2>
            <p className="text-[#4B5459] max-w-md">
              At Delta Galaxy, we recognise the vital role top-notch gear and equipment play in
              the success of industrial projects. We're committed to offering premium solutions
              specially designed to satisfy the demanding requirements of our clients across a
              range of industries — with an emphasis on innovation, dependability, and customer
              satisfaction.
            </p>
          </div>
          <div className="h-[340px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80"
              alt="Delta Galaxy industrial equipment facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- DUST COLLECTION HIGHLIGHT ---------------- */}
      <section className="relative py-32 overflow-hidden reveal-block">
        <img
          src="https://images.unsplash.com/photo-1541444318060-1a894ff2b3c6?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12181C] via-[#12181C]/75 to-[#12181C]/25" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-lg">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">Explore the features</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F6F2E9] mb-6 leading-tight font-lato">
              Equipment & Machinery
            </h2>
            <p className="text-[#F6F2E9]/80 mb-9">
              Our engineering team can help you design a turnkey dust collection system and
              identify the right type of dust collector, filter media, and air-to-cloth ratio for
              your dust load. We've designed, fabricated and installed both large-scale systems
              for foundries and metalworking applications, and modular, compact systems for
              welding booths.
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
            Our Industrial Equipment Solutions
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

      {/* ---------------- EQUIPMENT GALLERY ---------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="max-w-2xl mb-12 reveal-block">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 font-lato">
            Our Industrial Equipments
          </h2>
          <p className="text-[#4B5459]">
            Here are a few examples of industrial equipment manufacturing applications
            we've built dust collection systems for.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-5">
          {gallery.map((item) => (
            <div key={item.alt} className="gallery-item h-56 overflow-hidden">
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- MINING EQUIPMENT LIST BAND ---------------- */}
      <section className="relative py-24 overflow-hidden reveal-block">
        <img
          src="https://images.unsplash.com/photo-1610414481135-f0092c9d5ee7?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#12181C]/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F6F2E9] mb-10 font-lato">
            Mining Equipments
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-3 max-w-2xl">
            {[...miningEquipmentLeft, ...miningEquipmentRight].length && (
              <>
                <ul className="space-y-3">
                  {miningEquipmentLeft.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#F6F2E9]">
                      <Check size={16} className="text-[#C97A3E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {miningEquipmentRight.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#F6F2E9]">
                      <Check size={16} className="text-[#C97A3E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
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

export default Equipment