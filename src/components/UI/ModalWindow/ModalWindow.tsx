import ReactDOM from 'react-dom';

import styles from './ModalWindow.module.scss';

interface IProps {
  text: string;
}

const ModalWindow = ({ text }: IProps) => {
  return ReactDOM.createPortal(
    <div className={styles.overlay}>{text}</div>,
    document.getElementById('overlay-root') as HTMLElement
  );
};

export { ModalWindow };
