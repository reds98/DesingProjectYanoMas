import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Button, Avatar, Text,Checkbox } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Config() {
    return (
        <SafeAreaProvider style={styles.container} >
            <View style={styles.avatarInfo}>
                <Avatar.Icon size={84} icon="account-supervisor-circle" />
                <Text variant="headlineMedium">User</Text>
            </View>

            <View style={styles.buttonsArea}>
                <Button style={styles.buttons} icon="alert-circle" mode="contained" onPress={() => console.log('Pressed')}>
                    SOS Alert
                </Button>
                <Button  style={styles.buttons} icon="alert-circle" mode="elevated" onPress={() => console.log('Pressed')}>
                   Create Report
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
    buttons:{
        padding:5,
        alignSelf: 'stretch',
        margin:10,
    }
});
