import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class HomeScreenForm extends Component {
  render () {
    return (
      <View>
        <TextInput 
          style={styles.textInput}
          placeholder = 'Email'
        />
        <TextInput
          style={styles.textInput}
          placeholder = 'Password'
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'black',
    opacity: 0.4,
    padding: 30,
    borderRadius: 100,
    margin: 10,
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 100
  },
  buttonText: {
    color: 'darkorange',
    textAlign: 'center'
  }
})