import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const SigninScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: null,
    });
  }, [navigation]);

  return (
    <View>
      <Text style={{ fontSize: 48 }}>Signin Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
