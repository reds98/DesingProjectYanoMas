import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button, Avatar, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");

  const [name, setName] = useState("");

  const [phone_number, setPhone_number] = useState("");

  const [password, setPassword] = useState("");

  // {
  //     "dni":"109",
  //     "name":"Redssi",
  //     "correo":"reds@email.com",
  //     "password":"tintin05",
  //     "phone_number":"88811629"
  // }
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dni, name, phone_number, correo: email, password }),
  };

  const postExample = async () => {
    try {
      await fetch(
        "https://4f0d-186-176-158-63.ngrok.io/alerts",
        requestOptions
      ).then((response) => {
        console.log("REPONSE", response);
        // navigation.navigate("MainScreen")
        response.json().then((data) => {
          console.log("DATA REGISTER", data);
          AsyncStorage.setItem("user", JSON.stringify(data)).then(
            (response) => {
              console.log("RESPONSE ASYNC", response);
              navigation.navigate("MainScreen");
            }
          );
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [user, setUser] = useState({ name: "" });
  useEffect(() => {
    // declare the data fetching function
    const getUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        const currentUser = savedUser;
        if (!currentUser) {
          return;
        }
        console.log("Current", currentUser);
        setUser(JSON.parse(currentUser));
      } catch (error) {
        console.log(error);
      }
    };
    getUser()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.avatarInfo}>
        <Avatar.Icon size={84} icon="account-supervisor-circle" />
        <Text variant="headlineMedium"> Welcome Back {user.name}</Text>
      </View>

      <View style={styles.buttonsArea}>
        <Button
          style={styles.buttons}
          icon="alert-circle"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          SOS Alert
        </Button>
        <Button
          style={styles.buttons}
          icon="alert-circle"
          mode="elevated"
          onPress={() => console.log("Pressed")}
        >
          Create Report
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
