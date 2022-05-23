import { getExpenses } from "../../helper/axiosHelper";
import { requestPending, setResponse, setExpenses } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  const { status, expenses } = await getExpenses();

  status == "success" && dispatch(setExpenses(expenses));
};
