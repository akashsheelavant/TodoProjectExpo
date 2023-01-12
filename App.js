import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ])

  const handleTap = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(item => item.key != id)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
    } else {
      Alert.alert('OOPS!', 'Todo should have more than 3 characters', [
        { text: 'OK', onPress: () => console.log('alert closed') }
      ])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <SafeAreaView>
        <View>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} handleTap={handleTap} />
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }

});

