import styles from "./o2.module.scss";
import care from "../../images/01_care.jpg";
import design from "../../images/02_design.jpg";
import blend from "../../images/03_blend_1.jpg";
import koloryzacja from "../../images/04_koloryzacja.jpg";
import pure from "../../images/05_so_pure.jpg";
import { ItemText } from "../o2_items/itemText/itemText";
import { ItemLarge } from "../o2_items/itemLarge/itemLarge";
import { ItemSmall } from "../o2_items/itemSmall/itemSmall";
export const O2 = () => {
  return (
    <section className={styles.o2_section}>
      {/* first wrapper with text and large item */}
      <div className={styles.items_wrapper}>
        <ItemText />
        <ItemLarge image={care} text="CARE" />
      </div>
      {/* second wrapper with small and large item */}
      <div className={styles.items_wrapper}>
        <ItemSmall image={design} text="DESIGN" />
        <ItemLarge image={blend} text="BLEND" />
      </div>
      {/* third wrapper with large and small item */}
      <div className={styles.items_wrapper}>
        <ItemLarge image={koloryzacja} text="KOLORYZACJA" />
        <ItemSmall image={pure} text="SO PURE" />
      </div>
    </section>
  );
};
