import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    const { granted } = await requestForegroundPermissionsAsync();
    if (!granted) setErr(true);
    const sub = await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      callback
    );
    setSubscriber(sub);
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);
  //return what vars will need when use hook
  return [err];
};

export default useLocation;
