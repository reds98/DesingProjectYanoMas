import React,{useState} from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Button, Avatar, Text, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Login({ navigation }) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return (
        <SafeAreaProvider style={styles.container} >
            <View style={styles.avatarInfo}>
                <Avatar.Icon size={84} icon="account-supervisor-circle" />
                <Text variant="headlineMedium">Login</Text>
            </View>

            <View >
                <TextInput
                    label="Email"
                    value={setPassword}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Button style={styles.buttons} icon="alert-circle" mode="contained" onPress={() => navigation.navigate("MainScreen")}>
                   Login
                </Button>
                <Button style={styles.buttons} icon="alert-circle" mode="elevated" onPress={() => navigation.navigate("Register")}>
                    Register
                </Button>
            </View>



        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   justifyContent:'center',
        //   alignContent:'flex-start',
        paddingTop: 30
    },
    avatarInfo: {
        flex: 0.9,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    buttonsArea: {
        flex: 1,
        // justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    buttons: {
        padding: 5,
        alignSelf: 'stretch',
        margin: 10,
    }
});
