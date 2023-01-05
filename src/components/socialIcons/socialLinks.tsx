import { ReactComponent as FacebookIcon } from "../../icons/fb.svg";
import { ReactComponent as YoutubeIcon } from "../../icons/yt.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter.svg";
import {ReactComponent as InstagramIcon} from "../../icons/insta.svg";
import styles from "./socialLinks.module.scss";
export const SocialIcons = () => {
  return (
    <div className={styles.socialLinksWrapper}>
      <a href="/ico">
        <FacebookIcon className={`${styles.icon} ${styles.facebook}`} />
      </a>
      <a href="/ico">
        <YoutubeIcon className={`${styles.icon} ${styles.youtube}`} />
      </a>
      <a href="/ico">
        <TwitterIcon className={`${styles.icon} ${styles.twitter}`} />
      </a>
      <a href="/ico">
        <InstagramIcon className={`${styles.icon} ${styles.instagram}`} />
      </a>
    </div>
  );
};
