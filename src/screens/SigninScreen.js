import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        linkText="Don't have an account? Sign up instead"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
    flex: 1,
    justifyContent: "center",
  },
});

export default SigninScreen;
