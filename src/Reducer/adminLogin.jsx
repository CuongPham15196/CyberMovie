import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const adminLoginApi = createAsyncThunk(
  "adminLogin/adminLoginApi",
  async (admin, { rejectWithValue }) => {
    try {
      const dataAdmin = await adminService.adminLoginApi(admin);
      if (dataAdmin.data.maLoaiNguoiDung === "QuanTri") {
        return dataAdmin;
      } else return rejectWithValue("Không có quyền truy cập");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const adminLogin = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    adminLogOut(state, action) {
      state.data = null;
      state.err = null;
      localStorage.clear("UserAdmin");
    },
  },
  extraReducers: {
    [adminLoginApi.pending]: (state, action) => {
      state.loading = true;
    },
    [adminLoginApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [adminLoginApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const { adminLogOut } = adminLogin.actions;
export default adminLogin.reducer;
