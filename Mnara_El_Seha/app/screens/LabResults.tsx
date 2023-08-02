import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../assets/values/Colors';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
    </View>
  );
}

const DateInput = ({dateFrom, setDateFrom, dateTo, setDateTo}: any) => {
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.dateInput}
            value={
              dateFrom == null
                ? ''
                : dateFrom.toLocaleDateString('ar-EG-u-nu-latn', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })
            }
            placeholder="التاريخ من"
            onFocus={() => setOpenFrom(true)}
          />
          <FontAwesome5
            name="calendar-alt"
            size={20}
            color={Colors.grey}
            style={styles.icon}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.dateInput}
            value={
              dateTo == null
                ? ''
                : dateTo.toLocaleDateString('ar-EG-u-nu-latn', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })
            }
            placeholder="التاريخ الي"
            onFocus={() => setOpenTo(true)}
          />
          <FontAwesome5
            name="calendar-alt"
            size={20}
            color={Colors.grey}
            style={styles.icon}
          />
        </View>
      </View>

      <DatePicker
        modal
        open={openFrom}
        date={new Date()}
        onConfirm={date => {
          setOpenFrom(false);
          setDateFrom(date);
          console.log(dateFrom);
        }}
        onCancel={() => {
          setOpenFrom(false);
        }}
        locale="ar"
        style={styles.datePicker}
        title={'اختر التاريخ من'}
      />
      <DatePicker
        modal
        open={openTo}
        date={new Date()}
        onConfirm={date => {
          setOpenTo(false);
          setDateTo(date);
          console.log(dateTo);
        }}
        onCancel={() => {
          setOpenTo(false);
        }}
        locale="ar"
        style={styles.datePicker}
        title={'اختر التاريخ الي'}
      />
    </>
  );
};

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
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  datePicker: {
    backgroundColor: Colors.black,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.secondary1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  dateInput: {
    flex: 1,
    fontSize: 10,
    color: Colors.grey,
  },
  icon: {
    marginRight: 10,
  },
});
