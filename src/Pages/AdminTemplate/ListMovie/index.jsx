import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Backdrop, Button, CircularProgress, Dialog, Typography } from "@material-ui/core";
import { listMovieOnPagesApi } from "Reducer/listMovieOnPage";
import Loading from "Components/Loading";
import Pagination from "Components/Pagination";
import { deleteMovieApi } from "Reducer/deleteMovie";
import {useStyles} from './style'
import UpdateMovieModal from "Components/UpdateMovie";
import { Alert } from "@material-ui/lab";




function ListMoviePage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [pagination,setPagination] = useState({
      soTrang:1,
      soPhanTuTrenTrang:10,
      total:2,
  })
  const [filters,setFilters] = useState({
    soTrang:1,
    soPhanTuTrenTrang:10,
  })
  

  const [movieEdit,onEdit] = useState({
    maPhim  :"",
    tenPhim:"",
    trailer:"",
    hinhAnh:"",
    moTa:"",
    ngayKhoiChieu:"",
    biDanh:"",
    danhGia:"",
    maNhom:"GP10",
    })
 
    const listMoviePagesLoading = useSelector((state) => state.listMoviePage.loading);
    const listMoviePages =  useSelector(state => state.listMoviePage.data);
    const {totalPages}=useSelector(state=>state.listMoviePage)
    const err = useSelector(state => state.deleteMovie.err)
    const loading = useSelector(state =>state.deleteMovie.loading)
    

  const handleEditMovie=(movie)=>{
      let date = new Date(movie.ngayKhoiChieu)
      const {maPhim,tenPhim,trailer,hinhAnh,moTa,biDanh,danhGia} = movie
      onEdit({
          maPhim,
          tenPhim,
          trailer,
          hinhAnh,
          ngayKhoiChieu:date.toString(),
          moTa,
          biDanh,
          danhGia,
      })
      
  }
 const renderModalUpdate =() =>{
    return <UpdateMovieModal key={movieEdit.maPhim} movieUpdate={movieEdit} filters={filters} />;
 }
 const transformDays = (day)=>{
    let date = new Date(day)
    return date.toLocaleString()
 }

 async function handleDeleteMovie(movie){
    await  dispatch(deleteMovieApi(movie))
    setOpen(true)
    await dispatch(listMovieOnPagesApi({
      soTrang:filters.soTrang,
      soPhanTuTrenTrang:filters.soPhanTuTrenTrang,
     
    }))
  }
function handlePageChange(newPage){
    setFilters({
        ...filters,
        soTrang:newPage,
    })
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
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {err !== null ? (
        <Alert severity="error">{err}</Alert>
      ) : (
        <Alert severity="success">Delete Success</Alert>
      )}
    </Dialog>
  );
};
  const renderListMovie = () =>{
    return listMoviePages?.map((movie, index) => (
      <TableRow  className={classes.tableheight} key={index}>
        <TableCell  align="center">{movie.maPhim}</TableCell>
        <TableCell  align="center">{movie.tenPhim}</TableCell>
        <TableCell className={ classes.hideTablet}  align="center"><a  target="_blank" href={movie.trailer}>Trailer {movie.tenPhim}</a></TableCell>
        <TableCell className={classes.hideTablet} align="center">{movie.hinhAnh}</TableCell>
        {/* <TableCell   align="center">{movie.moTa}</TableCell> */}
        <TableCell className={classes.hideOnMobile} align="center">{transformDays(movie.ngayKhoiChieu)}</TableCell>
        <TableCell align="center">
          <Button variant="contained" className={classes.btnEdit} type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalUpdateMovie" 
          onClick={()=>handleEditMovie(movie)}
           >
            Edit
          </Button>
        </TableCell>
        <TableCell  align="center">
        <Button variant="contained" className={classes.btnDel} 
          onClick ={()=>handleDeleteMovie(movie.maPhim)}
          >
            Delete  
          </Button>
        </TableCell>
      </TableRow>
    ))
  }
  
  useEffect(() => {
    async function fetchNewPage(){
        await dispatch(listMovieOnPagesApi({
              soTrang:filters.soTrang,
              soPhanTuTrenTrang:filters.soPhanTuTrenTrang,
         })) 
        setPagination({
          soTrang:filters.soTrang,
          total:totalPages
        }) 
    }
    fetchNewPage();
    }, [filters]);
  
  if (listMoviePagesLoading) return <Loading />;
  return (
    <div className={classes.root}>
      {renderAlert()}
      <TableContainer  className={classes.tableresp} >
        <Typography variant="h2" className={classes.header} component="h3">
          Danh Sách Phim
        </Typography>
        <Table className={classes.table} aria-label="simple table" className="container">
          <TableHead>
            <TableRow className={classes.tableheight}>
              <TableCell  align="center">Mã Phim</TableCell>
              <TableCell  align="center">Tên Phim</TableCell>
              <TableCell className={classes.hideTablet} style={{maxWidth:"60px",overflow:"hidden"}}  align="center">Trailer</TableCell>
              <TableCell className={classes.hideTablet} style={{maxWidth:"60px"}} align="center">Hình Ảnh</TableCell>
              {/* <TableCell  align="center">Mô Tả</TableCell> */}
              <TableCell className={classes.hideOnMobile}  align="center">Ngày khởi chiếu</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody   >
            {renderListMovie()}
          </TableBody>
        </Table>
        <Pagination pagination={pagination}  onPageChange={handlePageChange} />
      </TableContainer>
      {renderModalUpdate()}
    </div>
  );
}

export default ListMoviePage;


