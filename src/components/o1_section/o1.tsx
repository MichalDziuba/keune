// import styles from "./o1.module.scss";
// import bgImage from "../../images/slide1-big.jpg";
// import bgImage2 from "../../images/slide2-big.jpg";
// import { useEffect, useState } from "react";
// import { SliderControls } from "../sliderControls/sliderControls";
// import { O1Data } from "../o1_data/o1_data";
// type o1Props = {
//   isDark: boolean;
//   setIsDark: (isDark: boolean) => void;
// };

// export const O1 = ({ isDark, setIsDark }: o1Props) => {
//   // array of background images and text data for each image
//   const bgImages = [
//     {
//       imageUrl: bgImage,
//       isDark: true,
//       text1: "Bez kompromisu.",
//       text2: "Idealnie tak jak lubisz.",
//     },
//     {
//       imageUrl: bgImage2,
//       isDark: false,
//       text1: "Z zaangażowaniem.",
//       text2: "Tak, jak Ci wygodnie.",
//     },
//   ];

//   // state for the index of the current background image
//   const [bgImageIndex, setBgImageIndex] = useState(0);

//   // function to handle left arrow click
//   const handleLeftArrowClick = () => {
//     if (bgImageIndex === 0) {
//       setBgImageIndex(bgImages.length - 1);
//     } else {
//       setBgImageIndex(bgImageIndex - 1);
//     }

//   };
//   const sectionTexts = [
//     bgImages[bgImageIndex].text1,
//     bgImages[bgImageIndex].text2,
//   ];

//   // function to handle right arrow click
//   const handleRightArrowClick = () => {
//     if (bgImageIndex === bgImages.length - 1) {
//       setBgImageIndex(0);
//     } else {
//       setBgImageIndex(bgImageIndex + 1);
//     }
//   };
//   const setSelectedBackground = (key: number) => {
//     setBgImageIndex(key);
//   };
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     handleRightArrowClick();
//   //   }, 5000);
//   //   return () => clearInterval(interval);
//   // });
//   useEffect(() => {
//     setIsDark(bgImages[bgImageIndex].isDark);
//   }, [bgImageIndex, setIsDark]);

//   return (
//     <div
//       className={styles.o1_section}
//       style={{ backgroundImage: `url(${bgImages[bgImageIndex].imageUrl})` }}
//     >
//       <div className={styles.o1_content}>
//         <O1Data texts={sectionTexts} isDark={isDark} />
//         <SliderControls
//           isDark={isDark}
//           bgImageIndex={bgImageIndex}
//           handleLeftArrow={handleLeftArrowClick}
//           handleRightArrow={handleRightArrowClick}
//           images={bgImages}
//           setSelectedBackground={setSelectedBackground}
//         />
//       </div>
//     </div>
//   );
// };
import styles from "./o1.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide, SlideshowRef } from "react-slideshow-image";
import { useState, useRef } from "react";
import { SliderControls } from "../sliderControls/sliderControls";
import { O1Data } from "../o1_data/o1_data";
import { bgImages } from "../../data/images/images";

type o1Props = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};
export const O1 = ({ isDark, setIsDark }: o1Props) => {
  // array of background images and text data for each image

  //ref to SilderComponent
  const slideRef = useRef<SlideshowRef>(null);
  // state for the index of the current background image
  const [bgImageIndex, setBgImageIndex] = useState(0);

  // function to handle left arrow click
  const handleLeftArrowClick = () => {
  slideRef.current?.goBack()
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
  onChange: (oldIndex:number, newIndex:number ) => {
    setBgImageIndex(newIndex);
    setIsDark(bgImages[newIndex].isDark);
    setBgImageIndex(newIndex)
    
  },
};


  return (
    <Slide ref={slideRef}  {...properties} >
      
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
