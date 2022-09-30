import { Types } from "../types/types";
import { LoginAction, LoginState } from "../domain/model";

export const initialState: LoginState = {
  logged: false,
}

export const authReducer = (state: LoginState = initialState, action: LoginAction) => {

  switch (action.type) {
    case Types.login:
      return { ...state, logged: true, user: action.payload };
    case Types.logout:
      return { logged: false };
    default:
      return state;
  }
}