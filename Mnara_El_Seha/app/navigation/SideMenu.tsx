import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../assets/values/Colors';
import CustomDrawer from '../components/CustomDrawer';
import {LoginScreen, MainScreen, OtpScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Home</Text>
    </SafeAreaView>
  );
}
const CustomHeaderIcon = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 15}}>
      <Image
        source={require('../assets/images/menu_icon.png')}
        style={{width: 30, height: 30, transform: [{scaleX: -1}]}}
        tintColor={Colors.primary2}
      />
    </TouchableOpacity>
  );
};

export default function SideMenu(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props: any) => <CustomDrawer {...props} />}
        initialRouteName="Otp"
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: Colors.primary1,
            height: 80,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerShown: true,
          drawerActiveBackgroundColor: Colors.primary2,
          drawerActiveTintColor: Colors.primary1,
          drawerInactiveTintColor: Colors.primary1,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            fontWeight: 'bold',
          },
          headerTitleStyle: {
            color: Colors.primary1,
          },
          headerLeft: () => (
            <CustomHeaderIcon onPress={navigation.openDrawer} />
          ),
          sceneContainerStyle: {
            backgroundColor: Colors.primary2,
          },
        })}>
        <Drawer.Screen
          name={'MainScreen'}
          component={MainScreen}
          options={{
            title: 'الخدمات العامة',
            drawerIcon: () => (
              <FontAwesome5
                name="home"
                size={22}
                color={Colors.primary1}
                style={{paddingRight: 5}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={'Home'}
          component={Home}
          options={{
            title: list[0],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon1.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp1'}
          component={Home}
          options={{
            title: list[1],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon2.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp3'}
          component={Home}
          options={{
            title: list[2],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon3.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp4'}
          component={Home}
          options={{
            title: list[3],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon4.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp5'}
          component={Home}
          options={{
            title: list[4],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon5.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp6'}
          component={Home}
          options={{
            title: list[5],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon6.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp7'}
          component={Home}
          options={{
            title: list[6],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon7.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp8'}
          component={Home}
          options={{
            title: list[7],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon8.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'Login'}
          component={LoginScreen}
          options={{
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name={'Otp'}
          component={OtpScreen}
          options={{
            drawerLabel: () => null,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const list = [
  'الاقسام الطبية',
  'التبرع بالدم والصفائح الدموية',
  'احالتي',
  'الكشف المبكر لأورام الثدي',
  'تجربتي',
  'التعليمات والارشادات',
  'التثقيف الطبي',
  'طلبات الزوار',
];
