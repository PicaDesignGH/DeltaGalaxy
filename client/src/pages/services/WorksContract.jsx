import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    title: 'Construction Services',
    description: 'We have the knowledge and resources to manage construction projects of all shapes and sizes, from residential structures to business complexes. Our skilled group of engineers, architects, and building specialists guarantees that your project will be finished on schedule, on budget, and to the best possible standards.',
  },
  {
    title: 'Renovation and Remodeling',
    description: 'Our remodeling and restoration services can give your space a fresh look, whether you\'re looking to update or totally revamp your current area. We collaborate closely with you to bring about your vision while causing the least amount of disruption to your regular business activities.',
  },
  {
    title: 'Project Management',
    description: 'Construction project management can be difficult and time-consuming. By taking on all of the project\'s management tasks, we let you focus on your primary business while we manage the project from beginning to end — covering everything from planning and scheduling to procurement and quality control.',
  },
]

const tenders = [
  {
    title: 'Government Tenders',
    description: 'We take on government tenders and help improve the quality of their services. We have a wide range of products and services that can help the government improve the quality of what it delivers.',
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Private Tenders',
    description: 'We take on private tenders and offer the best possible service. Our team of experts works with you to get the best possible outcome, understanding that private tenders can be a sensitive issue — we work to ensure your privacy is protected.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
  },
]

const WorksContract = () => {
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

      gsap.from('.tender-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.tender-grid', start: 'top 78%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-[#F6F2E9]">
      <PageHero
        eyebrow="Our Services"
        title="Works Contract Services"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Works Contract Services' },
        ]}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28 reveal-block">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-7 font-lato">
              Your <span className="text-[#A85A28]">reliable works contract</span> solutions partner.
            </h2>
            <p className="text-[#4B5459] max-w-md">
              Here at Delta Galaxy, we specialise in offering clients across a range of sectors
              excellent works contract services. We provide an extensive array of contracting
              solutions customised to fulfil the various demands of our clients, with a focus on
              professionalism, effectiveness, and client fulfilment — building, remodelling, and
              maintenance services to meet your needs.
            </p>
          </div>
          <div className="h-[340px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
              alt="Delta Galaxy works contract signing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- HIGHLIGHT BAND ---------------- */}
      <section className="relative py-32 overflow-hidden reveal-block">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12181C] via-[#12181C]/78 to-[#12181C]/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-lg">
            <p className="text-[#C97A3E] text-xl font-semibold tracking-wide mb-4 font-lato">Explore the features</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F6F2E9] mb-6 leading-tight font-lato">
              Works Contract
            </h2>
            <p className="text-[#F6F2E9]/80 mb-9">
              We place a high value on cooperation, open communication, and openness to make sure
              that client demands and objectives are satisfied at every stage of the project.
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
            Our Works Contract Solutions
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

      {/* ---------------- TENDERS GRID ---------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="max-w-xl mb-16 reveal-block">
          <p className="text-[#A85A28] text-xl font-semibold tracking-wide mb-4 font-lato">How we work</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight font-lato">
            Our Works Contract Services
          </h2>
        </div>

        <div className="tender-grid grid md:grid-cols-2 gap-6">
          {tenders.map((item) => (
            <div key={item.title} className="tender-card bg-white border border-[#DDD2BE] flex flex-col">
              <div className="h-64 overflow-hidden">
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

export default WorksContract