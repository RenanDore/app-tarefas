import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import TaskList from './src/components/TaskList';

import Login from './src/components/Login';

let tasks = [
  {key: '1', nome: 'comprar coca cola'},
  {key: '2', nome: 'estudar javascript'}
]

export default function App() {
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('');

  if(user){
    return <Login changeStatus={(user) => setUser(user)} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <View style={styles.containerTask}>
          <TextInput
            style={styles.input}
            placeholder="O que vai fazer hoje?"
            value={newTask}
            onChangeText={(text) => setNewTask(text) }
          />

          <TouchableOpacity style={styles.buttonAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <TaskList data={item}/>
          )}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
  },
  container2:{
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  containerTask:{
    flexDirection: 'row'
  },
  input:{
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },
  buttonAdd:{
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  buttonText:{
    color: 'white',
    fontSize: 22,
  },
});
