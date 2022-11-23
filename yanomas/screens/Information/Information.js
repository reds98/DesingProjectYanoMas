import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Text, List, Avatar, Button, Dialog, Portal, Provider, Paragraph, TextInput, Card } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Information() {
    const [visible, setVisible] = useState(false);
    const [text, setText] = React.useState("");


    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.mainArea}>
                <Text variant="headlineMedium">Informacion Relevante</Text>
            </View>
            <View style={styles.informationArea}>
                <ScrollView >
                    <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                    <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                    <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                    <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                    <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                    <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                     <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                     <List.Item
                        title="Titulo de la informacion"
                        description="Descripcion de la informacion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <List.Image variant="image" source={{ uri: 'https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' }} />}
                    />
                </ScrollView>
            </View>




        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   justifyContent:'center',
        //   alignContent:'flex-start',
        paddingTop: 30,
        flexDirection: "column"
    },
    mainArea: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    informationArea: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        // alignContent: 'flex-start',
        // alignItems: 'center',
        // alignSelf: 'flex-start',
        // flexDirection: 'column'

    },
    buttons: {
        padding: 5,
        alignSelf: 'stretch',
        margin: 10,
    }
});
