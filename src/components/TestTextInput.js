import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';

const TestTextInput = () => {
  const [fields, setFields] = useState([{value: '', index: 0}]);
  const [counter, setCounter] = useState(0);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({value: '', index: counter});
    setFields(values);
  }

  function handleRemove() {
    const values = [...fields];

    values.pop();
    setFields(values);
  }

  function showInput() {
    console.log(fields);
  }

  return (
    <View style={{marginTop: 60}}>
      <View style={styles.row}>
        <View style={{margin: 10}}>
          <TouchableOpacity
            onPress={() => {
              setCounter(counter + 1);
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
      {fields.map((field, idx) => {
        return (
          <View key={`${field}-${idx}`}>
            <TextInput
              type="text"
              placeholder="Enter text"
              value={fields[idx].value}
              onChange={text => handleChange(idx, text)}
            />
          </View>
        );
      })}
      <View style={{marginHorizontal: '18%'}}>
        <TouchableOpacity onPress={() => showInput()}>
          <Text style={styles.getValueBtn}>Get Values</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TestTextInput;

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
  },
});
