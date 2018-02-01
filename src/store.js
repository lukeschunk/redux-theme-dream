import { createStore } from "redux";

import theme from "./redux/theme-reducer";

export default createStore(
  theme,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
