import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bannerImg: {
    marginTop: 70,
    width: "100%",
    height: 400,
    filter: "blur(80px)",
  },
  heading: {
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "50%",
    left: "50%",
  },
  countDown: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontWeight: "500",
    marginBottom: 20,
  },
  stepper: {
    backgroundColor: "transparent",
  },
  btn: {
    width: "99%",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.02)",
      backgroundColor: "#ff997b",
      color: "black",
    },
  },
  btnFinish: {
    width: "100%",
    marginTop: 20,
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.02)",
      backgroundColor: "#ff997b",
      color: "black",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
