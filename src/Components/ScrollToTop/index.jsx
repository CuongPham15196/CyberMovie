import ScrollToTop from "react-scroll-to-top";
import NavigationIcon from "@material-ui/icons/Navigation";
import { useStyles } from "./style";

export default function ScroolToTop() {
  const classes = useStyles();

  return (
    <div>
      <ScrollToTop
        smooth
        className={classes.scroll}
        component={<NavigationIcon fontSize="small" />}
      />
    </div>
  );
}
