import styles from "./hamburger.module.scss";
type hamburgerProps = {
    toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  refButton: React.RefObject<HTMLDivElement>;
  isDark: boolean;
};
export const Hamburger = ({ toggleMenu,refButton,isDark }: hamburgerProps) => {
  return (
    <div
      className={isDark?styles.hamburger_dark:styles.hamburger_light}
      onClick={(event) => toggleMenu(true)}
      ref={refButton}
    >
      <div className={isDark?styles.hamburger_button_dark:styles.hamburger_button_light}></div>
    </div>
  );
};
