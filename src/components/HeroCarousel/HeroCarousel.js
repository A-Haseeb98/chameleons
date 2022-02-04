import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Image from "next/image";
import img1 from '../../assets/team/acc-eg-3.png'
import img2 from '../../assets/team/acc-eg-4.png'
import img3 from '../../assets/team/acc-eg-5.png'
import img4 from '../../assets/team/acc-eg-6.png'
import img5 from '../../assets/team/acc-eg-7.png'
import img6 from '../../assets/team/acc-eg-9.png'


import Button from "../../global/Button/Button";
import styles from "./Intro.module.scss";


const images = [
  { id: 1, image: img1 },
  { id: 2, image:img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HeroCarousel = () => {
  return (
    <div className={styles.intro}>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.image}
              alt="NFT collection"
              style={{ width: "100%", height: "100%", padding: "30px" }}
            />
          </div>
        ))}
      </Carousel>
      <div className={styles._intro_data}>
        <article className={styles._first_intro}>
          <div className={styles._div}>
            <Button>Get Whitelisted</Button>
          </div>
        </article>
        <br />
      </div>
    </div>
  );
};

export default HeroCarousel;
