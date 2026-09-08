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

    // Breathing pulse on the logo — repeats a few times within the load window
    tl.to(logoRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    })
      .to(logoRef.current, {
        opacity: 0.35,
        duration: 0.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 3,
      })
      // Exit: whole screen fades out
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })

    return () => tl.kill()
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAEBD7]"
    >
      <img
        ref={logoRef}
        src={logo}
        alt="Delta Galaxy"
        className="w-30 h-30 opacity-0"
      />
    </div>
  )
}

export default Preloader;