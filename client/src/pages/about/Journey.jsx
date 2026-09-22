import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PageHero from '../../components/common/PageHero'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: '2011',
    title: 'Founded in Patna, Bihar',
    description: 'Delta Galaxy began with just four employees and a single product line — the first step of what would become a multi-sector engineering company.',
  },
  {
    year: 'Early Years',
    title: 'Building a reputation for precision',
    description: 'Every project taken on, however small, was executed to the same standard — the discipline that would later let us take on far larger, more complex contracts.',
  },
  {
    year: 'Growth Phase',
    title: 'Expansion into mining and infrastructure at scale',
    description: 'As trust grew, so did scope — from local contracts into multi-state infrastructure and mineral resource projects across India.',
  },
  {
    year: '2025',
    title: 'Converted to a public limited company',
    description: 'Delta Galaxy Engineering Services was successfully converted from a private limited to a public limited company — opening the next chapter as we expand our footprint across India and global markets.',
  },
  {
    year: 'Present',
    title: 'A trusted name across sectors',
    description: 'Today, Delta Galaxy Engineering Services Ltd. is known for its commitment to innovation, sustainability, and operational precision — with a leadership team of seasoned professionals from diverse industries.',
  },
]

const Journey = () => {
  const timelineRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      )

      gsap.utils.toArray('.milestone-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#F6F2E9] text-lg">
      <PageHero
        eyebrow="About Delta Galaxy"
        title="Our Journey"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Our Journey' },
        ]}
        image="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto px-6 py-28 font-lato">
        <div className="max-w-xl mb-16">
          <p className="text-[#A85A28] text-sm font-semibold tracking-wide mb-4">Since 2011</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            From few people to a public limited company.
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-[#DDD2BE]" />
          <div
            ref={lineRef}
            className="absolute left-[27px] top-2 bottom-2 w-px bg-[#A85A28] origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          <div className="space-y-16">
            {milestones.map((m) => (
              <div key={m.title} className="milestone-card relative pl-20">
                <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-[#F6F2E9] border-2 border-[#A85A28] flex items-center justify-center px-1 text-center">
                  <span className="text-[10px] font-semibold text-[#A85A28] leading-tight">{m.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                <p className="text-[#4B5459] max-w-xl">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journey