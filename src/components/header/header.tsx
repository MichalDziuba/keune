import { useEffect, useRef, useState } from "react";
import { Hamburger } from "../hamburger/hamburger";
import { Logo } from "../logo/logo";
import { Menu } from "../menu/menu";
import styles from "./header.module.scss";
import stylesHamburger from "../hamburger/hamburger.module.scss";
import stylesMenu from "../menu/menu.module.scss";

type headerProps = {
  isDark: boolean;
};
export const Header = ({ isDark }: headerProps) => {
  // using useRef to create references to the menu and hamburger elements
  const refMenu = useRef<HTMLUListElement>(null);
  const refHamburger = useRef<HTMLDivElement>(null);
  // using useState to track the open state of the menu
  const [isMenuOpen, setOpen] = useState(false);
  // using useState to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  let isDarkProps = isDark;
  // Changing isDark prop when scroll position is greater than 300
  if (scrollPosition > 300) {
    isDarkProps = false;
  }
  // Function to toggle the menu
  const toggleMenu = () => {
    const burgerBtn = refHamburger.current!;
    const menu = refMenu.current!;
    if (menu.classList.contains(stylesMenu.out)) {
      menu.classList.remove(stylesMenu.out);
    }
    if (!isMenuOpen) {
      burgerBtn.classList.add(stylesHamburger.open);
      menu.classList.add(stylesMenu.active);
      setOpen(true);
    } else {
      menu.classList.add(stylesMenu.out);
      burgerBtn.classList.remove(stylesHamburger.open);
      menu.classList.remove(stylesMenu.active);

      setOpen(false);
    }
  };
  // Header class depending on scroll position
  const headerClass = scrollPosition > 200 ? styles.scrolled : "";
  // useEffect that sets an event listener on the window object to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.header} ${headerClass}`}>
      <Logo isDark={isDarkProps} />
      <Menu refMenu={refMenu} isDark={isDarkProps} />
      <Hamburger
        toggleMenu={toggleMenu}
        refButton={refHamburger}
        isDark={isDarkProps}
      />
    </div>
  );
};
