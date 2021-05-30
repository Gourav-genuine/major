import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const AccountScreen = () => {
  const [singleFile, setSingleFile] = useState(null);

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('res : ' + JSON.stringify(res));
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      console.log(err);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{marginTop: 40, fontFamily: 'Poppins-Regular', fontSize: 20}}>
        Select model File to upload
      </Text>
      <View
        style={{
          marginTop: 100,
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.btnContainer} onPress={selectFile}>
          <Text style={styles.btnText}>Send Locally</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Send To server</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#2e0547',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 15,
    width: 200,
  },

  btnText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
  },
});
