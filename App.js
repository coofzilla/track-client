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

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ initialRouteName: "Signin" }}>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Screen name="TrackCreate" component={TrackCreateScreen} />
            <Screen name="Account" component={AccountScreen} />
            <Tab.Navigator>
              <Screen name="TrackDetail" component={TrackDetailScreen} />
              <Screen name="TrackList" component={TrackListScreen} />
            </Tab.Navigator>
          </Tab.Navigator>
        ) : (
          <>
            <Screen name="Signup" component={SignupScreen} />
            <Screen name="Signin" component={SigninScreen} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
