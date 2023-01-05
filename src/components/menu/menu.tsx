import e from "express";
import { MutableRefObject, useState } from "react";
import { SocialIcons } from "../socialIcons/socialLinks";
import styles from "./menu.module.scss";

type menuProps = {
  refMenu: React.RefObject<HTMLUListElement>;
};

export const Menu = ({ refMenu }: menuProps) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);

  return (
    <ul className={styles.menu} ref={refMenu}>
      <li>
        <a href="/nowości">Nowości</a>
      </li>
      <li
        onMouseOver={() => setOpenDropdown(true)}
        onClick={(e) => {
          e.preventDefault();
          setOpenDropdown(true);
        }}
        className={styles.dropdown}
      >
        <div>
          <a href="/nowości">Produkty</a>
          {isOpenDropdown && (
            <ul onMouseLeave={() => setOpenDropdown(false)}>
              <li>
                <a href="">Szampony</a>
              </li>
              <li>
                <a href="">Odżywki</a>
              </li>
              <li>
                <a href="">Maski</a>
              </li>
              <li>
                <a href="">Pianki</a>
              </li>
              <li>
                <a href="">Żele</a>
              </li>
            </ul>
          )}
        </div>
      </li>
      <li>
        <a href="/nowości">Trendy</a>
      </li>
      <li>
        <a href="/nowości">O firmie</a>
      </li>
      <li>
        <a href="/nowości">Salony</a>
      </li>
      <li>
        <a href="/nowości">Dystrybutorzy</a>
      </li>
      <li>
        <a href="/nowości">Kontakt</a>
      </li>
      <li>
        <SocialIcons />
      </li>
    </ul>
  );
};
