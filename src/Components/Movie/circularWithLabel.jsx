import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex" style={{ marginRight: 26 }}>
      <CircularProgress color="secondary" variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          style={{ color: "white", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          {props.value / 10}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
