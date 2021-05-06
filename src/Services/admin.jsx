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
}
