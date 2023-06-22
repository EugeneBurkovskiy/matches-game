import { useState } from 'react';

import { Options } from '../Options/Options';
import { BurgerButton } from '../UI/Buttons/BurgerButton/BurgerButton';
import { Container } from '../UI/Container/Container';

import styles from './Header.module.scss';

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);

  const openMenu = () => {
    setShowBurger(true);
  };
  const closeMenu = () => {
    setShowBurger(false);
  };

  return (
    <header className={styles.header}>
      <Container>
        <BurgerButton onClick={openMenu} />
        <Options closeFunc={closeMenu} active={showBurger} />
      </Container>
    </header>
  );
};

export { Header };
