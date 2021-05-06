import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    fontSize: "0.8rem",
    color: theme.palette.secondary.main,
    transition: "all 0.5s",
    "&:hover": {
      color: "white",
      transform: "scale(1.05)",
    },
  },
}))(MenuItem);
