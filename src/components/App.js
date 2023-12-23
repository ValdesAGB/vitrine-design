import React from 'react'
import Accueil from './Accueil'
import { createGlobalStyle } from 'styled-components'
import Capacities from './Capacities'
import APropos from './APropos'
import Avis from './Avis'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    font-family: "montserrat";
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <Header />
        <Accueil />
        <Capacities />
        <APropos />
        <Avis />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App
