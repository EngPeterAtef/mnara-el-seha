import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../assets/values/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';

const CustomCard = ({title, icons, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.cardIcon}>{icons}</View>
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function MainScreen({navigation}: any) {
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
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('Hospitals')}
          />
          <CustomCard
            title={list[1]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large2.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('Donation')}
          />
          <CustomCard
            title={list[2]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large3.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('Referral')}
          />
          <CustomCard
            title={list[3]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large4.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('EarlyDetection')}
          />
          <CustomCard
            title={list[4]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large5.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('Experience')}
          />
          <CustomCard
            title={list[5]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large6.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('Instructions')}
          />
          <CustomCard
            title={list[6]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large7.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('MedicalEducation')}
          />
          <CustomCard
            title={list[7]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large8.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('VisitorRequests')}
          />
          <CustomCard
            title={list[8]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large9.png')}
                style={{width: 40, height: 40}}
              />
            }
            onPress={() => navigation.navigate('Complaints')}
          />
          <CustomCard
            title={list[9]}
            icons={
              <Image
                source={require('../assets/images/menu_icon_large10.png')}
                style={{width: 40, height: 40}}
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
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>انشئ حساب جديد</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    width: "30%",
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
