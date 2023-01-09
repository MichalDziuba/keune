import { useRef, useState } from "react";
import { Dropdown } from "../dropdown/dropdown";
import { SocialIcons } from "../socialIcons/socialLinks";
import styles from "./menu.module.scss";

type menuProps = {
  refMenu: React.RefObject<HTMLUListElement>;
  isDark: boolean;
};

export const Menu = ({ refMenu, isDark }: menuProps) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const refDropdown = useRef<HTMLUListElement>(null);
  const openDropdown = () => {
    
    const dropdown = refDropdown.current;
    dropdown?.classList.remove(styles.close_dropdown)
    dropdown?.classList.add(styles.open_dropdown)
    setOpenDropdown(true)
  }
  const closeDropdown = () => {
    const dropdown = refDropdown.current;
    dropdown?.classList.remove(styles.open_dropdown);
        setOpenDropdown(false);
  }
  return (
    <ul
      className={styles.menu}
      ref={refMenu}
      onMouseEnter={() => closeDropdown()}
    >
      <li>
        <a
          href="/nowości"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Nowości
        </a>
      </li>
      <li
        className={styles.dropdown}
       
        onMouseEnter={() => {
          openDropdown();
        }}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
           
          }}
          href="produkty"
          className={`${styles.link} ${isDark ? styles._dark : styles._light} `}
        >
          Produkty
        </a>

        <Dropdown
          refDropdown={refDropdown}
          isDark={isDark}
          closeDropdown={() => closeDropdown()}
        />

        <span
          className={isDark ? styles.arrow_dark : styles.arrow_light}
        ></span>
      </li>
      <li>
        <a
          onMouseEnter={() => closeDropdown()}
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
