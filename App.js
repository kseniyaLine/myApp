import React from 'react';
import { View } from 'react-native';
import AppClip from './AppClip';
import LiveActivityComponent from './LiveActivity';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppClip />
      <LiveActivityComponent />
    </View>
  );
};

export default App;
