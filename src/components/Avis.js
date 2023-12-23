import React, { useEffect, useState } from 'react'
import { AvisConatiner, AvisContent } from '../data'
import styled, { keyframes } from 'styled-components'

function Avis() {
  const title = `Lisez ce que disent nos clients`

  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('avisprosect')
      const top = contactElem.getBoundingClientRect().top
      if (top < window.innerHeight && top > 0) {
        setAlert(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

  const AnimatedHeader = styled.div`
    animation: ${fadeInDown} 1s ease;
  `

  const zoomInAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

  const ZoomDiv = styled.div`
    animation: ${zoomInAnimation} 1s both;
  `
  return (
    <React.Fragment>
      <section
        className="row"
        id="avisprosect"
        style={{ backgroundColor: '#e5521d' }}
      >
        <div className="container my-5">
          <AnimatedHeader>
            <h1
              className="text-center text-white fw-bold d-none d-md-block"
              style={{ fontSize: '3em' }}
            >
              {title}
            </h1>
            <h3
              className="text-center text-white d-block d-md-none"
              style={{ fontWeight: '800' }}
            >
              {title}
            </h3>
          </AnimatedHeader>

          <div className="row justify-content-center px-2 px-md-0">
            {AvisContent.map(({ id, cover, name, title }) =>
              AvisConatiner(id, cover, name, title, ZoomDiv)
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Avis
