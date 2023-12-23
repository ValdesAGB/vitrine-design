import React from 'react'
import { homeContainer, homeDiv } from '../data'
import styled, { keyframes } from 'styled-components'

function Accueil() {
  const text = `We advise leaders on strategy, marketing, organization, operations`

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
  return (
    <React.Fragment>
      <section
        className="row p-0 p-md-5 mt-5 "
        style={{ backgroundColor: '#e5e5e5' }}
        id="accueil"
      >
        <div className="container mb-md-5 mt-5 mb-5">
          <AnimatedHeader className="mb-lg-5 mb-0 ">
            <h1 className="text-center d-none d-md-block   fw-bold">{text}</h1>
            <h3 className="text-center d-md-none d-block   fw-bold ">{text}</h3>
          </AnimatedHeader>
          <div className="row justify-content-center">
            <div className="row col-11 gy-4 gy-lg-0 col-12">
              {homeContainer.map(({ id, title, bgColor }) =>
                homeDiv(id, title, bgColor)
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Accueil
