import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../assets/values/Colors';
import {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DateInput} from '../components';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
export default function LabResultsScreen({navigation}: any) {
  const [dateFrom, setDateFrom]: [Date | null, any] = useState(null);
  const [dateTo, setDateTo]: [Date | null, any] = useState(null);
  const [filteredData, setFilteredData]: [any, any] = useState([]);
  const filterData = () => {
    if (dateFrom && dateTo) {
      const prevDay = new Date(dateFrom);
      prevDay.setDate(prevDay.getDate() - 1);
      const filteredData = data.filter((item: any) => {
        return item.date >= prevDay && item.date <= dateTo;
      });
      setFilteredData(filteredData);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>النتائج المخبرية</Text>
        <DateInput
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
          setDateFrom={setDateFrom}
        />
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.searchBtn} onPress={filterData}>
            <Text style={styles.searchText}>بحث</Text>
          </TouchableOpacity>
          <View style={styles.listContainer}>
            <FlatList
              data={filteredData}
              keyExtractor={(item: any) => item.id}
              renderItem={CustomListCardItem}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const CustomListCardItem = ({item}: any) => {
  const date = item.date;
  const text = item.text;
  const formattedDate = date
    .toLocaleDateString('ar-EG-u-nu-latn', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .replace('،', '');
  const dateElements = formattedDate.split(' ');
  return (
    <View style={styles.listItem}>
      <View
        style={{
          width: '20%',
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 10,
            color: Colors.primary1,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 2,
          }}>
          {dateElements[0]}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: Colors.primary1,
            borderBottomColor: Colors.primary1,
            borderBottomWidth: 2,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 2,
          }}>
          {dateElements[1]}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: Colors.primary1,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 2,
          }}>
          {dateElements[2]}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: Colors.primary1,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 2,
          }}>
          {dateElements[3]}
        </Text>
      </View>
      <View
        style={{
          borderLeftWidth: 5,
          borderRadius: 5,
          borderColor: Colors.grey,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
          height: '100%',
          paddingHorizontal: 20,
        }}>
        <Text style={{color: Colors.primary1, fontWeight: 'bold'}}>{text}</Text>
        <FontAwesome5 name={'arrow-down'} size={20} color={Colors.primary1} />
      </View>
    </View>
  );
};

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
  listContainer: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 100,
  },
});

const data = [
  {
    id: 1,
    date: new Date('2021-05-01'),
    text: 'نتيجة 1',
  },
  {
    id: 2,
    date: new Date('2021-05-01'),
    text: 'نتيجة 2',
  },
  {
    id: 3,
    date: new Date('2021-05-02'),
    text: 'نتيجة 3',
  },
  {
    id: 4,
    date: new Date('2021-05-03'),
    text: 'نتيجة 4',
  },
  // Add more elements here with different dates and values
  {
    id: 5,
    date: new Date('2021-05-04'),
    text: 'نتيجة 5',
  },
  {
    id: 6,
    date: new Date('2021-05-05'),
    text: 'نتيجة 6',
  },
  {
    id: 7,
    date: new Date('2021-05-06'),
    text: 'نتيجة 7',
  },
  {
    id: 8,
    date: new Date('2021-05-07'),
    text: 'نتيجة 8',
  },
  {
    id: 9,
    date: new Date('2021-05-08'),
    text: 'نتيجة 9',
  },
  {
    id: 10,
    date: new Date('2021-05-09'),
    text: 'نتيجة 10',
  },
  {
    id: 11,
    date: new Date('2021-05-10'),
    text: 'نتيجة 11',
  },
  {
    id: 12,
    date: new Date('2021-05-11'),
    text: 'نتيجة 12',
  },
  {
    id: 13,
    date: new Date('2021-05-12'),
    text: 'نتيجة 13',
  },
  {
    id: 14,
    date: new Date('2021-05-13'),
    text: 'نتيجة 14',
  },
  {
    id: 15,
    date: new Date('2021-05-14'),
    text: 'نتيجة 15',
  },
  {
    id: 16,
    date: new Date('2021-05-15'),
    text: 'نتيجة 16',
  },
  {
    id: 17,
    date: new Date('2021-05-16'),
    text: 'نتيجة 17',
  },
  {
    id: 18,
    date: new Date('2021-05-17'),
    text: 'نتيجة 18',
  },
  {
    id: 19,
    date: new Date('2021-05-18'),
    text: 'نتيجة 19',
  },
  {
    id: 20,
    date: new Date('2021-05-19'),
    text: 'نتيجة 20',
  },
];
