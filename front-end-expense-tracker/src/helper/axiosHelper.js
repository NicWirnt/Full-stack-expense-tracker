import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "api/v1"
    : "http://localhost:8000/api/v1";
const userApi = rootUrl + "/users";
const loginApi = rootUrl + "/users/login";
const expApi = rootUrl + "/expenses";

// === user APIS

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

// === Expenses API

export const postExpenses = async (formDt) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.post(expApi, formDt, {
      headers: {
        Authorization: user._id,
      },
    });
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

export const getExpenses = async (formDt) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const { data } = await axios.get(expApi, {
      headers: {
        Authorization: user._id,
      },
    });

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

export const deleteExpenses = async (ids) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.delete(expApi, {
      headers: {
        Authorization: user._id,
      },
      data: ids,
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};
