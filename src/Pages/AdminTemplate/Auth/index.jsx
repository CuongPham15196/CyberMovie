import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./style";
import { useFormik } from "formik";
import { adminService } from "Services";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginApi } from "Reducer/adminLogin";
import { useHistory } from "react-router";
import { Backdrop, CircularProgress, Dialog } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const adminLogin = useSelector((state) => state.adminLogin.data);
  const loading = useSelector((state) => state.adminLogin.loading);
  const err = useSelector((state) => state.adminLogin.err);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: adminService.adminValidLogin,
    onSubmit: (value) => {
      setOpen(true);
      dispatch(adminLoginApi(value));
    },
  });

  useEffect(() => {
    if (adminLogin) {
      localStorage.setItem("Admin", JSON.stringify(adminLogin));
      history.push("/dash-board");
    }
  }, [adminLogin]);

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {renderAlert()}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="taiKhoan"
            name="taiKhoan"
            color="secondary"
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.taiKhoan && formik.errors.taiKhoan ? true : false}
            label={
              formik.touched.taiKhoan && formik.errors.taiKhoan
                ? formik.errors.taiKhoan
                : "Tài Khoản"
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="matKhau"
            type="password"
            id="matKhau"
            color="secondary"
            value={formik.values.matKhau}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.matKhau && formik.errors.matKhau ? true : false}
            label={
              formik.touched.matKhau && formik.errors.matKhau ? formik.errors.matKhau : "Mật Khẩu"
            }
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
        </form>
      </div>
      <Box style={{ textAlign: "center" }}>
        Copyright © 2021.All Rights Reserved By{" "}
        <span style={{ color: "#f1684e" }}>CyberCinema</span>
      </Box>
    </Container>
  );
}

export default Auth;
