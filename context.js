import { createContext,useReducer } from "react";

export const themeContext = createContext();

const initialState = {darkmode : false};

const themeReducer = (state,action) => {
    switch (action.type){
        case "toggle":
          return {darkmode : !state.darkmode};
        default:
          return state;
    }
};

export const themeProvider = (props) => {
    const [state,dispatch] = useReducer(themeReducer,initialState);
    return (
      <themeContext.Provider value={{state,dispatch}}>
         {props.children}
      </themeContext.Provider>
    );
};