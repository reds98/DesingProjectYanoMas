import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Circle from './screens/Circle/Circle';
import Home from './screens/Home/Home';
import Information from './screens/Information/Information';
import MapScreen from './screens/Map/MapScreen';
import Config from './screens/Config/Config';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
const MainScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home-alert',unfocusedIcon: 'home-alert-outline' },
    { key: 'circle', title: 'Circle', focusedIcon: 'heart-circle',unfocusedIcon: 'heart-circle-outline' },
    { key: 'map', title: 'Map', focusedIcon: 'map',unfocusedIcon: 'map-outline' },
    { key: 'info', title: 'Information', focusedIcon: 'newspaper-variant', unfocusedIcon: 'newspaper-variant-outline'},
    { key: 'config', title: 'Config', focusedIcon: 'account-cog',unfocusedIcon: 'account-cog-outline' },

    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'circular-graph' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    circle: Circle,
    map: MapScreen,
    info: Information,
    config:Register
    
  });

  return (
    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainScreen;
