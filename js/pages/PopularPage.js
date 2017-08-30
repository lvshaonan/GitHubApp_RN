/**
 * Created by Administrator on 2017/8/28.
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import NavigationBar from '../common/NavigationBar';

import DataRepository from '../export/DataRepository';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import RepositoryCell from './RepositoryCell';

const URL = 'https://api.github.com/search/repositories?q=';

const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={'热门'}
          style={{backgroundColor: '#2095F4'}}
          statusBar={{backgroundColor: '#2095F4'}}
        />
        <ScrollableTabView
          tabBarBackgroundColor="#2095F4"
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#fff"
          tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}
          renderTabBar={() => <ScrollableTabBar/>}
        >
          <PopularTab tabLabel="iOS"></PopularTab>
          <PopularTab tabLabel="Java"></PopularTab>
          <PopularTab tabLabel="Android"></PopularTab>
          <PopularTab tabLabel="JavaScript"></PopularTab>
        </ScrollableTabView>
      </View>
    )
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props);
    this.dataRepository = new DataRepository();
    this.state = {
      result: '',
      refreshing: false,
    }
  }

  getUrl(key) {
    return URL + key + QUERY_STR;
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    this.setState({
      refreshing: true
    })
    let url = this.getUrl(this.props.tabLabel);
    this.dataRepository.fetchNetRepository(url)
      .then(result => {
        this.setState({
          result: result,
          refreshing: false
        })
      })
      .catch(error => {
        this.setState({
          result: JSON.stringify(error)
        })
      })
  }

  _renderItem({item}) {
    return (
      <RepositoryCell item={item}/>
    )
  }

  _keyExtractor(item) {
    return item.id;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.state.result.items}
          renderItem={this._renderItem}
          refreshing={this.state.refreshing}
          onRefresh={()=>this.loadData()}
        >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
