import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    // backgroundColor: "rgba(33, 33, 33, 0.882)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1.4,
    textDecoration: "none!important",
    margin: theme.spacing(1.5),
    color: theme.palette.secondary.main,
    transition: "all 0.5s",
    "&:hover": {
      color: "white",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "black!important",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    display: "none",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },

  logo: {
    width: 50,
    height: 50,
  },
  navLink: {
    margin: "0 0.1rem",
    fontSize: "0.9rem!important",
    color: "#f1684e!important",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      color: "white!important",
    },
  },
  navLinkBtn: {
    fontSize: "0.7rem!important",
    color: "#ff997b!important",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      color: "white!important",
    },
  },
  treeView: {
    transform: "translate(-20%,-30%)",
    height: 50,
    color: "#f1684e!important",
    transition: "all 0.5s",
    "&:hover": {
      color: "white!important",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "translate(-15%,-30%)",
    },
  },
  user: {
    paddingLeft: 0,
    fontSize: "0.6rem!important",
    transition: "all 0.5s",
    "&:hover": {
      color: "white",
      transform: "scale(1.1)",
    },
  },
}));
