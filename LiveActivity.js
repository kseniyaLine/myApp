import React, { useEffect } from 'react';
import liveActivity from 'react-native-live-activity';

type LiveActivityParams = {
  status: string;
  driverName: string;
  expectedDeliveryTime: string;
}


const LiveActivityComponent = () => {
 const liveActivity = new LiveActivity<LiveActivityParams>();
  useEffect(() => {
    const activityId = await liveActivity.startLiveActivity({
      title: 'Hello World',
      message: 'This is a live activity notification!',
    });

    return () => {
      await liveActivity.stopLiveActivity(activityId);
    };
  }, []);

  return null;


};

export default LiveActivityComponent;