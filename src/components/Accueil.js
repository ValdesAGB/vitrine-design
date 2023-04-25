import React from 'react'
import { homeContainer, homeDiv } from '../data'

function Accueil() {
  return (
    <React.Fragment>
      <section
        className="row p-5 mt-5"
        style={{ backgroundColor: '#e5e5e5' }}
        id="accueil"
      >
        <div className="container">
          <h1 className="text-center py-3 mb-5">
            We advise leaders on strategy, marketing, organization, operations
          </h1>
          <div className="row">
            {homeContainer.map(({ id, title, bgColor }) =>
              homeDiv(id, title, bgColor)
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Accueil
