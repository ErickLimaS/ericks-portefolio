import { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import * as C from './styles'

import svgHappyFace from './img/svg/sentiment_very_satisfied_FILL0_wght500_GRAD0_opsz48.svg'
import svgDevices from './img/svg/devices_FILL0_wght500_GRAD0_opsz48.svg'
import svgDeveloper from './img/svg/developer_board_FILL0_wght500_GRAD0_opsz48.svg'
import { ReactComponent as SvgArrowRight } from './img/svg/arrow-right.svg'
import { ReactComponent as SvgArrowLeft } from './img/svg/arrow-left.svg'
import imgBookFinder from './img/jpg/book-finder.JPG'
import imgCopiaFlix from './img/jpg/copiaflix.JPG'
import imgAbnt from './img/jpg/abnt.JPG'
import imgCurso from './img/jpg/curso.JPG'
import imgBasketball from './img/jpg/basketball.JPG'

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
              <h1>Eu posso trabalhar para você?</h1>
            </div>
            <div className='text-p2'>
              <p>
                Olá! Estou começando minha carreira em desenvolvimento front-end e ficarei feliz em trabalhar para você!
              </p>
            </div>
          </div>

        </section>

        <section id='sobre-mim'>

          <h2 className='heading-section'>Sobre Mim</h2>

          <div className='progress-dots-desktop'>
            <div className={auxBtnPresentation === 0 ? 'activeted' : ''}>{''}</div>
            <div className={auxBtnPresentation === 1 ? 'activeted' : ''}>{''}</div>
            <div className={auxBtnPresentation === 2 ? 'activeted' : ''}>{''}</div>
          </div>

          <div className='progress-dots-mobile'>
            <div className={auxBtnPresentation === 0 ? 'activeted' : ''}>{''}</div>
            <div className={auxBtnPresentation === 1 ? 'activeted' : ''}>{''}</div>
            <div className={auxBtnPresentation === 2 ? 'activeted' : ''}>{''}</div>
          </div>

          <div className={auxBtnPresentation === 0 ? 'presentation-pt1 active' : 'presentation-pt1'}>

            <SvgArrowLeft className='button' onClick={() => {
              if (auxBtnPresentation === 0) {
                setAuxBtnPresentation(0)
              }
              else {
                setAuxBtnPresentation(auxBtnPresentation - 1)
              }
            }}>{'<'}
            </SvgArrowLeft>

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

            <SvgArrowRight className='button' onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation + 1)
            }}>{'>'}
            </SvgArrowRight>

          </div>

          <div className={auxBtnPresentation === 1 ? 'presentation-pt2 active' : 'presentation-pt2'}>

            <SvgArrowLeft className='button' onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation - 1)
            }}>{'<'}
            </SvgArrowLeft>

            <div>
              <img src={svgDevices} alt='Ícone Dispositivos' />
            </div>

            <div className='text-presentation'>

              <h3>Foi inevitável não pegar a paixão que ele tinha para mim...</h3>

              <p>
                Então, já aos 10 anos, estáva tambem mexendo em aparelhos eletrônicos. Tanto para arrumá-los, tanto para quebrá-los (risos).
              </p>
            </div>

            <SvgArrowRight className='button' onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation + 1)
            }}>{'>'}
            </SvgArrowRight>

          </div>

          <div className={auxBtnPresentation === 2 ? 'presentation-pt3 active' : 'presentation-pt3'}>

            <SvgArrowLeft className='button' onClick={() => {
              setAuxBtnPresentation(auxBtnPresentation - 1)
            }}>{'<'}</SvgArrowLeft>

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

            <SvgArrowRight className='button' onClick={() => {
              if (auxBtnPresentation >= 2) {
                setAuxBtnPresentation(2)
              }
              else {
                setAuxBtnPresentation(auxBtnPresentation + 1)
              }
            }}>{'>'}</SvgArrowRight>

          </div>

          <div className='buttons-presentation-mobile'>
            <div>
              <SvgArrowLeft className='button' onClick={() => {
                if (auxBtnPresentation === 0) {
                  setAuxBtnPresentation(0)
                }
                else {
                  setAuxBtnPresentation(auxBtnPresentation - 1)
                }
              }}>{'<'}
              </SvgArrowLeft>

              <SvgArrowRight className='button' onClick={() => {
                if (auxBtnPresentation >= 2) {
                  setAuxBtnPresentation(2)
                }
                else {
                  setAuxBtnPresentation(auxBtnPresentation + 1)
                }
              }}>{'>'}
              </SvgArrowRight>
            </div>
          </div>

        </section>

        <C.Projetos id='projetos'>
          <div className='heading-text'>
            <h2 className='heading-section'>Meus Projetos</h2>

            <p>
              Desde o início da minha faculdade de Sistemas de Informações, comecei a estudar sobre desenvolvimento web. Meus focos sempre foram o JavaScript e ReactJs.
            </p>
            <p>Mas tambem aprendi Java, C, Banco de Dados Oracle e MySql. E tenho alguma experiência com Next.js e TypeScript.</p>
            <p>Recentemente tambem consegui a certificação da Microsoft chamada: Microsoft Certified: Azure Fundamentals.</p>

          </div>
          <div className='grid-projects'>

            <div className='grid-item'>
              <div className='image'>
                <img src={imgBookFinder} alt='Site Book Finder' />
              </div>
              <div className='description'>
                <h3>
                  <a href='https://erick-book-finder.netlify.app/' target='_blank' rel='noreferrer'>Book Finder</a>
                </h3>
                <h4>Encontre o livro que você procura!</h4>
                <p>Pesquise o nome do livro ou autor e veja os livros, preços e descrições.</p>
                <div className='buttons'>
                  <a href='https://erick-book-finder.netlify.app/' target='_blank' rel='noreferrer'>
                    Ir para o Site
                  </a>
                  <a href='https://github.com/ErickLimaS/React-book-finder' target='_blank' rel='noreferrer'>
                    Ver no GitHub
                  </a>
                </div>
                <hr />
                <div className='small'>
                  <p className='p-small'>ReactJs</p>
                  <p className='p-small'>API</p>
                  <p className='p-small'>TypeScript</p>
                  <p className='p-small'>BootStrap</p>
                  <p className='p-small'>React Router</p>
                  <p className='p-small'>Styled Components</p>
                </div>
              </div>
            </div>

            <div className='grid-item'>
              <div className='image'>
                <img src={imgAbnt} alt='Site Referência em ABNT' />
              </div>
              <div className='description'>
                <h3>
                  <a href='https://www.referenciaemabnt.com/' target='_blank' rel='noreferrer'>Referência Em ABNT
                  </a>
                </h3>
                <h4>Faça as referências do seu trabalho escolar aqui!</h4>
                <p>Use a ferremanta do site para formatar na forma ABNT a referência usada no seu TCC, projeto ou trabalho escolar.</p>
                <div className='buttons'>
                  <a href='https://www.referenciaemabnt.com/' target='_blank' rel='noreferrer'>
                    Ir para o Site
                  </a>
                  <a href='https://github.com/ErickLimaS/NEXTJS-formatador-de-referencias' target='_blank' rel='noreferrer'>
                    Ver no GitHub
                  </a>
                </div>
                <hr />
                <div className='small'>
                  <p className='p-small'>NextJs</p>
                  <p className='p-small'>TypeScript</p>
                  <p className='p-small'>Mantine</p>
                  <p className='p-small'>Redux</p>
                  <p className='p-small'>React Router</p>
                  <p className='p-small'>Styled Components</p>
                </div>
              </div>
            </div>
            <div className='grid-item'>
              <div className='image'>
                <img src={imgBasketball} alt='Site NBA Report' />
              </div>
              <div className='description'>
                <h3>
                  <a href='https://basketball-website.netlify.app/' target='_blank' rel='noreferrer'>NBA Report</a>
                </h3>
                <h4>Veja as últimas e as atuais partidas da NBA nesse site.</h4>
                <p>Fique de olho nos resultados e nas últimas estatísticas das partidas dessa e de outras temporadas nesse site.</p>
                <div className='buttons'>
                  <a href='https://basketball-website.netlify.app/' target='_blank' rel='noreferrer'>
                    Ir para o Site
                  </a>
                  <a href='https://github.com/ErickLimaS/basketball-web' target='_blank' rel='noreferrer'>
                    Ver no GitHub
                  </a>
                </div>
                <hr />
                <div className='small'>
                  <p className='p-small'>ReactJs</p>
                  <p className='p-small'>API</p>
                  <p className='p-small'>JavaScript</p>
                  <p className='p-small'>React Router</p>
                  <p className='p-small'>Styled Components</p>
                </div>
              </div>
            </div>
            <div className='grid-item'>
              <div className='image'>
                <img src={imgCurso} alt='Site exemplo de venda de Curso' />
              </div>
              <div className='description'>
                <h3>
                  <a href='https://exemplo-curso-japones.netlify.app/' target='_blank' rel='noreferrer'>Página de Venda de Curso </a>
                </h3>
                <h4>Página de site feita de exemplo.</h4>
                <p>
                  Modelo básico de como poderia ser feito uma página de venda de curso online.
                </p>
                <div className='buttons'>
                  <a href='https://exemplo-curso-japones.netlify.app/' target='_blank' rel='noreferrer'>
                    Ir para o Site
                  </a>
                  <a href='https://github.com/ErickLimaS/React-pag-exemplo-venda-de-curso' target='_blank' rel='noreferrer'>
                    Ver no GitHub
                  </a>
                </div>
                <hr />
                <div className='small'>
                  <p className='p-small'>ReactJs</p>
                  <p className='p-small'>BootStrap</p>
                  <p className='p-small'>BootStrap Icons</p>
                </div>
              </div>
            </div>
            <div className='grid-item'>
              <div className='image'>
                <img src={imgCopiaFlix} alt='Página Inicial da Netflix' />
              </div>
              <div className='description'>
                <h3>
                  <a href='https://copiaflix.netlify.app/' target='_blank' rel='noreferrer'>Página Inicial da Netflix
                  </a>
                </h3>
                <h4>Apenas a HomePage, para usar como exemplo.</h4>
                <p>(Incompleto) - Feita como exemplo para usar a API da The Movie Database.</p>
                <div className='buttons'>
                  <a href='https://copiaflix.netlify.app/' target='_blank' rel='noreferrer'>
                    Ir para o Site
                  </a>
                  <a href='https://github.com/ErickLimaS/React-Netflix-Homepage' target='_blank' rel='noreferrer'>
                    Ver no GitHub
                  </a>
                </div>
                <hr />
                <div className='small'>
                  <p className='p-small'>ReactJs</p>
                  <p className='p-small'>API</p>
                  <p className='p-small'>TypeScript</p>
                </div>
              </div>
            </div>

          </div>

        </C.Projetos>

        <section id='contatos'>

          <h2 className='heading-section'>Contatos</h2>

          <div className='contact-list'>
            <ul>
              <li>
                <a href='https://www.linkedin.com/in/erick-lima-da-silva-254953148/' target='_blank' rel='noreferrer'>
                  <i class="bi bi-linkedin" style={{
                    color: '#0e76a8'
                  }}></i>
                </a>
                <a href='https://www.linkedin.com/in/erick-lima-da-silva-254953148/' target='_blank' rel='noreferrer'>
                  Linkedin
                </a>
                , onde pode encontrar mais informações sobre mim.
              </li>
              <li>
                <a href='https://www.github.com/ErickLimaS' target='_blank' rel='noreferrer'>
                  <i class="bi bi-github" style={{
                    color: '#171515'
                  }}></i>
                </a>
                <a href='https://www.github.com/ErickLimaS' target='_blank' rel='noreferrer'>Meu GitHub</a>
                , onde meus projetos atuais são armazenados.
              </li>
              <li><a href='mailto:ericklima63@gmail.com'>
                <i class="bi bi-envelope-fill" style={{
                  color: '#000',
                  borderRadius: '10000px',
                  backgroundColor: '#FFF',
                }}></i>
              </a>
                <a href='mailto:ericklima63@gmail.com'>
                  Meu Email
                </a>
                - ericklima63@gmail.com
              </li>
              <li>
                <a href='tel:+5511971855871'>
                  <i class="bi bi-whatsapp" style={{
                    color: '#FFF',
                    padding: '0.2rem 1rem',
                    marginLeft: '-1rem',
                    borderRadius: '1000px',
                    backgroundColor: '#25d366'
                  }}></i>
                </a>
                <a href='tel:+5511971855871'>
                  Whats App
                </a>
                - {'(11)'} 97185-5871
              </li>
            </ul>
          </div>

        </section>

      </div >

      <Footer />
    </C.Container >
  );
}

export default App;
