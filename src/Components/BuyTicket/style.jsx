import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline",
  },
  btn: {
    color: "#ff997b",
    transtion: "all 0.5s",
    "&:hover": {
      color: "#f1684e",
    },
  },
  btnChoose: {
    color: "#b93724",
  },
  count: {
    position: "absolute",
    color: "black",
    top: "1.4em",
    fontWeight: "bold",
    fontSize: "0.7em",
    zIndex: 999,
  },
  img: {
    marginBottom: 20,
    width: "90%",
  },
}));
