import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Circle from './Circle/Circle';
import Home from './Home/Home';
import Information from './Information/Information';
import MapScreen from './Map/MapScreen';
import Config from './Config/Config';
import Login from './Login/Login';
import Register from './Register/Register';
const MainScreen = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home-alert',unfocusedIcon: 'home-alert-outline', },
    { key: 'circle', title: 'Circle', focusedIcon: 'heart-circle',unfocusedIcon: 'heart-circle-outline' },
    { key: 'map', title: 'Map', focusedIcon: 'map',unfocusedIcon: 'map-outline' },
    { key: 'info', title: 'Information', focusedIcon: 'newspaper-variant', unfocusedIcon: 'newspaper-variant-outline'},
    { key: 'config', title: 'Config', focusedIcon: 'account-cog',unfocusedIcon: 'account-cog-outline' ,},

    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'circular-graph' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    circle: Circle,
    map: MapScreen,
    info: Information,
    config:Config
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
