
import React, { Component } from 'react';
import {
  FlatList,
  TextInput,
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import NavigationRoots from '../../../../Constants/NavigationRoots';
import HeaderView from '../../../../Components/Header'
import colors from '../../../../CommonClasses/AppColor';

export default class Target extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  /*  Buttons   */
  /*  UI   */
  renderListView = () => {
    return (<View style={{ margin: 5 }}>
      <FlatList
        data={[1,1,1,4]}
        horizontal={false}
        renderItem={this.renderCellItem}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>)
  }
  renderCellItem = ({item, index}) => {
    return (<View style={{backgroundColor: colors.AppWhite}}>
      <View style={styles.cellItemStyle}>
        <Text style={{fontSize: 14, fontWeight: '600', color: colors.AppTheme,}}>November</Text>
        <Text style={{fontSize: 14, fontWeight: '600', color: colors.AppGreen,}}>15 / 30</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View style={{ height: 100, flex: 1, borderRightWidth: 1, borderRightColor: colors.BorderColor, justifyContent: 'center' }}>
            <Text style={styles.titleStyle}>2.433 </Text>
            <Text style={styles.valueSubTitleStyle}>Co2 Emission </Text>
          </View>
          <View style={{ height: 100, flex: 1, borderRightWidth: 1, borderRightColor: colors.BorderColor, justifyContent: 'center' }}>
            <Text style={styles.titleStyle}>15</Text>
            <Text style={styles.valueSubTitleStyle}>Items recycled</Text>
          </View>
          <View style={{ height: 100, flex: 1, justifyContent: 'center' }}>
            <Text style={styles.titleStyle}>4</Text>
            <Text style={styles.valueSubTitleStyle}>Times Per Month </Text>
          </View>
        </View>
        <View style={{margin: 16}}>
          <View style={styles.progressBackgroundStyle}>
            <View style={styles.progressSelectedStyle} />
          </View>
        </View>
        <Text style={styles.valueSubTitleStyle}> 15 items left to achive your target</Text>
        <View style={{height: 10,backgroundColor: colors.LightBlueColor, marginTop: 10}}/>
      </View>
    </View>);
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'See target'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()}/>
        <View style={{margin: 10,justifyContent: 'center'}}>
            <Text style={styles.titleTxtStyle}>Your recycle target</Text>
            <View style={{height: 20}}/>
            <Text style={styles.countTxtStyle}>30</Text>
          <View style={{height: 40}}/>
        </View>
        <View style={{backgroundColor:colors.LightBlueColor,}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -25 }}>
            <TouchableOpacity style={styles.setTargetBtnStyle}
              onPress={() => this.props.navigation.navigate(NavigationRoots.SetTarget)}>
              <Text style={{ color: colors.AppTheme, fontSize: 14, fontWeight: '500' }}> Set Target </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: '81%'}}>
            <this.renderListView />
          </View>
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
  titleTxtStyle:{ 
    color: colors.Lightgray,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  countTxtStyle:{ 
    color: colors.AppWhite,
    fontSize: 48,
    fontWeight: '600',
    textAlign: 'center',
  },
  setTargetBtnStyle: {
    borderColor: colors.AppTheme,
    borderWidth: 1,
    borderRadius: 20,
    height: 45,
    width: '40%',
    backgroundColor: colors.AppWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellItemStyle: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: colors.BorderColor,
    justifyContent: 'space-between'
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    color: colors.AppTheme,
    textAlign: 'center',
  },
  subTitleStyle:{
    marginTop: 10,
    fontSize: 24,
    alignSelf: 'center',
    color: colors.AppTheme,
    textAlign: 'center',
  },
  valueSubTitleStyle: {
    color: colors.AppGray,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
  },
  progressSelectedStyle: {
    height: 8,
    width: '50%',
    backgroundColor: colors.AppGreen,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  progressBackgroundStyle: {
    height: 8,
    width: '100%',
    backgroundColor: colors.LightBlueColor,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
});