import { useStyles } from "./style";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Button,
  Grid,
  Backdrop,
  CircularProgress,
  Dialog,
} from "@material-ui/core";
import { ColorlibStepIcon } from "./stylesStep";
import { ColorlibConnector } from "./stylesStep";
import BuyTicket from "Components/BuyTicket";
import Bill from "Components/Bill";
import BuyFood from "Components/BuyFood";
import Countdown from "react-countdown";
import { useHistory } from "react-router";
import { buyTicketApi, resetTicket } from "Reducer/buyTicket";
import { resetFood } from "Reducer/buyFood";
import Alert from "@material-ui/lab/Alert";

function getSteps() {
  return ["Mua vé xem phim", "Mua đồ ăn nước uống"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <BuyTicket />;
    case 1:
      return <BuyFood />;
    default:
      return "Unknown stepIndex";
  }
}

function Ticket() {
  const classes = useStyles();
  const steps = getSteps();
  const history = useHistory();
  const dispatch = useDispatch();
  const ticketOfficeByMovie = useSelector((state) => state.ticketOfficeByMovie.data);
  const dataTicket = useSelector((state) => state.buyTicket.dataSeat);
  const buyTicket = useSelector((state) => state.buyTicket.data);
  const loading = useSelector((state) => state.buyTicket.loading);
  const err = useSelector((state) => state.buyTicket.err);
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(resetTicket());
    dispatch(resetFood());
  }, []);

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
          <Alert severity="success">{buyTicket}</Alert>
        )}
      </Dialog>
    );
  };

  const handleClickFinish = () => {
    const accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
    const data = {
      maLichChieu: ticketOfficeByMovie?.thongTinPhim.maLichChieu,
      danhSachVe: dataTicket?.map((ticket) => {
        return { maGhe: ticket.maGhe, giaVe: ticket.giaVe };
      }),
      taiKhoanNguoiDung: JSON.parse(localStorage.getItem("User")).taiKhoan,
    };
    dispatch(buyTicketApi({ data, accessToken }));
    window.scrollTo(0, 0);
    setOpen(true);
  };

  return (
    <>
      <img className={classes.bannerImg} src={ticketOfficeByMovie?.thongTinPhim.hinhAnh} />
      {renderAlert()}
      {buyTicket ? (
        ""
      ) : (
        <>
          <Container maxWidth="xl" className={classes.heading}>
            <Typography variant="h2" className={classes.text}>
              {ticketOfficeByMovie?.thongTinPhim.tenPhim}
            </Typography>
            <Typography variant="h4" className={classes.text}>
              {ticketOfficeByMovie?.thongTinPhim.tenCumRap} |{" "}
              {ticketOfficeByMovie?.thongTinPhim.tenRap}
            </Typography>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              className={classes.stepper}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    <Typography style={{ color: "white" }}>{label}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Container>
          <div className={classes.countDown}>
            <Countdown
              date={Date.now() + 300000}
              daysInHours
              onComplete={() => {
                history.push("/");
              }}
            ></Countdown>
          </div>
          <Container
            maxWidth="xl"
            style={{ textAlign: "center", overflowX: "auto", marginBottom: 40 }}
          >
            {getStepContent(activeStep)}
          </Container>
        </>
      )}
      <Bill isValid={buyTicket ? true : false} />
      {buyTicket ? (
        ""
      ) : (
        <Container maxWidth="xl" style={{ marginTop: 40 }}>
          <Grid container>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={() => {
                  setActiveStep((prevActiveStep) => prevActiveStep - 1);
                  window.scrollTo(0, 0);
                }}
                className={classes.btn}
              >
                Quay lại
              </Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Button
                disabled={dataTicket.length === 0 || activeStep === 1}
                variant="contained"
                color="secondary"
                onClick={() => {
                  setActiveStep((prevActiveStep) => prevActiveStep + 1);
                  window.scrollTo(0, 0);
                }}
                className={classes.btn}
              >
                Tiếp theo
              </Button>
            </Grid>
          </Grid>

          <Button
            disabled={activeStep === 0}
            variant="contained"
            color="secondary"
            className={classes.btnFinish}
            onClick={() => handleClickFinish()}
          >
            Hoàn thành
          </Button>
        </Container>
      )}
    </>
  );
}

export default Ticket;
