import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./RootNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

const App = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const { state } = useContext(AuthContext);

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
      <Navigator>
        <Screen
          name="TrackList"
          component={TrackListScreen}
          options={{ title: "Tracks" }}
        />
        <Screen name="TrackDetail" component={TrackDetailScreen} />
      </Navigator>
    );
  };

  const LoginFlow = () => {
    return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Signup" component={SignupScreen} />
        <Screen name="Signin" component={SigninScreen} />
      </Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{ headerShown: false }}>
        {state.token ? (
          <Screen name="MainFlow" component={MainFlow} />
        ) : (
          <>
            <Screen name="Resolve" component={ResolveAuthScreen} />
            <Screen name="LoginFlow" component={LoginFlow} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    //Providers doesn't matter order
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
