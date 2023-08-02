import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../assets/values/Colors';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DateInput} from '../components';
export default function LabResultsScreen({navigation}: any) {
  const [dateFrom, setDateFrom]: [Date | null, any] = useState(null);
  const [dateTo, setDateTo]: [Date | null, any] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>النتائج المخبرية</Text>
      <DateInput
        dateFrom={dateFrom}
        dateTo={dateTo}
        setDateTo={setDateTo}
        setDateFrom={setDateFrom}
      />
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={styles.searchText}>بحث</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary2,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  text: {
    color: Colors.primary1,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  user: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBtn: {
    backgroundColor: Colors.secondary1,
    borderRadius: 15,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  infoText: {
    color: Colors.grey,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
});
