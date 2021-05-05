import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const PutVoiceInput = () => {
  const showOutput = () => {
    console.warn('VoiceInput sent successfully');
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 60,
        alignItems: 'center',
      }}>
      <Text style={{fontFamily: 'Poppins-Bold', color: 'black', fontSize: 22}}>
        Input Details
      </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: 300,
          width: 300,
          backgroundColor: 'purple',
          marginBottom: 30,
          borderRadius: 30,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Poppins-Bold',
          }}>
          Voice Input
        </Text>
      </View>

      <TouchableOpacity onPress={showOutput}>
        <Text
          style={{
            color: 'white',
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
            textAlign: 'center',
            width: 190,
            fontSize: 22,
            backgroundColor: '#2e0547',
          }}>
          submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PutVoiceInput;
