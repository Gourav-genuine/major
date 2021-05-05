import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>Customize Your ML/AI playground</Text>
      <Text style={styles.heading}>Choose Your Inputs</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Input', {itemId: 1})}>
        <View
          style={{
            padding: 16,
            borderWidth: 1,
            borderColor: 'thistle',
            borderRadius: 10,
            marginBottom: 25,
            width: 200,
            backgroundColor: '#2e0547',
          }}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Text/Numbers
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Input', {itemId: 2})}>
        <View
          style={{
            padding: 16,
            borderWidth: 1,
            borderColor: 'thistle',
            borderRadius: 10,
            width: 200,
            marginBottom: 25,
            backgroundColor: '#2e0547',
          }}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Camera/Gallery
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Input', {itemId: 3})}>
        <View
          style={{
            padding: 16,
            borderWidth: 1,
            borderColor: 'thistle',
            borderRadius: 10,
            marginBottom: 25,
            backgroundColor: '#2e0547',
            width: 200,
          }}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Voice/Audio
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'Poppins-Bold',
    marginTop: 60,
    marginBottom: 20,
  },
  subHeading: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    marginTop: 60,
    marginBottom: 20,
  },
});

export default Home;
