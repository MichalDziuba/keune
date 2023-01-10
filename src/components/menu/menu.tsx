import { useRef, useState } from "react";
import { Dropdown } from "../dropdown/dropdown";
import { SocialIcons } from "../socialIcons/socialLinks";
import styles from "./menu.module.scss";

type menuProps = {
  refMenu: React.RefObject<HTMLUListElement>;
  isDark: boolean;
};

export const Menu = ({ refMenu, isDark }: menuProps) => {
  // State to keep track of whether the dropdown menu is open or closed
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  // Ref to the dropdown menu
  const refDropdown = useRef<HTMLUListElement>(null);
  // Function to toggle the open/close state of the dropdown menu
  const handleDropdown = () => {
    const dropdown = refDropdown.current;
    // toggle the class for open/close styling
    dropdown?.classList.toggle(styles.open_dropdown);
    setOpenDropdown(!isOpenDropdown);
  };
  // Function to close the dropdown menu
  const closeDropdown = () => {
    const dropdown = refDropdown.current;
    dropdown?.classList.remove(styles.open_dropdown);
    setOpenDropdown(false);
  };
  return (
    <ul
      className={styles.menu}
      // This ref is used to get a reference to the <ul> element
      ref={refMenu}
      // close dropdown on mouse enter
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
      <li className={styles.dropdown}>
        <a
          //open close function for dropdown
          onClick={(e) => {
            e.preventDefault();
            handleDropdown();
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
          // close dropdown on mouse enter
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
