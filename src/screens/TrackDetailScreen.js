import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({
  route: {
    params: { _id },
  },
}) => {
  const { state } = useContext(TrackContext);

  const track = state.find((t) => t._id === _id);

  return (
    <View>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
