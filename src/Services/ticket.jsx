import Axios from "axios";

export default class TicketService {
  ticketOfficeByMovieApi(maLichChieu) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  }

  buyTicketApi({ data, accessToken }) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  createShowApi(data) {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  listTicketApi(maLichChieu) {
    console.log(maLichChieu);
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  }
}
