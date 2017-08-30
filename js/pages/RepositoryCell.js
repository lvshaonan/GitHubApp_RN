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

export default class RepositoryCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity>
        <View style={{
          padding: 8, borderColor: '#ddd', borderWidth: 0.5, margin: 5, borderRadius: 2, shadowColor: '#ccc',
          shadowOffset: {width: 0.5, height: 0.5},
          shadowOpacity: 0.4,
          shadowRadius: 1,
          marginVertical: 3,
          elevation: 2
        }}>
          <Text style={{paddingBottom: 3, fontSize: 16, color: '#000'}}>{this.props.item.full_name}</Text>
          <Text style={{paddingBottom: 3, fontSize: 14, color: '#666'}}>{this.props.item.description}</Text>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 2}}>Author:</Text>
              <Image
                style={{width: 22, height: 22}}
                source={{uri: this.props.item.owner.avatar_url}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 2}}>Stars:</Text>
              <Text>{this.props.item.stargazers_count}</Text>
            </View>
            <TouchableOpacity>
              <Image
                style={{width: 20, height: 20, padding: 6}}
                source={require('../../res/images/ic_unstar_navbar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}