import { Types } from "../types/types";

export interface LoginAction {
  type: Types;
  payload?: User;
}

export interface User {
  id: string;
  name: string;
}

export interface LoginState {
  logged: boolean;
  user?: string;
}