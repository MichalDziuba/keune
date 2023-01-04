import facebookIcon from '../../icons/fb_WHITE.svg'
import youtubeIcon from '../../icons/yt_WHITE.svg'
import twitterIcon from '../../icons/twitter_WHITE.svg';
import instagramIcon from '../../icons/insta_WHITE.svg'

import styles from './socialLinks.module.scss'
export const SocialIcons = () => {
    return (
      <div className={styles.socialLinksWrapper}>
        <a className={`${styles.icon} ${styles.facebook}`} href="/ico">
          <img src={facebookIcon} alt="facebook icon"/>
        </a>
        <a className={`${styles.icon} ${styles.youtube}`} href="/ico">
          <img src={youtubeIcon} alt="youtube icon"/>
        </a>
        <a className={`${styles.icon} ${styles.twitter}`} href="/ico">
          <img src={twitterIcon} alt="twitter icon"/>
        </a>
        <a className={`${styles.icon} ${styles.instagram}`} href="/ico">
          <img src={instagramIcon} alt="instagram icon" />
     
      
        </a>
      </div>
    );
}