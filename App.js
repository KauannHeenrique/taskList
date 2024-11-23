import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-web';
import TaskCard from './TaskCard';
import { useState } from 'react';

export default function App() {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [task, setTask] = useState([]);
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);


  const onMessage = () => {
    setAlert1(false);
    setAlert2(false);

    if (taskTitle !== "" && taskDescription.length >= 10) {
      setTask([
        ...task,
        {
          id: task.length + 1,
          title: taskTitle,
          description: taskDescription
        }
      ])

      setTaskTitle("");
      setTaskDescription("");

    }

    else {
      if (!taskTitle.trim()) {
        setAlert1(true)
        setTimeout(() => {
          setAlert1(false);
        }, 4000);
      }

      if (taskDescription.length < 10) {
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false);
        }, 4000);
      }

    }

  }

  const deleteTask = (index) => {
    const updateTasks = [...task];
    updateTasks.splice(index, 1);
    setTask(updateTasks)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da tarefa'
        value={taskTitle}
        onChangeText={setTaskTitle} />

      {
        alert1 ? <Text style={styles.errorText}>Necessário informar o título</Text> : (<></>)
      }

      <Text
        style={styles.label}>Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline
        value={taskDescription}
        onChangeText={setTaskDescription}
      />

      {
        alert2 ? <Text style={styles.errorText}>Necessário mínimo de 10 caracteres</Text> : (<></>)
      }

      <View style={styles.buttonContainer}>
        <Button title='Salvar'
          style={styles.buttonGreen}
          color='darkgreen'
          onPress={
            () => {
              onMessage();
            }
          } />
      </View>

      {
        task.length > 0 ? <View style={styles.separator} /> : <></>
      }

      <ScrollView>
        {
          task.map((item, index) => (
            <TaskCard
              title={item.title}
              desc={item.description}
              status={"Done"}
              onClick={() => {
                deleteTask(index);
              }}
            />
          ))
        }
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  label: {
    marginTop: 25,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#4B0082"
  },
  input: {
    borderWidth: 5,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 20,
    marginTop: 12,
    marginBottom: 1,
    textAlign: 'center',
    width: "80%",
    height: 45
  },
  textArea: {
    height: 100,
    width: "80%",
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 16,
    height: 100,
    width: "80%",
  },
  buttonGreen: {
    width: 200,
    borderRadius: 12
  },
  separator: {
    marginTop: 18,
    width: "100%",
    height: 1,
    backgroundColor: "#222"
  },
  errorText: {
    color: "red",
    fontSize: 18,
    fontStyle: "italic"
  },
  scrollHeight: {
    height: 100,
    width: '80%'
  }
});
