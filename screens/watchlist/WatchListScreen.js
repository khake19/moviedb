import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default (props) => <View style={styles.container}>
<ScrollView
  style={styles.container}
  contentContainerStyle={styles.contentContainer}>

  <Text>Watchlist</Text>
</ScrollView>

</View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
