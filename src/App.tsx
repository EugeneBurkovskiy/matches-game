import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';

import styles from './App.module.scss';
import { Container } from './components/UI/Container/Container';

function App() {
  return (
    <>
      <Header />
      <main className={styles.app}>
        <Container>
          <Game />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
