import Header from "@/components/Header";
import Meta from "@/components/Meta";
import React from "react";
// import "@splidejs/react-splide/css";
// import { Splide, SplideSlide } from "@splidejs/react-splide";

const index = ({}) => {
  return (
    <div className="home">
      <Meta />
      {/* <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="../public/img/about-contact.webp" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="../public/img/about-contact.webp" alt="Image 2" />
        </SplideSlide>
      </Splide> */}

      <Header id={1} />
    </div>
  );
};

export default index;
