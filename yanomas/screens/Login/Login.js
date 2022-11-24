import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button, Avatar, Text, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { useToast } from "react-native-paper-toast";
import Toast from "react-native-root-toast";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo: email, password }),
  };

  const login = async () => {
    try {
      await fetch(
        "https://f6c6-138-94-57-217.ngrok.io/login",
        requestOptions
      ).then((response) => {
        console.log("Body", { correo: email, password });
        console.log("REPONSE", Object.keys(response));
        console.log("CODE", response.status);
        if (response.status == "200") {
          response.json().then((data) => {
            console.log("DATA REGISTER", data);
               AsyncStorage.setItem("user", JSON.stringify(data[0])).then((response)=>{
                console.log("RESPONSE ASYNC",response)
                Toast.show("Login correctly", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.CENTER,
                  });
                navigation.navigate("MainScreen")
               });
          });
        }
        else{
            Toast.show("Something went wrong with the login", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
              });
        }
        // navigation.navigate("MainScreen")
      });
    } catch (error) {
      console.error(error);
    }
  };
  //   const toaster = useToast();

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.avatarInfo}>
        <Avatar.Icon size={84} icon="account-supervisor-circle" />
        <Text variant="headlineMedium">Login</Text>
      </View>

      <View style={styles.buttonsArea}>
        <TextInput
          label="Email"
          value={setPassword}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.buttons}
          icon="alert-circle"
          mode="contained"
          onPress={() => login()}
        >
          Login
        </Button>
        <Button
          style={styles.buttons}
          icon="alert-circle"
          mode="elevated"
          //   onPress={() => navigation.navigate("Register")}
          onPress={() => {
            Toast.show("Request failed to send.", {
              duration: Toast.durations.LONG,
              position: Toast.positions.CENTER,
            });
            navigation.navigate("Register");
          }}
        >
          Register
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
    flex: 2,
    // justifyContent: 'space-evenly',
    // alignContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
  },
  buttons: {
    padding: 5,
    alignSelf: "stretch",
    margin: 10,
  },
});
