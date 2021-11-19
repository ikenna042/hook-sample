import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
      <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.box4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.box6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.box7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
  },
  view2: {
    flex: 2,
    flexDirection: 'column'
  },
  view4: {
    flex: 5,
    flexDirection: 'row'
  },
  box1: {
    flex: 1,
    backgroundColor: '#d5eacf',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  box2: {
    flex: 2,
    backgroundColor: '#f55da8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  box3: {
    flex: 3,
    backgroundColor: '#ffdb19',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  box4: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  box5: {
    flex: 2,
    backgroundColor: '#8fce00',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  box6: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },box7: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});

export default App;
