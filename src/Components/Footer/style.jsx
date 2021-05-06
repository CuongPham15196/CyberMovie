import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    marginTop: theme.spacing(4),
  },
  logo: {
    width: 50,
    height: 50,
  },
  partner: {
    color: "white",
    fontSize: "2rem",
    margin: theme.spacing(1),
    transform: "scale(1)!important",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.3)!important",
      color: theme.palette.secondary.main,
    },
  },
  title: {
    textDecoration: "none!important",
    color: theme.palette.secondary.main,
    transition: "all 0.5s",
    "&:hover ": {
      color: "white",
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    transform: "scale(1)!important",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.3)!important",
    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      maxWidth: 768,
    },
    [theme.breakpoints.down(890)]: {
      maxWidth: 700,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 550,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 450,
    },
  },
  email: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
}));
