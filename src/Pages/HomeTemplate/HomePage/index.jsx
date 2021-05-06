import Carousel from "Components/Carousel";
import NavTicket from "Components/NavTicket";
import ListMovie from "Components/ListMovie";
import ListCinema from "Components/ListCinema";
import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import bg from "Assets/Images/bg.jpg";
import Loading from "Components/Loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listMovieApi } from "Reducer/listMovie";
import { listMovieShowTimeByCinemaApi } from "Reducer/listMovieShowTimeByCinema";
import Footer from "Components/Footer";
import ScrollToTop from "Components/ScrollToTop";
import { listCinemaApi } from "Reducer/listCinema";

function HomePage(props) {
  const dispatch = useDispatch();
  const loadingListMovie = useSelector((state) => state.listMovie.loading);
  const loadingListMovieShowTimeByCinema = useSelector(
    (state) => state.listMovieShowTimeByCinema.loading
  );

  useEffect(() => {
    dispatch(listMovieApi());
    dispatch(listMovieShowTimeByCinemaApi());
    dispatch(listCinemaApi());
  }, []);

  if (loadingListMovie && loadingListMovieShowTimeByCinema) return <Loading />;

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <CssBaseline />
      <Carousel />
      <NavTicket />
      <ListMovie />
      <ListCinema />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default HomePage;
