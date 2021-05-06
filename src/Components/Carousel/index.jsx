import React, { useState } from "react";
import "./style.css";
import banner from "Assets/Images/banner.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel(props) {
  const listMovie = useSelector((state) => state.listMovie.data);
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const renderCarousel = () => {
    return listMovie?.map((movie) => {
      return (
        <div className="carousel-item" key={movie.maPhim}>
          <img src={movie.hinhAnh} alt="" />
          <div className="carousel-caption">
            <button
              className="play"
              onClick={() => {
                setTrailer(movie.trailer);
                setOpen(true);
              }}
            >
              <PlayArrowIcon fontSize="large" />
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="d-none d-sm-block">
      <div
        id="movieCarousel"
        className="carousel slide carousel-fade"
        data-interval="4000"
        data-pause="hover"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <button
                className="play"
                onClick={() => {
                  setTrailer("https://www.youtube.com/embed/_rRoD28-WgU");
                  setOpen(true);
                }}
              >
                <PlayArrowIcon fontSize="large" />
              </button>
            </div>
          </div>
          {renderCarousel()}
        </div>
        <a className="carousel-control-prev" href="#movieCarousel" role="button" data-slide="prev">
          <ArrowBackIosIcon />
        </a>
        <a className="carousel-control-next" href="#movieCarousel" role="button" data-slide="next">
          <ArrowForwardIosIcon />
        </a>
      </div>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={trailer}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}

export default Carousel;
