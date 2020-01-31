import { GET_PERMISSION, UPDATE_PERMISSION } from "../_constants/types";


const initialState = {
    permission: {},
    permissions: []

}
export default function lieuLeaveRequestReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PERMISSION:
            return{
                ...state,
                permissions:action.permissionList
            };
            case UPDATE_PERMISSION:
                return{
                    ...state,
                    permissions: state.permissions.map(permissions => {
                        if (permissions.id == action.payload.id) {
                          return action.payload;
                        } else {
                          return permissions;
                        }
                      })
                }
    
        default:
            return state;
    }
}
