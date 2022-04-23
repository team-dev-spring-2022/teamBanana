import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './CreateTasksPageStyle';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/ru';

const CreateTasksPage = ({navigation}) => {
  const [text, onChangeText] = useState(null);
  const [date, setDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = selected => {
    setDate(selected);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Что должно быть сделано?</Text>
        <TextInput
          style={[styles.inputTask, styles.text]}
          onChangeText={onChangeText}
          value={text}
          placeholder="Введите текст"
        />

        <Text style={styles.text}>Срок</Text>
        <View style={styles.dateInputContainer}>
          <Text style={[styles.dateText, styles.text]}>
            {moment(date.toString()).format('dddd, D MMMM YYYY г.')}
          </Text>
          <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
            <Text>Дата</Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('ToDoList')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeTaskPage;
