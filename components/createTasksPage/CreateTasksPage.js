import React, {useState, useEffect} from 'react';
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
import {useMutation} from '@apollo/client';
import {ADD_TASK} from '../apollo/gqls/mutations';

const CreateTasksPage = ({navigation, route}) => {
  const [text, onChangeText] = useState('');
  const [date, setDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [email, setEmail] = useState('');

  useEffect(() => {
    const setData = () => {
      setEmail(route.params.email);
    };
    setData();
  }, [route.params.email]);

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

  const [created] = useMutation(ADD_TASK, {
    onCompleted: () => {
      console.log('add task');
      navigation.navigate('ToDoList', {
        email: email,
      });
    },
    onError: ({message}) => {
      console.log(message);
    },
  });

  const createdTask = () => {
    if (text !== '') {
      created({
        variables: {
          task: {
            text: text,
            createdBy: email,
            checked: false,
            deadline: date,
          },
        },
      });
    }
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
            {moment(date.toISOString()).format('dddd, D MMMM YYYY г.')}
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
        <TouchableOpacity style={styles.addButton} onPress={createdTask}>
          <Text style={styles.addButtonText}>Добавить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTasksPage;
