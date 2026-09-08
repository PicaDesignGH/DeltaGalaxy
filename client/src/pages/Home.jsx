import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowLeft, ArrowRight, Droplet, Zap, Mountain, Building2, Plus, Minus, Quote} from 'lucide-react'
import InfraPic from "../assets/infras-home-about.png";

import GMRLogo from "../assets/GMRLogo.png";
import DBLLogo from "../assets/dblLogo.png";
import APCOLogo from "../assets/apcoLogo.png";
import CoalIndiaLogo from "../assets/coalIndiaLogo.png";
import PNCLogo from "../assets/PNCLogo.png";

const Home = () => {
	const projectTrackRef = useRef(null);
	const marqueeRef = useRef(null);

	const scrollProjects = (direction) => {
		if (!projectTrackRef.current) return
		projectTrackRef.current.scrollBy({ left: direction * 400, behavior: 'smooth' })
	}

	useEffect(() => {
	  const ctx = gsap.context(() => {
	    gsap.to(marqueeRef.current, {
	      xPercent: -50,
	      duration: 25,
	      ease: "none",
	      repeat: -1,
	    })
	  })

	  return () => ctx.revert()
	}, [])

  const clientLogos = [  GMRLogo, DBLLogo, APCOLogo, CoalIndiaLogo, PNCLogo,]

  const testimonials = [
    {
      title: 'Responsive and Solution-Oriented',
      quote: "I can't say enough good things about the team at Delta Galaxy Engineering Services. They were incredibly responsive and solution-oriented throughout our engagement. Whenever we encountered challenges, they were quick to propose innovative solutions and ensure that our project stayed on track.",
      name: 'Uday Deka',
      role: 'Client Partner',
    },
    {
      title: 'Efficient and Professional Service',
      quote: 'We have only had great experiences working with Delta Galaxy Engineering Services. From the first meeting to the finished product, they showed professionalism, efficiency, and a thorough comprehension of our project specifications.',
      name: 'Ramesh Soni',
      role: 'Client Partner',
    },
    {
      title: 'Exceptional Service and Expertise',
      quote: 'Working with Delta Galaxy Engineering Services has been an absolute pleasure. Their team displayed exceptional professionalism and expertise throughout our project. They took the time to understand our requirements thoroughly.',
      name: 'Suraj Josi',
      role: 'Client Partner',
    },
    {
      title: 'Reliable Partner for Complex Projects',
      quote: 'For several intricate engineering tasks, we have depended on Delta Galaxy Engineering Services, and they have continuously produced excellent outcomes. Their engineers are incredibly experienced and talented.',
      name: 'Shivaji Rathav',
      role: 'Client Partner',
    },
  ]

  const [testiIndex, setTestiIndex] = useState(0)

  const visibleCount = 3
  const maxIndex = testimonials.length - visibleCount

  const goTestimonial = (direction) => {
    setTestiIndex((prev) =>
      Math.max(0, Math.min(prev + direction, maxIndex))
    )
  }

  const services = [
    {
      icon: Droplet,
      tag: 'Irrigation & Water',
      title: 'Irrigation Systems, Water Supply & Drain Cleanage',
      description: "We undertake portions of large contracts from major entities and execute them — government contracts, either directly or through subcontracting, for the construction of water distribution systems in villages and towns, plus cleaning and maintenance of drainage systems.",
      projects: [
        { name: 'Ambikapur Water Supply Infrastructure', location: 'Ambikapur, Chhattisgarh', size: 'Rs. 55 crores', client: 'Patel Infrastructure' },
        { name: 'Jaunpur Water Supply Infrastructure', location: 'Jaunpur, Uttar Pradesh', size: 'Rs. 51 crores', client: 'Afcons Infrastructure' },
        { name: 'Bacteriology Treatment Plants', location: 'All over UP', size: '—', client: '—' },
        { name: 'Internal drainage cleaning works', location: '—', size: '—', client: '—' },
      ],
    },
    {
      icon: Zap,
      tag: 'Electrical & Hydro',
      title: 'Electrical Systems & Hydro Electrical Power Generation',
      description: 'Hydropower generation forms a major part of revenue for Delta Galaxy. These contracts have a long gestation period — our recent project in Kwar is valued at up to Rs. 230 crores. We also take contracts for building electrical systems for efficient power distribution.',
      projects: [
        { name: 'Shongtong Karcham HEP', location: 'Kinnaur, Himachal Pradesh', size: 'Rs. 70 crores', client: 'Patel Engineering' },
        { name: 'Jaunpur Electrification Program', location: 'Jaunpur, Uttar Pradesh', size: 'Rs. 25 crores', client: 'Purvanchal Vidyut Vitran Nigam Ltd' },
        { name: 'BHEL Thermal Power Plant', location: 'Kodarma, Jharkhand', size: 'Rs. 20 crores', client: 'POWERMECH Projects Limited' },
        { name: 'Thermal Power Plant', location: 'Sipat, Chhattisgarh', size: 'Rs. 200+ crores', client: 'NTPC (VPRPL)' },
      ],
    },
    {
      icon: Mountain,
      tag: 'Mining',
      title: 'Mining Works & Mineral Projects',
      description: 'We lead in providing premium mining materials and mineral resources — government-approved products, ethical extraction and environmentally responsible practices, delivering BT metal, sand, marble, granite, coal and limestone across India.',
      projects: [
        { name: 'Mining Work in Gwalior', location: 'Gwalior, Madhya Pradesh', size: '—', client: '—' },
        { name: 'Riverbed Mining in Haridwar', location: 'Haridwar', size: '—', client: '—' },
        { name: 'Sand Mining in Bhind', location: 'Bhind, Madhya Pradesh', size: '—', client: '—' },
        { name: 'Iron Ore Mining', location: 'Girewal Raikela Mines & Rungta Sanindpur Mines, Odisha', size: '—', client: '—' },
      ],
    },
    {
      icon: Building2,
      tag: 'Real Estate',
      title: 'Real Estate Services',
      description: 'Construction services for government-owned and government-funded facilities — roads, government structures, railway lines — spanning project management, design-build, construction and renovation.',
      projects: [
        { name: 'Jaunpur Road Construction', location: 'Jaunpur, Uttar Pradesh', size: '—', client: 'Road for movement of heavy machinery' },
        { name: 'Construction of Staff Quarters', location: 'Jammu & Kashmir', size: '—', client: '—' },
        { name: 'Government Buildings', location: 'Lucknow, Uttar Pradesh', size: '—', client: '—' },
        { name: 'NH119 Construction', location: 'Samastipur, Bihar — 47 Km', size: '—', client: '—' },
      ],
    },
  ]

  const [expandedService, setExpandedService] = useState(null)

  const toggleService = (index) => {
    setExpandedService((prev) => (prev === index ? null : index))
  }

  const capabilities = [
    {
      title: 'Innovative Solutions',
      description: 'We are committed to coming up with original answers to your technical problems since we are innovative beings.',
    },
    {
      title: 'Expertise and Experience',
      description: 'We have the know-how and abilities to take on even the most challenging engineering tasks, owing to our years of experience and broad network of professionals.',
    },
    {
      title: 'Customer-Centric Approach',
      description: 'At every stage of the method, we seek to exceed your expectations and place the utmost priority on customer satisfaction.',
    },
    {
      title: 'Quality Assurance',
      description: 'We guarantee that our deliverables fulfill your specifications by upholding the strictest assurance of quality standards as part of our constant commitment to quality.',
    },
  ]

  const [openCapability, setOpenCapability] = useState(0)

  const toggleCapability = (index) => {
    setOpenCapability((prev) => (prev === index ? null : index))
  }

  return (
    <div className="bg-[#F6F2E9] text-[#12181C]">

      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[100vh] flex flex-col justify-end bg-[#12181C] text-[#F6F2E9] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
          alt="Infrastructure project"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12181C]/70 via-[#12181C]/20 to-[#12181C]/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-[95%]">
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-2xl">
            Infrastructure and mineral resources, engineered for scale.
          </h1>
          <p className="mt-6 max-w-md text-[#F6F2E9]/80">
            We plan, build and operate the roads, structures and mining assets
            that regional growth is built on — from first survey to final handover.
          </p>
          <div className="flex gap-4 mt-9">
            <Link to="/projects" className="px-6 py-3.5 bg-[#A85A28] hover:bg-[#C97A3E] transition-colors text-sm font-semibold">
              View our projects
            </Link>
            <Link to="/contact" className="px-6 py-3.5 border border-[#F6F2E9]/40 hover:border-[#F6F2E9] transition-colors text-sm font-semibold">
              Talk to our team
            </Link>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative z-10 border-t border-[#F6F2E9]/15 mt-14 grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto w-full">
          {[
            ['15+', 'Years in infrastructure & mining'],
            ['60+', 'Projects delivered'],
            ['8', 'States of operation'],
            ['1,200+', 'People on active sites'],
          ].map(([num, label]) => (
            <div key={label} className="px-6 py-7 border-r border-[#F6F2E9]/15 last:border-r-0">
              <p className="text-2xl md:text-3xl font-semibold">{num}</p>
              <p className="text-xs text-[#F6F2E9]/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="relative max-w-5xl mx-auto px-6 py-28 text-center overflow-hidden">

        {/* Diagonal chevron accent — top left */}
        <div className="absolute -top-6 -left-8 flex gap-2 -rotate-[18deg] pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-7 h-20 bg-[#A85A28] skew-x-[-18deg]"
              style={{ opacity: 1 - i * 0.22 }}
            />
          ))}
        </div>

        {/* Diagonal chevron accent — bottom right */}
        <div className="absolute -bottom-6 -right-8 flex gap-2 -rotate-[18deg] pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-7 h-20 bg-[#A85A28] skew-x-[-18deg]"
              style={{ opacity: 0.22 + i * 0.22 }}
            />
          ))}
        </div>

        <p className="relative text-[#A85A28] text-xl font-semibold tracking-wide mb-5">
          About Delta Galaxy
        </p>

        <h2 className="relative text-3xl md:text-5xl font-semibold leading-tight mb-3">
          Welcome to <span className="text-[#A85A28]">Delta Galaxy</span>
        </h2>

        <p className="relative text-xl md:text-2xl font-semibold text-[#12181C]/80 mb-9 max-w-2xl mx-auto">
          Your partner for infrastructure and mining solutions.
        </p>

        <div className="relative max-w-2xl mx-auto space-y-5 text-[#4B5459] mb-9">
          <p>
            At Delta Galaxy, our expertise lies in offering all-inclusive
            infrastructure and mining solutions, customised to satisfy the
            varied requirements of companies operating across sectors.
          </p>
          <p>
            Our team of seasoned specialists and unwavering dedication to
            perfection enable us to deliver work engineered to optimise
            infrastructure, boost productivity, and stimulate growth.
          </p>
        </div>

        <Link
          to="/about"
          className="relative inline-block text-lg font-semibold text-[#12181C] border-b-2 border-[#A85A28] pb-1 hover:text-[#A85A28] transition-colors"
        >
          More about us →
        </Link>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="relative py-28 bg-[#12181C] text-[#F6F2E9] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12181C] via-[#12181C]/85 to-[#12181C]/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-5 bg-[#A85A28]" />
            <p className="text-sm font-semibold tracking-wide text-[#F6F2E9]/80">WHY CHOOSE US</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-16 max-w-2xl">
            Building trust through<br />
            <span className="text-[#C97A3E]">quality and experience</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              ['Projects Completed Successfully', '00+'],
              ['Years of Experience', '00+'],
              ['Ongoing Projects', '00+'],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#F6F2E9]/5 border border-[#F6F2E9]/15 p-7 backdrop-blur-sm">
                <p className="text-sm font-semibold text-[#F6F2E9]/80 mb-4 leading-snug">{label}</p>
                <div className="h-px bg-[#F6F2E9]/20 mb-5" />
                <p className="text-4xl md:text-5xl font-semibold text-[#C97A3E]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

		{/* ---------------- CLIENTS MARQUEE ---------------- */}
		<section className="border-t border-b border-[#DDD2BE] py-12 overflow-hidden">
			<p className="max-w-6xl mx-auto px-4 text-[#A85A28] text-xl font-semibold tracking-wide mb-14">
				Our Happy Clients
			</p>

			<div className="w-full overflow-hidden">
			  <div ref={marqueeRef} className="flex w-max">

			    {/* First set */}
			    <div className="flex items-center shrink-0">
			      {clientLogos.map((logo, i) => (
			        <div
			          key={`first-${i}`}
			          className="w-[250px] md:w-[290px] h-24 flex items-center justify-center"
			        >
			          <img
			            src={logo}
			            alt="Client logo"
			            className="max-w-[190px] max-h-14 w-auto object-contain"
			          />
			        </div>
			      ))}
			    </div>

			    {/* Identical second set */}
			    <div className="flex items-center shrink-0">
			      {clientLogos.map((logo, i) => (
			        <div
			          key={`second-${i}`}
			          className="w-[250px] md:w-[290px] h-24 flex items-center justify-center"
			        >
			          <img
			            src={logo}
			            alt="Client logo"
			            className="max-w-[190px] max-h-14 w-auto object-contain"
			          />
			        </div>
			      ))}
			    </div>
			  </div>
			</div>
		</section>

      {/* ---------------- TESTIMONIALS ---------------- */}
    <section className="border-t border-[#DDD2BE] py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#A85A28] text-xl font-semibold mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold">What Our Clients Say</h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => goTestimonial(-1)}
              disabled={testiIndex === 0}
              className="w-11 h-11 rounded-full border border-[#12181C] flex items-center justify-center hover:bg-[#12181C] hover:text-[#F6F2E9] transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#12181C]"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => goTestimonial(1)}
              disabled={testiIndex === maxIndex}
              className="w-11 h-11 rounded-full border border-[#12181C] flex items-center justify-center hover:bg-[#12181C] hover:text-[#F6F2E9] transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#12181C]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${testiIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full md:w-1/3 shrink-0 pr-10">
                  <h3 className="font-semibold text-lg mb-4">{t.title}</h3>
                  <p className="text-[#4B5459] mb-6">{t.quote}</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-[#4B5459]/70">{t.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTestiIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === testiIndex ? 'w-6 bg-[#A85A28]' : 'w-2 bg-[#DDD2BE]'
                }`}
                aria-label={`Go to testimonial set ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ACCORDION ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div className="h-[420px] md:h-[520px] sticky top-24">
            <img
              src="https://deltagalaxy.com/wp-content/uploads/2024/03/home-faq.png"
              alt="Delta Galaxy site team"
              className="w-full h-10/12 object-cover"
            />
          </div>

          <div>
            {capabilities.map((item, index) => {
              const isOpen = openCapability === index

              return (
                <div
                  key={item.title}
                  className="border border-[#DDD2BE] rounded-xl px-6 mb-4"
                >
                  <button
                    onClick={() => toggleCapability(index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <span className="shrink-0 w-9 h-9 rounded-full border border-[#F98D21] flex items-center justify-center text-[#12181C]">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-6'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#4B5459] max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- MEDIA / EVENT COVERAGE ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="mb-12 max-w-3xl">
          <p className="text-[#A85A28] text-xl font-semibold tracking-wide mb-4">
            In the spotlight
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            <span className="text-[#FF8C00]">
              Delta Galaxy Engineering Services
            </span>{" "}
            billboards at the India–South Africa match in Ranchi on 30 November
            2025
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-3 h-[560px] bg-[#FAEBD7] p-5 rounded-2xl">

          {/* Left column */}
          <div className="grid grid-rows-2 gap-3 min-h-0">

            <div className="overflow-hidden min-h-0">
              <img
                src="https://deltagalaxy.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-04-at-5.07.17-PM-1.jpeg"
                alt="Delta Galaxy billboard at stadium"
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="overflow-hidden min-h-0">
              <img
                src="https://deltagalaxy.com/wp-content/uploads/2025/12/image1.png"
                alt="Stadium crowd view"
                className="w-full h-full object-cover block"
              />
            </div>

          </div>

          {/* Right side */}
          <div className="md:col-span-2 grid grid-rows-2 gap-3 min-h-0">

            {/* Top wide image */}
            <div className="overflow-hidden min-h-0">
              <img
                src="https://deltagalaxy.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-04-at-5.10.38-PM.jpeg"
                alt="Players on the field with Delta Galaxy billboard"
                className="w-full h-full object-fill block"
              />
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-3 min-h-0">

              {/* Quote card */}
              <div className="relative bg-[#12181C] text-[#F6F2E9] p-8 flex flex-col justify-center overflow-hidden">
                <Quote
                  size={28}
                  className="relative z-10 text-[#F98D21] mb-4"
                />

                <p className="relative z-10 text-xl md:text-2xl font-semibold text-[#F6F2E9] leading-snug">
                  Cheering Loudest
                </p>

                <p className="relative z-10 text-[#F6F2E9]/70">
                  next to the scoreboard
                </p>
              </div>

              {/* Scorecard image */}
              <div className="overflow-hidden min-h-0">
                <img
                  src="https://deltagalaxy.com/wp-content/uploads/2025/12/IMAGE2.png"
                  alt="Scoreboard with Delta Galaxy branding"
                  className="w-full h-full object-cover block"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      {/*<section className="bg-[#3E5F56] text-[#F6F2E9] py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold max-w-lg">
            Recently converted to a public limited company — here's what that means for how we work with you.
          </h2>
          <Link to="/investors" className="px-6 py-3.5 bg-[#F6F2E9] text-[#12181C] font-semibold text-sm hover:bg-white transition-colors">
            View COI & investor info
          </Link>
        </div>
      </section>*/}

      <section className="bg-[#3E5F56] text-[#F6F2E9] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            <span className="text-[#F6F2E9]">Start Building</span>
            <br />
            <span className="text-[#C97A3E]">With Confidence</span>
          </h2>

          <p className="text-[#F6F2E9]/75 mb-9 max-w-md mx-auto">
            Recently converted to a public limited company — here's what that means
            for how we work with you.
          </p>

          <Link
            to="/investors"
            className="inline-block px-7 py-3.5 bg-[#F6F2E9] text-[#12181C] font-semibold text-sm hover:bg-gray-300 transition-colors rounded-2xl"
          >
            View COI & Investor Info
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home