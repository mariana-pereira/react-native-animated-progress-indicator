import React from 'react';
import { View } from 'react-native';
import CircularIndicator from './components/CircularIndicator';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CircularIndicator
            radius={50}
            innerRadius={40}
            innerBackgroundColor="#fff"
          />
    </View>
  );
}

export default App;
