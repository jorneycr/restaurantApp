import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResumenPedido from './views/ResumenPedido';
import NuevaOrden from './views/NuevaOrden';
import FormularioPlatillo from './views/FormularioPlatillo';
import ProgresoPedido from './views/ProgresoPedido';
import DetallePlatillo from './views/DetallePlatillo';
import Menu from './views/Menu';

import FirebaseState from './context/firebase/firebaseState';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <FirebaseState>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor : '#FFDA00'
        },
        headerTitleStyle : {
          fontWeight : 'bold'
        }
      }}>
        <Stack.Screen name="NuevaOrden" component={NuevaOrden} options={{title: "Nueva Orden"}}/>
        <Stack.Screen name="Menu" component={Menu} options={{title: "Menu"}}/>
        <Stack.Screen name="FormularioPlatillo" component={FormularioPlatillo} options={{title: "Formulario Platillo"}}/>
        <Stack.Screen name="ProgresoPedido" component={ProgresoPedido} options={{title: "Progreso Pedido"}}/>
        <Stack.Screen name="DetallePlatillo" component={DetallePlatillo} options={{title: "Detalle Platillo"}}/>
        <Stack.Screen name="ResumenPedido" component={ResumenPedido} options={{title: "Resumen Pedido"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </FirebaseState>
  );
}

export default App;