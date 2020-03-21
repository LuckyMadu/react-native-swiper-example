import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
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
          <Text style={styles.text}>And simple</Text>
          <Text style={styles.smallText}>Welcome to eSmartEdge App</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
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
    fontSize: 24,
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
  image: {
    width: '100%',
    height: 340,
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
});
