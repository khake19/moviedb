import * as WebBrowser from 'expo-web-browser';
import React, {useEffect, useState} from 'react';
import {
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

const HomeScreen = props => {
  const [movies, setMovies] = useState(props.movies);

  useEffect(() => {
    props.home.getMovies();
    setMovies(props.movies);
  }, movies);

  const [search, setSearch] = useState('');
  const handleLogout = () => {
    props.home.logout();
  };

  const handleSearch = text => {
    props.home.searchMovies(text);
    setSearch(text);
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
          renderItem={({item, index}) => (
            <Content>
              <Card style={{flex: 0}}>
                <CardItem>
                  <Body>
                    <Image
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/original' + item.poster,
                      }}
                      style={{height: 200, alignSelf: 'stretch', flex: 1}}
                    />
                    <Text style={styles.tabBarInfoText}>{item.title}</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          )}
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
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 5,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default container(withAuth(HomeScreen));
