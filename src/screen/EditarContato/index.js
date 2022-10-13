import React from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

export default function EditarContato({ navigation }) {

    // const [numero] = React.useState("Número");
    // const [nome] = React.useState("Nome");
    // const [email] = React.useState("E-mail");
    // const [dataDeNascimento] = React.useState("Data de Nascimento");
    
    const [number, onChangeNumber] = React.useState();
    const [nome, onChangeNome] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [empresa, onChangeEmpresa] = React.useState('');
    const [dataDeNascimento, onChangeDataDeNascimento] = React.useState('');

    return(
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="Número"
                placeholderTextColor="gray"
                value={number} 
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNome}
                placeholder="Nome"
                placeholderTextColor="gray" 
                value={nome}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="E-mail"
                placeholderTextColor="gray" 
                value={email}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmpresa}
                placeholder="Empresa"
                placeholderTextColor="gray" 
                value={empresa}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeDataDeNascimento}
                placeholder="Data de Nascimento (**/**/**)"
                placeholderTextColor="gray" 
                value={dataDeNascimento}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        input: {
            paddingVertical: 10,
            borderRadius: 6,
            marginHorizontal: 10,
            marginTop: 10,
            paddingLeft: 5,
            borderWidth: 1,
            fontSize: 16,
            lineHeight: 26,
            marginLeft: 11,
        },
        view: {
            paddingVertical: 16,
            marginHorizontal: 16,
        },
        itemNome: {
            fontSize: 16,
            lineHeight: 26,
            marginLeft: 11,
        }
    }
)