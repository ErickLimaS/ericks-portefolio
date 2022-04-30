import React, { useState } from 'react'
import * as C from './styles'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Header() {

    const [toggleMenuButton, setToggleMenuButton] = useState(false)

    return (
        <C.Container>
            <nav>
                <div className={toggleMenuButton ? 'dropdown-active' : 'dropdown-deactiveted'} >
                    <button type='button' onClick={() => {
                        setToggleMenuButton(!toggleMenuButton)
                    }}>
                        <i className='bi bi-list' style={{
                        }} />
                    </button>
                    <div className='dropdown-menu'>
                        <div>
                            <a href='#inicio'>Início</a>
                        </div>
                        <div>
                            <a href='#quem-sou'>Quem Sou</a>
                        </div>
                        <div>
                            <a href='#projetos'>Meus Projetos</a>
                        </div>
                        <div>
                            <a href='#contatos'>Contatos</a>
                        </div>
                    </div>
                </div>
                <div>
                    <a href='/'>Erick Lima</a>
                </div>
                <div className='desktop-nav'>
                    <div>
                        <a href='#inicio'>Início</a>
                    </div>
                    <div>
                        <a href='#quem-sou'>Quem Sou</a>
                    </div>
                    <div>
                        <a href='#projetos'>Meus Projetos</a>
                    </div>
                    <div>
                        <a href='#contatos'>Contatos</a>
                    </div>
                </div>
            </nav>
        </C.Container>
    )
}