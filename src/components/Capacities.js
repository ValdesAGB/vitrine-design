import React from 'react'
import { CapacitiesContainer } from '../data'

function Capacities() {
  return (
    <React.Fragment>
      <section
        className="row p-2"
        id="capacities"
        style={{ backgroundColor: '#2abbca' }}
      >
        <div className="container">
          <h1 className=" text-white fw-bold text-center my-5">Capacités</h1>
          <div className="row justify-content-center">
            <p className="text-center fw-light col-10  text-white fst-italic">
              Le résultat du processus d'image de marque de notre entreprise est
              une directive de marque complète qui peut être utilisée pour
              concevoir un et d'autres éléments de conception tels que des
              illustrations de marque qui reflètent la nouvelle marque.
            </p>
          </div>
          <div className="row justify-content-center my-5">
            <div className="row col-9">{CapacitiesContainer()}</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Capacities
