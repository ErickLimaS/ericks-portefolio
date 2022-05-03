import React from 'react'
import * as C from './styles'

export default function Footer() {
  return (
    <C.Container>
      <div className='flex'>
        <nav>
          <ul>
            <li><a href='#contatos'>Contatos</a></li>
            <li><a href='#sobre-mim'>Sobre Mim</a></li>
            <li><a href='#projetos'>Meus Projetos</a></li>
          </ul>
        </nav>
        <div>
          <p>Criado pelo próprio Erick Lima &#128516;.</p>
        </div>
      </div>
      <small>Copyright © 2022 Erick Lima Portfólio. All Rights Reserved.</small>
    </C.Container>
  )
}
