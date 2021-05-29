import React from 'react';

import AddCameraInput from '../components/AddCameraInput';
import AddVoiceInput from '../components/AddVoiceInput';
import AddTextInput from '../components/AddTextInput';

const Input = ({navigation, route}) => {
  const {itemId} = route.params;

  function SwitchCase(props) {
    switch (props.value) {
      case 1:
        return (
          <>
            <AddTextInput navigation={navigation} />
          </>
        );
      case 2:
        return (
          <>
            <AddCameraInput navigation={navigation} />
          </>
        );

      case 3:
        return (
          <>
            <AddVoiceInput />
          </>
        );
      default:
        return 'You are a User';
    }
  }

  return <SwitchCase value={itemId} />;
};

export default Input;
