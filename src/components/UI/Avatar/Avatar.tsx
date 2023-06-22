import styles from './Avatar.module.scss';

interface IProps {
  avatar: string;
}

const Avatar = ({ avatar }: IProps) => {
  return <div className={styles.avatar}>{avatar}</div>;
};

export { Avatar };
