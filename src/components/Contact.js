import React from 'react'
import styled from 'styled-components'
import { ContactContainer, ContactContent } from '../data'

function Contact() {
  const DIV = styled.div`
    position: relative;
    height: 100vh;
    background-image: url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3089c041eda7526d8acb9792/mnmn-min.jpg');
    background-size: cover;
    background-position: center;
  `
  return (
    <React.Fragment>
      <section className="row" id="contact">
        <DIV style={{ height: '900px' }}>
          <div className=" container" style={{ marginTop: '220px' }}>
            <div className="row">
              <div
                className="col p-5 rounded-5"
                style={{ backgroundColor: 'white' }}
              >
                <h1 style={{ color: '#828282' }}>Entrer en contact</h1>

                <p style={{ color: '#828282' }} className="fw-light">
                  Utilisez notre formulaire de contact pour toute demande
                  d'information ou contactez-nous directement en utilisant les
                  coordonnées ci-dessous.
                </p>

                <p style={{ color: '#828282' }} className="fw-light">
                  N'hésitez pas à nous contacter par e-mail ou par téléphone
                </p>

                <hr />

                <div className="row py-3">
                  {ContactContent.map(({ id, icone, title, text }) =>
                    ContactContainer(id, icone, title, text)
                  )}
                </div>
              </div>

              <div
                className="col mx-5 p-5 rounded-5 "
                style={{ backgroundColor: '#2abbca' }}
              >
                <h3 style={{ color: '#999999' }} className="text-center">
                  COMMENCEZ AVEC UN DEVIS GRATUIT
                </h3>

                <div className="row py-3">
                  <form>
                    <div class="mb-3">
                      <label
                        for="name"
                        class="form-label"
                        style={{ color: '#a2a2a2s' }}
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        placeholder="Entrez votre nom"
                        class="form-control"
                        id="name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Adresse mail
                      </label>
                      <input
                        type="email"
                        placeholder="Entrez votre adresse mail"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Message
                      </label>
                      <textarea
                        class="form-control"
                        placeholder="Laisse votre message ici"
                        id="floatingTextarea"
                        style={{
                          height: '150px',
                        }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary fs-3 col-12 mt-3 fw-light px-3"
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
      </section>
    </React.Fragment>
  )
}

export default Contact
