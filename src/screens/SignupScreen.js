import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        linkText="Already have an account? Sign in instead"
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

export default SignupScreen;
