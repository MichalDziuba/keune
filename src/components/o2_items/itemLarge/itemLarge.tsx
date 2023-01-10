import styles from "./itemLarge.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
type ItemLargeProps = {
  image: string;
  text: string;
};

export const ItemLarge = ({ image, text }: ItemLargeProps) => {
  //ref to textKeune and refTextLink
  const refTextKeune = useRef<HTMLHeadingElement>(null);
  const refTextLink = useRef<HTMLDivElement>(null);
  // toggle animation for text keune and text link
  const animationToggle = () => {
    const animationText = styles.scrollText;
    const textKeune = refTextKeune.current!;
    const textLink = refTextLink.current!;
    textLink.classList.toggle(animationText);
    textKeune.classList.toggle(animationText);
  };

  return (
    <div
      // Add event handlers to toggle the animation when hovering
      onMouseEnter={animationToggle}
      onMouseLeave={animationToggle}
      className={`${styles.item} ${styles.color_change_bg}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.item_content}>
        <div className={styles.content_wrapper}>
          <h3 className={styles.content_text} ref={refTextKeune}>
            KEUNE <br /> {text}
          </h3>

          <div ref={refTextLink} className={styles.content_arrow}>
            <p>ODKRYJ SERIE</p>
            <IoIosArrowForward className={styles.icon_arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
