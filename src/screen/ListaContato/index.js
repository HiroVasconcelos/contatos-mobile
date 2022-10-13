import React from "react"
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native"

import Item from "./components/Item"

export default function ListaContato({ navigation, route }) {

    const {itens} = route.params

    console.log(itens)

    return(
        <FlatList
            data = {itens.lista}
            renderItem = {Item}
            keyExtractor = {(lista, index) => index}
            ListHeaderComponent = {() => {
                return (
                    <>
                        <View>
                            <Text style={style.listaDeContatos}>Lista de Contatos</Text>
                            <TouchableOpacity style={style.botao}><Text style={style.textoBotao}>Adicionar Contato +</Text></TouchableOpacity>
                        </View> 
                    </>
                )
            }}
        />
    )
}

const style = StyleSheet.create(
    {
        listaDeContatos: {
            color: "red",
            fontSize: 26,
            lineHeight: 42,
            fontWeight: "bold",
            marginTop: 35,
            textAlign: "center"
        },
        botao: {
            backgroundColor: "#2A9F85",
            paddingVertical: 10,
            borderRadius: 6,
            marginHorizontal: 10,
            marginTop: 10
        },
        textoBotao: {
            fontWeight: "bold",
            textAlign: "center",
            color: "red",
            fontSize: 16,
            lineHeight: 26,
        },
    }
)