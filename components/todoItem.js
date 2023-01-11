import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, handleTap }) {
    return (
        <TouchableOpacity onPress={() => handleTap(item.key)}>
            <Text style={styles.title}>{item.text}</Text>
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
        borderRadius: 10
    }
})