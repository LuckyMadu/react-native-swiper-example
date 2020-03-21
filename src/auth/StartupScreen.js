import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {IMAGE} from '../constants/images';

export class StartupScreen extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        <View style={styles.slide1}>
          <Image source={IMAGE.STARTUP} style={styles.image} />
          <Text style={styles.text}>Welcome to eSmartEdge</Text>
          <Text style={styles.smallText}>
            eSmartEdge is an innovative software solution provider. We at
            eSmartEdge design and develop innovative products and services which
            would help you to “Make the Smartest Move”
          </Text>
        </View>
        <View style={styles.slide2}>
          <Image source={IMAGE.STARTUP} style={styles.image} />
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.smallText}>Welcome to eSmartEdge App</Text>
        </View>
        <View style={styles.slide3}>
          <Image source={IMAGE.STARTUP} style={styles.image} />
          <Text style={styles.text}>Go and see what you want!</Text>
          <Text style={styles.smallText}>Welcome to eSmartEdge App</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.buttonOne}>
              <Text style={styles.buttonOneText}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTwo}>
              <Text style={styles.buttonTwoText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    );
  }
}

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.3;

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: '100%',
    height: 340,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  text: {
    marginTop: 25,
    marginBottom: 3,
    color: '#3465d9',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  smallText: {
    color: '#b8b8b8',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
  },

  buttonWrapper: {
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: 'rgba(52,101,217,.4)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activeDot: {
    backgroundColor: '#3465d9',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  buttonOne: {
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3465d9',
    borderRadius: 50,
    marginTop: 15,
  },
  buttonOneText: {
    color: '#3465d9',
    fontSize: 16,
  },
  buttonTwo: {
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3465d9',
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 10,
  },
  buttonTwoText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
