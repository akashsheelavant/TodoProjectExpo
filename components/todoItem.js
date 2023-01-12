import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, handleTap }) {
    return (
        <TouchableOpacity onPress={() => handleTap(item.key)}>
            <View style={styles.title}>
                <MaterialIcons name='delete' size={18} color='#333' />
                <Text style={styles.titleText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 16,
        marginTop: 16,
        bordercolor: "#bbb",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    titleText: {
        marginLeft: 10
    }
})