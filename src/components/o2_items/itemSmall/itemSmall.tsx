import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./itemSmall.module.scss";

type ItemSmallProps = {
  image: string;
  text: string;
};
export const ItemSmall = ({ image, text }: ItemSmallProps) => {
  // Create refs for text and link
  const refTextKeune = useRef<HTMLHeadingElement>(null);
  const refTextLink = useRef<HTMLDivElement>(null);
  // function to handle toggle animation
  const animationToggle = () => {
    const animationText = styles.scrollText;
    const textKeune = refTextKeune.current!;
    const textLink = refTextLink.current!;
    textLink.classList.toggle(animationText);
    textKeune.classList.toggle(animationText);
  };

  return (
    <div
      className={styles.item}
      style={{ backgroundImage: `url(${image})` }}
      // Add event handlers to toggle the animation when hovering
      onMouseEnter={animationToggle}
      onMouseLeave={animationToggle}
    >
      <div className={styles.item_content}>
        <div className={styles.content_wrapper}>
          <h3 className={styles.content_text} ref={refTextKeune}>
            KEUNE <br /> {text}
          </h3>

          <div className={styles.content_arrow} ref={refTextLink}>
            <p>ODKRYJ SERIE</p>
            <IoIosArrowForward className={styles.icon_arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
