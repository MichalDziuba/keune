import styles from "./o1.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide, SlideshowRef } from "react-slideshow-image";
import { useState, useRef } from "react";
import { SliderControls } from "../sliderControls/sliderControls";
import { O1Data } from "../o1_data/o1_data";
import { bgImages } from "../../data/images"

type o1Props = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};
export const O1 = ({ isDark, setIsDark }: o1Props) => {
  //ref to SilderComponent
  const slideRef = useRef<SlideshowRef>(null);
  // state for the index of the current background image
  const [bgImageIndex, setBgImageIndex] = useState(0);

  // function to handle left arrow click
  const handleLeftArrowClick = () => {
    slideRef.current?.goBack();
  };

  // function to handle right arrow click
  const handleRightArrowClick = () => {
    slideRef.current?.goNext();
  };
  const setSelectedBackground = (key: number) => {
    slideRef.current?.goTo(key);
  };

  const properties = {
    duration: 5000,
    transitionDuration: 700,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: true,
    onChange: (oldIndex: number, newIndex: number) => {
      setBgImageIndex(newIndex);
      setIsDark(bgImages[newIndex].isDark);
      setBgImageIndex(newIndex);
    },
  };

  return (
    <Slide  ref={slideRef} {...properties}>
      {bgImages.map((image, index) => (
        <div
          className={`${styles.o1_section} ${"each-slide-effect"}`}
          key={index}
          style={{ backgroundImage: `url(${image.imageUrl})` }}
        >
          <div className={styles.o1_content}>
            <div>{index}</div>
            <O1Data
              texts={[bgImages[index].text1, bgImages[index].text2]}
              isDark={isDark}
            />
            <SliderControls
              isDark={isDark}
              bgImageIndex={bgImageIndex}
              handleLeftArrow={handleLeftArrowClick}
              handleRightArrow={handleRightArrowClick}
              setSelectedBackground={setSelectedBackground}
            />
          </div>
        </div>
      ))}
    </Slide>
  );
};
