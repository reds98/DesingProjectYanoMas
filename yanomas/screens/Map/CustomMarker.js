import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Button, Avatar, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps'

// 9.854997, -83.918044


export default function CustomMarker() {
    return (
        <View style={styles.marker}>
            <Text style={styles.color}>reporte</Text>
        </View>
    );
}
//styles for our custom marker.
const styles = StyleSheet.create({
    marker: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "#007bff",
        borderColor: "#eee",
        borderRadius: 5,
        elevation: 10,
    },
    text: {
        color: "#fff",
    },
});