import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PutTextInput = () => {
  const navigation = useNavigation();
  const [nvalue, setNvalue] = useState(null);
  const showOutput = () => {
    console.warn(nvalue);
    if (nvalue) {
      navigation.navigate('Output', {
        item: nvalue,
      });
    } else {
      console.warn('*Please enter input');
    }
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
      <TextInput
        placeholder="Enter Input"
        placeholderTextColor="#000"
        onChangeText={text => setNvalue(text)}
        value={nvalue}
        style={{
          fontFamily: 'Poppins-Regular',
          borderRadius: 10,
          fontSize: 18,
          marginTop: 50,
          marginBottom: 30,
          width: '50%',
          backgroundColor: '#dbdbdb',
          color: 'black',
          textAlign: 'center',
        }}
      />
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

export default PutTextInput;
