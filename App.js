import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 }
  ])
  return (
    <SafeAreaView>
      <View>
        <Header />
        <View style={styles.content}>
          {/*forms*/}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Text>{item.text}</Text>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }

});

