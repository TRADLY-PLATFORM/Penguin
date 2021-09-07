
import React, { Component } from 'react';
import {FlatList, Alert, TextInput, Text, Image, View,
  StyleSheet, SafeAreaView, TouchableOpacity,ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import colors from '../../CommonClasses/AppColor';
import logo from '../../assets/logo.png';
import commonStyle from '../../StyleSheets/CommonStyleSheet';


export default class SignUp extends Component {
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
  registerBtnAction() {
    // this.props.navigation.navigate(NavigationRoots.Register, {
    //   authType: this.state.authType,
    // });
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
              placeholder="Name"
              placeholderTextColor={'#a6a6a2'}
              onChangeText={mobile => this.setState({ mobileNo: mobile })}
            />
          </View>
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
          <View style={commonStyle.roundView}>
            <TextInput
              style={commonStyle.txtFieldStyle}
              placeholder="Re-enter Password"
              secureTextEntry={true}
              placeholderTextColor={'#a6a6a2'}
              onChangeText={txt => this.setState({ password: txt })}
            />
          </View>
          <View style={{ height: 50 }} />
          <TouchableOpacity style={commonStyle.loginBtnStyle}>
            <Text style={commonStyle.btnTitleStyle}>Create account</Text>
          </TouchableOpacity>
          <View style={{ height: 20 }} />
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={commonStyle.forgotBtntitleStyle}>have an account? Sign in</Text>
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