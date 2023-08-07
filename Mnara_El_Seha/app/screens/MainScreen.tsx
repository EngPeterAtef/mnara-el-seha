import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../assets/values/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import user from '../utils/User';
// import NetInfo from '@react-native-community/netinfo';
// import Modal from 'react-native-modal';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomCard = ({ title, icons, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.cardIcon}>{icons}</View>
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function MainScreen({ navigation }: any) {
  // const [connected, setConnected] = useState(false);
  // const [displayNetworkMessage, setDisplayNetworkMessage] = useState(false);
  // const [prevConnected, setPrevConnected] = useState(false);
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener((state) => {
  //     // setPrevConnected(connected);
  //     setConnected(state.isConnected ?? false);
  //     console.log(`Connection type: ${state.type}`);
  //     console.log(`Is connected? ${state.isConnected}`);
  //     // console.log(`Is internet reachable? ${state.isInternetReachable}`);
  //     // console.log(`prevConnected: ${prevConnected}`);
  //     console.log(`connected: ${connected}`);
  //     console.log('-------------------');
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  // use setTimout to show the message for 3 seconds then hide it
  // useEffect(() => {
  //   setDisplayNetworkMessage(true);
  //   setTimeout(() => {
  //     setDisplayNetworkMessage(false);
  //   }, 5000);
  // }, [connected]);
  console.log(`user: ${user}`);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>الخدمات العامة</Text>
        <View style={styles.cardContainer}>
          <CustomCard
            title={list[0]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large1.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('Hospitals')}
          />
          <CustomCard
            title={list[1]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large2.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('Donation')}
          />
          <CustomCard
            title={list[2]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large3.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('Referral')}
          />
          <CustomCard
            title={list[3]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large4.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('EarlyDetection')}
          />
          <CustomCard
            title={list[4]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large5.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('Experience')}
          />
          <CustomCard
            title={list[5]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large6.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('Instructions')}
          />
          <CustomCard
            title={list[6]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large7.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('MedicalEducation')}
          />
          <CustomCard
            title={list[7]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large8.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('VisitorRequests')}
          />
          <CustomCard
            title={list[8]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large9.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('Complaints')}
          />
          <CustomCard
            title={list[9]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large10.png')}
                style={{ width: 40, height: 40 }}
              />
            }
            onPress={() => navigation.navigate('ContactUs')}
          />
        </View>
        <View style={styles.user}>
          <Text style={styles.infoText}>
            للإستفادة من خدمات المدينة, رجاء تسجيل الدخول{' '}
          </Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>تسجيل دخول</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('signup')}>
            <Text style={styles.loginText}>انشاء حساب جديد</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* {
        // use setTimout to show the message for 3 seconds then hide it
        <View style={{
          backgroundColor: connected ? 'green' : 'red',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          display: displayNetworkMessage ? 'flex' : 'none',
        }}>
          <Text style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
          }}>{connected ? 'تم الاتصال بالانترنت' : 'فشل في الاتصال بالانترنت'}</Text>
        </View>
      }
      <Modal isVisible={!connected} style={styles.mainModel}>
        <View style={styles.failureContent}>
          <MaterialIcons name="signal-wifi-connected-no-internet-4" size={100} color="white" />
          <Text style={styles.popupTitle}>فشل في الاتصال بالانترنت!!</Text>
          <Text style={styles.popupSubTitle}>
            من فضلك اعد الاتصال بالانترنت وحاول مرة اخرى
          </Text>
        </View>
      </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary2,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: Colors.primary1,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  card: {
    backgroundColor: Colors.white,
    margin: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.grey,
    width: '30%',
    height: 110,
  },
  cardIcon: {
    // padding: 10,
    // borderRadius: 10,
    // margin: 10,
  },
  cardTitle: {
    color: Colors.grey,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  user: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Colors.secondary1,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  },
  infoText: {
    color: Colors.grey,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
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
const list = [
  'الاقسام الطبية',
  'التبرع بالدم والصفائح الدموية',
  'احالتي',
  'الكشف المبكر لأورام الثدي',
  'تجربتي',
  'التعليمات والارشادات',
  'التثقيف الطبي',
  'طلبات الزوار',
  'الشكاوى والاقتراحات',
  'اتصل بنا',
];
