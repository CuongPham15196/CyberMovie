import React, { useState,useEffect } from "react";
import {Drawer,CssBaseline,List,Divider,ListItem,ListItemIcon,ListItemText,Collapse,Avatar} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AppsIcon from '@material-ui/icons/Apps';
import EditIcon from '@material-ui/icons/Edit';
import { NavHashLink as NavLink } from "react-router-hash-link";
import useStyles from "./style"
import {adminLogOut} from 'Reducer/adminLogin'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupIcon from '@material-ui/icons/Group';
import MovieIcon from '@material-ui/icons/Movie';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



export default function SideMenuComp() {
  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch();
  const [isUser, setOpenUser] = useState(false);
  const [user,setUser]=useState(null)
  
  const handleSetUser = () =>{
     if(JSON.parse(localStorage.getItem("UserAdmin"))){
         setUser(JSON.parse(localStorage.getItem("UserAdmin")).hoTen);
         setOpenUser(true)
     } else{
         setUser("Dang Nhap")
         setOpenUser(false)
     }
  }
  const adminOut =  ()=>{
      dispatch(adminLogOut())
     history.push("/dash-board")
  }
  const handleIsUserMenu = () => {
    setOpenUser((prevOpen) => !prevOpen);
  };
  const [ManagerUser,setQLND] = useState(false);
  const [QLFilm,setQLPhim] = useState(false);
  const [QLVe,setQLVe] = useState(false);
  const handleQLNDMenu = () =>{
      setQLND(!ManagerUser)
  }
  const handleQLPhim = ()=>{
    setQLPhim(!QLFilm)
  }
  const handleQLVe = ()=>{
    setQLVe(!QLVe)
  }
 
  useEffect(() => {
    handleSetUser()
      return () => {
          
      }
  }, [user])
  return (
    // <div className={classes.root}>
    //   <CssBaseline />
    //   <Drawer
    //     className={classes.drawer}
    //     variant="permanent"
    //     classes={{
    //       paper: classes.drawerPaper,
    //     }}
    //     anchor="left"
    //   >
          // <div className={classes.toolbar} />
          <div className={classes.sideBar}>
        <List className={classes.noPadding} >
        <NavLink className={classes.navLink} smooth to="/dash-board" exact style={{textDecoration:"none"}}>
        <ListItem className={classes.dashboard}   button>
              <ListItemIcon><AppsIcon className={classes.colorWhite}/></ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            </NavLink>
        </List>
        <Divider/>
        <List className={classes.noPadding}>  
            <Divider/>  
            <ListItem className={classes.hover} button onClick={() => handleIsUserMenu()}>
            <Avatar alt={user} src="/static/images/avatar/1.jpg" className={classes.avatar}/>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={user} />
              { isUser != null ? isUser ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
          <Collapse component="li" in={isUser} timeout="auto" unmountOnExit >
            <List disablePadding>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><SupervisorAccountIcon className={classes.colorWhite}/></ListItemIcon>
                    <ListItemText primary={"Role: Admin"}></ListItemText>
                </ListItem>
                <ListItem button  className={classes.nested} onClick={()=>adminOut()}  >
                    <ListItemIcon><ExitToAppIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Log out"}   />
                </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List className={classes.noPadding}>
        <ListItem className={classes.hover} button onClick={() => handleQLNDMenu()}>
        <ListItemIcon><AccessibilityNewIcon className={classes.colorWhite}/></ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={"User Manager"} />
              { ManagerUser != null ? ManagerUser ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
          <Collapse component="li" in={ManagerUser} timeout="auto" unmountOnExit >
            <List className={classes.noPadding}>
            <NavLink smooth to="/add-user" className={classes.navLink}  style={{textDecoration:"none"}}>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><PersonAddIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Add User"}></ListItemText>
                </ListItem>
                </NavLink>
                <NavLink smooth to="/list-user-pagination" className={classes.navLink}  style={{textDecoration:"none"}}>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><GroupIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"List Users"}></ListItemText>
                </ListItem>
                </NavLink>
            </List>
          </Collapse>
        </List>
        <Divider/>
        <List className={classes.noPadding}>
        <ListItem className={classes.hover} button onClick={() => handleQLPhim()}>
        <ListItemIcon><MovieIcon className={classes.colorWhite}/></ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={"Movie Manager"} />
              { QLFilm != null ? QLFilm ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
          <Collapse component="li" in={QLFilm} timeout="auto" unmountOnExit >
            <List disablePadding>
            <NavLink smooth to="/add-movie" className={classes.navLink} exact style={{textDecoration:"none"}}>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><AddIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Add Movie"}></ListItemText>
                </ListItem>
                </NavLink>
                <NavLink smooth to="/list-movie" className={classes.navLink} exact style={{textDecoration:"none"}}>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><ListIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"List Movies"}></ListItemText>
                </ListItem>
                </NavLink>
            </List>
          </Collapse>
        </List>
        <Divider/>
        <List>
        <ListItem className={classes.hover} button onClick={() => handleQLVe()}>
        <ListItemIcon><ConfirmationNumberIcon className={classes.colorWhite}/></ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={"Ticket Manager"} />
              { QLVe != null ? QLVe ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
          <Collapse component="li" in={QLVe} timeout="auto" unmountOnExit >
            <List disablePadding>
            <NavLink smooth to="/list-ticket" className={classes.navLink} exact style={{textDecoration:"none"}}>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><ConfirmationNumberIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"List Ticket"}></ListItemText>
                </ListItem>
              </NavLink>
              <NavLink smooth to="/add-ticket" className={classes.navLink} exact style={{textDecoration:"none"}}>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><AddIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Create Show"}></ListItemText>
                </ListItem>
              </NavLink>
            </List>
          </Collapse>
        </List>
     </div>
    //  {* </Drawer>
    // </div> */}
  );
}
