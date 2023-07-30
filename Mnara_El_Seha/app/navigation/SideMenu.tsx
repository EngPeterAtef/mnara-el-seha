import Colors from '../assets/values/Colors';
import CustomDrawer from '../components/CustomDrawer';
import {LoginScreen} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

export default function SideMenu(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props: any) => <CustomDrawer {...props} />}
        screenOptions={{
          // headerShown: false,
          drawerActiveBackgroundColor: Colors.primaryBackground1,
          drawerActiveTintColor: Colors.white,
          drawerInactiveTintColor: Colors.black,
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name={'Login'}
          component={LoginScreen}
          options={{
            title: 'Login',
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
