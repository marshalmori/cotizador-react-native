import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Formulario = () => {
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker>
        <Picker.Item label="-- Seleccione --" value=""></Picker.Item>
        <Picker.Item label="Dolar Americano" value="USD"></Picker.Item>
        <Picker.Item label="Peso Mexicano" value="MXN"></Picker.Item>
        <Picker.Item label="Euro" value="EUR"></Picker.Item>
        <Picker.Item label="Libra Esterlina" value="GBP"></Picker.Item>
        <Picker.Item label="Real" value="BRL"></Picker.Item>
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
});
export default Formulario;
