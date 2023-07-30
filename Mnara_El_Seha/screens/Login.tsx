import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

export default function LoginScreen() {
  const [id, setID] = useState('');
  const [medFile, setMedFile] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('id: ', id);
    console.log('medFile: ', medFile);
    console.log('phoneNum: ', phoneNum);
    // open message to the user to enter the data if there is any missing field
    if (id === '' || medFile === '') {
      Alert.alert('ERROR', 'Please Fill all the required information', [
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  const isDarkMode = useColorScheme() === 'dark';
  const goBack = () => {
    console.log('go back');
    Alert.alert('Go Back', 'This button is used to go back');
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>

        <View style={styles.container}>
          {/* <MyAppBar /> */}
          {/* Add logoImg */}
          <View style={styles.logoImgView}>
            <Image source={require('../assets/logoImg.png')} />
          </View>
          <View style={styles.allInputs}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="رقم الهوية الزامي"
                placeholderTextColor="#8DA9B6"
                onChangeText={text => setID(text)}
                value={id}
                // start writing from the right side
                textAlign="right"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="الملف الطبي الزامي"
                placeholderTextColor="#8DA9B6"
                // secureTextEntry={true}
                onChangeText={text => setMedFile(text)}
                value={medFile}
                textAlign="right"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="رقم الجوال المسجل بالمدينة"
                placeholderTextColor="#8DA9B6"
                // secureTextEntry={true}
                onChangeText={text => setPhoneNum(text)}
                value={phoneNum}
                textAlign="right"
                keyboardType="numeric"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>تسجيل دخول</Text>
          </TouchableOpacity>
          <View style={styles.titleImg}>
            <Image source={require('../assets/title.png')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 20,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#124963',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: '1%',
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#124963',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#00AE93',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 25,
  },
  logoImgView: {
    width: '80%',
    height: '20%',
    alignItems: 'center',
  },
  allInputs: {
    width: '100%',
    alignItems: 'center',
  },
  titleImg: {
    alignItems: 'center',
    // modify the size of the image
    transform: [{scale: 0.8}],
  },
  scroll: {
    backgroundColor: '#D7EFEE',
    width: '100%',
    height: '100%',
  },
  appBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#1D5B8C',
    direction: 'ltr',
    flexDirection: 'row-reverse',
  },
  header: {
    direction: 'ltr',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 10,
  },
  backArrow: {
    marginTop: 10,
    marginRight: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#fff',
  },
});
