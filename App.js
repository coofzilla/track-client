import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const App = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const MainFlow = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Screen name="TrackListFlow" component={TrackListFlow} />
        <Screen name="TrackCreate" component={TrackCreateScreen} />
        <Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  };

  const TrackListFlow = () => {
    return (
      <Navigator screenOptions={{ title: "Tracks" }}>
        <Screen name="TrackList" component={TrackListScreen} />
        <Screen name="TrackDetail" component={TrackDetailScreen} />
      </Navigator>
    );
  };

  const LoginFlow = () => {
    return (
      <Navigator>
        <Screen name="Signup" component={SignupScreen} />
        <Screen name="Signin" component={SigninScreen} />
      </Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LoginFlow" component={LoginFlow} />
        <Screen name="MainFlow" component={MainFlow} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;

// {isLoggedIn ? <></> : <></>}
