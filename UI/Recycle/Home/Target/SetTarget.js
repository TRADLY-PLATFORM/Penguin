import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import commonStyles from '../../../../StyleSheets/CommonStyleSheet';
import HeaderView from '../../../../Components/Header'
import colors from '../../../../CommonClasses/AppColor';
import tagetIcon from '../../../../assets/target.png';

export default class SetTarget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalValue: 0,
      showModal:false,
    }
  }
  componentDidMount() {}
  /*  Buttons   */
  incrementDecBtnAction(id) {
    if (id == 1) {
      let tvalue = this.state.totalValue;
      this.setState({totalValue: 10 + tvalue})
    } else {
      let tvalue = this.state.totalValue;
      if (tvalue > 0) {
        this.setState({totalValue: tvalue - 10})
      }
    }
  }
  renderModalView = () => {
    return (<Modal
      animationType="slide"
      transparent={true}
      visible={this.state.showModal}
      onRequestClose={() => {
        this.setState({ showModal: false })
      }}
    >
      <View style={styles.Container}>
        <View style={{ height: '95%', backgroundColor: colors.LightBlueColor, marginTop: '12%',justifyContent: 'space-between' }}>
          <View style={{flex: 1}}>
            <View style={{ height: 40 }} />
            <Image source={tagetIcon} resizeMode={'contain'} style={styles.iconImageViewStyle} />
            <Text style={styles.successTitleTxtStyle}>Added target success</Text>
            <View style={{ height: 20 }} />
            <Text style={{fontSize:16,textAlign: 'center'}}>
              {`Now you can see your target on\n dahboard`}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={commonStyles.themeBtnStyle} onPress={() => this.props.navigation.goBack()}>
              <Text style={commonStyles.themeTitleStyle}>Done</Text>
            </TouchableOpacity>
            <View style={{height:60}} />
          </View>
        </View>
      </View>
    </Modal>);
  }
  /*  UI   */
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Set Your Target'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()}/>
        <View style={{height:'100%', backgroundColor: colors.LightBlueColor}}>
          <Image source={tagetIcon} resizeMode={'contain'} style={styles.iconImageViewStyle} />
          <Text style={styles.titleTxtStyle}>Set Your Target To Recycle</Text>
          <Text style={styles.subTitleTxtStyle}>Recycle Items</Text>
          <View style={styles.incrementViewStyle}>
            <TouchableOpacity style={styles.incDecViewStyle} onPress={() => this.incrementDecBtnAction(0)}>
              <Text style={{fontSize: 40,fontWeight: '300',marginTop: -6}}>-</Text>
            </TouchableOpacity>
            <View style={{width: 30}} />
            <Text style={{fontSize: 27,fontWeight: '400',marginTop:4}}>{this.state.totalValue}</Text>
            <View style={{width: 30}} />
            <TouchableOpacity style={styles.incDecViewStyle} onPress={() => this.incrementDecBtnAction(1)}>
              <Text style={{fontSize: 40,fontWeight: '300',marginTop: -6}}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.valueSubTitleStyle}> 15 items left to achive your target</Text>
          <View style={{height: 50}} />
          <TouchableOpacity style={commonStyles.themeBtnStyle} onPress={() => this.setState({showModal: true})}>
            <Text style={commonStyles.themeTitleStyle}>Set Target</Text>
          </TouchableOpacity>
          <this.renderModalView />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.AppTheme
  },
  iconImageViewStyle:{
    width: '70%',
    height: '20%',
    marginTop: 40,
    alignSelf: 'center',
  },
  titleTxtStyle:{ 
    marginTop: 30,
    color: colors.AppGray,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  subTitleTxtStyle:{ 
    marginTop: 30,
    color: colors.Lightgray,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  incDecViewStyle: {
    width:40,
    height:40,
    backgroundColor:colors.LightUltraGray,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  incrementViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop:30,
    borderBottomWidth: 1,
    borderColor: colors.BorderColor,
    padding: 10,
    width: '50%',
    alignSelf: 'center',
  },
  valueSubTitleStyle: {
    color: colors.AppGray,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
  },
  successTitleTxtStyle:{ 
    marginTop: 40,
    color: colors.AppGray,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
});