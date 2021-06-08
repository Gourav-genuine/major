import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';

const AddTextInput = ({navigation}) => {
  const [fields, setFields] = useState([{value: 'default', index: 0}]);

  // Adding block
  function handleAdd() {
    const values = [...fields];
    values.push({value: '', index: null});
    setFields(values);
  }

  // Removing block
  function handleRemove() {
    const values = [...fields];
    values.pop();
    setFields(values);
  }

  // Sending no. of blocks to other(home) screen
  function showInput() {
    // console.log(fields);
    navigation.navigate('SelectedInput', {fieldsLength: fields.length});
  }

  const fieldInput = ['variance', 'skewness', 'curtosis', 'entropy'];
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
          {fields.map((field, idx) => {
            return (
              <View key={`${field}-${idx}`}>
                <View style={styles.fieldTextInput}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: 18,
                    }}>
                    {fieldInput[idx]}
                  </Text>
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

export default AddTextInput;

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

  fieldTextInput: {
    backgroundColor: '#eed9ff',
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 25,
    borderBottomColor: '#5f248f',
    elevation: 2,
    paddingHorizontal: 110,
    paddingVertical: 10,
  },

  getValueBtn: {
    backgroundColor: '#2e0547',
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 35,
    paddingHorizontal: 80,
  },
});
