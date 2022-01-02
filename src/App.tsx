import React from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Table from './components/Table';
import useFetch from './hooks/useFetch';

const App = () => {
  const {data, loading, error, fetchData} = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  const textArrays = {
    ['user names']: Array.isArray(data) ? data.map(item => item.username) : [],
    ['loading state']: [loading.toString()],
    ['error state']: [error?.toString()],
  };

  return (
    <SafeAreaView style={containerStyle}>
      <Button
        title="Fetch Data"
        color="lightgreen"
        onPress={() => fetchData()}
      />
      {loading ? (
        <ActivityIndicator style={indicatorStyle} color="lightgreen" />
      ) : (
        <Table textArrays={textArrays} />
      )}
    </SafeAreaView>
  );
};

export default App;

const {containerStyle, indicatorStyle} = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'black',
  },
  indicatorStyle: {
    flex: 1,
  },
});
