import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';

const AddCameraInput = ({navigation}) => {
  const [camFields, setCamFields] = useState([{value: 'default', index: 0}]);

  // Adding cam block
  function handleAdd() {
    const values = [...camFields];
    values.push({value: '', index: null});
    setCamFields(values);
  }

  // Removing cam block
  function handleRemove() {
    const values = [...camFields];
    values.pop();
    setCamFields(values);
  }

  // Sending no. of blocks to other screen
  function showInput() {
    navigation.navigate('SelectedInput', {camFieldLength: camFields.length});
  }

  return (
    <ScrollView>
      <View style={{marginTop: 60}}>
        <View style={styles.row}>
          <View style={{margin: 10}}>
            <TouchableOpacity
              onPress={() => {
                handleAdd();
              }}>
              <Antdesign name="pluscircleo" size={30} color="#2e0547" />
            </TouchableOpacity>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity
              onPress={() => {
                handleRemove();
              }}>
              <Antdesign name="delete" size={30} color="#2e0547" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
          {camFields.map((field, idx) => {
            return (
              <View key={`${field}-${idx}`}>
                <View style={styles.camfieldView}>
                  <Antdesign name="camera" size={35} color="#2e0547" />
                  <Text style={{fontFamily: 'Poppins-Medium'}}>{`Camera ${
                    idx + 1
                  }`}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{marginHorizontal: '18%', marginTop: 50}}>
          <TouchableOpacity onPress={() => showInput()}>
            <Text style={styles.getValueBtn}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddCameraInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonView: {
    flexDirection: 'row',
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35,
  },

  camfieldView: {
    backgroundColor: '#eed9ff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    height: 120,
    width: 170,
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    borderBottomColor: '#5f248f',
    borderBottomWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getValueBtn: {
    backgroundColor: '#2e0547',
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    paddingHorizontal: 75,
    paddingVertical: 10,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 35,
  },
});
