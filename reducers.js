import {
    LOGINFAILURE,
    LOGINREQ,
    LOGINSUCCESS,
    THREADIDFAIL,
    THREADIDREQ,
    THREADIDSUCCESS,
  } from "./types";
  
  const initialstate = {
    isAuth: false,
    isLoading: false,
    loading: false,
    data: [],
    threaddata: [],
    isError: false,
  };
  
  const reduceres = (state = initialstate, { type, payload }) => {
    switch (type) {
      case LOGINREQ:
        return { ...state, isLoading: false };
  
      case LOGINSUCCESS:
        return { ...state, isLoading: false, data: payload };
      case LOGINFAILURE:
        return { ...state, isError: true };
      case THREADIDREQ:
        return { ...state, Loading: true };
      case THREADIDSUCCESS:
        return { ...state, Loading: false, threadData: payload };
      case THREADIDFAIL:
        return { ...state, isError: true };
      default:
        return state;
    }
  };
  export default reduceres;