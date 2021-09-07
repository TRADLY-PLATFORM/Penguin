
import React, { Component } from 'react';
import {FlatList, Alert, TextInput, Text, Image, View,
  StyleSheet, SafeAreaView, TouchableOpacity,ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import colors from '../../CommonClasses/AppColor';
import logo from '../../assets/logo.png';
import commonStyle from '../../StyleSheets/CommonStyleSheet';
import NavigationRoots from '../../Constants/NavigationRoots';


export default class VerifyPhoneNo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bToken: '',
      countriesArray: ['aa','ss','aa'],
      name: '',
      showDropDown: false,
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
  renderCountry = ({ item, index }) => {
    return <TouchableOpacity onPress={() => this.didSelectDropDown(item, index)} style={{ top: 1, height: 35, marginBottom: 5, backgroundColor: (index % 2 == 0) ? colors.white : colors.lightBlue, }}>
      <View style={{ alignItems: "center", flexDirection: "row", margin: 10 }}>
        {/* <Image source={{ uri: item['flag_url'] }}
          style={{ width: 30, height: 20, marginRight: 10, marginLeft: 10 }}  >
        </Image> */}
        <Text style={{ fontSize: 14 }}>+{item} </Text>
      </View>
      <View style={{ height: 1, backgroundColor: colors.lightGray, marginLeft: "2%", marginRight: "2%" }}></View>
    </TouchableOpacity>
  }
  dropDownUI = props => {
    const { showDropDown } = this.state;
    if (showDropDown == true) {
      return <View style={{ backgroundColor: colors.AppWhite, width: "78%", left: 40 }} >
        <FlatList
          data={this.state.countriesArray}
          horizontal={false}
          renderItem={this.renderCountry}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
        />
      </View>
    }
    return <View></View>
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <ScrollView>
        <TouchableOpacity style={{left:20}} onPress={() => this.props.navigation.goBack()}>
          <Image style={commonStyle.backBtnStyle} resizeMode="contain" source={require('../../assets/back.png')}>
          </Image>
        </TouchableOpacity>
          <Text style={commonStyle.titleStyle}>Verify your phone number</Text>
          <Text style={commonStyle.subTitleStyle}>We have sent you an SMS with a code to enter number</Text>
          <View style={commonStyle.roundView}>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginRight: 20, flexDirection: "row", }} 
              onPress={() => this.setState({showDropDown: !this.state.showDropDown})} >
              <View style={{marginRight: 0, justifyContent: "flex-end", paddingLeft: 5, flexDirection: "row"}}>
                <Text style={{fontSize:18, fontWeight: '500', paddingLeft:5, color:colors.AppWhite}}>+91</Text>
                <Image resizeMode="contain"
                  source={require('../../assets/dropdown.png')}
                  style={{
                    width: 15, height: 15, marginTop: 5, marginLeft: 10,
                    transform: [{ rotate: this.state.showDropDown == true ? '180deg' : '360deg' }] 
                  }}>
                </Image>
              </View>
            </TouchableOpacity>
            <TextInput
              style={commonStyle.txtFieldStyle}
              placeholder="Phone Number"
              keyboardType='phone-pad'
              placeholderTextColor={colors.AppWhite}
              maxLength={this.state.mobileNoMaxlenght}
              onChangeText={mobile => this.setState({ mobileNo: mobile })}
            />
          </View>
          <View>
            <this.dropDownUI />
          </View>
          <View style={{ height: 50 }} />
          <TouchableOpacity style={commonStyle.loginBtnStyle}
            onPress={()=>  this.props.navigation.navigate(NavigationRoots.BottomTabbar)} >
            <Text style={commonStyle.btnTitleStyle}>Send OTP Code</Text>
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