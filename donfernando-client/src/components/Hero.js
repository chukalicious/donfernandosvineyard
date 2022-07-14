import Slider from "react-slick";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { settings } from "../helpers/carrouselSettings";
import DTS_TONE_CHRIS_ABATZIS_00001 from "../assets/DTS_TONE_CHRIS_ABATZIS_00001.png";
import DTS_TONE_CHRISABATZIS_00012 from "../assets/DTS_TONE_CHRISABATZIS_00012.png";
import DTS_TONE_CHRIS_ABATZIS_00037 from "../assets/DTS_TONE_CHRIS_ABATZIS_00037.png";
import DTS_TONE_CHRIS_ABATZIS_00023 from "../assets/DTS_TONE_CHRIS_ABATZIS_00023.png";
import DTS_TONE_CHRIS_ABATZIS_00047 from "../assets/DTS_TONE_CHRIS_ABATZIS_00047.png";

const Hero = () => {
  const imagesShorthand = {
    abuela: DTS_TONE_CHRIS_ABATZIS_00001,
    nieto: DTS_TONE_CHRISABATZIS_00012,
    manos: DTS_TONE_CHRIS_ABATZIS_00037,
    solo: DTS_TONE_CHRIS_ABATZIS_00023,
    trinitarias: DTS_TONE_CHRIS_ABATZIS_00047,
  };

  const provisionalStyles = { marginBottom: "3rem" };

  return (
    <Box style={provisionalStyles}>
      <h2>
        Use this h2 element for a heading , or text on the images. Give it
        z-index and negative margin to have it move over the carrousel
      </h2>
      <Slider {...settings}>
        <ImageList>
          <ImageListItem>
            {" "}
            <img alt="hero" src={imagesShorthand.manos} />{" "}
          </ImageListItem>
        </ImageList>
        <ImageList>
          <ImageListItem>
            {" "}
            <img alt="hero" src={imagesShorthand.abuela} />{" "}
          </ImageListItem>
        </ImageList>
        <ImageList>
          <ImageListItem>
            <img alt="more hero" src={imagesShorthand.nieto} />{" "}
          </ImageListItem>
        </ImageList>
        <ImageList>
          <ImageListItem>
            <img alt="more hero" src={imagesShorthand.trinitarias} />{" "}
          </ImageListItem>
        </ImageList>
        <ImageList>
          <ImageListItem>
            <img alt="more hero" src={imagesShorthand.solo} />{" "}
          </ImageListItem>
        </ImageList>
      </Slider>
    </Box>
  );
};

export default Hero;
