import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  banner: {
    marginTop: 70,
    width: "100%",
    height: 400,
    filter: "blur(50px)",
  },
  heading: {
    position: "absolute",
    top: 120,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  table: {
    display: "flex",
    width: "60%!important",
    height: "550px",
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "5px 5px #b93724",
    [theme.breakpoints.down("lg")]: {
      width: "70%!important",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%!important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%!important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%!important",
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
    color: "black",
  },
  btn: {
    marginTop: 20,
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
