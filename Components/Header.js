import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import notificationIcon from '../assets/notification.png';
import commonStyle from '../StyleSheets/CommonStyleSheet';

export default class AppHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    showBackBtn:PropTypes.bool,
    backBtnAction: PropTypes.func,
  };
  render() {
    if (this.props.showBackBtn) {
      return <View style={commonStyle.headerViewStyle}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity style={{left:0}} onPress={() => this.props.backBtnAction()}>
          <Image style={commonStyle.backBtnStyle} resizeMode="contain" source={require('../assets/back.png')}>
          </Image>
        </TouchableOpacity>
        <Text style={commonStyle.headerTitleStyle}>{this.props.title}</Text>
        <Image source={'ds'} style={commonStyle.backBtnStyle} />
      </View>
    } else {
      return <View style={commonStyle.headerViewStyle}>
        <StatusBar barStyle="light-content" />
        <Text style={commonStyle.headerTitleStyle}>{this.props.title}</Text>
        <Image source={notificationIcon} style={commonStyle.backBtnStyle} />
      </View>
    }
  }
}
