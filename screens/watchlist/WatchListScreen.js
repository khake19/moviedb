import React, { useEffect } from 'react';
import { ListItem } from 'react-native-elements';
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
      <View>
      {
        props.watchlists.map((watchlist) => (
          <ListItem
            key={watchlist.movieId}
            leftAvatar={{ source: { uri: watchlist.poster } }}
            title={watchlist.title}
            subtitle={watchlist.title}
            bottomDivider
          />
        ))
      }
    </View>
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
