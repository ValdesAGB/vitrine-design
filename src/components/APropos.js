import React from 'react'
import { AProposContainer, AProposContent } from '../data'

function APropos() {
  return (
    <React.Fragment>
      <section className="container mb-5 " id="aboutus">
        <div className=" my-5">
          <div className="row align-items-center  justify-content-center">
            <div className="col-12 col-md-6">
              <h4 className="my-3 fw-lighter">À PROPOS DE NOUS</h4>
              <h1>Nous fournissons des conceptions Web personnalisées</h1>
              <h4 style={{ color: '#999999' }}>
                NOUS TRAVAILLONS DIRECTEMENT POUR NOS CLIENTS ET ACCORDONS LA
                PRIORITÉ AUX INTÉRÊTS DU CLIENT.
              </h4>
              <p className="fw-light" style={{ color: '#a2a2a2' }}>
                Tout ce qui peut être nécessaire pour créer et gérer de nouveaux
                projets (startups) dans des conditions modernes. De
                l'élaboration du concept, du plan d'affaires et du plan de
                gestion de projet, à la stratégie et aux tactiques de marketing,
                en passant par le système d'attraction des clients via Internet
                et le système de vente.
              </p>
            </div>

            <div className="col-12 col-md-6 row justify-content-center">
              {AProposContent.map(({ id, level, bgColor }) =>
                AProposContainer(id, level, bgColor)
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className=" col-12 col-lg-5">
            <div className="mb-5 ">
              <img
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c3a8cd3730345e9f90b4ca24/jhjhj.jpg"
                alt="canette"
                className="w-100 rounded-5"
              />
            </div>

            <h1 className="fw-bold row">
              Marque, expériences et collaboration radicale
            </h1>

            <p className="fw-light row">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className="col-12 col-lg ">
            <div
              className="offset-0  offset-lg-1 rounded-5 mt-4 mb-5 h-50"
              style={{ backgroundColor: '#f2f2f2' }}
            >
              <img
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1354cee6bae6513dbdb9e6bf/2919740.png"
                alt="logo"
                style={{ height: '75px', width: '75px' }}
                className="mt-5 mx-3"
              />
              <p className="fw-light mt-4 mx-4 ">
                Creating the world's first community driven superbrand. Massa
                tincidunt nunc pulvinar sapien et. Ante in nibh mauris cursus
                mattis. Pellentesque elit ullamcorper dignissim cras tincidunt
                lobortis feugiat vivamus at.
              </p>
            </div>

            <div className=" offset-0 offset-lg-1 my-3">
              <h3 style={{ color: '#e5521d ' }} className="fw-bold row">
                TRADUIRE 100 ANS DE SERVICE EN UN AVENIR NUMÉRIQUE
              </h3>
              <p className="mt-2 mt-md-3  mt-lg-5 fw-light row">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button className="btn bg-dark text-white p-3 row fs-5 mb-5 col-8 col-md-6 rounded-5">
                LIRE LA SUITE
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default APropos
