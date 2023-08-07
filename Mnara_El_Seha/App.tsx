import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import SideMenu from './app/navigation/SideMenu';
import { I18nManager, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import i18n, { t } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  requestUserPermission,
  NotificationListener,
  // setMessageHandler,
  getFCMToken,
} from './app/services/firebaseNotifications';

function App(): JSX.Element {
  init();

  useEffect(() => {
    requestUserPermission();
    getFCMToken();
    NotificationListener();
  }, []);

  //TODO: add use effect to read from async storage if the user is logged in or not to know which screen to render
  const [connected, setConnected] = useState(false);
  const [displayNetworkMessage, setDisplayNetworkMessage] = useState(false);
  // const [prevConnected, setPrevConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // setPrevConnected(connected);
      setConnected(state.isConnected ?? false);
      console.log(`Connection type: ${state.type}`);
      console.log(`Is connected? ${state.isConnected}`);
      // console.log(`Is internet reachable? ${state.isInternetReachable}`);
      // console.log(`prevConnected: ${prevConnected}`);
      console.log(`connected: ${connected}`);
      console.log('-------------------');
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // use setTimout to show the message for 3 seconds then hide it
  // useEffect(() => {
  //   setDisplayNetworkMessage(true);
  //   setTimeout(() => {
  //     setDisplayNetworkMessage(false);
  //   }, 5000);
  // }, [connected]);


  return <SafeAreaView style={{ flex: 1 }}>
    <SideMenu />
    <Modal isVisible={!connected} style={styles.mainModel}>
      <View style={styles.failureContent}>
        <MaterialIcons name="signal-wifi-connected-no-internet-4" size={100} color="white" />
        <Text style={styles.popupTitle}>فشل في الاتصال بالانترنت!!</Text>
        <Text style={styles.popupSubTitle}>
          من فضلك اعد الاتصال بالانترنت وحاول مرة اخرى
        </Text>
      </View>
    </Modal>
  </SafeAreaView>;
  // return <SignupScreen />;
}

export default App;

const styles = StyleSheet.create({
  mainModel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  failureContent: {
    backgroundColor: '#D50000',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    width: '95%',
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
});

function init() {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      compatibilityJSON: 'v3',
      lng: I18nManager.isRTL ? 'ar' : 'en',

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });

  i18n.changeLanguage('ar').then(() => {
    I18nManager.forceRTL(i18n.language === 'ar');
  });
}
