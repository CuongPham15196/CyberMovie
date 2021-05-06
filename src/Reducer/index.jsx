import { combineReducers } from "redux";
import listMovie from "./listMovie";
import showTimesMovie from "./showTimesMoive";
import listCinema from "./listCinema";
import listMovieShowTimeByCinema from "./listMovieShowTimeByCinema";
import listInformationCinema from "./listInformationCinema";
import userLogin from "./userLogin";
import userSignUp from "./userSignUp";
import ticketOfficeByMovie from "./ticketOfficeByMovie";
import buyTicket from "./buyTicket";
import buyFood from "./buyFood";
import adminLogin from "./adminLogin";

const rootReducer = combineReducers({
  listMovie,
  showTimesMovie,
  listCinema,
  listMovieShowTimeByCinema,
  listInformationCinema,
  userLogin,
  userSignUp,
  ticketOfficeByMovie,
  buyTicket,
  buyFood,
  adminLogin,
});

export default rootReducer;
