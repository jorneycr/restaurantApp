import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeBaseProvider, Container, Button, Text} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
    <Container style={globalStyles.contenedor}>
      <View style={[globalStyles.contenido, styles.contenido]}>
        <Button
          style={globalStyles.boton}
          rounded={'full'}
          block
          onPress={ () => navigation.navigate('Menu')  }
        >
          <Text style={globalStyles.botonTexto}>Crear Nueva Orden</Text>
        </Button>
      </View>
    </Container>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  },
});

export default NuevaOrden;
