import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavHashLink } from "react-router-hash-link";
import { useStyles } from "./style";
import { TabPanel } from "./tabPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";

function changeMovie(maPhim) {
  return {
    id: `simple-tab-${maPhim}`,
    "aria-controls": `simple-tabpanel-${maPhim}`,
  };
}

function Cinema(props) {
  const classes = useStyles();
  const { img, maCumRap } = props;
  const listMovieShowTimeByCinema = useSelector((state) => state.listMovieShowTimeByCinema.data);
  const [maPhim, setMaPhim] = useState(0);

  useEffect(() => {
    return listMovieShowTimeByCinema?.[0].lstCumRap.map((cinema) => {
      if (maCumRap === cinema.maCumRap) setMaPhim(cinema.danhSachPhim[0].maPhim);
    });
  }, []);

  const renderCinema = () => {
    return listMovieShowTimeByCinema?.[0].lstCumRap.map((cinema) => {
      if (maCumRap === cinema.maCumRap)
        return (
          <div style={{ color: "white", marginBottom: 20 }}>
            <Typography style={{ fontSize: "1.6rem", margin: 0 }}>
              Rạp: {cinema.tenCumRap}
            </Typography>
            <Typography
              style={{
                fontSize: "0.8rem",
                margin: 0,
                color: "black",
              }}
            >
              Địa chỉ: {cinema.diaChi}
            </Typography>
          </div>
        );
    });
  };

  const renderMovie = () => {
    return listMovieShowTimeByCinema?.[0].lstCumRap.map((cinema) => {
      if (maCumRap === cinema.maCumRap)
        return cinema.danhSachPhim.map((movie) => {
          return (
            <Tab
              style={{ margin: 10 }}
              value={movie.maPhim}
              key={movie.maPhim}
              icon={
                <Card className={classes.content}>
                  <CardMedia className={classes.cover} image={movie.hinhAnh} />
                  <CardContent className={classes.txt}>
                    <Typography style={{ fontSize: "0.7rem", fontWeight: "bold", margin: 0 }}>
                      {movie.tenPhim}
                    </Typography>
                    <NavLink
                      style={{
                        fontSize: "0.45rem",
                        color: "#f1684e",
                        textDecoration: "none",
                      }}
                      to={`/phim/${movie.maPhim}/${movie.tenPhim}`}
                    >
                      [chi tiết]
                    </NavLink>
                  </CardContent>
                </Card>
              }
              {...changeMovie(movie.maPhim)}
            />
          );
        });
    });
  };

  const renderShowTime = (dateMovie) => {
    return listMovieShowTimeByCinema?.[0].lstCumRap.map((cinema) => {
      if (maCumRap === cinema.maCumRap)
        return cinema.danhSachPhim.map((movie) => {
          if (maPhim === movie.maPhim)
            return movie.lstLichChieuTheoPhim.map((time) => {
              if (dateMovie === new Date(time.ngayChieuGioChieu).toLocaleDateString())
                return (
                  <Grid key={time.maLichChieu} item xs={12} sm={6} md={4} lg={3}>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.btn}
                        style={{ margin: 0 }}
                      >
                        {new Date(time.ngayChieuGioChieu).toLocaleTimeString()}
                      </Button>
                    </NavLink>
                  </Grid>
                );
            });
        });
    });
  };

  const renderShowDate = () => {
    let dateMovie = "";
    return listMovieShowTimeByCinema?.[0].lstCumRap.map((cinema) => {
      if (maCumRap === cinema.maCumRap)
        return cinema.danhSachPhim.map((movie) => {
          if (maPhim === movie.maPhim)
            return movie.lstLichChieuTheoPhim.map((date) => {
              if (dateMovie !== new Date(date.ngayChieuGioChieu).toLocaleDateString()) {
                dateMovie = new Date(date.ngayChieuGioChieu).toLocaleDateString();
                return (
                  <Accordion key={date.maLichChieu} style={{ width: "100%" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{dateMovie}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2} style={{ textAlign: "center" }}>
                        {renderShowTime(dateMovie)}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                );
              }
            });
        });
    });
  };

  const renderDate = () => {
    return listMovieShowTimeByCinema?.[0].lstCumRap.map((cinema) => {
      if (maCumRap === cinema.maCumRap)
        return cinema.danhSachPhim.map((movie) => {
          return (
            <TabPanel
              style={{ margin: 10, width: "60%", height: "500px", overflow: "auto" }}
              key={movie.maPhim}
              value={maPhim}
              index={movie.maPhim}
            >
              {renderShowDate()}
            </TabPanel>
          );
        });
    });
  };

  return (
    <>
      <img className={classes.banner} src={img} />
      <Container maxWidth="xl" className={classes.heading}>
        <Grid style={{ display: "flex" }} alignItems="center">
          <Grid item xs={3} style={{ textAlign: "right" }}>
            <img src={img} />
          </Grid>
          <Grid item xs={9} style={{ paddingLeft: 25 }}>
            {renderCinema()}
            <NavHashLink smooth to="#lichChieuTheoPhim" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary" className={classes.btn}>
                Mua vé
              </Button>
            </NavHashLink>
          </Grid>
        </Grid>
      </Container>
      <Typography
        id="lichChieuTheoPhim"
        variant="h4"
        style={{ color: "white", textAlign: "center", marginTop: 20 }}
      >
        Lịch chiếu
      </Typography>
      <Container className={classes.table}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={maPhim}
          onChange={(event, newValue) => {
            setMaPhim(newValue);
          }}
          aria-label="simple tabs example"
        >
          {renderMovie()}
        </Tabs>
        {renderDate()}
      </Container>
    </>
  );
}

export default Cinema;
