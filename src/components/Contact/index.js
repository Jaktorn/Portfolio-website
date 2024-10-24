import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './index.scss'

// สร้าง Icon ใหม่
const customMarkerIcon = new Icon({
  iconUrl: '/path/to/your/icon.png', // ใส่ path ของรูปภาพไอคอน
  iconSize: [32, 32], // ขนาดของไอคอน
  iconAnchor: [16, 32], // จุดยึดของไอคอน
  popupAnchor: [0, -32], // จุดที่ป๊อปอัพแสดงเมื่อคลิก
})

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          บ้านเอื้องฟ้า
          <br />
          bangkok,
          <br />
          บ้านเอื้องฟ้า 218/2 ซอย วงศ์สว่าง 11 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพมหานคร 10800 <br />
          <br />
          <span>jaktopn@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[13.82956, 100.53206]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.82956, 100.53206]} icon={customMarkerIcon}>
              <Popup>บ้านเอื้องฟ้าอยู่ที่นี่ แวะมาทักทายกันได้ :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact