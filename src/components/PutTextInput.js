import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      inputData: [],
    };
  }

  //function to add TextInput dynamically
  addTextInput = index => {
    let textInput = this.state.textInput;
    textInput.push(
      <TextInput
        key={index}
        style={styles.textInput}
        placeholder="Enter Input"
        onChangeText={text => this.addValues(text, index)}
      />,
    );
    this.setState({textInput});
  };

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({textInput, inputData});
  };

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({text: text, index: index});
      this.setState({
        inputData: dataArray,
      });
    }
  };

  //function to console the output
  getValues = () => {
    if (this.state.inputData.length === 0) {
      console.warn("Input can't be empty");
    } else {
      console.warn('Data', this.state.inputData);
    }
  };

  render() {
    return (
      <View style={{marginTop: 60}}>
        <View style={styles.row}>
          <View style={{margin: 10}}>
            <TouchableOpacity
              onPress={() => this.addTextInput(this.state.textInput.length)}>
              <Antdesign name="pluscircleo" size={30} color="#2e0547" />
            </TouchableOpacity>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity onPress={() => this.removeTextInput()}>
              <Antdesign name="delete" size={30} color="#2e0547" />
            </TouchableOpacity>
          </View>
        </View>
        {this.state.textInput.map(value => {
          return value;
        })}
        <View style={{marginHorizontal: '18%'}}>
          <TouchableOpacity onPress={() => this.getValues()}>
            <Text style={styles.getValueBtn}>Get Values</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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

export default MyClass;
