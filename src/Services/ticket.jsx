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
}
