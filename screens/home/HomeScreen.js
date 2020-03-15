import * as WebBrowser from 'expo-web-browser';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import container from './container';
import {MonoText} from '../../components/StyledText';
import {withAuth} from '../../hoc';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import {FlatGrid} from 'react-native-super-grid';
import {SearchBar} from 'react-native-elements';
import Config from 'react-native-config';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';

const renderItem = ({item, index}) => (
  <Content>
    <Card style={{flex: 0}}>
      <CardItem>
        <Body>
          <Image
            source={{
              uri: Config.IMAGE_URI + item.poster,
            }}
            style={{height: 200, alignSelf: 'stretch', flex: 1}}
          />
          <Text style={styles.tabBarInfoText}>{item.title}</Text>
        </Body>
      </CardItem>
    </Card>
  </Content>
);
const footer = (
  <View>
    <ActivityIndicator size="large" />
  </View>
);

let searchSubject$ = new BehaviorSubject('');
let searchResult$ = searchSubject$.pipe(
  debounceTime(700),
  distinctUntilChanged(),
);

const HomeScreen = props => {
  const [page, setPage] = useState(props.page);

  const [search, setSearch] = useState('');
  useEffect(() => {
    let subscriptions = searchResult$.subscribe(val => {
      setPage(1);
      if (val) props.home.searchMovies({text: val, page: 1});
      else props.home.getPopularMovies({page: 1});
    });
    return () => subscriptions.unsubscribe();
  }, [search]);

  useEffect(() => {
    if (!refreshing && !search) props.home.getPopularMovies({page});
    if (search) props.home.searchMovies({text: search, page});
  }, [page]);

  const [refreshing, setRefreshing] = useState(props.refreshing);
  useEffect(() => {
    if (refreshing) props.home.getRefreshMovies();
    setRefreshing(false);
    setSearch('');
  }, [refreshing]);

  const handleLogout = () => {
    props.home.logout();
  };

  const handleSearch = text => {
    setSearch(text);
    searchResult$.next(text);
  };

  // dont get new set  movies if there are ongoing request to get the movies
  const handleLoadMore = () => {
    if (page == props.page && !props.loading) setPage(page + 1);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <SearchBar
          placeholder="Type Title Here..."
          onChangeText={handleSearch}
          value={search}
          lightTheme
        />
        <FlatGrid
          itemDimension={130}
          items={props.movies}
          style={styles.gridView}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={footer}
          onEndReachedThreshold={0.4}
          onEndReached={handleLoadMore}
          refreshing={props.refreshing}
          onRefresh={handleRefresh}
        />
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});

export default container(withAuth(HomeScreen));
