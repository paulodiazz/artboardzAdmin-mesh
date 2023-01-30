import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./UI-slice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => 
  configureStore({
    reducer: { UI: UIReducer },
  })

export const store = createWrapper(makeStore);