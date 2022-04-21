import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {FIND_MANY_POST} from '../apollo/gqls/queries';
import {useQuery} from '@apollo/client';
import styles from './ToDoListPageStyle';
import moment from 'moment';
import 'moment/locale/ru';

const ToDoListPage = ({navigation}) => {
  moment.locale('ru');
  const {data} = useQuery(FIND_MANY_POST, {
    variables: {
      variables: {createdBy: 'z1'},
    },
    pollInterval: 500,
  });

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        {data != null ? (
          data.findManyTask.map(item => {
            return (
              <View style={styles.сontainer} key={item._id}>
                <TouchableOpacity
                  style={styles.checkedContainer}
                  onPress={() => navigation.navigate('CreateTasksPage')}>
                  <View style={styles.checkedButton} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.taskContainer}
                  onPress={() => navigation.navigate('ChangeTaskPage')}>
                  <Text style={styles.taskText}>{item.text}</Text>
                  <Text style={styles.deadlineText}>
                    {moment(item.deadline).format('DD-MM-YYYY, dddd')}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text />
        )}
      </ScrollView>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CreateTasksPage')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoListPage;
