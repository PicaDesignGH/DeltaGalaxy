import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '../../assets/DELTA_GALAXY.png'

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete?.(),
    })

    tl.to(logoRef.current, {
      y: 0,            // slides up into the center
      opacity: 1,
      duration: 0.9,
      ease: 'back.out(1.6)',  // slight overshoot/bounce at the end
    })
      // the moment the logo is fully centered, exit
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      }, '+=0.2') // small pause so it doesn't cut instantly

    return () => tl.kill()
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFCF9]"
    >
      <img
        ref={logoRef}
        src={logo}
        alt="Delta Galaxy"
        className="w-58 h-36 opacity-0 translate-y-24"
      />
    </div>
  )
}

export default Preloader