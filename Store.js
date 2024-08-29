import {applyMiddleware,combinereducers,legacycreatestore} from "reduxes";
import reducer from "../src/reduxes/reducers";
import {thunk} from "redux-thunk";

const rootreducer = combinereducers({
  reducer,
});

export const store = legacycreatestore(rootreducer,applyMiddleware(thunk));