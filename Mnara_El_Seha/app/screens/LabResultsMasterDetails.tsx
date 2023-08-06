import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Colors from '../assets/values/Colors';

export default function LabResultsMasterDetailsScreen({
  navigation,
  route,
}: any) {
  const item = route.params.item;
  console.log('item', item);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>رقم الطلب: {item.id}</Text>
        <Text style={styles.text}>
          تاريخ الطلب:{' '}
          {item.date.toLocaleDateString('ar-EG-u-nu-latn', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Text>
        <Text style={styles.text}>اسم النتيجة: {item.text}</Text>
        <Text style={styles.text}>تفاصيل النتيجة: {item.description}</Text>
        <Text style={styles.text}>
          حالة النتيجة: {item.official ? 'معتمدة' : 'غير معتمدة'}
        </Text>
        <Text style={styles.text}>معلومة1: {item.field1}</Text>
        <Text style={styles.text}>معلومة2: {item.field2}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary1,
    marginVertical: 20,
  },
});

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
