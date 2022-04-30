import Footer from './Components/Footer';
import Header from './Components/Header';
import * as C from './styles'

function App() {
  return (
    <C.Container>
      <Header />

      <div className='main'>

        <section id='inicio' className='inicio'>

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
