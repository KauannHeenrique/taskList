import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da tarefa' />

      <Text
        style={styles.label}>Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline />

      <View style={styles.buttonContainer}>
        <Button title='Salvar'
          style={styles.buttonGreen}
          color='darkgreen' 
          onPress={
          () => {
            alert('Salvando...')
          }
        }/>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center'
  },
  textArea: {
    height: 100,
    width: 300,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 16,
  },
  buttonGreen: {
    width: 200,
    borderRadius: 12
  }
});
