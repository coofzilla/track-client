import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Input label="Password" />
      <Spacer>
        <Button title="Go to Signin" />
      </Spacer>
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
