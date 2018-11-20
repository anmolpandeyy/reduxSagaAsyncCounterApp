import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class CounterApp extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={this.props.increaseCounter}>
            <Text style={{ fontSize: 18 }}>Increase Counter</Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10, fontSize: 18 }}>
            {this.props.counter}
          </Text>
          <TouchableOpacity onPress={this.props.decreaseCounter}>
            <Text style={{ fontSize: 18 }}>Decrease Counter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
  decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
