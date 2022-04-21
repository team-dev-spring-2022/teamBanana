import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {FIND_MANY_POST} from '../apollo/gqls/queries';
import {useQuery} from '@apollo/client';

const ToDoListPage = ({navigation}) => {
  const {data} = useQuery(FIND_MANY_POST, {
    variables: {
      variables: {createdBy: 'z1'},
    },
    pollInterval: 500,
  });

  return (
    <View>
      <ScrollView>
        {data != null ? (
          data.findManyTask.map(item => {
            return (
              <View key={item._id}>
                <Text>{item.text}</Text>
                <Text>{item.checked}</Text>
                <Text>{item.deadline}</Text>
              </View>
            );
          })
        ) : (
          <Text />
        )}
        <TouchableOpacity
          style={{backgroundColor: '#FFD511'}}
          onPress={() => navigation.navigate('CreateTasksPage')}>
          <Text>Добавить</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ToDoListPage;
