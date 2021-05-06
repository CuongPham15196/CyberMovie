import Cinema from "Components/Cinema";
import React, { useEffect, useState } from "react";
import bhd from "Assets/Images/bhd.jpg";
import cgv from "Assets/Images/cgv.jpg";
import cns from "Assets/Images/cns.jpg";
import gl from "Assets/Images/gl.jpg";
import lt from "Assets/Images/lt.jpg";
import mega from "Assets/Images/mega.jpg";
import bg from "Assets/Images/bg.jpg";
import { CssBaseline } from "@material-ui/core";
import Footer from "Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listMovieShowTimeByCinemaApi } from "Reducer/listMovieShowTimeByCinema";
import Loading from "Components/Loading";

function DetailMovie(props) {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const { maCumRap, maHeThongRap } = props.match.params;
  const loading = useSelector((state) => state.listMovieShowTimeByCinema.loading);

  useEffect(() => {
    dispatch(listMovieShowTimeByCinemaApi(maHeThongRap));
    switch (maHeThongRap) {
      case "BHDStar":
        setImg(bhd);
        break;
      case "CGV":
        setImg(cgv);
        break;
      case "CineStar":
        setImg(cns);
        break;
      case "Galaxy":
        setImg(gl);
        break;
      case "LotteCinima":
        setImg(lt);
        break;
      case "MegaGS":
        setImg(mega);
        break;
    }
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading />;

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <CssBaseline />
      <Cinema img={img && img} maCumRap={maCumRap} />
      <Footer />
    </div>
  );
}

export default DetailMovie;
