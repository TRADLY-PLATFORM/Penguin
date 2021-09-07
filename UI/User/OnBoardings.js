
import React, { Component } from 'react';
import {FlatList, Alert, TextInput, Text, Image, View,
  StyleSheet, SafeAreaView, TouchableOpacity,ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import colors from '../../CommonClasses/AppColor';
import logo from '../../assets/logo.png';
import NavigationRoots from '../../Constants/NavigationRoots';
import Onboarding from 'react-native-onboarding-swiper';


export default class OnBoardings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }
  componentDidMount() {
  }
  /*  Buttons   */
  signUpBtnAction() {
    this.props.navigation.navigate(NavigationRoots.SignUp);
  }
  /*  UI   */
  render() {
    return (
      <View style={styles.Container}>
        <Onboarding
          onDone={() => this.props.navigation.navigate(NavigationRoots.SignIn)}
          onSkip={() => this.props.navigation.navigate(NavigationRoots.SignIn)}
          pages={[
            {
              backgroundColor: colors.AppTheme,
              image: <Image source={logo} />,
              title: '',
              subtitle: 'E-Waste Recycling is that simple',
            },
            {
              backgroundColor: colors.AppTheme,
              image: <Image source={logo} />,
              title: '',
              subtitle: 'Find a nearby Garbage and bin',
            },
            {
              backgroundColor: colors.AppTheme,
              image: <Image source={logo} />,
              title: '',
              subtitle: "Sell your items to collector",
            },
          ]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.AppTheme
  },
});