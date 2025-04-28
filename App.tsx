import { View, Text, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react'; // <-- Added useState, useEffect
import Routes from './src/navigation/Routes';
import Colors from './src/constants/Colors';
import SplashScreen from './src/screens/auth/login/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true); // <-- Splash initially true

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // <-- After 3 seconds, hide splash
    }, 4000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);




  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <StatusBar backgroundColor={Colors.THEME} />

      {showSplash ? <SplashScreen /> : <Routes />}
    </View>
  );
};

export default App;
