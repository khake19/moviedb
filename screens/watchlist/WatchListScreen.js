import React, { useEffect, useState } from 'react';
import { ListItem } from 'react-native-elements';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { withAuth } from '../../hoc';
import container from './container';

const WatchListScreen = (props) => {

  const [watchlists, setWatchLists] = useState(props.watchlists);

  useEffect(() => {
    const { watchlists, watchlist, session: { sessionId, accountId } } = props;
    watchlist.getWatchList({ sessionId, accountId });
    setWatchLists(props.watchlists);
  }, watchlists);

  return (<View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View>
      {
        props.watchlists.map((watchlist) => (
          <ListItem
            key={watchlist.movieId}
            leftAvatar={{ source: { uri: 'https://image.tmdb.org/t/p/original' + watchlist.poster } } }
            title={watchlist.title}
            subtitle={watchlist.title}
            bottomDivider
          />
        ))
      }
    </View>
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

export default container(withAuth(WatchListScreen))
