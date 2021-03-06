// import "../mockLocation";
import React, { useContext, useCallback, useLayoutEffect } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      {/* <Text h2>Create a Track</Text> */}
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
