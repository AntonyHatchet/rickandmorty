import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";
import Modal from "./containers/Modal";
import { store } from "./store";

const element = document.getElementById("root");
if (!element) {
  throw new Error("couldn't find element with id root");
}

render(
  <AppContainer>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </AppContainer>,
  element
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default; // tslint-disable-line global-require

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      element
    );
  });
}
