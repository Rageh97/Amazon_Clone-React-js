// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: localStorage.getItem("name") 
//     ? JSON.parse(localStorage.getItem("name"))
//     : null,
//   email: localStorage.getItem("email")
//     ? JSON.parse(localStorage.getItem("email"))
//     : null,
//   password: localStorage.getItem("password")
//     ? JSON.parse(localStorage.getItem("password"))
//     : null,
//   mobile: localStorage.getItem("mobile")
//     ? JSON.parse(localStorage.getItem("mobile"))
//     : null,
//   isLoggedIN: localStorage.getItem("isloggedin")
//     ? JSON.parse(localStorage.getItem("isloggedin"))
//     : false,
// };
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     register: (state, action) => {
//       state.name = action.payload;
//       state.email = action.payload;
//       state.password = action.payload;
//       state.mobile = action.payload;
//       state.isLoggedIN = true;
//       localStorage.setItem("name", JSON.stringify(state.name));
//       localStorage.setItem("email", JSON.stringify(state.email));
//       localStorage.setItem("password", JSON.stringify(state.password));
//       localStorage.setItem("mobile", JSON.stringify(state.mobile));
//       localStorage.setItem("isloggedin", JSON.stringify(state.isLoggedIN));
//     },
//     logout: (state, action) => {
//       state.name = "";
//       state.password = "";
//       state.email = "";
//       state.mobile = "";
//       state.isLoggedIN = false;
//       // localStorage.clear();
//     },
//   },
// });
// export default authSlice.reducer;
// export const { logout, register } = authSlice.actions;
