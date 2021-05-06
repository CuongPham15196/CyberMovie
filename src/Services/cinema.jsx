import Axios from "axios";

export default class CinemaService {
  listCinemaApi() {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    });
  }

  listInformationCinemaApi(maHeThongRap) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
  }

  listMovieShowTimeByCinemaApi(maHeThongRap) {
    if (maHeThongRap)
      return Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP10`,
        method: "GET",
      });
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10`,
      method: "GET",
    });
  }
}
