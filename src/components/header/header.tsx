import logoKueneWhite from "../../icons/logo_KEUNE_WHITE.svg";
import { SocialIcons } from "../socialIcons/socialLinks";
import styles from "./header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoKueneWhite} alt="logo"></img>
        <h1>Keune Polska</h1>
      </div>
      <div>
        <ul className={styles.header_menu}>
          <li>
            <a href="/nowości">Nowości</a>
          </li>
          <li>
            <a href="/nowości">Produkty</a>
          </li>
          <li>
            <a href="/nowości">Trendy</a>
          </li>
          <li>
            <a href="/nowości">O firmie</a>
          </li>
          <li>
            <a href="/nowości">Salony</a>
          </li>
          <li>
            <a href="/nowości">Dystrybutorzy</a>
          </li>
          <li>
            <a href="/nowości">Kontakt</a>
          </li>
        </ul>
      </div>

      <SocialIcons />
    </header>
  );
};
