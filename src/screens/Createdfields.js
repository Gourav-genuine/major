import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Createdfields = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Createdfields;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
