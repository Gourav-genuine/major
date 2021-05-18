import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText1}>custo</Text>
          <Text style={styles.logoText2}>ML</Text>
        </View>
        <Text style={styles.subHeading}>Customize Your ML/AI playground</Text>
        <Text style={styles.heading}>Choose Your Inputs</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Input', {itemId: 1})}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Text/Numbers</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Input', {itemId: 2})}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Camera/Gallery</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Input', {itemId: 3})}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Voice/Audio</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 5,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logoText1: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
  },
  logoText2: {
    color: 'black',
    fontFamily: 'Poppins-Light',
    fontSize: 30,
  },
  heading: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    marginTop: 40,
    marginBottom: 20,
  },
  subHeading: {
    textAlign: 'center',
    color: '#565657',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 25,
    backgroundColor: '#2e0547',
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});

export default Home;
