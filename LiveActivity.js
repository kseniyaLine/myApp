import React, { useEffect } from 'react';
import liveActivity from 'react-native-live-activity';
import { LiveActivityParams } from "./types/index";

const LiveActivityComponent = () => {
    const startActivity = async () => {
      try {
        const activityId = await liveActivity.startLiveActivity<LiveActivityParams>({
          title: 'Hello World',
          message: 'This is a live activity notification!',
        });

        return () => {
          liveActivity.stopLiveActivity(activityId);
        };
      } catch (error) {
        console.error('Error starting live activity:', error);
      }
    };

    startActivity();



};

export default LiveActivityComponent; 