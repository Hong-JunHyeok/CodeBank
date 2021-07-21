import produce from "immer";
import { createReducer } from "typesafe-actions";
import { LOG_IN, LOG_OUT } from "./actions";
import { IUserState, UserAction } from "./types";

export const userInitialState: IUserState = {
  isLoggedIn: false,
  name: "",
};

export default createReducer<IUserState, UserAction>(userInitialState, {
  //   [LOG_IN]: (state, action) => ({
  //     ...state,
  //     isLoggedIn: true,
  //     name: action.payload,
  //   }),
  [LOG_IN]: (state, action) =>
    produce(state, (draft) => {
      draft.isLoggedIn = true;
      draft.name = action.payload;
    }),
  [LOG_OUT]: (state) => ({
    ...state,
    isLoggedIn: false,
    name: "",
  }),
});
