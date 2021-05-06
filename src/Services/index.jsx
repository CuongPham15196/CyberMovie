import MovieService from "./movie";
import CinemaService from "./cinema";
import UserService from "./user";
import TicketService from "./ticket";
import AdminService from "./admin";

export const movieService = new MovieService();
export const cinemaService = new CinemaService();
export const userService = new UserService();
export const ticketService = new TicketService();
export const adminService = new AdminService();
