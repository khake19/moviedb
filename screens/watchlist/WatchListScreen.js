import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default (props) => {

  useEffect(() => {
    const { watchlist, session: { sessionId, accountId } } = props;
    watchlist.getWatchList({ sessionId, accountId });
  }, []);

  return (<View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>

    <Text>Watchlist</Text>
  </ScrollView>
</View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
