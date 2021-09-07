
import React, { Component } from 'react';
import {FlatList, Alert, TextInput, Text, Image, View,
  StyleSheet, SafeAreaView, TouchableOpacity,ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import colors from '../../CommonClasses/AppColor';
import logo from '../../assets/logo.png';
import commonStyle from '../../StyleSheets/CommonStyleSheet';
import NavigationRoots from '../../Constants/NavigationRoots';


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      mobileNo: 'test@test.com',
      password: '123456',
      authType: 2,
      bToken: '',
      countriesArray: [],
      name: '',
      regexValidationString: '',
      mobileNoMaxlenght: 10,
      showDropDown: false,
      dialCode: "",
      countryFlagURL: "",
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
          <Image source={logo} style={commonStyle.logoImageViewStyle} />
          <Text style={commonStyle.titleStyle}>Welcome to MBPP {`\n`}Smart Collection</Text>
          <Text style={commonStyle.subTitleStyle}>Login to your account</Text>
          <View style={commonStyle.roundView}>
            <TextInput
              style={commonStyle.txtFieldStyle}
              placeholder="Mobile Number"
              keyboardType='phone-pad'
              placeholderTextColor={'#a6a6a2'}
              onChangeText={mobile => this.setState({ mobileNo: mobile })}
            />
          </View>
          <View style={commonStyle.roundView}>
            <TextInput
              style={commonStyle.txtFieldStyle}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={'#a6a6a2'}
              onChangeText={txt => this.setState({ password: txt })}
            />
          </View>
          <View style={{ height: 50 }} />
          <TouchableOpacity 
            style={commonStyle.loginBtnStyle}
            onPress={()=>  this.props.navigation.navigate(NavigationRoots.VerifyPhoneNo)}>
            <Text style={commonStyle.btnTitleStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>  this.props.navigation.navigate(NavigationRoots.PhoneVerification)}>
            <Text style={commonStyle.forgotBtntitleStyle}>Forgot your password?</Text>
          </TouchableOpacity>
          <View style={{ height: 50 }} />
          <TouchableOpacity onPress={() => this.signUpBtnAction()}>
            <Text style={commonStyle.forgotBtntitleStyle}>Don’t have an account? Sign up</Text>
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
});