import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (callback) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    const { granted } = await requestForegroundPermissionsAsync();
    if (!granted) setErr(true);
    const remove = await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      callback
      //   (location) => {
      //     addLocation(location);
      //   }
    );
  };

  useEffect(() => {
    startWatching();
  }, []);
  //return what vars will need when use hook
  return [err];
};

export default useLocation;
