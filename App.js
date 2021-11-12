import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Login from './src/components/Login';

export default function App() {
  const [user, setUser] = useState(null);

  if(!user){
    return <Login changeStatus={(user) => setUser(user)} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ paddingHorizontal: 10, paddingTop: 25, }}>
        <Text>DENTRO DA TELA TAREFAS</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
  },
});
