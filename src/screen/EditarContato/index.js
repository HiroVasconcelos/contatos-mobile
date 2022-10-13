import React from "react";
import { Button, Text } from "react-native";

export default function EditarContato({ navigation }) {
    return(
        <>
            <Text>Tela de edição ou criação de contatos.</Text>
            <Button title="Lista Contato" onPress={() => navigation.navigate('Lista Contato')}></Button>
        </>
    )
}