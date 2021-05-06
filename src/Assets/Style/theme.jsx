import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    action: {
      disabledBackground: "white",
      disabled: "gray",
    },
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
    },
    secondary: {
      light: "#ff997b",
      main: "#f1684e",
      dark: "#b93724",
    },
  },
});
