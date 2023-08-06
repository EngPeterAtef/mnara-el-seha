import {LabResultsScreen} from '../screens';
import LabResultsMasterDetails from '../screens/LabResultsMasterDetails';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../assets/values/Colors';

const Stack = createStackNavigator();

const LabResultsStack = () => (
  <Stack.Navigator
    initialRouteName="LabResults"
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: Colors.primary2},
    }}>
    <Stack.Screen
      name="LabResults"
      component={LabResultsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="LabResultsMasterDetails"
      component={LabResultsMasterDetails} // Replace this with the actual component for details screen
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default LabResultsStack;
