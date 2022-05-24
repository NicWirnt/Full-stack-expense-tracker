import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/components/register/userSlice";
import dashboardReducer from "./pages/dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
