import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  normal: {
    width: "70%",
    backgroundColor: "black",
    border: "1px solid white",
    borderRadius: "5px",
    color: "white",
    boxShadow: "5px 5px #b93724",
  },
  bill: {
    width: "70%",
    backgroundColor: "black",
    border: "1px solid white",
    borderRadius: "5px",
    color: "white",
    boxShadow: "5px 5px #b93724",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "50%",
    left: "50%",
  },
}));
