import Axios from "axios";
import * as Yup from "yup";

export default class AdminService {
  adminLoginApi(admin) {
    return Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: admin,
    });
  }
  addUserApi(user) {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  adminValidLogin = Yup.object({
    taiKhoan: Yup.string()
      .min(4, "Không được nhập ít hơn 4 ký tự")
      .max(10, "Không được nhập nhiều hơn 10 ký tự")
      .required("Không được để trống"),
    matKhau: Yup.string()
      .min(6, "Không được nhập ít hơn 6 ký tự")
      .max(14, "Không được nhập nhiều hơn 14 ký tự")
      .required("Không được để trống"),
  });
  adminValidAddUser = Yup.object({
    taiKhoan: Yup.string()
      .min(4, "Không được nhập ít hơn 4 ký tự")
      .max(10, "Không được nhập nhiều hơn 10 ký tự")
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
    maLoaiNguoiDung: Yup.string().required("Không được để trống"),
    hoTen: Yup.string()
      .min(4, "Không được nhập ít hơn 4 ký tự")
      .max(20, "Không được nhập nhiều hơn 20 ký tự")
      .required("Không được để trống"),
  });
}
