import React, { useEffect } from 'react';
import { startLiveActivity, stopLiveActivity } from 'react-native-live-activity';

const LiveActivityComponent = () => {
  useEffect(() => {
    const activityId = startLiveActivity({
      title: 'Hello World',
      message: 'This is a live activity notification!',
    });

    return () => {
      stopLiveActivity(activityId);
    };
  }, []);

  return null;
};

export default LiveActivityComponent;