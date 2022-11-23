import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Button, Avatar, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps'
import CustomMarker from './CustomMarker';
export default function MapScreen() {
  // 9.854997, -83.918044


  const [origin, setOrigin] = useState({
    latitute: 9.854997,
    longitude: -83.918044
  })
  return (
    <View>
      <MapView style={styles.map} initialRegion={{
        latitude: origin.latitute,
        longitude: origin.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004
      }}>
        <Marker coordinate={{
        latitude: origin.latitute,
        longitude: origin.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004
      }} >
          <CustomMarker />
      </Marker>
      </MapView >
    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent:'center',
    //   alignContent:'flex-start',
    paddingTop: 30
  },
  map: {
    width: '100%',
    height: '100%',
  },

  buttons: {
    padding: 5,
    alignSelf: 'stretch',
    margin: 10,
  }
});
