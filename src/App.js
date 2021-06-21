import React from "react";
import Coins from "./components/Coins";

import { Provider } from "react-redux";
import generateStore from "./redux/store";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Coins />
    </Provider>
  );
}

export default App;
