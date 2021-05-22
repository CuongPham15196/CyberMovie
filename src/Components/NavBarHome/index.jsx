import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./style";
import { NavHashLink as NavLink } from "react-router-hash-link";
import logo from "Assets/Images/logo1.png";
import {
  Box,
  Button,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Container,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "Reducer/userLogin";
import { StyledMenu } from "./styledMenu";
import { StyledMenuItem } from "./styledMenuItem";
import { useHistory } from "react-router";
import { TreeItem, TreeView } from "@material-ui/lab";

export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.userLogin.data);
  const [isChangeBg, setChangeBg] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    dispatch(userLogOut());
    history.push("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setPage = () => {
    if (window.pageYOffset >= 50) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setPage);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setPage);
    };
  });

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={
          isChangeBg ? { backgroundColor: "black" } : { backgroundColor: "rgba(33, 33, 33, 0.882)" }
        }
      >
        <Toolbar>
          <NavLink smooth className={classes.title} to="/#" exact>
            <Typography variant="h6" noWrap>
              <img className={classes.logo} src={logo} />
              CyberCinema
            </Typography>
          </NavLink>

          <Box display={{ xs: "none", md: "block" }} style={{ flexGrow: 1 }}>
            <NavLink smooth exact to="/#" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Trang chủ</Button>
            </NavLink>
            <NavLink smooth to="/#lichChieu" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Lịch chiếu</Button>
            </NavLink>
            <NavLink smooth to="/#cumRap" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Cụm rạp</Button>
            </NavLink>
            <NavLink smooth to="/#lienHe" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Liên hệ</Button>
            </NavLink>
          </Box>

          <Box display={{ xs: "none", md: "block" }} className="text-right" style={{ flexGrow: 1 }}>
            {JSON.parse(localStorage.getItem("User")) || user ? (
              <>
                <Button
                  className={classes.user}
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                >
                  {JSON.parse(localStorage.getItem("User"))
                    ? JSON.parse(localStorage.getItem("User")).hoTen
                    : user.hoTen}
                </Button>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <StyledMenuItem onClick={() => logOut()}>Đăng xuất</StyledMenuItem>
                </StyledMenu>
              </>
            ) : (
              <NavLink to="/dang-nhap" style={{ textDecoration: "none" }}>
                <Button className={classes.navLinkBtn}>Đăng nhập</Button>
              </NavLink>
            )}
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} color="secondary">
            {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <NavLink smooth exact to="/#" style={{ textDecoration: "none" }}>
          <Button className={classes.navLink}>Trang chủ</Button>
        </NavLink>
        <NavLink smooth to="/#lichChieu" style={{ textDecoration: "none" }}>
          <Button className={classes.navLink}>Lịch chiếu</Button>
        </NavLink>
        <NavLink smooth to="/cum-rap" style={{ textDecoration: "none" }}>
          <Button className={classes.navLink}>Cụm rạp</Button>
        </NavLink>
        <NavLink smooth to="/#lienHe" style={{ textDecoration: "none" }}>
          <Button className={classes.navLink}>Liên hệ</Button>
        </NavLink>
        <Divider light={true} style={{ height: 20 }} />
        {JSON.parse(localStorage.getItem("User")) || user ? (
          <Container maxWidth="xl">
            <TreeView multiSelect className={classes.treeView}>
              <TreeItem nodeId="1" label="Tài khoản">
                <TreeItem
                  style={{ marginTop: 5 }}
                  nodeId="2"
                  label={
                    JSON.parse(localStorage.getItem("User"))
                      ? JSON.parse(localStorage.getItem("User")).hoTen
                      : user.hoTen
                  }
                  className={classes.navLinkBtn}
                >
                  <TreeItem
                    style={{ marginTop: 5 }}
                    nodeId="3"
                    label="Đăng xuất"
                    className={classes.navLinkBtn}
                    onClick={() => logOut()}
                  />
                </TreeItem>
              </TreeItem>
            </TreeView>
          </Container>
        ) : (
          <NavLink to="/dang-nhap" style={{ textDecoration: "none" }}>
            <Button className={classes.navLinkBtn}>Đăng nhập</Button>
          </NavLink>
        )}
      </Drawer>
    </div>
  );
}
