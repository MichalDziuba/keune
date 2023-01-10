import logoKeuneWhite from "../../icons/logo_KEUNE_WHITE.svg";
import logoKeune from "../../icons/logo_KEUNE.svg";
import styles from "./logo.module.scss";

type logoProps = {
  isDark: boolean;
};

export const Logo = ({ isDark }: logoProps) => {
  return (
    <>
      {isDark ? (
       // The logo image that changes based on the value of isDark prop
        <div className={styles.logo}>
          <a href="/">
            <img src={logoKeune} alt="logo" />
          </a>
          <h1>Keune Polska</h1>
        </div>
      ) : (
        <div className={styles.logo}>
          <a href="/">
            <img src={logoKeuneWhite} alt="logo" />
          </a>
          <h1>Keune Polska</h1>
        </div>
      )}
    </>
  );
};
