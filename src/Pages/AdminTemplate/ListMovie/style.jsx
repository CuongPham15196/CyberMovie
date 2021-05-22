import {makeStyles} from '@material-ui/core'


export const useStyles = makeStyles((theme) => ({
    table: {
      maxWidth: "500px",
      margin: "auto",
      padding:theme.spacing(5),
      
    },
    tableresp:{
      overflowX:"scroll"
    },
    tableheight:{
      minHeight:"85px",
      
    },
  
    header: {
      textAlign: "center",
      paddingTop:theme.spacing(0)
    },
    btnEdit:{
      backgroundColor:"#81b214",
      "&:hover":{
          backgroundColor:"green",
          color:"#fff"
      }
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
  