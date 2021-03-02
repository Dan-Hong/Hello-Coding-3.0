import React, { Component } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import HomeScreenForm from './HomeScreenForm';

export default class HomeScreen extends Component {
  render () {
    return (
        <View style={styles.container}>
          <Text style = {styles.headingContainer}>
            Sign up or Log In
          </Text>
          <HomeScreenForm/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    color: 'white',
    fontSize: 30,
    padding: 30
  },
  container: {
    backgroundColor: 'darkorange',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})