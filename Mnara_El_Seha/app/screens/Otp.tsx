import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Button,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/values/Colors';
import auth from '@react-native-firebase/auth';
import user from '../utils/User';

export default function OtpScreen({navigation}: any) {
  //to avoid using the side menu inside the login screen
  navigation.setOptions({headerShown: false, swipeEnabled: false});
  const [counter, setCounter] = useState(60);

  // If null, no SMS has been sent
  // const [confirm, setConfirm] = useState(null);
  const [confirm, setConfirm]: [any, any] = useState();

  const [code, setCode] = useState('');
  const [mounted, setMounted] = useState(false);
  const [wrongCode, setWrongCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // send the otp when the component is mounted
  useEffect(() => {
    console.log('user', user);
    if (!mounted) {
      signInWithPhoneNumber(user.phoneNum ?? '+201554886298');
      setMounted(true);
    }
  }, []);

  // Handle login
  function onAuthStateChanged(user: any) {
    console.log('Auth State Changed', user);
    if (user) {
      navigation.navigate('MainScreen');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber: any) {
    console.log('Sending code to', phoneNumber);
    setCounter(60);
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    console.log('Confirmation Code Sent');
  }

  async function confirmCode(code: any) {
    console.log('Confirming');
    setIsLoading(true);
    setWrongCode(false);
    try {
      if (confirm != null) {
        await confirm.confirm(code);
      }
    } catch (error) {
      setWrongCode(true);
      console.log('Invalid code.');
    } finally {
      setIsLoading(false);
    }
  }

  // one minute timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        } else {
          clearInterval(interval); // Stop the interval when counter reaches 0
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  function appBar() {
    return (
      <View style={styles.appBarView}>
        <TouchableOpacity
          style={styles.appBar}
          onPress={() => navigation.navigate('MainScreen')}>
          <Ionicons
            name="arrow-redo"
            size={25}
            color="white"
            style={styles.backArrow}
          />
          <Text style={styles.header}>الرئيسية</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#1D5B8C" />
      {appBar()}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>
        <View
          style={{
            backgroundColor: '#1D5B8C',
            flex: 1,
          }}>
          <View style={styles.container}>
            <View style={styles.logoImgView}>
              <Image source={require('../assets/images/logoImg.png')} />
            </View>
            <Text style={styles.subText}>تم إرسال رمز التحقق علي رقمك</Text>
            <TouchableOpacity onPress={() => confirmCode(code)}>
              <Text style={styles.subText2}>ادخل رمز التحقق</Text>
            </TouchableOpacity>
            <OTPInputView
              style={{width: '80%', height: '20%'}}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              keyboardType="number-pad"
              onCodeFilled={(code: any) => {
                console.log(`Code is ${code}, you are good to go!`);
                confirmCode(code);
                setCode(code);
              }}
            />
            {isLoading && (
              <ActivityIndicator size="small" color={Colors.secondary1} />
            )}
            {wrongCode && (
              <Text style={styles.errorText}>رمز التحقق غير صحيح</Text>
            )}
            <Text style={styles.subText}>{formatTime(counter)}</Text>

            <Text style={styles.subText}>لم يتم استلام الرمز؟</Text>
            <TouchableOpacity
              onPress={() => {
                signInWithPhoneNumber(user.phoneNum ?? '+201554886298');
              }}>
              <Text style={styles.subText2}>إعادة إرسال الرمز؟</Text>
            </TouchableOpacity>

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
    justifyContent: 'center',
    backgroundColor: '#D7EFEE',
    borderTopRightRadius: 50,
    paddingTop: 50,
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
    alignItems: 'center',
    marginVertical: 20,
    transform: [{scale: 0.8}],
    marginTop: -30,
  },

  titleImg: {
    alignItems: 'center',
    // modify the size of the image
    transform: [{scale: 0.8}],
    marginBottom: 110,
  },
  scroll: {
    backgroundColor: '#D7EFEE',
  },
  appBarView: {
    backgroundColor: '#1D5B8C',
    paddingVertical: 10,
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
  subText: {
    color: Colors.grey,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
  subText2: {
    color: Colors.secondary1,
    fontSize: 12,
    fontWeight: 'bold',
    padding: 10,
  },
  underlineStyleBase: {
    width: 40,
    height: 60,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    color: Colors.primary1,
    fontSize: 20,
  },
  underlineStyleHighLighted: {
    borderColor: Colors.secondary1,
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
