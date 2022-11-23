import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text, List, Avatar, Button, Dialog, Portal, Provider, Paragraph, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Circle() {
    const [visible, setVisible] = useState(false);
    const [text, setText] = React.useState("");


    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    return (
        <Provider>
            <SafeAreaProvider style={styles.container}>
                <View style={styles.mainArea}>
                    <Text variant="headlineMedium">Circulo de Confianza</Text>
                    <Button onPress={showDialog} style={styles.buttons} icon="account-multiple-plus" mode="contained" onPress={() => console.log('Pressed')}>
                    Agregar Persona al circulo
                </Button>
                </View>
                <View style={styles.circleArea}>
                <List.Item
                    title="Nombre : "
                    description="Correo: "
                    left={props => <List.Icon {...props} icon="account-circle" />}
                />
                <List.Item
                   title="Nombre : "
                    description="Correo: "
                    left={props => <List.Icon {...props} icon="account-circle" />}
                />
                <List.Item
                    title="Nombre : "
                    description="Correo: "
                    left={props => <List.Icon {...props} icon="account-circle" />}
                />
                
                </View>

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Agregar Persona Al Circulo</Dialog.Title>
                        <Dialog.Content>
                            {/* <Text variant="headlineSmall">Nombre</Text> */}

                            <TextInput
                                label="Email"
                                value={text}
                                onChangeText={text => setText(text)}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Agregar</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

            </SafeAreaProvider>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   justifyContent:'center',
        //   alignContent:'flex-start',
        paddingTop: 30
    },
    mainArea: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    circleArea: {
        flex: 3,
        // justifyContent: 'space-evenly',
        // alignContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column'

    },
    buttons: {
        padding: 5,
        alignSelf: 'stretch',
        margin: 10,
    }
});
