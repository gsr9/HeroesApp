import { PropsWithChildren, useReducer } from 'react';
import { AuthContext } from "./AuthContext";
import { authReducer, initialState } from "./authReducer";
import { Types } from "../types/types";
import { LoginAction } from "../domain/model";

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name = '') => {
      const user = { id: 'ABC', name }
      const action: LoginAction = { type: Types.login, payload: user }

      localStorage.setItem('user',JSON.stringify(user));
      dispatch(action)
    }

    const logout = () => {
      const action: LoginAction = { type: Types.logout }
      localStorage.removeItem('user')
      dispatch(action)
    }

    return (
      <AuthContext.Provider value={ { ...authState, login, logout } }>
        { children }
      </AuthContext.Provider>
    )
  }

;

