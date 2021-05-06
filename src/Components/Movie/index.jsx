import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ModalVideo from "react-modal-video";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { CircularProgressWithLabel } from "./circularWithLabel";
import { StyledRating } from "./styleRating";
import { TabPanel } from "./tabPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import bhd from "Assets/Images/bhd.jpg";
import cgv from "Assets/Images/cgv.jpg";
import cns from "Assets/Images/cns.jpg";
import gl from "Assets/Images/gl.jpg";
import lt from "Assets/Images/lt.jpg";
import mega from "Assets/Images/mega.jpg";

function changeLogoCinema(maHeThongRap) {
  return {
    id: `scrollable-auto-tab-${maHeThongRap}`,
    "aria-controls": `scrollable-auto-tabpanel-${maHeThongRap}`,
  };
}

function changeCinema(maCumRap) {
  return {
    id: `vertical-tab-${maCumRap}`,
    "aria-controls": `vertical-tabpanel-${maCumRap}`,
  };
}

function Movie(props) {
  const classes = useStyles();
  const { showTimesMovie } = props;
  const [checked, setChecked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [maHeThongRap, setMaHeThongRap] = useState("");
  const [maCumRap, setMaCumRap] = useState("");
  const [bannerCinema, setBannerCinema] = useState(bhd);

  useEffect(() => {
    setMaHeThongRap(showTimesMovie?.heThongRapChieu[0].maHeThongRap);
  }, []);

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
    return showTimesMovie?.heThongRapChieu.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap) return setMaCumRap(cinema.cumRapChieu[0].maCumRap);
    });
  }, [maHeThongRap]);

  const renderLogoCinema = () => {
    return showTimesMovie?.heThongRapChieu.map((cinema) => {
      return (
        <Tab
          key={cinema.maHeThongRap}
          value={cinema.maHeThongRap}
          icon={<Avatar style={{ margin: "10px 0" }} src={cinema.logo} />}
          {...changeLogoCinema(cinema.maHeThongRap)}
        />
      );
    });
  };

  const renderShowCinema = () => {
    return showTimesMovie?.heThongRapChieu.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap) {
        return cinema.cumRapChieu.map((theater) => {
          return (
            <Tab
              style={{ margin: "0 20px" }}
              {...changeCinema(theater.maCumRap)}
              value={theater.maCumRap}
              key={theater.maCumRap}
              icon={
                <Card className={classes.content}>
                  <CardMedia className={classes.cover} image={bannerCinema} />
                  <CardContent className={classes.txt}>
                    <Typography style={{ fontSize: "0.6rem", margin: 0 }}>
                      {theater.tenCumRap}
                    </Typography>
                    <NavLink
                      style={{
                        fontSize: "0.45rem",
                        color: "#f1684e",
                        textDecoration: "none",
                      }}
                      to={`/rap/${cinema.maHeThongRap}/${theater.maCumRap}`}
                    >
                      [chi tiết]
                    </NavLink>
                  </CardContent>
                </Card>
              }
            />
          );
        });
      }
    });
  };

  const renderShowTime = (date) => {
    return showTimesMovie?.heThongRapChieu.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap)
        return cinema.cumRapChieu.map((theater) => {
          if (maCumRap === theater.maCumRap)
            return theater.lichChieuPhim.map((time) => {
              if (date === new Date(time.ngayChieuGioChieu).toLocaleDateString())
                return (
                  <Grid key={time.maLichChieu} item xs={12} md={6} lg={4}>
                    <NavLink
                      to={`/dat-ve/${time.maLichChieu}/${showTimesMovie?.biDanh}`}
                      style={{ textDecoration: "none" }}
                    >
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
    return showTimesMovie?.heThongRapChieu.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap)
        return cinema.cumRapChieu.map((theater) => {
          if (maCumRap === theater.maCumRap)
            return theater.lichChieuPhim.map((date) => {
              if (dateMovie !== new Date(date.ngayChieuGioChieu).toLocaleDateString()) {
                dateMovie = new Date(date.ngayChieuGioChieu).toLocaleDateString();
                return (
                  <Accordion key={date.maLichChieu}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{dateMovie}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
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
    return showTimesMovie?.heThongRapChieu.map((cinema) => {
      if (maHeThongRap === cinema.maHeThongRap)
        return cinema.cumRapChieu.map((theater) => {
          return (
            <TabPanel
              key={theater.maCumRap}
              value={maCumRap}
              index={theater.maCumRap}
              style={{ width: "60%", textAlign: "center" }}
            >
              <Container style={{ height: "600px", overflow: "auto" }}>
                {renderShowDate()}
              </Container>
            </TabPanel>
          );
        });
    });
  };

  const renderCinema = () => {
    return showTimesMovie?.heThongRapChieu.map((cinema) => {
      return (
        <>
          <TabPanel key={cinema.maHeThongRap} value={maHeThongRap} index={cinema.maHeThongRap}>
            <div style={{ display: "flex", marginTop: 20 }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons="off"
                value={maCumRap}
                onChange={(event, newValue) => {
                  setMaCumRap(newValue);
                }}
                aria-label="Vertical tabs example"
                style={{ height: "650px" }}
              >
                {renderShowCinema()}
              </Tabs>
              {renderDate()}
            </div>
          </TabPanel>
        </>
      );
    });
  };

  return (
    <>
      <img className={classes.bannerImg} src={showTimesMovie && showTimesMovie.hinhAnh} />
      <div
        className={classes.banner}
        onMouseEnter={() => {
          setChecked((prev) => !prev);
        }}
        onMouseLeave={() => {
          setChecked((prev) => !prev);
        }}
      >
        <img
          style={{ width: "100%", height: 350 }}
          src={showTimesMovie && showTimesMovie.hinhAnh}
        />
        <Fade in={checked}>
          <div className={classes.play} style={{ left: "50%" }} onClick={() => setOpen(true)}>
            <PlayArrowIcon fontSize="large" />
          </div>
        </Fade>
      </div>
      <Container maxWidth="xl" className={classes.heading}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Grid style={{ display: "flex" }} alignItems="center">
              <Grid
                item
                xs={6}
                style={{ position: "relative", cursor: "pointer", textAlign: "right" }}
                onMouseEnter={() => {
                  setChecked((prev) => !prev);
                }}
                onMouseLeave={() => {
                  setChecked((prev) => !prev);
                }}
              >
                <img className={classes.poster} src={showTimesMovie && showTimesMovie.hinhAnh} />
                <Fade in={checked}>
                  <div className={classes.play} onClick={() => setOpen(true)}>
                    <PlayArrowIcon fontSize="large" />
                  </div>
                </Fade>
              </Grid>
              <Grid item xs={6} style={{ color: "white", paddingLeft: 25 }}>
                <Typography style={{ fontSize: "0.7rem" }}>
                  Ngày khởi chiếu:{" "}
                  {showTimesMovie && new Date(showTimesMovie.ngayKhoiChieu).toLocaleDateString()}
                </Typography>
                <Typography style={{ fontWeight: "bold" }}>
                  Phim: {showTimesMovie && showTimesMovie.tenPhim}
                </Typography>
                <NavHashLink smooth to="#lichChieuTheoRap" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="secondary" className={classes.btn}>
                    Mua vé
                  </Button>
                </NavHashLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <CircularProgressWithLabel
              value={showTimesMovie && showTimesMovie.danhGia * 10}
              style={{ width: 100, height: 100 }}
            />
            <Box component="fieldset" mb={3} mt={2} borderColor="transparent">
              <StyledRating
                name="read-only"
                value={showTimesMovie && showTimesMovie.danhGia / 2}
                precision={0.5}
                readOnly
                size="large"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography
        id="lichChieuTheoRap"
        variant="h4"
        style={{ color: "white", textAlign: "center", marginTop: 20 }}
      >
        Lịch chiếu
      </Typography>
      <Container className={classes.table}>
        <Tabs
          value={maHeThongRap}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          onChange={(event, newValue) => {
            setMaHeThongRap(newValue);
          }}
          aria-label="scrollable auto tabs example"
        >
          {renderLogoCinema()}
        </Tabs>
        {renderCinema()}
      </Container>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={showTimesMovie && showTimesMovie.trailer}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Movie;
