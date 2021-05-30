import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Antdesign from 'react-native-vector-icons/AntDesign';


const options = {
  title: 'Select Picture',
  storageOptions: { 
    skipBackup: true,
    path: 'images',
  },
  maxWidth: 200,
  maxHeight: 200,
  quality: 0.5,
};

const SelectedtextInput = ({navigation, route}) => {



  const {fieldsLength} = route.params;
  const {camFieldLength} = route.params;
  const [image, setImage] = useState([]);
  const [fields, setFields] = useState([]);
  const[outputData,setOutputData]= useState()
  const isFocused = useIsFocused();

  useEffect(() => {
    // console.log('CamLength', camFieldLength);
  // fetch("http://192.168.43.211:15400/")
  // .then(response => response.json())
  // .then(data => {
  //       console.log(data.message);
  //   })
  // .catch(err => console.error(err));

    const values = [];
    const dimg = [];
    const AddInputs = () => {
      for (let i = 0; i < fieldsLength; i++) {
        values.push({value: '', index: i});
        setFields(values);
      }
      // console.log('UseEffect AddInput Called');
    };

    const AddDummyImage = () => {
      for (let i = 0; i < camFieldLength; i++) {
        dimg.push({
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrG_yvjNmc3T6CZRxFV7TyvsADZkLUDST67kMz-5NElGyncIgreIhcg7H0vM_1Kt62HjQ&usqp=CAU',
        });
        setImage(dimg);
      }
    };

    AddDummyImage();
    AddInputs();
  }, [isFocused]);

  // TextInput Functions
  const handleChange = (i, text) => {
    const values = [...fields];
    values[i].value = text;
    values[i].index = i;
    setFields(values);
  };



  const showInput = () => {
    // console.log('TEXTFIELD', fields);
    // console.log('IMAGE', image);
  let request = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    "variance": fields[0].value,
    "skewness": fields[1].value,
    "curtosis": fields[2].value,
    "entropy": fields[3].value,
    })
  };
  fetch("http://192.168.43.211:15400/predict",request)
  .then((response) => response.json())
  .then((data) => {
    //console.log('DATA',data)
    setOutputData(data.prediction);
  })
  .catch((error) => console.log(error))

  };

  const chooseImage = async index => {
    const newImg = [...image];

    launchImageLibrary(options, response => {
      console.log('uri from launchCamera', response.uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker: ', response.errorMessage);
      } else {
        newImg[index].uri = response.uri;
        console.log('newImg', newImg[index]);
        setImage(newImg);
      }
    });
  };
  //console.log('OUTPUT DATA',outputData)

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{marginTop: 70}}>
          <View style={{marginBottom: 40}}>
            {fields.map((field, idx) => {
              return (
                <View key={`${field}-${idx}`}>
                  <TextInput
                    placeholder={`Enter input ${idx + 1}`}
                    value={field.value}
                    g
                    placeholderTextColor="#5c2e78"
                    onChangeText={text => handleChange(idx, text)}
                    style={styles.inputStyle}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.imgContainer}>
            {image.map((img, i) => (
              <ImageBackground
                resizeMode="cover"
                style={styles.imageBg}
                source={{
                  uri: img.uri,
                }}
                key={i}>
                <TouchableOpacity onPress={() => chooseImage(i)}>
                  <Antdesign
                    style={{elevation: 5, borderRadius: 15}}
                    name="camera"
                    size={35}
                    color="#eed9ff"
                  />
                </TouchableOpacity>
              </ImageBackground>
            ))}
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.getValueBtn}
              onPress={() => {
                showInput(),
                navigation.navigate('Output',{outputData: outputData})
                }
                }>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Send Input
              </Text>
              <Antdesign
                style={{elevation: 5, marginLeft: 8}}
                name="arrowright"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectedtextInput;

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

  inputStyle: {
    backgroundColor: '#eed9ff',
    textAlign: 'center',
    marginHorizontal: 0,
    marginBottom: 10,
    borderRadius: 25,
    fontSize: 18,
    borderBottomColor: '#5f248f',
    elevation: 2,
  },

  imgContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  imageBg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 130,
    marginBottom: 30,
    elevation: 5,
    marginRight: '5%',
    borderRadius: 10,
    borderBottomWidth: 0.5,
    borderColor: '#2c0842',
  },
  buttonView: {marginHorizontal: '18%', marginTop: 30},

  getValueBtn: {
    backgroundColor: '#2e0547',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
