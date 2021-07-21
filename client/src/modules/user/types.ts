import { ActionType } from "typesafe-actions";
import * as userActionTypes from "./actions";

export type UserAction = ActionType<typeof userActionTypes>;

export interface IUserState {
  isLoggedIn: boolean;
  name: string;
}
