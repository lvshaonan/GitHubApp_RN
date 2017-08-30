/**
 * Created by Administrator on 2017/8/28.
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FavoritePage extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>
          收藏
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})