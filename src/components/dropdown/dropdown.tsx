import styles from "./dropdown.module.scss";
type dropdownProps = {
  isDark: boolean;
  closeDropdown: () => void;
  refDropdown: React.RefObject<HTMLUListElement>;
};
export const Dropdown = ({
  isDark,
  closeDropdown,
  refDropdown,
}: dropdownProps) => {
  return (
    <ul
      className={styles.dropdown_list}
      // Event handler to close the dropdown when the mouse leaves the list
      onMouseLeave={closeDropdown}
      // Adding a reference to the list element
      ref={refDropdown}
    >
      <li>
        <a
          href="/szampony"
          // Conditionally applying styles depending on the color
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Szampony
        </a>
      </li>
      <li>
        <a
          href="/odzywki"
          // Conditionally applying styles depending on the color
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Odżywki
        </a>
      </li>
      <li>
        <a
          href="/maski"
          // Conditionally applying styles depending on the color
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Maski
        </a>
      </li>
      <li>
        <a
          href="/pianki"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Pianki
        </a>
      </li>
      <li>
        <a
          href="/zele"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Żele
        </a>
      </li>
    </ul>
  );
};
