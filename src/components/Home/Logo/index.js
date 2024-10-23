import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoJ from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 15, // ลดเวลาการวาดลง
        ease: "power1.inOut" // เพิ่ม easing function ให้การวาดดูนุ่มนวลขึ้น
      })

    // ปรับ delay ของ solid logo ให้แสดงหลังจากวาดเส้นไปแล้วประมาณ 80%
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 7, // delay ให้รอจนวาดเส้นไปมากพอแล้วค่อยแสดง
        duration: 2, // ลดเวลา fade in ลงเพื่อให้ transition ดูฉับไวขึ้น
        ease: "power2.inOut"
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoJ}
        alt="JavaScript Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="324"
        height="517"
        viewBox="0 0 324.000000 517.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,517.000000) scale(0.100000,-0.100000)"
          fill="none"
          stroke="#ffffff" // เปลี่ยนเป็นสีขาว
        >
          <path
            ref={outlineLogoRef}
            d="M1777 3983 c-4 -3 -7 -21 -7 -39 0 -28 -4 -33 -27 -36 l-28 -3 -5
            -1330 -5 -1330 -22 -55 c-26 -62 -63 -92 -138 -111 -66 -17 -191 -7 -241 19
            -88 45 -156 155 -169 274 -3 29 -8 68 -11 85 l-5 33 -509 0 -510 0 0 -40 c0
            -38 -2 -40 -30 -40 l-30 0 0 -92 c0 -235 67 -471 180 -638 211 -310 565 -478 
            1045 -497 370 -14 685 68 953 247 225 150 437 432 515 685 53 173 52 131 52 
            1550 l0 1320 -501 3 c-275 1 -504 -1 -507 -5z m988 -1333 l0 -1315 -23 -102 
            c-21 -99 -70 -248 -78 -240 -2 2 3 23 11 46 8 23 23 82 32 129 17 81 18 184 
            18 1412 l0 1325 -467 3 -468 2 0 23 c0 13 3 27 7 30 3 4 223 6 487 5 l481 -3 
            0 -1315z m-997 -42 l-3 -1283 -23 -58 c-27 -66 -35 -70 -22 -12 6 23 10 581 
            10 1331 0 710 3 1294 7 1297 3 4 12 7 20 7 11 0 13 -209 11 -1282z m940 57 c2 
            -747 -1 -1270 -7 -1350 -13 -161 -46 -297 -104 -418 -57 -118 -117 -199 -208 
            -277 -278 -239 -653 -356 -1079 -337 -589 28 -991 291 -1133 743 -26 82 -57 
            261 -57 328 l0 36 460 0 459 0 6 -37 c28 -181 51 -238 124 -306 58 -54 124 
            -77 221 -77 81 0 154 21 202 57 39 29 123 135 151 190 47 90 47 81 47 1409 0 
            688 3 1254 7 1257 3 4 209 6 457 5 l451 -3 3 -1220z"
            style={{
              strokeWidth: '12', // เพิ่มความหนาของเส้น
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))' // เพิ่ม glow effect
            }}
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo