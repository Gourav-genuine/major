import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
  title: 'Pick Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const PutCameraInput = () => {
  const [image, setImage] = useState(
    'https://d1nz104zbf64va.cloudfront.net/dt/a/o/a-few-words-about-artificial-intelligence-what-is-it.jpg',
  );

  const uploadImage = () => {
    console.warn('CameraInput sent');
  };

  const chooseImage = async () => {
    launchImageLibrary(options, response => {
      console.log('Response from launchCamera', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker: ', response.errorMessage);
      } else {
        console.log(response);
        setImage(response.uri);
      }
    });
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
          marginBottom: 30,
        }}>
        <ImageBackground
          resizeMode="contain"
          style={{
            height: 300,
            width: 300,
            display: 'flex',
            justifyContent: 'center',
          }}
          source={{
            uri: image,
          }}>
          <TouchableOpacity onPress={chooseImage}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Poppins-Bold',
                fontSize: 28,
              }}>
              Pick Image
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <TouchableOpacity onPress={uploadImage}>
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

export default PutCameraInput;
