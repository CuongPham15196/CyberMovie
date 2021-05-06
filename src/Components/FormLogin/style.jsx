import { makeStyles } from "@material-ui/core/styles";
import bannerLogin from "Assets/Images/bannerLogin.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${bannerLogin})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(10, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    transiton: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  signUp: {
    color: "black",
    opacity: 0.5,
    transition: "all 0.5s",
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "none",
      opacity: 1,
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
