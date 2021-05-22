import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    transiton: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  signIn: {
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
  hideOnMobile:{
    [theme.breakpoints.down('md')]: {
      display:"none"
    },
  }
}));
