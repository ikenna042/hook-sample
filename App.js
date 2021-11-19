import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  let [sum, setSum] = useState(0)
  let [clicks, SetClicks] = useState(0)

  const onPress = () => {
    setSum(sum+=5)
    SetClicks(clicks+=1)
  }
  return (
    <View style={styles.container}>
      <Text>{sum}</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Add</Text>
      </Pressable>
      <Text>You clicked {clicks} times</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default App;
