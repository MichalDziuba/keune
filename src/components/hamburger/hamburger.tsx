import styles from "./hamburger.module.scss";
type hamburgerProps = {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  refButton: React.RefObject<HTMLDivElement>;
  isDark: boolean;
};
export const Hamburger = ({
  toggleMenu,
  refButton,
  isDark,
}: hamburgerProps) => {
  return (
    <div
      // Conditionally applying styles depending on the color
      className={isDark ? styles.hamburger_dark : styles.hamburger_light}
      // Event handler to toggle the menu when the button is clicked
      onClick={() => toggleMenu(true)}
      // Adding a reference to the button element
      ref={refButton}
    >
      <div
        className={
          // Conditionally applying styles depending on the color
          isDark ? styles.hamburger_button_dark : styles.hamburger_button_light
        }
      ></div>
    </div>
  );
};
