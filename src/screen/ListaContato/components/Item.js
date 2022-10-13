import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Item({item: { nome }}) { 
    return <View style={style.item}>
        <TouchableOpacity><Text style={style.itemNome}>{nome}</Text></TouchableOpacity>
    </View>
}

const style = StyleSheet.create(
    {
        item: {
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#46465A",
            paddingVertical: 16,
            marginHorizontal: 16,
            alignItems: "center"
        },
        itemNome: {
            fontSize: 16,
            lineHeight: 26,
            marginLeft: 11,
        }
    }
)