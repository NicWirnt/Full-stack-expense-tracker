import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userApi = rootUrl + "/users";
const loginApi = rootUrl + "/users/login";
const expApi = rootUrl + "/expenses";

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

export const postLogin = (formDt) => {
  try {
    return axios.post(loginApi, formDt);
  } catch (error) {
    return {
      data: {
        status: "Error",
        message: error.message,
      },
    };
  }
};

export const postExpenses = async (formDt) => {
  try {
    const { data } = await axios.post(expApi, formDt);
    return data;
  } catch (error) {
    console.log(error);
    return {
      data: {
        status: "Error",
        message: error.message,
      },
    };
  }
};
