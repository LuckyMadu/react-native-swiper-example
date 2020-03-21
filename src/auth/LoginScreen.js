import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: null,
    };
  }

  onFocus = value => {
    this.setState({
      borderColor: value,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Login with email or password</Text>
        <View style={styles.action}>
          <View
            style={[
              styles.section,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor:
                  this.state.borderColor === 'email' ? '#3465d9' : 'gray',
              },
            ]}>
            <Icon
              name="md-mail"
              size={20}
              color={this.state.borderColor === 'email' ? '#3465d9' : 'gray'}
            />
            <TextInput
              placeholder="Email"
              style={[
                styles.textInput,
                {
                  color:
                    this.state.borderColor === 'email' ? '#3465d9' : 'gray',
                },
              ]}
              onFocus={() => this.onFocus('email')}
            />
          </View>
          <View
            style={[
              styles.section, // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor:
                  this.state.borderColor === 'password' ? '#3465d9' : 'gray',
              },
            ]}>
            <Icon
              name="md-lock"
              size={26}
              color={this.state.borderColor === 'password' ? '#3465d9' : 'gray'}
            />
            <TextInput
              placeholder="Password"
              style={[
                styles.textInput,
                {
                  color:
                    this.state.borderColor === 'password' ? '#3465d9' : 'gray',
                },
              ]}
              secureTextEntry
              onFocus={() => this.onFocus('password')}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupTextRight}> SignUp</Text>
          </TouchableOpacity>
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
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
  },

  textInput: {
    flex: 1,
    padding: 10,
  },
  forgot: {
    color: '#3465d9',
    textAlign: 'right',
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: '#3465d9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 50,
    marginTop: 25,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
  },
  signup: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    textAlign: 'center',
    color: 'gray',
  },
  signupTextRight: {
    color: '#3465d9',
  },
});
