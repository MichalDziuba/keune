import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logoWhite from "../../icons/znak_keune_WHITE.svg";
import logoBlack from "../../icons/znak_keune.svg";
import styles from "./sliderControls.module.scss";

type SliderControlsProps = {
  images: object[];
  handleLeftArrow: () => void;
  handleRightArrow: () => void;
  bgImageIndex: number;
  setSelectedBackground: (key: number) => void;
  isDark: boolean;
};
export const SliderControls = ({
  bgImageIndex,
  handleLeftArrow,
  handleRightArrow,
  setSelectedBackground,
  images,
  isDark,
}: SliderControlsProps) => {
  return (
    <div className={styles.slider_controls_wrapper}>
      <div className={styles.slider__arrows}>
      
        <div className={`${styles.slider__arrows_line} ${isDark?styles._dark:styles._light}`}></div>
        <a href="/next-section" className={`${styles.slider__arrows_icon} ${isDark?styles._dark:styles._light}`}>
          <IoIosArrowForward className={`${styles.slider__arrows_svg} ${isDark?styles._dark:styles._light}`} />
          </a>
      
      </div>
      <div className={styles.controls}>
        <div className={styles.controls__buttons}>
          <button onClick={handleLeftArrow} className={styles.button_arrow}>
            <IoIosArrowBack
              className={`${styles.button_arrow_icon} ${
                isDark ? styles._dark : styles._light
              }`}
            />
          </button>
          <button onClick={handleRightArrow} className={styles.button_arrow}>
            <IoIosArrowForward
              className={`${styles.button_arrow_icon} ${
                isDark ? styles._dark : styles._light
              }`}
            />
          </button>
        </div>
        <div className={`${styles.controls_select} ${isDark?styles._dark:styles._light}`}>
          {images.map((e, idx) => (
            <button key={idx} onClick={() => setSelectedBackground(idx)}>
              {bgImageIndex === idx ? (
                <div
                  className={`${styles.selected_button} ${
                    isDark ? styles._dark : styles._light
                  }`}
                >
                  <img
                    src={isDark ? logoBlack : logoWhite}
                    alt="logo"
                    className={styles.selected_button_icon}
                  />
                </div>
              ) : (
                <div
                  className={`${styles.button_circle} ${
                    isDark ? styles._dark : styles._light
                  }`}
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
