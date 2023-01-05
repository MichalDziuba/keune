import styles from './o2_items.module.scss';

type O2ItemsProps = {
    imageUrl1: string;
    imageUrl2: string;
}

export const O2Items = ({imageUrl1,imageUrl2}:O2ItemsProps) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.image_wrapperFirst}>
          <img alt="" src={imageUrl1} className={styles.image} />
        </div>
        <div className={styles.image_wrapperSecond}>
          <img alt="" src={imageUrl2} className={styles.image} />
        </div>
      </div>
    );
}