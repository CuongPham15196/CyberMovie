import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(9),
    width: "100%",
  },
  heading: {
    paddingTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    transition: "all 0.5s",
    "&:hover": {
      color: theme.palette.secondary.main,
      transform: "scale(1.1)",
    },
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  navLink: {
    color: "black",
    transition: "all 0.5s",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
