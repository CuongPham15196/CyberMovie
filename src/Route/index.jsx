import SignUp from "Pages/HomeTemplate/SignUp";
import DetailMovie from "Pages/HomeTemplate/DetailMovie";
import DetailCinema from "Pages/HomeTemplate/DetailCinema";
import HomePage from "Pages/HomeTemplate/HomePage";
import Login from "Pages/HomeTemplate/Login";
import CinemaMobile from "Pages/HomeTemplate/CinemaMobile";
import TicketOffice from "Pages/HomeTemplate/TicketOffice";
import DashBoard from "Pages/AdminTemplate/DashBoard";
import AddUser from "Pages/AdminTemplate/AddUser";
import ListUser from "Pages/AdminTemplate/ListUser";
import AddMovie from "Pages/AdminTemplate/AddMovie";
import AddTicket from "Pages/AdminTemplate/AddTicket";
import ListMoviePage from "Pages/AdminTemplate/ListMovie";
import ListTicket from "Pages/AdminTemplate/ListTicket";

import ListUserPagination from "Pages/AdminTemplate/ListUserPagination";

const routerHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/dang-nhap",
    component: Login,
    exact: false,
  },
  {
    path: "/dang-ky",
    component: SignUp,
    exact: false,
  },
  {
    path: "/cum-rap",
    component: CinemaMobile,
    exact: false,
  },
  {
    path: "/phim/:maPhim/:tenPhim",
    component: DetailMovie,
    exact: false,
  },
  {
    path: "/rap/:maHeThongRap/:maCumRap",
    component: DetailCinema,
    exact: false,
  },
  {
    path: "/dat-ve/:maLichChieu/:biDanh",
    component: TicketOffice,
    exact: false,
  },
];

const routerAdmin = [
  {
    path: "/dash-board",
    component: DashBoard,
    exact: false,
  },
  {
    path: "/add-user",
    component: AddUser,
    exact: false,
  },
  {
    path: "/list-user",
    component: ListUser,
    exact: false,
  },
  {
    path: "/add-movie",
    component: AddMovie,
    exact: false,
  },

  {
    path: "/add-ticket",
    component: AddTicket,
    exact: false,
  },
  {
    path: "/list-movie",
    component: ListMoviePage,
    exact: false,
  },
  {
    path: "/list-user-pagination",
    component: ListUserPagination,
    exact: false,
  },
  {
    path: "/list-ticket",
    component: ListTicket,
    exact: false,
  },
];

export { routerHome, routerAdmin };
