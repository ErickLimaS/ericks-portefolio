import { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import * as C from './styles'
import svgHappyFace from './img/svg/sentiment_very_satisfied_FILL0_wght500_GRAD0_opsz48.svg'
import svgDevices from './img/svg/devices_FILL0_wght500_GRAD0_opsz48.svg'
import svgDeveloper from './img/svg/developer_board_FILL0_wght500_GRAD0_opsz48.svg'

function App() {

  const [auxBtnPresentation, setAuxBtnPresentation] = useState(0)

  return (
    <C.Container id='inicio'>
      <Header />

      <div className='main'>

        <section className='inicio'>

          <div className='image'>
            <img src=''></img>imagem
          </div>

          <div className='introduction'>
            <div className='text-p1'>
              <h1>Eu posso trabalhar pra você?</h1>
            </div>
            <div className='text-p2'>
              <p>
                Olá! Estou começando minha carreira em desenvolvimento front-end e ficarei feliz em trabalhar para você!
              </p>
            </div>
          </div>

        </section>

        <section id='quem-sou'>

          <h2 className='heading-section'>Quem Sou</h2>

          <div className='progress-dots-desktop'>
            <div className={auxBtnPresentation === 0 ? 'activeted' : ''}>{''}</div>
            <div className={auxBtnPresentation === 1 ? 'activeted' : ''}>{''}</div>
            <div className={auxBtnPresentation === 2 ? 'activeted' : ''}>{''}</div>
          </div>

          <div className='buttons-presentation-mobile'>
            <div>
              <button onClick={() => {
                if (auxBtnPresentation === 0) {
                  setAuxBtnPresentation(0)
                }
                else {
                  setAuxBtnPresentation(auxBtnPresentation - 1)
                }
              }}>{'<'}</button>

              <button onClick={() => {
                if (auxBtnPresentation >= 2) {
                  setAuxBtnPresentation(2)
                }
                else {
                  setAuxBtnPresentation(auxBtnPresentation + 1)
                }
              }}>{'>'}</button>
            </div>
            <div className='progress-dots'>
              <div className={auxBtnPresentation === 0 ? 'activeted' : ''}>{''}</div>
              <div className={auxBtnPresentation === 1 ? 'activeted' : ''}>{''}</div>
              <div className={auxBtnPresentation === 2 ? 'activeted' : ''}>{''}</div>
            </div>
          </div>

          <div className={auxBtnPresentation === 0 ? 'presentation-pt1 active' : 'presentation-pt1'}>

            <button onClick={() => {
              if (auxBtnPresentation === 0) {
                setAuxBtnPresentation(0)
              }
              else {
                setAuxBtnPresentation(auxBtnPresentation - 1)
              }
            }}>{'<'}</button>

            <div>
              <img src={svgHappyFace} alt='Emoji Rosto Feliz' />
            </div>

            <div className='text-presentation'>
              <h2>Olá!</h2>

              <h3>Meu nome é Erick e sou apaixonado pelo que faço.</h3>

              <p>
                Desde criança fui muito conectado a tecnología. Cresci vendo meu pai montando e desmontando computador e vários outros eletrônicos.
              </p>
            </div>

            <button onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation + 1)
            }}>{'>'}</button>

          </div>

          <div className={auxBtnPresentation === 1 ? 'presentation-pt2 active' : 'presentation-pt2'}>

            <button onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation - 1)
            }}>{'<'}</button>

            <div>
              <img src={svgDevices} alt='Ícone Dispositivos' />
            </div>

            <div className='text-presentation'>

              <h3>Foi inevitável não pegar a paixão que ele tinha para mim...</h3>

              <p>
                Então, já aos 10 anos, estáva tambem mexendo em aparelhos eletrônicos. Tanto para arrumá-los, tanto para quebrá-los (risos).
              </p>
            </div>

            <button onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation + 1)
            }}>{'>'}</button>

          </div>

          <div className={auxBtnPresentation === 2 ? 'presentation-pt3 active' : 'presentation-pt3'}>

            <button onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation - 1)
            }}>{'<'}</button>

            <div>
              <img src={svgDeveloper} alt='Ícone Dispositivos' />
            </div>

            <div className='text-presentation'>

              <h3>E com o passar do tempo, vi que essa era minha vocação...</h3>

              <p>
                Fiquei tão acostumado a estar no meio de computadores, que vi que poderia ser minha profissão.
              </p>
              <p>
                Então, desde que entrei na faculdade, venho me empenhando em ser um desenvolvedor Fron-End.
              </p>
              <p>
                E nesse site, mostro projetos que já fiz, e os que estão sendo feitos ou planejados.
              </p>
            </div>

            <button onClick={() => {
              if (auxBtnPresentation >= 2) {
                setAuxBtnPresentation(2)
              }
              else {
                setAuxBtnPresentation(auxBtnPresentation + 1)
              }
            }}>{'>'}</button>

          </div>

        </section>

        <section id='projetos'>

        </section>

        <section id='contatos'>

        </section>

      </div>

      <Footer />
    </C.Container>
  );
}

export default App;
