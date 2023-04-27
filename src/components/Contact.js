import React from 'react'
import styled from 'styled-components'
import { ContactContainer, ContactContent } from '../data'

function Contact() {
  const DIV = styled.div`
    position: relative;
    background-image: url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3089c041eda7526d8acb9792/mnmn-min.jpg');
    background-size: cover;
    background-position: center;
  `
  return (
    <React.Fragment>
      <DIV className="row" id="contact">
        <div className="container my-5 my-md-0">
          <div className="row gy-5 m-0 m-md-5 justify-content-center ">
            <div
              className="col rounded-5 p-5 "
              style={{ backgroundColor: 'white' }}
            >
              <h1>Entrer en contact</h1>

              <p style={{ color: '#828282' }} className="fw-light">
                Utilisez notre formulaire de contact pour toute demande
                d'information ou contactez-nous directement en utilisant les
                coordonnées ci-dessous.
              </p>

              <p style={{ color: '#828282' }} className="fw-light">
                N'hésitez pas à nous contacter par e-mail ou par téléphone
              </p>

              <hr />

              <div className="row py-3 justify-content-center">
                {ContactContent.map(({ id, icone, title, text }) =>
                  ContactContainer(id, icone, title, text)
                )}
              </div>
            </div>

            <div
              className="col rounded-5 offset-0 offset-md-1 p-5 "
              style={{ backgroundColor: '#2abbca' }}
            >
              <h3 style={{ color: '#999999' }} className="text-center">
                COMMENCEZ AVEC UN DEVIS GRATUIT
              </h3>

              <div className="row py-3">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ color: '#a2a2a2s' }}
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Entrez votre nom"
                      className="form-control"
                      id="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Adresse mail
                    </label>
                    <input
                      type="email"
                      placeholder="Entrez votre adresse mail"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Laisse votre message ici"
                      id="floatingTextarea"
                      style={{
                        height: '150px',
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary fs-4 col-12 mt-3 fw-light"
                    style={{
                      backgroundColor: '#d57958 ',
                      borderColor: '#d57958 ',
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Soumettez votre demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DIV>
    </React.Fragment>
  )
}

export default Contact
