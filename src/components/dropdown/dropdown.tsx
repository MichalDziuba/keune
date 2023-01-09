import styles from "./dropdown.module.scss";
type dropdownProps = {
  isDark: boolean;
  closeDropdown: () => void;
  refDropdown: React.RefObject<HTMLUListElement>;
};
export const Dropdown = ({ isDark, closeDropdown, refDropdown }: dropdownProps) => {
  return (
    <ul
      className={styles.dropdown_list}
      onMouseLeave={closeDropdown}
      ref={refDropdown}
    >
      <li>
        <a
          href="/szampony"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Szampony
        </a>
      </li>
      <li>
        <a
          href="/odzywki"
          className={`${styles.link} ${isDark ? styles._dark : styles._light}`}
        >
          Odżywki
        </a>
      </li>
      <li>
        <a
          href="/maski"
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
