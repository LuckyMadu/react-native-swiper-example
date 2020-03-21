import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Login with email or password</Text>
        <View style={styles.actions}>
          <View style={styles.section}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
    //alignItems: 'center',
  },
  title: {
    color: '#3465d9',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
  },
  actions: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});
