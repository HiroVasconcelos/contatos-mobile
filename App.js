import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import mock from './src/mock/contatos'
import ListaContato from './src/screen/ListaContato';
import EditarContato from './src/screen/EditarContato';

// export default function App() {
//   return (
//     <SafeAreaView style={style.corpo}>
//       <StatusBar />
//       <ListaContato {...mock}/>
//     </SafeAreaView>
//   );
// }

//////////////

const Stack = createStackNavigator();

function MyStack() {
  return (  
    <Stack.Navigator>
      <Stack.Screen name="Lista Contato" component={ ListaContato } initialParams={{...mock}} />
      <Stack.Screen name="Editar Contato" component={ EditarContato } />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}