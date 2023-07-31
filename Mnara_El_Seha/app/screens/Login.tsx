import React, { useState } from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
// import firebase from '../services/firebase';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function LoginScreen({ navigation }: any) {
  navigation.setOptions({ headerShown: false, swipeEnabled: false });

  const [id, setID] = useState('');
  const [medFile, setMedFile] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [isModalVisibleSucess, setModalSucessVisible] = useState(false);
  const [isModalVisibleFailure, setModalFailureVisible] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');


  const validatePhoneNumber = (text: string) => {
    setPhoneNum(text);
    // console.log(firebase);
    const phoneNumberRegex = /^(015|012|010|011)\d{8}$/;
    if (text.length === 0) {
      setPhoneNumberError('Phone number is required');
    }
    else if (!phoneNumberRegex.test(text)) {
      setPhoneNumberError('Please enter a valid phone number');
    } else {
      setPhoneNumberError('');
    }
  };

  const toggleModalSucess = () => {
    setModalSucessVisible(!isModalVisibleSucess);
  };

  const toggleModalFailure = () => {
    setModalFailureVisible(!isModalVisibleFailure);
  };

  const handleLogin = () => {
    // Handle login logic here
    // console.log('id: ', id);
    // console.log('medFile: ', medFile);
    // console.log('phoneNum: ', phoneNum);
    // open message to the user to enter the data if there is any missing field
    if (id === '' || medFile === '') {
      toggleModalFailure();
    }
    else {
      toggleModalSucess();
    }
  };
  const isDarkMode = useColorScheme() === 'dark';

  function appBar() {
    return (
      <View style={styles.appBarView}>
        <TouchableOpacity style={styles.appBar}>
          <Ionicons name="arrow-redo-circle-outline" size={20} color="white" style={styles.backArrow} />
          <Text style={styles.header}>الرئيسية</Text>
        </TouchableOpacity>
      </View >
    );
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content"
        backgroundColor="#1D5B8C"
      />
      {appBar()}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>
        <View style={{
          backgroundColor: '#1D5B8C',
          height: '100%',
          width: '100%',
        }}>
          <View style={styles.container}>
            <View style={styles.logoImgView}>
              <Image source={require('../assets/images/logoImg.png')} />
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
                  maxLength={14}
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
                  maxLength={7}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder="رقم الجوال المسجل بالمدينة"
                  placeholderTextColor="#8DA9B6"
                  // secureTextEntry={true}
                  onChangeText={text => validatePhoneNumber(text)}
                  value={phoneNum}
                  textAlign="right"
                  keyboardType="phone-pad"
                  maxLength={11}
                />
              </View>
              {phoneNumberError !== '' ? (
                <Text style={styles.errorText}>{phoneNumberError}</Text>
              ) : null}
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>تسجيل دخول</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisibleSucess} style={styles.mainModel}>
              <View style={styles.successContent}>
                <FontAwesome5 name="laugh" size={100} color="white" />
                <Text style={styles.popupTitle}>YES!!</Text>
                <Text style={styles.popupSubTitle}>Everything is working</Text>
                <View style={styles.sucessBtnView}>
                  <TouchableOpacity onPress={
                    // TODO: navigate to the next screen here
                    () => {
                      toggleModalSucess();
                      setID('');
                      setMedFile('');
                      setPhoneNum('');
                      navigation.navigate('Home');
                    }
                  }>
                    <Text style={styles.successBtnText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Modal isVisible={isModalVisibleFailure} style={styles.mainModel}>
              <View style={styles.failureContent}>
                <Ionicons name="sad-outline" size={100} color="white" />
                <Text style={styles.popupTitle}>UH-SNAP!</Text>
                <Text style={styles.popupSubTitle}>Something just broke</Text>
                <View style={styles.failureBtnView}>
                  <TouchableOpacity onPress={toggleModalFailure}>
                    <Text style={styles.failureBtnText}>Go Back</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View style={styles.titleImg}>
              <Image source={require('../assets/images/title.png')} />
            </View>
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
    backgroundColor: '#D7EFEE',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 50,
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
    transform: [{ scale: 0.8 }],
  },
  scroll: {
    backgroundColor: '#D7EFEE',
    width: '100%',
    height: '100%',
  },
  appBarView: {
    backgroundColor: '#1D5B8C',
  },
  appBar: {
    // width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    direction: 'rtl',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    paddingRight: 10,
  },
  backArrow: {
    // fontWeight: 'bold',
    // fontFamily: 'Arial',
    paddingRight: 10,
  },
  mainModel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  popupSubTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  failureContent: {
    backgroundColor: '#D50000',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    width: '95%',
  },
  failureBtnView: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 5,
    width: '95%',
    marginVertical: 10,
  },
  failureBtnText: {
    color: '#D50000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successContent: {
    backgroundColor: '#00C853',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    width: '95%',
  },
  sucessBtnView: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 5,
    width: '95%',
    marginVertical: 10,
  },
  successBtnText: {
    color: '#00C853',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ffe6e6',
    borderRadius: 5,
    marginBottom: 10,
  },
});
