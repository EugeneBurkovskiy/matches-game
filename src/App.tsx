import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.app}>
        <Game />
      </main>
      <Footer />
    </>
  );
}

export default App;
