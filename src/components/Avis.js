import React from 'react'
import { AvisConatiner, AvisContent } from '../data'

function Avis() {
  return (
    <React.Fragment>
      <section
        className="row"
        id="avisprosect"
        style={{ backgroundColor: '#e5521d' }}
      >
        <div className="container my-5">
          <h1 className="text-center text-white" style={{ fontSize: '3em' }}>
            Lisez ce que disent nos clients
          </h1>
          <div className="row justify-content-center">
            <div className="col-10 row">
              {AvisContent.map(({ id, cover, name, title }) =>
                AvisConatiner(id, cover, name, title)
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Avis
