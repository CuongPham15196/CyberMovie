import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userSignUpApi } from "Reducer/userSignUp";
import { userService } from "Services";
import { Backdrop, CircularProgress, Dialog } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function SignUp(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { history } = props;
  const [open, setOpen] = useState(false);
  const userSignUp = useSelector((state) => state.userSignUp.data);
  const err = useSelector((state) => state.userSignUp.err);
  const loading = useSelector((state) => state.userSignUp.loading);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP10",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    validationSchema: userService.userValidationSignUp,
    onSubmit: (values) => {
      setOpen(true);
      dispatch(userSignUpApi(values));
    },
  });

  useEffect(() => {
    if (userSignUp) history.push("/dang-nhap");
  }, [userSignUp]);

  console.log(err);

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
          <Alert severity="success">Đăng ký thành công</Alert>
        )}
      </Dialog>
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {renderAlert()}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.hoTen && formik.touched.hoTen ? true : false}
                value={formik.values.hoTen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="hoTen"
                variant="outlined"
                fullWidth
                id="hoTen"
                label={formik.errors.hoTen && formik.touched.hoTen ? formik.errors.hoTen : "Họ Tên"}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.taiKhoan && formik.touched.taiKhoan ? true : false}
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="taiKhoan"
                variant="outlined"
                fullWidth
                id="taiKhoan"
                label={
                  formik.errors.taiKhoan && formik.touched.taiKhoan
                    ? formik.errors.taiKhoan
                    : "Tài Khoản"
                }
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.matKhau && formik.touched.matKhau ? true : false}
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                name="matKhau"
                label={
                  formik.errors.matKhau && formik.touched.matKhau
                    ? formik.errors.matKhau
                    : "Mật khẩu"
                }
                type="password"
                id="matKhau"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={formik.errors.email && formik.touched.email ? true : false}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                id="email"
                label={formik.errors.email && formik.touched.email ? formik.errors.email : "Email"}
                name="email"
                type="email"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={formik.errors.soDt && formik.touched.soDt ? true : false}
                value={formik.values.soDt}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="soDt"
                label={
                  formik.errors.soDt && formik.touched.soDt ? formik.errors.soDt : "Số Điện Thoại"
                }
                name="soDt"
                color="secondary"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Đăng ký
          </Button>
          <NavLink to="/dang-nhap" className={classes.signIn} variant="body2">
            Bạn đã có tài khoản! Đăng nhập nào!
          </NavLink>
        </form>
      </div>
      <Box mt={5} style={{ textAlign: "center" }}>
        Copyright © 2021.All Rights Reserved By{" "}
        <span style={{ color: "#f1684e" }}>CyberCinema</span>
      </Box>
    </Container>
  );
}
