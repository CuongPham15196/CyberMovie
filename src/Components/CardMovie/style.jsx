import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    textAlign: "center",
    height: 450,
    width: "100%",
  },
  media: {
    height: 350,
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  play: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "50%",
    transition: "all 0.5s",
    "&:hover": {
      color: theme.palette.secondary.main,
      borderColor: "#f1684e",
    },
  },
  btn: {
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      transform: "scale(1.05)",
    },
  },
}));
