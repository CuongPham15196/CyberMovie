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
import listUser from "./listUser"
import deleteUser from "./deleteUser"
import updateUser from "./updateUser"
import addUser from "./addUser"
import listMoviePage from './listMovieOnPage'
import deleteMovie from './deleteMovie'
import updateMovie from './updateMovie'
import addMovie from './addMovie'
import listTicket from './listTicket'
import createShow from './createNewShow'
import listUserOnPage from './listUserOnPage'
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
  listUser,
  deleteUser,
  updateUser,
  addUser,
  listMoviePage,
  deleteMovie,
  updateMovie,
  addMovie,
  listTicket,
  createShow,
  listUserOnPage,
});

export default rootReducer;
