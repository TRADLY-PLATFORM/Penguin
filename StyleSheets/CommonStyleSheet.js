
'use strict';
var React = require('react-native');

var { StyleSheet, } = React;
import colors from '../CommonClasses/AppColor';


module.exports = StyleSheet.create({
  logoImageViewStyle:{
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center',
  },
  titleStyle: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subTitleStyle:{
    marginTop: 40,
    fontSize: 16,
    alignSelf: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  roundView: {
    marginTop: 30,
    backgroundColor: colors.lightTransparent,
    marginLeft: "8%",
    marginRight: "8%",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.AppWhite,
    alignItems: 'center'
  },
  txtFieldStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.AppWhite,
    textAlign: "left",
    paddingLeft: 10,
    width: "66%"
  },
  loginBtnStyle: {
    backgroundColor: colors.AppWhite,
    marginLeft: "8%",
    marginRight: "8%",
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitleStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: colors.AppTheme,
    textAlign: 'center',
  },
  forgotBtntitleStyle: {
    marginTop: 30,
    fontSize: 18,
    alignSelf: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  backBtnStyle: {
    height: 20,
    width: 20,
  },
  headerViewStyle: {
    height: 70,
    backgroundColor: colors.AppTheme,
    justifyContent: 'space-between',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  themeBtnStyle: {
    backgroundColor: colors.AppTheme,
    marginLeft: "8%",
    marginRight: "8%",
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeTitleStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: colors.AppWhite,
    textAlign: 'center',
  },
  textLabelStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.Lightgray,
  },
  addTxtFieldStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.AppGray,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: colors.LightUltraGray,
    marginTop: 10,
  },
  txtViewStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.AppGray,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: colors.LightUltraGray,
    marginTop: 10,
    height: 60,
  },
  selectedViewStyle: {
    borderRadius: 20,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.AppWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.BorderColor,
    borderWidth: 1,
  },
  unSelectedViewStyle: {
    backgroundColor: colors.AppTheme,
    borderRadius: 20,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.BorderColor,
    borderWidth: 1,
  },
});

