import React, { Children } from 'react'

function ComponentecomProps({nome, idade, email, imagem, children}){
    return(
        <>
        <h2>Cadastro:</h2>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>E-mail: {email}</p>
        <img src={imagem} alt="" />
        {children}
        </>
    )
}

export default ComponentecomProps