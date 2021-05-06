import Axios from "axios";

export default class MovieService {
  listMovieApi() {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      method: "GET",
    });
  }

  showTimesMovieApi(id) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    });
  }
}
