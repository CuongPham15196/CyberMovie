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
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress, Dialog } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import $ from 'jquery'
import { listMovieOnPagesApi } from "Reducer/listMovieOnPage";
import { updateMovieApi } from "Reducer/updateMovie";
import { movieService } from "Services";
export default function UpdateMovieModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const err = useSelector((state) => state.updateMovie.err);
  const loading = useSelector((state) => state.updateMovie.loading);
  let {movieUpdate,filters} = props
  
  const formik = useFormik({
    initialValues: {
      maPhim: movieUpdate.maPhim,
      tenPhim: movieUpdate.tenPhim,
      trailer: movieUpdate.trailer,
      hinhAnh: movieUpdate.hinhAnh,
      biDanh: movieUpdate.biDanh,
      maNhom:"GP10",
      moTa: movieUpdate.moTa,
      ngayKhoiChieu:movieUpdate.ngayKhoiChieu,
      danhGia:0,
    },
    validationSchema: movieService.movieValidationEdit,
    onSubmit:async  (values) => {
      setOpen(true);
     await dispatch(updateMovieApi(values));
      
    },
  });

  const handleOnCloseMovie=()=>{
    setOpen(false);
    dispatch(listMovieOnPagesApi({
      soTrang:filters.soTrang,
      soPhanTuTrenTrang:filters.soPhanTuTrenTrang
    }))
    $('#modalUpdateMovie').modal('hide')
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
        onClose={handleOnCloseMovie}
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
    <div className="modal fade" id="modalUpdateMovie" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Chỉnh sửa phim</h5>
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
          Update Movie
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
                label={formik.errors.maPhim && formik.touched.maPhim ? formik.errors.maPhim : "Họ Tên"}
                color="secondary"
                disabled
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
                  formik.errors.moTa && formik.touched.moTa ? formik.errors.moTa : "môTả"
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
                type="string"
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
                format={'DD/MM/YYYY HH:mm:ss'}
                type="local-date"
                fullWidth
                id="ngayKhoiChieu"
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

