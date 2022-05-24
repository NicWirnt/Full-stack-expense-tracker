import {
  deleteExpenses,
  getExpenses,
  postExpenses,
} from "../../helper/axiosHelper";
import { requestPending, setResponse, setExpenses } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  dispatch(requestPending());
  const { status, expenses } = await getExpenses();

  status === "success" && dispatch(setExpenses(expenses));
};

export const handleOnPost = (formDt) => async (dispatch) => {
  //call the api
  // console.log("sumbmit", formDt);
  // setIsLoading(true);
  dispatch(requestPending());
  const data = await postExpenses(formDt);
  // console.log(data);
  // setIsLoading(false);
  // setResp(data);
  dispatch(setResponse(data));
  data.status === "success" && dispatch(fetchExpenses());
};

export const handleOnDeleteExpenses = (ids) => async (dispatch) => {
  dispatch(requestPending());
  const data = await deleteExpenses(ids);

  dispatch(setResponse(data));
  data.status === "success" && dispatch(fetchExpenses());
};
