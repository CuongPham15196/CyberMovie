import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";

export const StyledMenu = withStyles({
  paper: {
    backgroundColor: "rgba(33, 33, 33, 0.982)",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
