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
import {  useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addUserApi } from "Reducer/addUser";
import { adminService } from "Services";
import { Backdrop, CircularProgress, Dialog, FormControlLabel, RadioGroup } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import { Alert } from "@material-ui/lab";
import {addUserReset} from 'Reducer/addUser'

export default function AddUser(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { history } = props;
  const [open, setOpen] = useState(false);
  const userAdd = useSelector((state) => state.addUser.data);
  const err = useSelector((state) => state.addUser.err);
  const loading = useSelector((state) => state.addUser.loading);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP10",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    validationSchema: adminService.adminValidAddUser,
    onSubmit:async (values) => {
      setOpen(true);
     await dispatch(addUserApi(values));
      history.push("/list-user-pagination");
    },
  });
//   useEffect(() => {
//     if (userAdd) {
//         addUserReset()
        
//     }
    
    
//   }, []);

  

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
          <Alert severity="success">Add Success</Alert>
        )}
      </Dialog>
    );
  };

  return (
    <Container component="main" maxWidth="sm">
      {/* <CssBaseline /> */}
      {renderAlert()}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxIcon fontSize="large"/>
        </Avatar>
        <Typography component="h1" variant="h3">
          Add User
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
            <Grid item xs={12} >
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
            <Grid item xs={12} sm={12}>
              {/* <TextField
                error={formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung ? true : false}
                value={formik.values.maLoaiNguoiDung}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="maLoaiNguoiDung"
                label={
                  formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung ? formik.errors.maLoaiNguoiDung : "Ma loai nguoi dung"
                }
                name="maLoaiNguoiDung"
                color="secondary"
              /> */}
      <FormLabel className="text-left" component="legend">Mã Loai Người Dùng</FormLabel>
       <RadioGroup 
       aria-label="maLoaiNguoiDung" 
        error={formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung ? true : false}
        name="maLoaiNguoiDung" 
        id="maLoaiNguoiDung"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label={
          formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung ? formik.errors.maLoaiNguoiDung : "Ma loai nguoi dung"
        }
        className="d-flex flex-row justify-content-around"
       >
        <FormControlLabel value="KhachHang" control={<Radio />} label="Khách Hàng" />
        <FormControlLabel value="QuanTri" control={<Radio />} label="Quản Trị" />
      </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
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
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Add User
          </Button>
        
        </form>
      </div>
      <Box mt={1}  style={{ textAlign: "center" }}>
        Copyright © 2021.All Rights Reserved By{" "}
        <span style={{ color: "#f1684e" }}>CyberCinema</span>
      </Box>
    </Container>
  );
}
