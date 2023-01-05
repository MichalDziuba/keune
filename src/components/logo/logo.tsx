import logoKueneWhite from "../../icons/logo_KEUNE_WHITE.svg";
import styles from './logo.module.scss';
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="/"><img src={logoKueneWhite} alt="logo"/></a>
      <h1>Keune Polska</h1>
    </div>
  );
};
