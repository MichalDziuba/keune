import { ReactComponent as FacebookIcon } from "../../icons/fb.svg";
import { ReactComponent as YoutubeIcon } from "../../icons/yt.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../icons/insta.svg";
import { ReactComponent as FacebookIconWhite } from "../../icons/fb_WHITE.svg";
import { ReactComponent as YoutubeIconWhite } from "../../icons/yt_WHITE.svg";
import { ReactComponent as TwitterIconWhite } from "../../icons/twitter_WHITE.svg";
import { ReactComponent as InstagramIconWhite } from "../../icons/insta_WHITE.svg";

import styles from "./socialLinks.module.scss";
import { useEffect, useState } from "react";
type socialIconsProps = {
  isDark: boolean;
}
export const SocialIcons = ({ isDark }: socialIconsProps) => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className={styles.socialLinksWrapper}>
      <a href="/ico">
        {windowWidth < 1024 ? (
          <FacebookIconWhite className={`${styles.icon} ${styles.facebook}`} />
        ) : isDark ? (
          <FacebookIcon className={`${styles.icon} ${styles.facebook}`} />
        ) : (
          <FacebookIconWhite className={`${styles.icon} ${styles.facebook}`} />
        )}
      </a>
      <a href="/ico">
        {windowWidth < 1024 ? (
          <YoutubeIconWhite className={`${styles.icon} ${styles.youtube}`} />
        ) : isDark ? (
          <YoutubeIcon className={`${styles.icon} ${styles.youtube}`} />
        ) : (
          <YoutubeIconWhite className={`${styles.icon} ${styles.youtube}`} />
        )}
      </a>
      <a href="/ico">
        {windowWidth < 1024 ? (
          <TwitterIconWhite className={`${styles.icon} ${styles.twitter}`} />
        ) : isDark ? (
          <TwitterIcon className={`${styles.icon} ${styles.twitter}`} />
        ) : (
          <TwitterIconWhite className={`${styles.icon} ${styles.twitter}`} />
        )}
      </a>
      <a href="/ico">
        {windowWidth < 1024 ? (
          <InstagramIconWhite
            className={`${styles.icon} ${styles.instagram}`}
          />
        ) : isDark ? (
          <InstagramIcon className={`${styles.icon} ${styles.instagram}`} />
        ) : (
          <InstagramIconWhite
            className={`${styles.icon} ${styles.instagram}`}
          />
        )}
      </a>
    </div>
  );
};
