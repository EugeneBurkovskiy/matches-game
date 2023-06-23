import { Container } from '../UI';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <a className={styles.footer__company} href="https://stormotion.io/">
            Stormotion
          </a>
          <a className={styles.footer__github} href="https://github.com/EugeneBurkovskiy">
            👨‍💻
          </a>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
