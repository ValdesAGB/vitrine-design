import React, { useEffect, useState } from 'react'
import { CapacitiesContainer } from '../data'
import styled, { keyframes } from 'styled-components'

function Capacities() {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('capacities')
      const top = contactElem.getBoundingClientRect().top
      if (top < window.innerHeight && top > 0) {
        setAlert(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInLeftBig = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

  const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

  const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

  const FadeInRightCard = styled.div`
    animation: ${fadeInRight} 1s ease-out;
  `
  const FadeInLeftCard = styled.div`
    animation: ${fadeInLeft} 1s ease-out;
  `

  const FadInUpCard = styled.div`
    animation: ${fadeInUp} 1s ease;
  `

  const AnimatedDiv = styled.div`
    animation: ${fadeInLeftBig} 700ms ease-out;
  `

  return (
    <React.Fragment>
      <section
        className="row"
        id="capacities"
        style={{ backgroundColor: '#2abbca' }}
      >
        <div className="">
          <div className="my-4 my-md-5">
            <h1 className=" text-white d-md-block d-none  fw-bold text-center ">
              Capacités
            </h1>
            <h1 className=" text-dark d-block d-md-none fw-bold text-center">
              Capacités
            </h1>
          </div>
          <AnimatedDiv className="row justify-content-center">
            <p className="text-center fw-light  col-12 col-md-10  text-white fst-italic">
              Le résultat du processus d'image de marque de notre entreprise est
              une directive de marque complète qui peut être utilisée pour
              concevoir un et d'autres éléments de conception tels que des
              illustrations de marque qui reflètent la nouvelle marque.
            </p>
          </AnimatedDiv>

          <div className="row justify-content-center my-5">
            <div className="  row col-0 col-md-10 gy-3 gy-lg-0">
              {CapacitiesContainer(
                FadeInRightCard,
                FadeInLeftCard,
                FadInUpCard
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Capacities
