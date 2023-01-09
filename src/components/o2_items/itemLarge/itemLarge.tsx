import styles from "./itemLarge.module.scss";
import { IoIosArrowForward } from "react-icons/io";
type ItemLargeProps = {
  image: string;
  text: string;
};

export const ItemLarge = ({ image, text }: ItemLargeProps) => {
  return (
    <div className={`${styles.item} ${styles.color_change_bg}`} style={{ backgroundImage: `url(${image})` }}>
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
