import { StyleSheet } from "react-native";
import React from "react";
import Navigation from "./App/Navigation/Navigation";
// import { AuthProvider } from "./App/context/auth/auth.context";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

const App = () => {
  console.log("main");
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
