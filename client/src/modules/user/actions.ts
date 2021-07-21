import { createAction } from "typesafe-actions";

export const LOG_IN = "LOG_IN" as const;
export const LOG_OUT = "LOG_OUT" as const;

export const logIn = createAction(LOG_IN, (name: string) => name)();
export const logOut = createAction(LOG_OUT)();
