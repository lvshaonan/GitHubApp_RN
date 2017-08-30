/**
 * Created by Administrator on 2017/8/28.
 */
import React, {Component} from 'react'

import {Navigator} from 'react-native-deprecated-custom-components';

import WelcomePage from './WelcomePage';

import HomePage from './HomePage';

export default function setup() {
  class Root extends Component {
    renderScene(route, navigator) {
      let Component = route.component;
      return <Component navigator={navigator} {...route.params}/>
    }

    render() {
      return (
        <Navigator
          initialRoute={{component: HomePage}}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
        />
      )
    }
  }
  return <Root/>
}
