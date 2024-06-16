import React from 'react';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import image1 from "./careerphotos/AetherPhoto1.jpg";
import image2 from "./careerphotos/AetherPhoto2.jpg";
import image3 from "./careerphotos/AetherPhoto3.jpg";
import image4 from "./careerphotos/AetherPhoto4.jpg";
import image5 from "./careerphotos/AetherPhoto5.jpg";
import image6 from "./careerphotos/AetherPhoto6.jpg";
import image7 from "./careerphotos/AetherPhoto7.jpg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const carouselStyle = () => ({
  display: 'flex',
  width: '70%', 
  height: '60%',
  margin: '0 auto'
})

const PrevCareerFairBlock = () => {
  return (
    <div className="block" style={{justifyContent: "center"}}>
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2000}
      style={carouselStyle()}
    >
      <div data-src={image1} />
      <div data-src={image2} />
      <div data-src={image3} />
      <div data-src={image4} />
      <div data-src={image5} />
      <div data-src={image6} />
      <div data-src={image7} />
    </AutoplaySlider>
  </div>
  );
}

export default PrevCareerFairBlock;
