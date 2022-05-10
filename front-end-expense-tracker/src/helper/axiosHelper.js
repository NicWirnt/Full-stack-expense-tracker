import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userApi = rootUrl + "/users";

export const postRegister = (formDt) => {
  try {
    return axios.post(userApi, formDt);
  } catch (error) {
    return {
      data: {
        status: "Error",
        message: error.message,
      },
    };
  }
};
