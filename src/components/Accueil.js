import React from 'react'
import { homeContainer, homeDiv } from '../data'

function Accueil() {
  return (
    <React.Fragment>
      <section
        className="row p-0 p-md-5 mt-5 "
        style={{ backgroundColor: '#e5e5e5' }}
        id="accueil"
      >
        <div className="container mb-md-5 mt-5 mb-5">
          <div className="mb-lg-5 mb-0">
            <h1 className="text-center d-none d-md-block  ">
              We advise leaders on strategy, marketing, organization, operations
            </h1>
            <h3 className="text-center d-md-none d-block  ">
              We advise leaders on strategy, marketing, organization, operations
            </h3>
          </div>
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
