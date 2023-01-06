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
  const refMenu = useRef<HTMLUListElement>(null);
  const refHamburger = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setOpen] = useState(false);

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
  const [navBarTransparent, setNavBarTransparent] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 100) {
      console.log(navBarTransparent);
      setNavBarTransparent(false);
    } else {
      console.log(navBarTransparent);
      setNavBarTransparent(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // className={`${styles.header} ${navBarTransparent ? styles._transparent : styles._black}`}
  return (
    <div className={styles.header}>
      <Logo isDark={isDark} />
      <Menu refMenu={refMenu} isDark={isDark} />
      <Hamburger toggleMenu={toggleMenu} refButton={refHamburger} isDark={isDark} />
    </div>
  );
};
