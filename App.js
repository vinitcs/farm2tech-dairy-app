import { StyleSheet } from "react-native";
import React from "react";
import Navigation from "./App/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

const App = () => {
  return (
    // <AuthProvider>
    <Provider store={store}>
      <Navigation />
    </Provider>
    // </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
