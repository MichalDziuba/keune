import { O2Items } from '../o2_items/o2_items';
import styles from './o2.module.scss';
import image1 from '../../images/02_design.jpg';
import image2 from "../../images/03_blend_1.jpg";
export const O2 = () => {
    return (
        <section className={styles.section_wrapper}>
         
        <O2Items
          imageUrl1={image1}
          imageUrl2={image2}
        />
      </section>
    );
}