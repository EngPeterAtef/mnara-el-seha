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
  const [pressed, setPressed] = useState(false);
  const filterData = () => {
    if (dateFrom && dateTo) {
      const prevDay = new Date(dateFrom);
      prevDay.setDate(prevDay.getDate() - 1);
      const filteredData = data.filter((item: any) => {
        return (
          item.date >= prevDay &&
          item.date <= dateTo &&
          item.official === pressed
        );
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
          <View style={styles.border}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderRadius: 10,
              marginTop: 30,
              marginHorizontal: 20,
              borderColor: Colors.primary1,
            }}>
            <TouchableOpacity
              style={[
                {
                  borderRadius: 7,
                  width: '50%',
                },
                !pressed
                  ? {backgroundColor: Colors.primary2}
                  : {backgroundColor: Colors.primary1},
              ]}
              onPress={() => {
                setPressed(true);
                filterData();
              }}>
              <Text
                style={[styles.tabText, !pressed ? {} : {color: Colors.white}]}>
                المعتمدة
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {width: '50%', borderRadius: 7},
                pressed
                  ? {backgroundColor: Colors.primary2}
                  : {backgroundColor: Colors.primary1},
              ]}
              onPress={() => {
                setPressed(false);
                filterData();
              }}>
              <Text
                style={[styles.tabText, pressed ? {} : {color: Colors.white}]}>
                قيد الاعتماد
              </Text>
            </TouchableOpacity>
          </View>
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
  tabText: {
    color: Colors.primary1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
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
  border: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1.5,
    width: '90%',
    marginVertical: 10,
  },
});

const data = [
  {
    id: 1,
    date: new Date('2021-05-01'),
    text: 'نتيجة 1',
    official: true,
  },
  {
    id: 2,
    date: new Date('2021-05-01'),
    text: 'نتيجة 2',
    official: false,
  },
  {
    id: 3,
    date: new Date('2021-05-02'),
    text: 'نتيجة 3',
    official: true,
  },
  {
    id: 4,
    date: new Date('2021-05-03'),
    text: 'نتيجة 4',
    official: false,
  },
  {
    id: 5,
    date: new Date('2021-05-04'),
    text: 'نتيجة 5',
    official: true,
  },
  {
    id: 6,
    date: new Date('2021-05-05'),
    text: 'نتيجة 6',
    official: false,
  },
  {
    id: 7,
    date: new Date('2021-05-06'),
    text: 'نتيجة 7',
    official: true,
  },
  {
    id: 8,
    date: new Date('2021-05-07'),
    text: 'نتيجة 8',
    official: false,
  },
  {
    id: 9,
    date: new Date('2021-05-08'),
    text: 'نتيجة 9',
    official: true,
  },
  {
    id: 10,
    date: new Date('2021-05-09'),
    text: 'نتيجة 10',
    official: false,
  },
  {
    id: 11,
    date: new Date('2021-05-10'),
    text: 'نتيجة 11',
    official: true,
  },
  {
    id: 12,
    date: new Date('2021-05-11'),
    text: 'نتيجة 12',
    official: false,
  },
  {
    id: 13,
    date: new Date('2021-05-12'),
    text: 'نتيجة 13',
    official: true,
  },
  {
    id: 14,
    date: new Date('2021-05-13'),
    text: 'نتيجة 14',
    official: false,
  },
  {
    id: 15,
    date: new Date('2021-05-14'),
    text: 'نتيجة 15',
    official: true,
  },
  {
    id: 16,
    date: new Date('2021-05-15'),
    text: 'نتيجة 16',
    official: false,
  },
  {
    id: 17,
    date: new Date('2021-05-16'),
    text: 'نتيجة 17',
    official: true,
  },
  {
    id: 18,
    date: new Date('2021-05-17'),
    text: 'نتيجة 18',
    official: false,
  },
  {
    id: 19,
    date: new Date('2021-05-18'),
    text: 'نتيجة 19',
    official: true,
  },
  {
    id: 20,
    date: new Date('2021-05-19'),
    text: 'نتيجة 20',
    official: false,
  },
];
