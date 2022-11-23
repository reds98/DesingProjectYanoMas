import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button, Avatar, Text, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Register({ navigation }) {
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
      await fetch("https://4f0d-186-176-158-63.ngrok.io/users", requestOptions).then(
        (response) => {
            console.log("REPONSE",response)
            // navigation.navigate("MainScreen")
          response.json().then((data) => {
           console.log("DATA REGISTER", data);
           AsyncStorage.setItem("user", JSON.stringify(data)).then((response)=>{
            console.log("RESPONSE ASYNC",response)
            navigation.navigate("MainScreen")
           });
           
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.avatarInfo}>
        <Avatar.Icon size={84} icon="account-supervisor-circle" />
        <Text variant="headlineMedium">Register</Text>
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          label="Name"
          value={setPassword}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Email"
          value={setPassword}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.textInput}
          label="DNI"
          value={dni}
          onChangeText={(text) => setDni(text)}
        />
        <TextInput
          style={styles.textInput}
          label="phone"
          value={phone_number}
          onChangeText={(text) => setPhone_number(text)}
        />
        <Button
          style={styles.buttons}
          icon="alert-circle"
          mode="contained"
          onPress={() => postExample()}
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
    paddingTop: 30,
  },
  textInput: {
    padding: 10,
    marginTop: 10,
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
