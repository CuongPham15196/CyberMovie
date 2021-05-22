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
import { useStyles } from "Pages/AdminTemplate/ListUser/style";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "Services";
import { Backdrop, CircularProgress, Dialog } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import {updateUserApi} from "Reducer/updateUser";

import $ from 'jquery'
import { listUserOnPageApi } from "Reducer/listUserOnPage";
export default function UpdateUserModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const err = useSelector((state) => state.updateUser.err);
  const loading = useSelector((state) => state.updateUser.loading);
  let {userUpdate,filters} = props
  const formik = useFormik({
    initialValues: {
      taiKhoan: userUpdate.taiKhoan,
      matKhau: userUpdate.matKhau,
      email: userUpdate.email,
      soDt: userUpdate.soDt,
      maNhom: "GP10",
      maLoaiNguoiDung: userUpdate.maLoaiNguoiDung,
      hoTen: userUpdate.hoTen,
    },
    validationSchema: userService.userValidationSignUp,
    onSubmit: async (values) => {
      setOpen(true);
      await dispatch(updateUserApi(values));
      
    },
  });

  const handleOnClose= ()=>{
    setOpen(false);
    console.log(filters,"props")
     dispatch(listUserOnPageApi({
      soTrang:filters.soTrang,
      soPhanTuTrenTrang:filters.soPhanTuTrenTrang,
      searchValue:filters.searchValue,
    }))
    $('#exampleModalCenter').modal('hide')
  }
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
        onClose={handleOnClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {err !== null ? (
          <Alert severity="error">{err}</Alert>
        ) : (
          <Alert severity="success">Update Thanh Cong</Alert>
        )}
      </Dialog>
    );
  };
 
  return (
    <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Chỉnh sửa thông tin</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
            <Container component="main" maxWidth="xs">
        <CssBaseline/>
      {renderAlert()}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update
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
                error={formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung ? true : false}
                value={formik.values.maLoaiNguoiDung}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="maLoaiNguoiDung"
                label={
                  formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung ? formik.errors.maLoaiNguoiDung : "Số Điện Thoại"
                }
                name="maLoaiNguoiDung"
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
            Update
          </Button>
        </form>
      </div>
      <Box mt={5} style={{ textAlign: "center" }}>
        Copyright © 2021.All Rights Reserved By{" "}
        <span style={{ color: "#f1684e" }}>CyberCinema</span>
      </Box>
    </Container>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div >
    
  );
}
