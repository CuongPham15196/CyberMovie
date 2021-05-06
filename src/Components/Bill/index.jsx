import { Container, Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./style";

function Bill(props) {
  const { isValid } = props;
  const classes = useStyles();
  const dataSeat = useSelector((state) => state.buyTicket.dataSeat);
  const ticketOfficeByMovie = useSelector((state) => state.ticketOfficeByMovie.data);
  const buyFood = useSelector((state) => state.buyFood.data);
  let sum = 0;

  const renderSeat = () => {
    let count = 1;
    let alphaBet = 64;
    return dataSeat?.map((seat) => {
      while (seat.stt > 16 * count) {
        count++;
      }
      sum += seat.giaVe;
      return (
        <ListItem key={seat.maGhe} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <ListItemText
            primary={`Ghế ${String.fromCharCode(alphaBet + count)}${seat.stt % 16}`}
            secondary={
              <div style={{ color: "gray", fontSize: "0.8rem", display: "flex" }}>
                {seat.loaiGhe}
              </div>
            }
          />
          <Typography key={seat.maGhe} variant="body2" style={{ fontSize: "1.1rem" }}>
            {`${seat.giaVe}VNĐ`}
          </Typography>
        </ListItem>
      );
    });
  };

  const renderFood = () => {
    return buyFood?.map((food) => {
      sum += food.cost * food.number;
      return (
        <ListItem key={food.combo} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <ListItemText
            primary={`Combo ${food.combo}`}
            secondary={
              <div style={{ color: "gray", fontSize: "0.8rem" }}>Số lượng: {food.number}</div>
            }
          />
          <Typography variant="body2" style={{ fontSize: "1.1rem" }}>
            {food.cost * food.number}VNĐ
          </Typography>
        </ListItem>
      );
    });
  };

  return (
    <Container className={isValid ? classes.bill : classes.normal}>
      <Typography variant="h4" style={{ textAlign: "center", paddingTop: 20 }}>
        {ticketOfficeByMovie?.thongTinPhim.tenCumRap} | {ticketOfficeByMovie?.thongTinPhim.tenRap}
      </Typography>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Phim: {ticketOfficeByMovie?.thongTinPhim.tenPhim}
      </Typography>
      <Typography variant="overline" style={{ textAlign: "center", display: "block" }}>
        Suất chiếu: {ticketOfficeByMovie?.thongTinPhim.gioChieu} - Ngày:{" "}
        {ticketOfficeByMovie?.thongTinPhim.ngayChieu}
      </Typography>
      <List disablePadding>
        <Typography variant="h5" style={{ textAlign: "left", paddingLeft: 14, paddingTop: 20 }}>
          Chỗ ngồi
        </Typography>
        {renderSeat()}
        <div
          style={{
            width: "50%",
            height: 1,
            border: 0,
            borderTop: "1px solid white",
            margin: "1em auto",
            padding: 0,
          }}
        ></div>
        <Typography variant="h5" style={{ textAlign: "left", paddingLeft: 14, paddingTop: 20 }}>
          Đồ ăn
        </Typography>
        {renderFood()}
        <div
          style={{
            height: 1,
            border: 0,
            borderTop: "1px solid white",
            marginTop: "1em",
            padding: 0,
          }}
        ></div>
        <Grid container style={{ display: "flex", padding: "10px 14px" }}>
          <Grid item xs={6}>
            <Typography style={{ textAlign: "left" }} variant="h5">
              Tổng tiền
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ textAlign: "right" }} variant="h5">
              {sum}VNĐ
            </Typography>
          </Grid>
        </Grid>
      </List>
    </Container>
  );
}

export default Bill;
