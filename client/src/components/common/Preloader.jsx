import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '../../assets/DELTA_GALAXY.png'

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const dotsRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete?.(),
    })

    // Logo fades/scales in (0 - 0.5s)
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
      // Logo breathes once (0.5 - 1.1s)
      .to(logoRef.current, {
        scale: 1.05,
        opacity: 0.85,
        duration: 0.3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
      })
      // Dots wave through once, overlapping the tail of the breathing (0.7 - 1.6s)
      .to(
        dotsRef.current,
        {
          scale: 1.4,
          opacity: 1,
          duration: 0.25,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: 1,
          stagger: 0.1,
        },
        0.7
      )
      // Hold briefly, then exit (1.6 - 2.2s)
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      }, 1.7)

    return () => tl.kill()
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-[#FDFCF9]"
    >
      <img
        ref={logoRef}
        src={logo}
        alt="Delta Galaxy"
        className="w-90 h-70 opacity-0 scale-95"
      />

      <div className="flex items-center gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className="w-2.5 h-2.5 rounded-full bg-[#A85A28] opacity-40"
          />
        ))}
      </div>
    </div>
  )
}

export default Preloader;