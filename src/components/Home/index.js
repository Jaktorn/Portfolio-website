import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import Logo from './Logo'
import './index.scss'

const ANIMATION_DELAY = 4000

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // Memoize arrays to prevent unnecessary re-renders
  const nameArray = useMemo(() => ['J', 'a', 'k', 't', 'o', 'r', 'n'], [])
  const jobArray = useMemo(
    () => ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, ANIMATION_DELAY)

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2 className="subtitle">
            Front End Developer  
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )

}

export default Home
