import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    display: "flex",
    height: "650px",
    padding: 0,
    boxShadow: "5px 5px #b93724",
    width: "70%",
    [theme.breakpoints.down("lg")]: {
      width: "82%",
    },
    [theme.breakpoints.down("md")]: {
      width: "98%",
    },
    [theme.breakpoints.down(845)]: {
      display: "none",
    },
  },
  title: {
    color: "white",
    textAlign: "center",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down(845)]: {
      display: "none",
    },
  },
  tabLogo: {
    marginTop: theme.spacing(5),
    transition: "all 0.5s",
    opacity: 0.5,
    "&:active": {
      opacity: 1,
    },
    "&:hover": {
      opacity: 1,
    },
    "&:focus": {
      opacity: 1,
    },
  },
  tab: {
    transition: "all 0.5s",
    height: 70,
    marginBottom: theme.spacing(3),
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
    "&:focus": {
      opacity: 1,
    },
  },

  content: {
    display: "flex",
    flex: "1 1 auto",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
  },
  cover: {
    display: "inline-block",
    width: 50,
    height: 50,
  },
  txt: {
    textAlign: "left",
    width: 200,
  },
  headingMovie: {
    fontSize: theme.typography.pxToRem(12.5),
    fontWeight: theme.typography.fontWeightBold,
  },
  detailMovie: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(1),
  },
  btn: {
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      transform: "scale(1.05)",
    },
  },
}));
