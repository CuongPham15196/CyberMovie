import { Avatar, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";
import logo1 from "Assets/Images/logo1.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const classes = useStyles();
  const listCinema = useSelector((state) => state.listCinema.data);

  const renderLogo = () => {
    return listCinema?.map((cinema, index) => {
      return (
        <Grid item xs={4} style={{ paddingBottom: 10 }} key={index}>
          <Avatar className={classes.small} src={cinema.logo} />
        </Grid>
      );
    });
  };

  return (
    <section id="lienHe" className={classes.root}>
      <Container
        className={classes.container}
        style={{
          borderBottom: "1px solid white",
          paddingBottom: 10,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Grid container alignItems="center" justify="center">
          <Grid item xs={5}>
            <NavLink className={classes.title} to="/">
              <Typography variant="h6" noWrap>
                <img className={classes.logo} src={logo1} />
                CyberCinema
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={3}>
            <Grid container>{renderLogo()}</Grid>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "right" }}>
            <Link href="https://www.facebook.com/">
              <FacebookIcon className={classes.partner} />
            </Link>
            <Link href="https://www.instagram.com/">
              <InstagramIcon className={classes.partner} />
            </Link>
            <Link href="https://twitter.com/">
              <TwitterIcon className={classes.partner} />
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container
        className={classes.container}
        style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 10 }}
      >
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography style={{ color: "white" }}>
              Copyright © 2021.All Rights Reserved By
              <span style={{ color: "#f1684e" }}>CyberCinema</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className={classes.email}>
            <Typography style={{ color: "white" }}>CyberCinema@gmail.com</Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Footer;
