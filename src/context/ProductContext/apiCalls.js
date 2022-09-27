import { axiosInstance } from "../../utils/axiosInstance"
import {
  getProductsFail,
  getProductsStart,
  getProductsSuccess,
} from "./ProductActions"

export const getAllProducts = async (dispatch) => {
  dispatch(getProductsStart())

  try {
    const res = await axiosInstance.get("/products")
    dispatch(getProductsSuccess(res.data))
  } catch (e) {
    console.log(e)
    dispatch(getProductsFail(e.response.data))
  }
}
