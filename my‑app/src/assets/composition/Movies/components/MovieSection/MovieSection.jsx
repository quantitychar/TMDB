import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import MovieItem from "../MovieItem/MovieItem";
import RightArrow from "./icons/rightArrow.svg?react";

const MovieSection = (props) => {
  const { title, data, link, linkText, onClick } = props;

  return (
    <div className="films__section">
      <div className="films__title">{title}</div>
      <div className="films__slider">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          className="films__wrapper"
          navigation={true}
          grabCursor={false}
          draggable={false}
          preventClicksPropagation={true}
          preventClicks={true}
          scrollbar={{ draggable: false, hide: true }}
          slideToClickedSlide={false}
          pagination={{ clickable: true }}
          modules={[Scrollbar]}
        >
          {data.map((el) => (
            <SwiperSlide key={el.id} className="film__item">
              <MovieItem item={el} onClick={onClick} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="film__link">
          <a href={link} className="link">
            {linkText}
          </a>
          <RightArrow />
        </p>
      </div>
    </div>
  );
};

MovieSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default MovieSection;
