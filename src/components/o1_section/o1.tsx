import styles from './o1.module.scss'
import bgImage from '../../images/slide1-big.jpg'
export const O1 = () => {
    return (
        <section className={styles.section_wrapper}>
            <img src={bgImage} alt="background" />
        </section >
    )
    
}