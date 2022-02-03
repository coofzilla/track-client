import React, { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
