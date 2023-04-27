import React from 'react'
import { AvisConatiner, AvisContent } from '../data'

function Avis() {
  const title = `Lisez ce que disent nos clients`
  return (
    <React.Fragment>
      <section
        className="row"
        id="avisprosect"
        style={{ backgroundColor: '#e5521d' }}
      >
        <div className="container my-5">
          <div>
            <h1
              className="text-center text-white d-none d-md-block"
              style={{ fontSize: '3em' }}
            >
              {title}
            </h1>
            <h3 className="text-center text-white d-block d-md-none">
              {title}
            </h3>
          </div>

          <div className="row justify-content-center px-2 px-md-0">
            {AvisContent.map(({ id, cover, name, title }) =>
              AvisConatiner(id, cover, name, title)
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Avis
