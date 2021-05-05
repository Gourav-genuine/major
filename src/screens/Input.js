import React from 'react';
// import {View, Text} from 'react-native';
import PutCameraInput from '../components/PutCameraInput';
import PutTextInput from '../components/PutTextInput';
import PutVoiceInput from '../components/PutVoiceInput';

// import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';\

const Input = ({route}) => {
  const {itemId} = route.params;

  function SwitchCase(props) {
    switch (props.value) {
      case 1:
        return (
          <>
            <PutTextInput />
          </>
        );
      case 2:
        return (
          <>
            <PutCameraInput />
          </>
        );

      case 3:
        return (
          <>
            <PutVoiceInput />
          </>
        );
      default:
        return 'You are a User';
    }
  }

  return <SwitchCase value={itemId} />;
};

export default Input;
