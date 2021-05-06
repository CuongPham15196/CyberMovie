import React, { useEffect, useState } from "react";
import screen from "Assets/Images/screen.png";
import { Button, Container, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import WeekendIcon from "@material-ui/icons/Weekend";
import { useStyles } from "./style";
import { chooseSeat } from "Reducer/buyTicket";

function BuyTicket() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ticketOfficeByMovie = useSelector((state) => state.ticketOfficeByMovie.data);
  const dataSeat = useSelector((state) => state.buyTicket.dataSeat);
  const [isValidClass, setIsValidClass] = useState([]);

  useEffect(() => {
    let data = [];
    dataSeat?.map((seat) => {
      data.push(seat.maGhe);
    });
    setIsValidClass(data);
  }, [dataSeat]);

  const renderSeat = () => {
    let count = 0;
    let alphaBet = 65;
    return ticketOfficeByMovie?.danhSachGhe.map((seat) => {
      if (count >= 16) {
        count = 0;
        alphaBet++;
      }
      count++;
      return (
        <div key={seat.maGhe} className={classes.root}>
          <Button
            disabled={seat.daDat}
            className={isValidClass.includes(seat.maGhe) ? classes.btnChoose : classes.btn}
            onClick={() => {
              dispatch(chooseSeat(seat));
            }}
          >
            <WeekendIcon fontSize="large" />
            <Typography component="span" className={classes.count}>
              {String.fromCharCode(alphaBet) + count}
            </Typography>
          </Button>
          {count >= 16 ? <br /> : ""}
        </div>
      );
    });
  };

  return (
    <div style={{ width: "1150px" }}>
      <img src={screen} className={classes.img} />
      <Container maxWidth="xl">{renderSeat()}</Container>
    </div>
  );
}

export default BuyTicket;
