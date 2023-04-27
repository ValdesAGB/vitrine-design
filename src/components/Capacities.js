import React from 'react'
import { CapacitiesContainer } from '../data'

function Capacities() {
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
          <div className="row justify-content-center">
            <p className="text-center fw-lighter  col-12 col-md-10  text-white fst-italic">
              Le résultat du processus d'image de marque de notre entreprise est
              une directive de marque complète qui peut être utilisée pour
              concevoir un et d'autres éléments de conception tels que des
              illustrations de marque qui reflètent la nouvelle marque.
            </p>
          </div>

          <div className="row justify-content-center my-5">
            <div className="  row col-0 col-md-10 gy-3 gy-lg-0">
              {CapacitiesContainer()}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Capacities
