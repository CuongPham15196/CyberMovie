import {makeStyles} from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    table: {
      overflowX:"auto",
      margin: "auto",
      padding:theme.spacing(5)
      
    },
    heightrow:{
      minHeight:"85px !important",
  
    },
    body:{
      overflowX:"scroll"
    },
    header: {
      textAlign: "center",
    },
    btnEdit:{
      backgroundColor:"#81b214",
      "&:hover":{
          backgroundColor:"green",
          color:"#fff"
      }
    },
    pagination:{
        width:"100%"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
      },
    btnDel:{
      backgroundColor:"#fb3640",
      "&:hover":{
          backgroundColor:"#ce1212",
          color:"#fff"
      }
    },
    hideOnMobile:{
      [theme.breakpoints.down('sm')]: {
        display:"none"
      },
    },
    hideTablet:{
      [theme.breakpoints.down('lg')]: {
        display:"none"
      },
    }
  }));