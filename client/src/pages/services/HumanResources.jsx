import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    title: 'Recruitment and Staffing',
    description: 'Identifying the proper talent is not always an easy process. Our hiring and staffing services expedite the procedure and connect you with the right candidates who align with your business objectives — a meticulous, efficient process covering everything from sourcing and screening to interviews and onboarding.',
  },
  {
    title: 'HR Consulting and Advisory',
    description: 'It can be difficult to navigate the complicated world of staffing. Our team of HR specialists offers strategic consulting and advice to help you develop and execute HR policies, processes, and programs that promote corporate success — covering compliance, employee relations, and organisational growth.',
  },
  {
    title: 'Training and Development',
    description: 'To cultivate educated, motivated staff, training and development are crucial. Our initiatives aim to improve worker proficiency, increase output, and foster professional advancement, with particular training choices matched to your company\'s requirements — from technical skill training to leadership development.',
  },
]

const HumanResources = () => {
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
        title="Human Resources"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Human Resources' },
        ]}
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28 reveal-block">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-7 font-lato">
              Your <span className="text-[#A85A28]">premier human resources</span> solutions partner.
            </h2>
            <p className="text-[#4B5459] max-w-md">
              At Delta Galaxy, we understand that a company's ability to succeed is mostly
              dependent on its workforce. We're committed to offering complete HR solutions
              suited to the various requirements of companies in every sector — a broad range of
              human resources services with a focus on professionalism, ethics, and creativity to
              help you attract, retain, and develop outstanding personnel.
            </p>
          </div>
          <div className="h-[340px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
              alt="Delta Galaxy human resources team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- HIGHLIGHT BAND ---------------- */}
      <section className="relative py-32 overflow-hidden reveal-block">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12181C] via-[#12181C]/80 to-[#12181C]/35" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-lg">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">Explore the features</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F6F2E9] mb-6 leading-tight font-lato">
              Human Resources
            </h2>
            <p className="text-[#F6F2E9]/80 mb-9">
              In this competitive business environment, almost every business faces pressure to
              cut operating costs and deliver more value. Human resource management is one
              business function that can be easily outsourced to save on cost, time and effort —
              letting your organisation focus on core business while we handle the rest.
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
            Our Human Resources Solutions
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

export default HumanResources