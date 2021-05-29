import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Antdesign from 'react-native-vector-icons/AntDesign';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

const AddVoiceInput = () => {
  const [recordDetails, setRecordDetails] = useState({
    isLoggingIn: false,
    recordSecs: 0,
    recordTime: '00:00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
  });

  useEffect(() => {
    permission();
  }, []);

  const permission = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordDetails({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log('START_RECORD', result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordDetails({
      recordSecs: 0,
    });
    console.log('STOP_RECORD', result);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
      }
      setRecordDetails({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const showOutput = () => {
    console.warn('RECORD_DETAILS', recordDetails);
    console.warn('VoiceInput sent successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Details</Text>
      <View>
        <Text style={{marginVertical: 10, textAlign: 'center'}}>
          {recordDetails.recordTime}
        </Text>

        <TouchableOpacity onPress={onStartRecord}>
          <View style={styles.buttonContainer}>
            <View style={styles.circle} />
            <Text style={styles.inputTextContainer}>Record</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onStopRecord}>
          <View style={styles.buttonContainer}>
            <View style={styles.square} />
            <Text style={styles.inputTextContainer}>Stop</Text>
          </View>
        </TouchableOpacity>

        <Text style={{marginVertical: 10}}>
          {`${recordDetails.playTime} / ${recordDetails.duration}`}
        </Text>

        <TouchableOpacity onPress={onStartPlay}>
          <View style={styles.buttonContainer}>
            <Antdesign name="play" size={22} color="#2e0547" />
            <Text style={styles.inputTextContainer}>Play</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPausePlay}>
          <View style={styles.buttonContainer}>
            <Antdesign name="pausecircle" size={22} color="#2e0547" />
            <Text style={styles.inputTextContainer}>Pause</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onStopPlay}>
          <View style={styles.buttonContainer}>
            <View style={{height: 12, width: 12, backgroundColor: '#2e0547'}} />
            <Text style={styles.inputTextContainer}>Stop</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={showOutput}>
        <Text style={styles.button}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddVoiceInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 22,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 300,
    width: 300,
    backgroundColor: 'purple',
    marginBottom: 30,
    borderRadius: 30,
  },
  inputTextContainer: {
    color: '#2e0547',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginLeft: 8,
  },
  button: {
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 30,

    paddingVertical: 10,
    textAlign: 'center',
    width: 190,
    fontSize: 22,
    marginTop: 40,
    backgroundColor: '#2e0547',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 10,
    elevation: 2,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  circle: {
    height: 12,
    width: 12,
    backgroundColor: '#2e0547',
    borderRadius: 12,
  },
  square: {height: 12, width: 12, backgroundColor: '#2e0547'},
});
