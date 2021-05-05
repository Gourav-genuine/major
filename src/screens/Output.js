import React from 'react';
import {View, Text} from 'react-native';

const Output = ({navigation, route}) => {
  const {item} = route.params;
  // console.warn(item);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{fontFamily: 'Poppins-Bold', fontSize: 25, marginBottom: 20}}>
        Your Output
      </Text>
      <View
        style={{
          display: 'flex',
          padding: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: 'black',
          borderRadius: 10,
        }}>
        <Text
          style={{fontFamily: 'Poppins-Regular', color: 'white', fontSize: 18}}>
          {item}
        </Text>
      </View>
    </View>
  );
};

export default Output;
