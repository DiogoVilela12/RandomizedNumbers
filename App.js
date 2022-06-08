import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(10);

  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 1000);
    setNumero(novoNumero);
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.espaçoEntreContainers}>
        <Text style={style.titulo}>Randomized Numbers</Text>
      </View>

      <View style={style.espaçoEntreContainers}>
        <Text style={style.numero}>{numero}</Text>
      </View>

      <View style={style.espaçoEntreContainers}>
        <TouchableOpacity onPress={handleNumero}>
          <Text style={style.button}>Gerar Numero</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 60,
    marginTop: 20,
  },
  espaçoEntreContainers: {
    margin: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  numero: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    margin: 40,
  },
});

export default App;
