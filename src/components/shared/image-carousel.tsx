"use client";
import { ABOUT_US_GALLERY } from "@/static";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ImageCarousel = (props: any) => {
  console.log(props);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      deviceType={props.deviceType}
      itemClass="carousel-item-padding-40-px"
    >
      {ABOUT_US_GALLERY.map((item) => {
        return (
          <div className="px-2 rounded-sm max-h-[400px]" key={item.id}>
            <Image
              src={item.url}
              alt={item.alt}
              width={500}
              height={400}
              className="rounded-sm object-fill"
            />
          </div>
        );
      })}
    </Carousel>
  );
};
