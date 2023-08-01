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
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/values/Colors';

export default function OtpScreen({navigation}: any) {
  //to avoid using the side menu inside the login screen
  navigation.setOptions({headerShown: false, swipeEnabled: false});
  const [counter, setCounter] = useState(60);

  // one minute timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter - 1);
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
        <TouchableOpacity style={styles.appBar}>
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
            <Text style={styles.subText2}>ادخل رمز التحقق</Text>
            <OTPInputView
              style={{width: '80%', height: 200}}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <Text style={styles.subText}>{formatTime(counter)}</Text>

            <Text style={styles.subText}>لم يتم استلام الكود؟</Text>

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
    marginBottom: 20,
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
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  subText2: {
    color: Colors.secondary1,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    color: Colors.primary1,
    fontSize: 20,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
