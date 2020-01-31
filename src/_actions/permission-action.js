import axios from "axios";
import { API_BASE_URL } from "../_constants/index";
import {
  GET_PERMISSION,
  UPDATE_PERMISSION,
  SHOW_ERROR_MESSAGE
} from "../_constants/types";

//get All permission
export const getPermission = roleId => dispatch => {
  axios.get(`${API_BASE_URL}/permission/roleid/${roleId}`).then(res =>
    dispatch({
      type: GET_PERMISSION,
      permissionList: res.data
    })
  );
};
//change permission
export const updatePermission = (
  permissionid,
  permissionRequestDto
) => dispatch => {
  axios
    .put(
      `${API_BASE_URL}/permission/permissionid/${permissionid}`,
      permissionRequestDto
    )
    .then(res =>
      dispatch({
        type: UPDATE_PERMISSION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SHOW_ERROR_MESSAGE,
        payload: err.response.data
      })
    );
  // console.log(`${API_BASE_URL}/recuitmentType/${permissionid}`);
  // console.log(permissionRequestDto);
};
