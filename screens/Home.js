import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Home=()=> {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

Home.navigationOptions = {
  header: null,
};

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
