const { withStyles, Tab } = require("@material-ui/core");

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "white",
    margin: "0 0.5rem",
    textAlign: "center",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    transition: "all 0.5s",

    "&:hover": {
      transform: "scale(1.5)",
    },
  },
}))((props) => <Tab disableRipple {...props} />);
