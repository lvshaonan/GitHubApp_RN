/**
 * Created by Administrator on 2017/8/28.
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Popular'}
            title="热门"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={require("../../res/images/ic_polular.png")}/>}
            renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2095F4'}]} source={require("../../res/images/ic_polular.png")}/>}
            onPress={() => this.setState({selectedTab: 'Popular'})}>
            <PopularPage/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Trending'}
            title="趋势"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={require("../../res/images/ic_trending.png")}/>}
            renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2095F4'}]} source={require("../../res/images/ic_trending.png")}/>}
            onPress={() => this.setState({selectedTab: 'Trending'})}>
            <TrendingPage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Favorite'}
            title="收藏"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={require("../../res/images/ic_favorite.png")}/>}
            renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2095F4'}]} source={require("../../res/images/ic_favorite.png")}/>}
            onPress={() => this.setState({selectedTab: 'Favorite'})}>
            <FavoritePage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'My'}
            title="我的"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={require("../../res/images/ic_my.png")}/>}
            renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2095F4'}]} source={require("../../res/images/ic_my.png")}/>}
            onPress={() => this.setState({selectedTab: 'My'})}>
            <MyPage />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabText: {
    color: "#7F7F7F",
    fontSize: 13
  },
  selectedTabText: {
    color: "#2095F4",
    fontSize: 13
  },
  icon: {
    width: 22,
    height: 22
  }
})