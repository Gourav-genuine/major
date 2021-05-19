import React from 'react';
import PutCameraInput from '../components/PutCameraInput';
import PutVoiceInput from '../components/PutVoiceInput';
import PutTextInput from '../components/PutTextInput';
// import TestTextInput from '../components/TestTextInput';

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
