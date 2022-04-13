import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {FIND_MANY_POST} from '../apollo/gqls/queries';
import {useQuery} from '@apollo/client';

const ToDoListPage = () => {
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
      </ScrollView>
    </View>
  );
};

export default ToDoListPage;
