import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import MainScreen from "./screens/MainScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToastProvider } from "react-native-paper-toast";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { RootSiblingParent } from 'react-native-root-siblings';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootSiblingParent> 
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator options={{ headerShown: false }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            // screenOptions={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
            // screenOptions={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
