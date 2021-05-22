import Axios from "axios";
import * as Yup from "yup";
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

  listMovieOnPagesApi(soTrang, soPhanTuTrenTrang) {
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP10&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`,
      method: "GET",
    });
  }

  deleteMoviePagesApi(maPhim) {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  updateMovieApi(user) {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  addMovieApi(movie) {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  movieValidationEdit = Yup.object({
    // maPhim:Yup.string()
    //   .required("Không được để trống"),
    biDanh: Yup.string().required("Không được để trống"),
    tenPhim: Yup.string().min(4, "Không được nhập ít hơn 4 ký tự").required("Không được để trống"),
    trailer: Yup.string().required("Không được để trống"),
    hinhAnh: Yup.string().required("Không được để trống"),
    // ngayKhoiChieu: Yup.string()
    //   .required("Không được để trống"),
    moTa: Yup.string().required("Không được để trống"),
    ngayKhoiChieu: Yup.string().required("Không được để trống"),
    // danhGia:Yup.string()
    //    .required("Không được bỏ trống")
  });
}
