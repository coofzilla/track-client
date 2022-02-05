import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children, style }) => {
  return <View style={[styles.spacer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
