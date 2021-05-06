import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import bhd from "Assets/Images/bhd.jpg";
import cgv from "Assets/Images/cgv.jpg";
import cns from "Assets/Images/cns.jpg";
import gl from "Assets/Images/gl.jpg";
import lt from "Assets/Images/lt.jpg";
import mega from "Assets/Images/mega.jpg";
import { listInformationCinemaApi } from "Reducer/listInformationCinema";

function CinemaMobile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listCinema = useSelector((state) => state.listCinema.data);
  const listInformationCinema = useSelector((state) => state.listInformationCinema.data);
  const [bannerCinema, setBannerCinema] = useState(bhd);

  const handleChangeLogo = (maHeThongRap) => {
    dispatch(listInformationCinemaApi(maHeThongRap));
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
  };

  const renderLogoCinema = () => {
    return listCinema?.map((cinema) => {
      return (
        <Accordion key={cinema.maHeThongRap}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => handleChangeLogo(cinema.maHeThongRap)}
          >
            <Avatar style={{ marginRight: 20 }} src={cinema.logo} />
            <Typography className={classes.heading}>{cinema.tenHeThongRap}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid>{renderCinema(cinema.maHeThongRap)}</Grid>
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  const renderCinema = (maHeThongRap) => {
    return listInformationCinema?.map((cinema) => {
      return (
        <Grid key={cinema.maCumRap} item xs={12} style={{ margin: "20px 0" }}>
          <NavLink to={`/rap/${maHeThongRap}/${cinema.maCumRap}`} className={classes.navLink}>
            <Avatar
              variant="square"
              src={bannerCinema}
              style={{ display: "inline-block", marginRight: 20 }}
            />
            <Grid style={{ display: "inline-block" }}>
              <Grid item xs={12}>
                <Typography>{cinema.tenCumRap}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ fontSize: "0.7rem", color: "grey" }}>
                  Địa chỉ: {cinema.diaChi}
                </Typography>
              </Grid>
            </Grid>
          </NavLink>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>Hệ thống rạp</h3>
      {renderLogoCinema()}
    </div>
  );
}

export default CinemaMobile;
