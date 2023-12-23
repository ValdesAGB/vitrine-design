import React from 'react'
import { MenuContent } from '../data'
import styled from 'styled-components'

function Header() {
  const Offcanvas = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
  `
  return (
    <React.Fragment>
      <section className="fixed-top  bg-white px-5">
        <div className="row align-items-center ">
          <div className="col-3">
            <h1>
              <a className="text-decoration-none text-dark" href="#">
                Votre logo
              </a>
            </h1>
          </div>
          <div className="col text-end">
            <button
              className="btn "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <i className="bi bi-list fs-1"></i>
            </button>

            <Offcanvas
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                  MENU
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body text-center">
                <ul className="list-unstyled ">
                  {MenuContent.map(({ id, title, href }) => (
                    <li key={id} className=" my-5">
                      <a
                        href={href}
                        className="text-decoration-none text-dark fs-3"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Offcanvas>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Header
