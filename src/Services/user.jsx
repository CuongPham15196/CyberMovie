import Axios from "axios";
import * as Yup from "yup";

export default class UserService {
  userLoginApi(user) {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    });
  }

  userSignUpApi(user) {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    });
  }

  getUserApi() {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10",
      method: "GET",
    });
  }
  deleteUserApi(user) {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  updateUserApi(user) {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  listUserOnPageApi(soTrang, soPhanTuTrenTrang, searchValue) {
    let urlApi = "";
    if (searchValue === "") {
      urlApi = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP10&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`;
    } else {
      urlApi = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP10&tuKhoa=${searchValue}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`;
    }
    return Axios({
      url: urlApi,
      method: "GET",
    });
  }
  userValidationLogin = Yup.object({
    taiKhoan: Yup.string()
      .min(4, "Không được nhập ít hơn 4 ký tự")
      .max(14, "Không được nhập nhiều hơn 14 ký tự")
      .required("Không được để trống"),
    matKhau: Yup.string()
      .min(6, "Không được nhập ít hơn 6 ký tự")
      .max(14, "Không được nhập nhiều hơn 14 ký tự")
      .required("Không được để trống"),
  });

  userValidationSignUp = Yup.object({
    taiKhoan: Yup.string()
      .min(4, "Không được nhập ít hơn 4 ký tự")
      .max(14, "Không được nhập nhiều hơn 14 ký tự")
      .required("Không được để trống"),
    matKhau: Yup.string()
      .min(6, "Không được nhập ít hơn 6 ký tự")
      .max(14, "Không được nhập nhiều hơn 14 ký tự")
      .required("Không được để trống"),
    email: Yup.string().email("Email không hợp lệ").required("Không được để trống"),
    soDt: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Số điện thoại không hợp lệ"
      )
      .required("Không được để trống"),
    hoTen: Yup.string()
      .min(4, "Không được nhập ít hơn 4 ký tự")
      .max(20, "Không được nhập nhiều hơn 20 ký tự")
      .required("Không được để trống"),
  });
}
