import { IoIosArrowForward } from "react-icons/io";
import styles from "./itemSmall.module.scss";

type ItemSmallProps = {
  image: string;
  text: string;
};
export const ItemSmall = ({ image, text }: ItemSmallProps) => {
  return (
    <div className={styles.item} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.item_content}>
        <div className={styles.content_wrapper}>
          <h3 className={styles.content_text}>
            KEUNE <br /> {text}
          </h3>

          <div className={styles.content_arrow}>
            <p>ODKRYJ SERIE</p>
            <IoIosArrowForward className={styles.icon_arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
