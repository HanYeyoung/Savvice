import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Welcome to Savvice</Text>
        <Button title="Submit" onPress={() => console.log('Hello, Savvice!')} />
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginHorizontal: 10,
    marginVertical:10,
  },
});

export default App;