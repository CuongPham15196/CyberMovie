import React, { useState } from "react";
import { useStyles } from "Components/Showing/style";
import CardMovie from "Components/CardMovie";
import { useSelector } from "react-redux";
import Carousel from "react-grid-carousel";
import ModalVideo from "react-modal-video";

export default function Showing() {
  const classes = useStyles();
  const listMovie = useSelector((state) => state.listMovie.data);
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const setData = (trailer, status) => {
    setTrailer(trailer);
    setOpen(status);
  };

  const renderCardMovie = () => {
    return listMovie?.map((movie) => {
      return (
        <Carousel.Item key={movie.maPhim}>
          <CardMovie movie={movie} setData={setData} />
        </Carousel.Item>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Carousel
        cols={4}
        rows={2}
        gap={20}
        loop={true}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3,
          },
          {
            breakpoint: 992,
            cols: 2,
          },
        ]}
      >
        {renderCardMovie()}
      </Carousel>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={trailer}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
