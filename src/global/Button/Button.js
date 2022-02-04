import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <a target="_blank" href="https://discord.com/invite/yGNvcMtqmv" className={styles.button} rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Button;
