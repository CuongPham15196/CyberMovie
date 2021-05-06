import Loading from "Components/Loading";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ticketOfficeByMovieApi } from "Reducer/ticketOfficeByMovie";
import bg from "Assets/Images/bg.jpg";
import Footer from "Components/Footer";
import Ticket from "Components/Ticket";

function TicketOffice(props) {
  const { history } = props;
  if (!localStorage.getItem("User")) history.push("/dang-nhap");

  const { maLichChieu } = props.match.params;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ticketOfficeByMovie.loading);

  useEffect(() => {
    dispatch(ticketOfficeByMovieApi(maLichChieu));
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading />;

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Ticket />
      <Footer />
    </div>
  );
}

export default TicketOffice;
