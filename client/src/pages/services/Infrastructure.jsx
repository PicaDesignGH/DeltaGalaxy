import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    title: 'Infrastructure Design and Planning',
    description: 'Our experienced team works closely with clients to comprehend their particular needs and offer custom infrastructure solutions that support their business objectives — from network design to system architecture, built to handle both present requirements and future expansion.',
  },
  {
    title: 'Implementation and Deployment',
    description: 'Bringing infrastructure projects to life requires seamless implementation and deployment. We leverage industry best practices to ensure smooth execution, timely delivery, and minimal disruptions — every phase, from procurement to construction, executed with precision.',
  },
  {
    title: 'Infrastructure Management and Support',
    description: 'Our all-inclusive management and support services guarantee that your infrastructure stays dependable, safe, and performance-optimised — proactive monitoring, troubleshooting, and maintenance, so you can concentrate on your primary business goals.',
  },
]

const offerings = [
  {
    title: 'Building Construction',
    description: 'Delta Galaxy is a leading provider of construction services, with a focus on quality, safety, and customer satisfaction. Our team has the experience and expertise to get the job done right, and we\'re committed to providing the best possible service to our clients.',
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Building Material Supplier',
    description: 'Delta Galaxy is your one-stop shop for all your building material needs. We carry a wide variety of materials, from bricks and mortar to wood and nails — here to help you build with confidence, backed by reliable, timely supply.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Construction Support Services',
    description: 'We have a wide range of construction support services that can help with your project. Our team of experts can help you with every step of the process, from planning to execution — when it comes to construction support, Delta Galaxy is the company you can trust.',
    image: 'https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=800&q=80',
  },
]

const Infrastructure = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-block').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        })
      })

      gsap.from('.capability-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.capability-grid',
          start: 'top 78%',
        },
      })

      gsap.from('.offering-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.offering-grid',
          start: 'top 78%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-[#F6F2E9]">
      <PageHero
        eyebrow="Our Services"
        title="Infrastructure Services"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Infrastructure Services' },
        ]}
        image="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28 reveal-block">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-7 font-lato">
              Your partner for <span className="text-[#A85A28]">infrastructure solutions.</span>
            </h2>
            <p className="text-[#4B5459] max-w-md">
              At Delta Galaxy, our expertise is in offering all-inclusive infrastructure services
              that are customised to satisfy the varied requirements of companies operating in
              different sectors. Our team of seasoned specialists and unwavering dedication to
              perfection enable us to provide a wide range of solutions engineered to optimise
              infrastructure, boost productivity, and stimulate expansion.
            </p>
          </div>
          <div className="h-[340px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80"
              alt="Delta Galaxy infrastructure project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- WHAT WE PROVIDE ---------------- */}
      <section className="bg-[#12181C] text-[#F6F2E9] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 reveal-block">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">What we provide</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
              End-to-end infrastructure capability.
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

      {/* ---------------- REAL ESTATE OFFERINGS ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-xl mb-16 reveal-block">
          <p className="text-[#A85A28] text-xl font-semibold tracking-wide mb-4 font-lato">What we offer</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
            Our Real Estate Services
          </h2>
        </div>

        <div className="offering-grid grid md:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <div key={item.title} className="offering-card bg-white border border-[#DDD2BE] flex flex-col">
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

export default Infrastructure