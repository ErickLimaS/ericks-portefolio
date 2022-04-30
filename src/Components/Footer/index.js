import React from 'react'
import * as C from './styles'

export default function Footer() {
  return (
    <C.Container>
      <nav>
        <ul>
          <li><a href='#contatos'>Contatos</a></li>
          <li><a href='#quem-sou'>Quem Sou</a></li>
          <li><a href='#projetos'>Meus Projetos</a></li>
        </ul>
      </nav>
      <small>Erick Lima - Portfólio</small>
    </C.Container>
  )
}
