import { withStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";

export const StyledRating = withStyles({
  iconEmpty: {
    color: "white",
  },
  iconFilled: {
    color: "yellow",
  },
})(Rating);
