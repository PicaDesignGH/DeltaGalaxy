import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../../components/common/PageHero'

import AmitPic from "../../assets/AmitKumarNew.jpg.jpeg"
import RohitashPic from "../../assets/RohitashSinghNew.jpg.jpeg"
import ShashankPic from '../../assets/ShashankNew.jpg.jpeg'
import VishalPic from "../../assets/VishalSinghNew.jpg.jpeg"
import VikramPic from "../../assets/VikramDhar.jpeg"
import BharatPic from "../../assets/BharatBhistNew.jpg.jpeg"

gsap.registerPlugin(ScrollTrigger)

// TODO: swap in full bios once the team sends the un-truncated versions
const team = [
  {
    name: 'Amit Kumar',
    role: 'Chairman',
    bio: 'Our young entrepreneur and Chairman Amit Kumar, an engineering graduate, is firmly committed to the belief that business organizations have a deep social responsibility alongside commercial success.',
    photo: AmitPic,
  },
  {
    name: 'Rohitash Singh',
    role: 'Managing Director',
    bio: 'Rohitash Singh is a computer engineer from Pune University. He was certified in project management through the University of Washington, USA, and leads Delta Galaxy’s strategic and delivery operations.',
    photo: RohitashPic,
  },
  {
    name: 'Shashank Singh',
    role: 'WTD',
    bio: 'Shashank Singh, currently the General Manager of Delta Galaxy, has created large transformations in the Global Automation industry and was an integral part of Delta Galaxy’s growth journey.',
    photo: ShashankPic,
  },
  {
    name: 'Vishal Singh',
    role: 'GM Projects and Operations',
    bio: 'Mr. Vishal Singh serves as the General Manager – Projects & Operations at Delta Galaxy Engineering Services Ltd., overseeing execution across infrastructure and mining engagements.',
    photo: VishalPic,
  },
  {
    name: 'Vikram Dhar',
    role: 'Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    photo: VikramPic,
  },
  {
    name: 'Bharat Bhist',
    role: 'Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    photo: BharatPic,
  },
]

const Team = () => {
  const trackRef = useRef(null)

  const scrollTeam = (direction) => {
    if (!trackRef.current) return

    trackRef.current.scrollBy({
      left: direction * 560,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-card', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top 78%',
        },
      })
    }, trackRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#F6F2E9]">

      {/* ==================================================
          PAGE HERO
          ================================================== */}
      <PageHero
        eyebrow="About Delta Galaxy"
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Our Team' },
        ]}
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ==================================================
          LEADERSHIP / TEAM SECTION
          ================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-28 font-lato">

        {/* Section Heading + Navigation */}
        <div className="flex items-end justify-between mb-16">

          <div className="max-w-xl">
            <p className="text-[#A85A28] text-xl font-semibold tracking-wide mb-4">
              Leadership
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Our Professionals
            </h2>
          </div>

          <div className="hidden md:flex gap-3">

            <button
              onClick={() => scrollTeam(-1)}
              className="w-11 h-11 rounded-full border border-[#12181C] flex items-center justify-center hover:bg-[#12181C] hover:text-[#F6F2E9] transition-colors"
              aria-label="Previous team members"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() => scrollTeam(1)}
              className="w-11 h-11 rounded-full border border-[#12181C] flex items-center justify-center hover:bg-[#12181C] hover:text-[#F6F2E9] transition-colors"
              aria-label="Next team members"
            >
              <ArrowRight size={18} />
            </button>

          </div>
        </div>


        {/* ==================================================
            SCROLLING TEAM TRACK
            ================================================== */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >

          {team.map((member) => (

            <div
              key={member.name}
              className="team-card snap-start shrink-0 w-[85vw] sm:w-[520px] bg-white/30 border border-[#DDD2BE] rounded-xl overflow-hidden group"
            >

              <div className="flex flex-col sm:flex-row">

                {/* ==================================================
                    TEAM MEMBER PHOTO

                    Fixed height makes every image occupy the
                    complete card height like Vikram's image.
                    object-cover crops excess background while
                    object-top keeps the face/head positioned correctly.
                    ================================================== */}
                <div className="sm:w-2/5 h-[360px] sm:h-[360px] bg-[#DDD2BE]/40 overflow-hidden shrink-0">

                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top scale-[1.3] origin-top transition-transform duration-500 group-hover:scale-[1.35]"
                  />

                </div>


                {/* ==================================================
                    TEAM MEMBER DESCRIPTION
                    ================================================== */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">

                  <h3 className="font-semibold text-lg">
                    {member.name}
                  </h3>

                  <p className="text-sm text-[#A85A28] font-semibold mb-3">
                    {member.role}
                  </p>

                  <p className="text-sm text-[#4B5459] leading-relaxed">
                    {member.bio}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}

export default Team;