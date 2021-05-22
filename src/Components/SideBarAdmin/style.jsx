import { makeStyles } from "@material-ui/core/styles";




const drawerWidth = 250;
const urlBackground = "https://i.pinimg.com/originals/1e/f8/b3/1ef8b36271dc2199a7411b79d566e1d0.jpg"
const useStyles = makeStyles((theme) => ({
  sideBar:{
    
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color:"#fff",  
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage:`url(${urlBackground})`,
    color:"#fff"
  },
  colorWhite:{
         color:"#fff"
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(6),
    "&:hover": {
        backgroundColor: "#9e9d89",
      } 
  },
  avatar:{
    marginRight: theme.spacing(1),
  },
  hover:{
    "&:hover": {
        backgroundColor: "#9e9d89"
      }    
  },
  dashboard:{
    color: "#FFF",
    boxShadow: "0 12px 20px -10px rgba(0, 172, 193,.28), 0 4px 20px 0 rgba(0, 0, 0,.12), 0 7px 8px -5px rgba(0, 172, 193,.2)",
    backgroundColor: "#00acc1",
    "&:hover":{
        backgroundColor:"#00acff",
    }
  },
  noPadding:{
      padding:theme.spacing(0),
  },
  navLink: {
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
}));

export default useStyles