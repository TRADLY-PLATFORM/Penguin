
import React, { Component } from 'react';
import {FlatList, Alert, TextInput, Text, Image, View,
  StyleSheet, SafeAreaView, TouchableOpacity,ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import colors from '../../CommonClasses/AppColor';
import commonStyle from '../../StyleSheets/CommonStyleSheet';
import NavigationRoots from '../../Constants/NavigationRoots';
import OTPTextView from 'react-native-otp-textinput';


export default class PhoneVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bToken: '',
      name: '',
    }
  }
  componentDidMount() {
  }
  /*  Buttons   */
  signUpBtnAction() {
    this.props.navigation.navigate(NavigationRoots.SignUp);
  }
  sendBtnAction() {
    if (this.state.mobileNo.length == 0) {
      if (this.state.authType != 1) {
        Alert.alert('enter email id ')
      }
      else if (this.state.authType != 2) {
        Alert.alert('enter mobile ')
      } else {
        Alert.alert('enter mobile ')
      }
    }
    else if (this.state.password.length == 0 && this.state.authType != 2) {
      Alert.alert('enter password ')
    }
    else {
      // this.loginApi()
    }
  }

  /*  UI   */
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <ScrollView>
          <TouchableOpacity style={{left:20}} onPress={() => this.props.navigation.goBack()}>
            <Image style={commonStyle.backBtnStyle} resizeMode="contain" source={require('../../assets/back.png')}>
            </Image>
          </TouchableOpacity>
          <Text style={commonStyle.titleStyle}>Phone Verification</Text>
          <Text style={commonStyle.subTitleStyle}>Enter your OTP code here</Text>
          <View style={{ height: 50 }} />
          <View style={styles.otpView}>
            <OTPTextView
                ref={(e) => (this.input1 = e)}
                handleTextChange={(text) => this.setState({ otpInput: text })}
                inputCount={6}
                keyboardType="numeric"
                tintColor={colors.AppWhite}
                offTintColor={colors.AppWhite}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
            />
          </View>
          <View style={{ height: 50 }} />
          <TouchableOpacity 
            style={commonStyle.loginBtnStyle}
            onPress={()=>  this.props.navigation.navigate(NavigationRoots.VerifyPhoneNo)}>
            <Text style={commonStyle.btnTitleStyle}>Verification</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.AppTheme
  },
  otpView: {
    marginTop: 50,
    height: 80,
    width: '100%',
    flexDirection: "row",
    justifyContent: "center"
  },
  textInputContainer: {
    margin: 5,
  },
  roundedTextInput: {
      height: 45,
      width: 45,
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: colors.lightGray,
      color: colors.AppWhite

  },
});