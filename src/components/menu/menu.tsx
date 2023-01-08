import { useState } from "react";

import { SocialIcons } from "../socialIcons/socialLinks";
import styles from "./menu.module.scss";
import theme from "../../App.module.scss";
type menuProps = {
  refMenu: React.RefObject<HTMLUListElement>;
  isDark: boolean;
};

export const Menu = ({ refMenu, isDark }: menuProps) => {
  // const [isOpenDropdown, setOpenDropdown] = useState(false);

  return (
    <ul className={styles.menu} ref={refMenu}>
      <li>
        <a
          href="/nowości"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Nowości
        </a>
      </li>
      <li className={styles.dropdown}>
        <div className={styles.dropdown_wrapper}>
          <a
            href="/produkty"
            className={`${styles.link} ${
              isDark ? styles._dark : styles._light
            }`}
          >
            Produkty
          </a>
          <span
            className={isDark ? styles.arrow_dark : styles.arrow_light}
          ></span>
          <ul className={styles.products_list}>
            <li>
              <a
                href="/szampony"
                className={`${styles.link} ${
                  isDark ? styles._dark : styles._light
                }`}
              >
                Szampony
              </a>
            </li>
            <li>
              <a href="/odzywki">Odżywki</a>
            </li>
            <li>
              <a href="/maski">Maski</a>
            </li>
            <li>
              <a href="/pianki">Pianki</a>
            </li>
            <li>
              <a href="/zele">Żele</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a
          href="/Trendy"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Trendy
        </a>
      </li>
      <li>
        <a
          href="/o-firmie"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          O firmie
        </a>
      </li>
      <li>
        <a
          href="/salony"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Salony
        </a>
      </li>
      <li>
        <a
          href="/dystrybutorzy"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Dystrybutorzy
        </a>
      </li>
      <li>
        <a
          href="/nowości"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Kontakt
        </a>
      </li>
      <li>
        <SocialIcons isDark={isDark} />
      </li>
    </ul>
  );
};
