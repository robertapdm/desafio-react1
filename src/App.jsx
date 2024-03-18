import React, { useState } from 'react'
import ComponentecomProps from './assets/components/ComponentecomProps/ComponentecomProps'
import Git from '../public/github.png'
//import Header from "./assets/components/Header/Header.jsx"
//import Main from "./assets/components/Main/Main.jsx"
//import Footer from "./assets/components/Footer/Footer.jsx"

function App() {

  return (
    <>
    <ComponentecomProps 
    nome="Roberta" 
    idade="29" 
    email="robertafarmaco@gmail.com"
    imagem={Git}>
            <h2>Flamengo até morrer</h2>
      </ComponentecomProps>
    <ComponentecomProps 
    nome="Debora" 
    idade="35" 
    email="debota12@gmail.com"
    imagem={Git}/>
    <ComponentecomProps 
    nome="Luis" 
    idade="55" 
    email="luis.go@gmail.com"
    imagem={Git}
    />
    <ComponentecomProps 
    nome="Eduardo" 
    idade="21" 
    email="edugaspar@gmail.com"
    imagem={Git}
    />
    </>
  )
}

export default App
