import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLoginApi } from "Reducer/userLogin";
import { userService } from "Services";
import Dialog from "@material-ui/core/Dialog";
import { Alert } from "@material-ui/lab";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { userSignUpReset } from "Reducer/userSignUp";

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { history } = props;
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userLogin.data);
  const err = useSelector((state) => state.userLogin.err);
  const loading = useSelector((state) => state.userLogin.loading);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: userService.userValidationLogin,
    onSubmit: (value) => {
      setOpen(true);
      dispatch(userLoginApi(value));
    },
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("User", JSON.stringify(user));
      history.push("/");
    }
  }, [user]);

  const renderAlert = () => {
    if (loading)
      return (
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="secondary" />
        </Backdrop>
      );

    return (
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {err !== null ? (
          <Alert severity="error">{err}</Alert>
        ) : (
          <Alert severity="success">Đăng nhập thành công</Alert>
        )}
      </Dialog>
    );
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {renderAlert()}
      <Grid item xs={false} sm={6} md={7} className={classes.image} />
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              error={formik.touched.taiKhoan && formik.errors.taiKhoan ? true : false}
              variant="outlined"
              margin="normal"
              fullWidth
              id="taiKhoan"
              label={
                formik.touched.taiKhoan && formik.errors.taiKhoan
                  ? formik.errors.taiKhoan
                  : "Tài khoản"
              }
              name="taiKhoan"
              value={formik.values.taiKhoan}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              color="secondary"
            />
            <TextField
              error={formik.touched.matKhau && formik.errors.matKhau ? true : false}
              variant="outlined"
              margin="normal"
              fullWidth
              name="matKhau"
              value={formik.values.matKhau}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label={
                formik.errors.matKhau && formik.touched.matKhau ? formik.errors.matKhau : "Mật khẩu"
              }
              type="password"
              id="matKhau"
              color="secondary"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Đăng nhập
            </Button>
            <NavLink
              to="/dang-ky"
              className={classes.signUp}
              onClick={() => {
                dispatch(userSignUpReset());
              }}
              variant="body2"
            >
              Bạn chưa có tài khoản? Đăng ký ngay!
            </NavLink>
            <Box mt={5} style={{ textAlign: "center" }}>
              Copyright © 2021.All Rights Reserved By{" "}
              <span style={{ color: "#f1684e" }}>CyberCinema</span>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
