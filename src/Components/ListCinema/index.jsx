import React, { useEffect, useState } from "react";
import {
  Tab,
  Tabs,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";
import { TabPanel } from "./tabPanel";
import { useStyles } from "./style";
import bhd from "Assets/Images/bhd.jpg";
import cgv from "Assets/Images/cgv.jpg";
import cns from "Assets/Images/cns.jpg";
import gl from "Assets/Images/gl.jpg";
import lt from "Assets/Images/lt.jpg";
import mega from "Assets/Images/mega.jpg";
import { useSelector } from "react-redux";

function a11yPropsLogo(maHeThongRap) {
  return {
    id: `vertical-tab-${maHeThongRap}`,
    "aria-controls": `vertical-tabpanel-${maHeThongRap}`,
  };
}

function a11yProps(maCumRap) {
  return {
    id: `vertical-tab-${maCumRap}`,
    "aria-controls": `vertical-tabpanel-${maCumRap}`,
  };
}

export default function ListCinema(props) {
  const classes = useStyles();
  const listMovieShowTimeByCinema = useSelector((state) => state.listMovieShowTimeByCinema.data);
  const [maHeThongRap, setMaHeThongRap] = useState();
  const [maCumRap, setMaCumRap] = useState("");
  const [bannerCinema, setBannerCinema] = useState(bhd);

  useEffect(() => {
    setMaHeThongRap(listMovieShowTimeByCinema?.[0].maHeThongRap);
  }, [listMovieShowTimeByCinema]);

  useEffect(() => {
    switch (maHeThongRap) {
      case "BHDStar":
        setBannerCinema(bhd);
        break;
      case "CGV":
        setBannerCinema(cgv);
        break;
      case "CineStar":
        setBannerCinema(cns);
        break;
      case "Galaxy":
        setBannerCinema(gl);
        break;
      case "LotteCinima":
        setBannerCinema(lt);
        break;
      case "MegaGS":
        setBannerCinema(mega);
        break;
    }
    return listMovieShowTimeByCinema?.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap) return setMaCumRap(cinema.lstCumRap[0].maCumRap);
    });
  }, [maHeThongRap]);

  const renderCinemaLogo = () => {
    return listMovieShowTimeByCinema?.map((cinema) => {
      return (
        <Tab
          className={classes.tabLogo}
          key={cinema.maHeThongRap}
          {...a11yPropsLogo(cinema.maHeThongRap)}
          icon={<Avatar src={cinema.logo} />}
          value={cinema.maHeThongRap}
        />
      );
    });
  };

  const renderShowCinema = (maRap) => {
    return listMovieShowTimeByCinema?.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap)
        return cinema.lstCumRap.map((theater) => {
          return (
            <Tab
              className={classes.tab}
              icon={
                <Card className={classes.content}>
                  <CardMedia className={classes.cover} image={bannerCinema} />
                  <CardContent className={classes.txt}>
                    <Typography style={{ fontSize: "0.6rem", margin: 0 }}>
                      {theater.tenCumRap}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "0.5rem",
                        margin: 0,
                        color: "gray",
                        maxWidth: 170,
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {theater.diaChi}
                    </Typography>
                    <NavLink
                      style={{
                        fontSize: "0.45rem",
                        color: "#f1684e",
                        textDecoration: "none",
                      }}
                      to={`/rap/${maRap}/${theater.maCumRap}`}
                    >
                      [chi tiết]
                    </NavLink>
                  </CardContent>
                </Card>
              }
              {...a11yProps(theater.maCumRap)}
              value={theater.maCumRap}
              key={theater.maCumRap}
              style={{ marginTop: 0 }}
            />
          );
        });
    });
  };

  const renderShowTimeMovie = (maPhim, date) => {
    return listMovieShowTimeByCinema?.map((cinema) => {
      if (cinema.maHeThongRap === maHeThongRap) {
        return cinema.lstCumRap.map((theater) => {
          if (theater.maCumRap === maCumRap)
            return theater.danhSachPhim.map((movie) => {
              if (maPhim === movie.maPhim)
                return movie.lstLichChieuTheoPhim.map((time) => {
                  if (date === new Date(time.ngayChieuGioChieu).toLocaleDateString())
                    return (
                      <Grid key={time.maLichChieu} item xs={6}>
                        <NavLink
                          to={`/dat-ve/${time.maLichChieu}/${movie.tenPhim}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button className={classes.btn} color="secondary" variant="contained">
                            {new Date(time.ngayChieuGioChieu).toLocaleTimeString()}
                          </Button>
                        </NavLink>
                      </Grid>
                    );
                });
            });
        });
      }
    });
  };

  const renderShowDayMovie = (maPhim) => {
    let dataDate = "";
    return listMovieShowTimeByCinema?.map((cinema) => {
      if (cinema.maHeThongRap === maHeThongRap)
        return cinema.lstCumRap.map((theater) => {
          if (theater.maCumRap === maCumRap)
            return theater.danhSachPhim.map((movie) => {
              if (maPhim === movie.maPhim)
                return movie.lstLichChieuTheoPhim.map((date) => {
                  if (dataDate !== new Date(date.ngayChieuGioChieu).toLocaleDateString()) {
                    dataDate = new Date(date.ngayChieuGioChieu).toLocaleDateString();
                    return (
                      <Accordion style={{ width: 270 }} key={date.maLichChieu}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.headingMovie}>{dataDate}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2}>
                            {renderShowTimeMovie(maPhim, dataDate)}
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    );
                  }
                });
            });
        });
    });
  };

  const renderShowMovie = () => {
    return listMovieShowTimeByCinema?.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap)
        return cinema.lstCumRap.map((theater) => {
          if (theater.maCumRap === maCumRap)
            return theater.danhSachPhim.map((movie) => {
              return (
                <Accordion
                  key={movie.maPhim}
                  value={maCumRap}
                  index={cinema.maCumRap}
                  style={{ marginBottom: 20, width: 300, marginRight: 10 }}
                  // TransitionProps={{ unmountOnExit: true }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Avatar
                      variant={"square"}
                      src={movie.hinhAnh}
                      style={{ marginRight: "10px" }}
                    />
                    <Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.headingMovie} variant="h1">
                          {movie.tenPhim}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.detailMovie} variant="body1">
                          [Lịch chi tiết]
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails style={{ display: "block" }}>
                    {renderShowDayMovie(movie.maPhim)}
                  </AccordionDetails>
                </Accordion>
              );
            });
        });
    });
  };

  const renderCinema = () => {
    return listMovieShowTimeByCinema?.map((cinema) => {
      return (
        <TabPanel key={cinema.maHeThongRap} value={maHeThongRap} index={cinema.maHeThongRap}>
          <Container style={{ display: "flex" }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              scrollButtons="off"
              indicatorColor="secondary"
              textColor="secondary"
              value={maCumRap}
              onChange={(event, newValue) => {
                setMaCumRap(newValue);
              }}
              aria-label="Vertical tabs example"
              style={{ height: "600px" }}
            >
              {renderShowCinema(cinema.maHeThongRap)}
            </Tabs>
            <div
              style={{
                transform: "translate(15%, -2%)",
                height: "630px",
                overflow: "auto",
              }}
            >
              {renderShowMovie()}
            </div>
          </Container>
        </TabPanel>
      );
    });
  };

  return (
    <>
      <h3 id="cumRap" className={classes.title}>
        Hệ thống rạp
      </h3>
      <Container className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          indicatorColor="secondary"
          textColor="secondary"
          value={maHeThongRap}
          onChange={(event, newValue) => {
            setMaHeThongRap(newValue);
          }}
          aria-label="Vertical tabs example"
        >
          {renderCinemaLogo()}
        </Tabs>
        {renderCinema()}
      </Container>
    </>
  );
}
