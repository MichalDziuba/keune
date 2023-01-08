
import styles from './o1_data.module.scss';
type O1DataProps = {
  texts: string[];
  isDark: boolean;
}
export const O1Data = ({ texts,isDark }: O1DataProps) => {
  
    return (
      <div className={`${styles.content_wrapper} ${isDark? styles._dark: styles._light}`}>
        <h2 className={styles.content_title}>o1.</h2>
        <p className={styles.content_text}>{texts[0]}</p>
        <p className={styles.content_text}>{texts[1]}</p>
        <p className={styles.content_keune}>
          KEUNE <span>DESING</span>
        </p>
      </div>
    );
}