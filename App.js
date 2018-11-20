import React, { Component } from "react";
import CounterApp from "./src/CounterApp";
import { Provider } from "react-redux";
import store from "./src/store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
export default App;
