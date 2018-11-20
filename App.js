import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
