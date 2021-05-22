import React, { useState, useEffect } from "react";
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
import {useHistory} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress, Dialog, MenuItem } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { listMovieApi } from "Reducer/listMovie";
import Loading from "Components/Loading";
import { createShowApi } from "Reducer/createNewShow";
import { listCinemaApi } from "Reducer/listCinema";
import { listInformationCinemaApi } from "Reducer/listInformationCinema";
import moment from "moment";

export default function AddTicket(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
<<<<<<< HEAD

=======
  const history = useHistory();
  
>>>>>>> 045bf435d08b9784d4e559a8717d2325168ee86c
  // let [ listMovie ,setListMovie] = useState([])
  const [open, setOpen] = useState(false);
  const loading = useSelector((state) => state.listMovie.loading);
  const listMovie = useSelector((state) => state.listMovie.data);
  const listCinema = useSelector((state) => state.listCinema.data);
  const listInformationCinema = useSelector((state) => state.listInformationCinema.data);
  const errPost = useSelector((state) => state.createShow.err);

  const formik = useFormik({
    initialValues: {
      maPhim: "",
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      const valuesPost = {
<<<<<<< HEAD
        maPhim: values.maPhim,
        ngayChieuGioChieu: "null",
        maRap: values.maRap,
        giaVe: values.giaVe,
      };
      console.log(valuesPost);
      await dispatch(createShowApi(valuesPost));
      setOpen(true);
=======
        maPhim:values.maPhim,
        ngayChieuGioChieu:"",
        maRap:values.maRap,
        giaVe:values.giaVe
      }
      console.log(valuesPost)
      await dispatch(createShowApi(valuesPost)); 
        setOpen(true);
        
      
>>>>>>> 045bf435d08b9784d4e559a8717d2325168ee86c
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
          history.push("/dash-board")
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {errPost !== null ? (
          <Alert severity="error">{errPost}</Alert>
        ) : (
          <Alert severity="success">Add Success</Alert>
        )}
      </Dialog>
    );
  };
  const renderListMovie = () => {
    return listMovie?.map((movie, index) => {
      return (
        <MenuItem key={index} value={movie.maPhim}>
          {movie.tenPhim}
        </MenuItem>
      );
    });
  };
  // const renderListTheater = ()=>{
  //   return listTheater?.heThongRapChieu.map((list)=>{
  //        return list.cumRapChieu.map(cumRap=>{
  //          return cumRap.lichChieuPhim.map(mLC=>{
  //            return (
  //             <MenuItem key={mLC.maLichChieu} value={mLC.maRap} >
  //                 {mLC.maRap}
  //             </MenuItem>
  //            )
  //          })
  //        })
  //   })
  const renderListCinema = () => {
    return listCinema?.map((heThong, index) => {
      return (
        <MenuItem key={index} value={heThong.maHeThongRap}>
          {heThong.tenHeThongRap}
        </MenuItem>
      );
    });
  };

  const renderListTheater = () => {
    return listInformationCinema?.map((cumRap) => {
      return cumRap.danhSachRap.map((item, index) => {
        return (
          <MenuItem key={index} value={item.maRap}>
            {item.maRap}
          </MenuItem>
        );
      });
    });
  };

  useEffect(() => {
    // async function  fetchMovie(){
    //    await movieService.listMovieApi().then((res)=>{
    //        setListMovie(res.data)
    //   }).catch((err)=>console.log(err))
    // }
    // fetchMovie()
    dispatch(listMovieApi());
    dispatch(listCinemaApi());
  }, []);

  useEffect(() => {
    console.log(formik.values.maHeThongRap);
    dispatch(listInformationCinemaApi(formik.values.maHeThongRap));
  }, [formik.values.maHeThongRap]);

  if (loading) return <Loading />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {renderAlert()}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Create Show
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                select
                error={formik.errors.maPhim && formik.touched.maPhim ? true : false}
                value={formik.values.maPhim}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="maPhim"
                variant="outlined"
                fullWidth
                id="maPhim"
                label={
                  formik.errors.maPhim && formik.touched.maPhim ? formik.errors.maPhim : "Mã phim"
                }
                color="secondary"
              >
                {renderListMovie()}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                error={formik.errors.maHeThongRap && formik.touched.maHeThongRap ? true : false}
                value={formik.values.maHeThongRap}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="maHeThongRap"
                label={
                  formik.errors.maHeThongRap && formik.touched.maHeThongRap
                    ? formik.errors.maHeThongRap
                    : "Chọn hệ thống rạp"
                }
                name="maHeThongRap"
                color="secondary"
              >
                {renderListCinema()}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                error={formik.errors.maRap && formik.touched.maRap ? true : false}
                value={formik.values.maRap}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="maRap"
                label={
                  formik.errors.maRap && formik.touched.maRap ? formik.errors.maRap : "Chọn rạp"
                }
                name="maRap"
                color="secondary"
              >
                {renderListTheater()}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={
                  formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu ? true : false
                }
                value={formik.values.ngayChieuGioChieu}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                type="string"
                fullWidth
                id="ngayChieuGioChieu"
                format="dd/MM/yyyy"
                label={
                  formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu
                    ? formik.errors.ngayChieuGioChieu
                    : ""
                }
                name="ngayChieuGioChieu"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formik.errors.giaVe && formik.touched.giaVe ? true : false}
                value={formik.values.giaVe}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="giaVe"
                label={formik.errors.giaVe && formik.touched.giaVe ? formik.errors.giaVe : "Giá Vé"}
                name="giaVe"
                color="secondary"
                type="number"
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
            Confirm
          </Button>
        </form>
      </div>
      <Box mt={5} style={{ textAlign: "center" }}>
        Copyright © 2021.All Rights Reserved By{" "}
        <span style={{ color: "#f1684e" }}>CyberCinema</span>
      </Box>
    </Container>
  );
}
