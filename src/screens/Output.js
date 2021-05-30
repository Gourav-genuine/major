import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Output = ({navigation, route}) => {
  const {outputData} = route.params;
  console.log(outputData);
  return (
    <View>
      <View style={styles.outputBox}>
        <Text style={styles.outputText}>{outputData}</Text>
      </View>
    </View>
  );
};

export default Output;

const styles = StyleSheet.create({
  outputBox: {
    backgroundColor: '#2e0547',
    width: 300,
    height: 400,
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    borderColor: '#C71585',
    borderWidth: 4,
    padding: 10,
  },
  outputText: {
    fontSize: 20,
  },
});
