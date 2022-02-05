import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  //   const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) setErr(true);
      subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) subscriber.remove();
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);
  //return what vars will need when use hook
  return [err];
};

export default useLocation;
