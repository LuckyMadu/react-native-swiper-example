import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {IMAGE} from '../constants/images';

export class LoginTwoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          thumbnail: '',
        },
        {
          thumbnail: '',
        },
      ],
    };
  }

  _renderItem({item, index}, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.thumbnail}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={IMAGE.ICON_PROFILE}
            resizeMode="contain"
            style={styles.images}
          />
          <Text style={styles.title}>LAHIRU</Text>
          <Text style={styles.title}>=======</Text>
        </View>
        <View style={styles.footer}>
          <Carousel
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={this.state.entries}
            renderItem={this._renderItem}
            hasParallaxImages={true}
          />
        </View>
      </View>
    );
  }
}
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4399AD',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: screenWidth / 2,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
  subTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
