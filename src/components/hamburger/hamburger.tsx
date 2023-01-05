import styles from "./hamburger.module.scss";
type hamburgerProps = {
    toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
    refButton: React.RefObject<HTMLDivElement>;
};
export const Hamburger = ({ toggleMenu,refButton }: hamburgerProps) => {
  return (
    <div className={styles.hamburger} onClick={event=>toggleMenu(true)} ref={refButton}>
      <div className={styles.hamburger_button}></div>
    </div>
  );
};
