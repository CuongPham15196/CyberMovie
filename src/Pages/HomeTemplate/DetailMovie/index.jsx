import Footer from "Components/Footer";
import Movie from "Components/Movie";
import React, { useEffect } from "react";
import Loading from "Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { showTimesMovieApi } from "Reducer/showTimesMoive";
import { CssBaseline } from "@material-ui/core";
import bg from "Assets/Images/bg.jpg";

function DetailMovie(props) {
  const dispatch = useDispatch();
  const showTimesMovie = useSelector((state) => state.showTimesMovie.data);
  const loadingShowTimesMovie = useSelector((state) => state.showTimesMovie.loading);
  const { maPhim } = props.match.params;

  useEffect(() => {
    dispatch(showTimesMovieApi(maPhim));
    window.scrollTo(0, 0);
  }, []);

  if (loadingShowTimesMovie) return <Loading />;

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <CssBaseline />
      <Movie showTimesMovie={showTimesMovie && showTimesMovie} />
      <Footer />
    </div>
  );
}

export default DetailMovie;
