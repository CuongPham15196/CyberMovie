import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, FormControl, InputLabel, isWidthUp, MenuItem, Select, Typography } from "@material-ui/core";
import {useStyles} from './style';
import { listTicketApi } from "Reducer/listTicket";
import {listMovieApi} from "Reducer/listMovie"
import Loading from "Components/Loading";
import {showTimesMovieApi} from "Reducer/showTimesMoive"
import InfoShowCard from "Components/InfoShowCard";
import listTicket from "Reducer/listTicket";




function ListTicket() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [maLichChieu,setMaLichChieu] = useState(0) 
  const [maPhim,setMaPhim] = useState(0)
  const listMovie = useSelector(state => state.listMovie.data)
  const loading = useSelector(state => state.listMovie.loading)
  const listShowTime = useSelector(state=>state.showTimesMovie.data)
  // const loadingShow = useSelector(state => state.showTimesMovie.loading)
  const listTickets = useSelector(state => state.listTicket.data)
  const loadingTicket = useSelector(state =>state.listTicket.loading)
  
 
  const renderSelectMovie = () =>{
    return listMovie?.map((item,index)=>{
      return (
        <MenuItem value={item.maPhim}>{item.tenPhim}</MenuItem>
      )
    })
  }
  const renderSelectShowId =  () =>{
    console.log(listShowTime)
      return listShowTime?.heThongRapChieu.map((list)=>{
        return list.cumRapChieu.map((cumRap)=>{
          return cumRap.lichChieuPhim.map((lichChieu,index)=>{
            return (
              <MenuItem key={index} value={lichChieu.maLichChieu}>{lichChieu.maLichChieu}</MenuItem>
            )
          })
        })
      })
  }
  
  const renderListTicket = () =>{
    return  listTickets?.danhSachGhe.map((item,index)=>{
        return (
        <TableRow className={item.taiKhoanNguoiDat? classes.soldOut: ""} >
          <TableCell className={classes.widthContent} align="center">{item.maGhe}</TableCell>
          <TableCell className={classes.hideOnMobile} align="center">{item.tenGhe}</TableCell>
          <TableCell className={classes.hideTablet} align="center">{item.maRap}</TableCell>
          <TableCell className={classes.widthContent} align="center">{item.loaiGhe}</TableCell>
          <TableCell  className={classes.hideOnMobile} align="center">{item.giaVe}</TableCell>
          <TableCell className={classes.widthContent} align="center">{item.taiKhoanNguoiDat? item.taiKhoanNguoiDat :"Vé trống"}</TableCell>
        </TableRow>
        )
      
    })
  }
  // const handleSubmit =(e)=>{
  //       e.preventDefault()
  //       console.log(maLichChieu)
  // }
  const renderInfo = ()=>{
    if(loadingTicket) return <></>
    if(listTickets){
      return (<InfoShowCard info={listTickets.thongTinPhim} />)
    }
    
  }
  const handleChangeMovie = (e) =>{
      console.log(e.target.value)    
     setMaPhim(e.target.value)
      
  }
  const handleChangeShowId = (e)=>{
      console.log(e.target.value)
      setMaLichChieu(e.target.value)
  }
  useEffect(()=>{
     dispatch(listMovieApi())
    
  },[])
  useEffect(()=>{
    dispatch(showTimesMovieApi(maPhim))
 },[maPhim])
  useEffect(()=>{
    if(maLichChieu !== 0){
      dispatch(listTicketApi(maLichChieu))
    }
  },[maLichChieu])

  if (loading) return <Loading />;
  return (
     <div>
      
      {/* <NavBarAdmin routelink={"/dash-board/user-manager"} /> */}
      <TableContainer component={Paper} className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Movie </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={maPhim}
          name="chonphim"
          onChange={handleChangeMovie}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {renderSelectMovie()}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Show Id</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={maLichChieu}
          onChange={handleChangeShowId}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {renderSelectShowId()}
        </Select>
      </FormControl>
        <Typography variant="h2" className={classes.header} component="h3">
           QUẢN LÝ ĐẶT VÉ THEO MÃ LỊCH CHIẾU <span> {maLichChieu}</span>
        </Typography>
        {renderInfo()}
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.widthContent} align="center">Mã Ghế</TableCell>
              <TableCell className={classes.hideOnMobile} align="center">Tên Ghế</TableCell>
              <TableCell className={classes.hideTablet} align="center">Mã Rạp</TableCell>
              <TableCell className={classes.widthContent} align="center">Loại ghế</TableCell>
              <TableCell className={classes.hideOnMobile} align="center">Giá Vé</TableCell>
              <TableCell className={classes.widthContent} align="center">Tài Khoản</TableCell>  
            </TableRow>
          </TableHead>
          <TableBody>
            {renderListTicket()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListTicket;


