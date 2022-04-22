import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './CreateTasksPageStyle';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
    <View>
      <Text>Что должно быть сделано?</Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Введите текст"
      />
      <Text>Срок</Text>
      <Text>{date.toString()}</Text>
      <TouchableOpacity onPress={showDatePicker}>
        <Text>Дата</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ToDoList')}>
        <Text style={styles.addButtonText}>Добавить задачу</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTasksPage;
