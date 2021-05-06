import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  scroll: {
    right: 20,
    bottom: 20,
    backgroundColor: theme.palette.secondary.main,
    position: "fixed",
    zIndex: 2,
    cursor: "pointer",
    borderRadius: 7,
    width: 30,
    height: 30,
    transition: "opacity 1s ease-in-out",
    boxShadow: "2px 2px 0px 0 white",
    border: "none",
    outline: "none",
    "&:hover": {
      transform: "scale(1.15)",
    },
    color: "white!important",
  },
}));
