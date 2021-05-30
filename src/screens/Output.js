import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Output = ({navigation, route}) => {
  const {outputData} = route.params;
  console.log(outputData);
  return (
    <View>
      <View style={styles.outputBox}>
<<<<<<< HEAD
        <Text style={styles.outputText}>{outputData}</Text>
=======
        <Text style={styles.outputText}>
          {outputData}
        </Text>
>>>>>>> f385054245d2104297926c9c8d68cf7db63fe3c0
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
<<<<<<< HEAD
  },
});
=======
    
  }
})
>>>>>>> f385054245d2104297926c9c8d68cf7db63fe3c0
