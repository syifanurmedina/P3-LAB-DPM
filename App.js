import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfilePage from './src/pages/profile';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfilePage />
    </SafeAreaView>
  );
};

export default App;