import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button, Avatar, Text, Checkbox } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

export default function Config({  }) {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.avatarInfo}>
        <Avatar.Icon size={84} icon="account-supervisor-circle" />
        <Text variant="headlineMedium">User</Text>
      </View>

      <View style={styles.buttonsArea}>
        <Button
          style={styles.buttons}
          icon="alert-circle"
          mode="contained"
          onPress={
            async () => {
              try {
                await AsyncStorage.removeItem('user')
                navigation.navigate("Login")
              } catch(e) {
                console.log("ERROR",e)
              }
            
              console.log('Done.')
          }
        }
        >
          LogOut
        </Button>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent:'center',
    //   alignContent:'flex-start',
    paddingTop: 30,
  },
  avatarInfo: {
    flex: 0.9,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonsArea: {
    flex: 1,
    // justifyContent: 'space-evenly',
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttons: {
    padding: 5,
    alignSelf: "stretch",
    margin: 10,
  },
});
