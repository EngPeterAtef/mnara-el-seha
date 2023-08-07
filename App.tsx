import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SideMenu from './app/navigation/SideMenu';
import {I18nManager} from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {
  requestUserPermission,
  NotificationListener,
  setMessageHandler,
  getFCMToken,
} from './app/services/FirebaseNotifications';

function App(): JSX.Element {
  init();

  useEffect(() => {
    requestUserPermission();
    getFCMToken();
    NotificationListener();
  }, []);

  //TODO: add use effect to read from async storage if the user is logged in or not to know which screen to render
  return <SideMenu />;
  // return <SignupScreen />;
}

export default App;

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
