import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../AddUser/style";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress, Dialog } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { addMovieApi } from "Reducer/addMovie";


export default function AddMovie(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { history } = props;
  const [open, setOpen] = useState(false);
  const err = useSelector((state) => state.addMovie.err);
  const loading = useSelector((state) => state.addMovie.loading);

  const formik = useFormik({
    initialValues: {
        maPhim: "",
        tenPhim: "",
        trailer: "",
        hinhAnh:"",
        biDanh: "",
        maNhom:"GP10",
        moTa:"",
        ngayKhoiChieu:"",
        danhGia:0,
    },
    onSubmit:async (values) => {
        console.log(values.ngayKhoiChieu)
      setOpen(true);
     await dispatch(addMovieApi(values));
         history.push("/list-movie");

    },
  });

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
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
      {renderAlert()}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Add Movie
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.maPhim && formik.touched.maPhim ? true : false}
                value={formik.values.maPhim}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="maPhim"
                variant="outlined"
                fullWidth
                id="maPhim"
                label={formik.errors.maPhim && formik.touched.maPhim ? formik.errors.maPhim : "Mã phim"}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.tenPhim && formik.touched.tenPhim ? true : false}
                value={formik.values.tenPhim}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="tenPhim"
                variant="outlined"
                fullWidth
                id="tenPhim"
                label={
                  formik.errors.tenPhim && formik.touched.tenPhim
                    ? formik.errors.tenPhim
                    : "Tên Phim"
                }
                color="secondary"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                error={formik.errors.biDanh && formik.touched.biDanh ? true : false}
                value={formik.values.biDanh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                name="biDanh"
                label={
                  formik.errors.biDanh && formik.touched.biDanh
                    ? formik.errors.biDanh
                    : "Bí danh"
                }
                id="biDanh"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.moTa && formik.touched.moTa ? true : false}
                value={formik.values.moTa}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                multiline
                rows={6}
                rowsMax={6}
                id="moTa"
                label={
                  formik.errors.moTa && formik.touched.moTa ? formik.errors.moTa : "mô Tả"
                }
                name="moTa"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.trailer && formik.touched.trailer ? true : false}
                value={formik.values.trailer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                fullWidth
                id="trailer"
                label={formik.errors.trailer && formik.touched.trailer ? formik.errors.trailer : "trailer"}
                name="trailer"
                type="trailer"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.hinhAnh && formik.touched.hinhAnh ? true : false}
                value={formik.values.hinhAnh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="hinhAnh"
                label={
                  formik.errors.hinhAnh && formik.touched.hinhAnh ? formik.errors.hinhAnh : "Hình Ảnh"
                }
                name="hinhAnh"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                error={formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu ? true : false}
                value={formik.values.ngayKhoiChieu}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                type="string"
                fullWidth
                id="ngayKhoiChieu"
                format={'DD/MM/YYYY'}
                label={
                  formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu ? formik.errors.ngayKhoiChieu : ""
                }
                name="ngayKhoiChieu"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                error={formik.errors.danhGia && formik.touched.danhGia ? true : false}
                value={formik.values.danhGia}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
                variant="outlined"
                required
                fullWidth
                id="danhGia"
                label={
                  formik.errors.danhGia && formik.touched.danhGia ? formik.errors.danhGia : "Đánh giá"
                }
                name="danhGia"
                color="secondary"
                disabled
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
            Add Movie
          </Button>
        </form>
      </div>
      <Box mt={3} style={{ textAlign: "center" }}>
        Copyright © 2021.All Rights Reserved By{" "}
        <span style={{ color: "#f1684e" }}>CyberCinema</span>
      </Box>
    </Container>
     
  );
}
