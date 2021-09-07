
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
import NavigationRoots from '../../../Constants/NavigationRoots';
import HeaderView from '../../../Components/Header'
import colors from '../../../CommonClasses/AppColor';
import commonStyle from '../../../StyleSheets/CommonStyleSheet';
import searchIcon from '../../../assets/search.png';
import logo from '../../../assets/logo.png';
import mapIcon from '../../../assets/mapIcon.png';
import phone from '../../../assets/phone.png';

export default class FindRecycleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSegmentTab: 1,
    }
  }
  componentDidMount() {
  }
  /*  Buttons   */
  selectSegmentBtnAction = ({ id }) => {
    this.setState({ selectSegmentTab: id })
  }
  /*  UI   */
  renderListView = () => {
    return (<View style={{ margin: 5 }}>
      <FlatList
        data={[1,1,1,1,1,1,1,1,1,1,1,1,1]}
        renderItem={this.renderCellItem}
        extraData={this.state}
        keyExtractor={(item, index) => index}
      />
    </View>)
  }
  renderCellItem = ({ item, index }) => {
    return <View style={{ margin: 0,borderBottomWidth: 5, borderColor: colors.LightBlueColor }}>
      <View style={{margin: 10}}>
      <View style={{ flexDirection: 'row'}}>
        <Image source={logo} style={styles.profileImageViewStyle} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 14 }}>Dipesh Saini</Text>
          <Text style={{ fontWeight: '500', fontSize: 12, color: colors.Lightgray, marginTop: 5 }}>
            Mohali Stadium
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: '500',fontSize: 12, color: colors.AppGray, marginTop: 10 }}>Condition :</Text>
            <Text style={{fontWeight: '500',fontSize: 12, color: colors.AppGray, marginTop: 10 }}>Used Working</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', height: 60, marginTop: 10}}>
        <View style={styles.cellMapPhoneViewStyle}>
          <Image source={mapIcon} style={{ width: 25, height: 25 }} />
          <Text style={styles.mapPhoneTxtStyle}>Location</Text>
        </View>
        <View style={styles.cellMapPhoneViewStyle}>
          <Image source={phone} style={{ width: 20, height: 20}} />
          <Text style={styles.mapPhoneTxtStyle}>Call</Text>
        </View>
      </View>
      </View>
    </View>
  }
  renderSegmentBar = () => {
    return (<View style={{ margin: 0 }}>
      <FlatList
        data={[1,1,1,1,1,1,1,1,1,1,1,1,1]}
        horizontal={true}
        renderItem={this.renderSegmentCell}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
    </View>)
  }
  renderSegmentCell = ({ item, index }) => {
    return <View style={styles.segmentViewStyle}>
      <TouchableOpacity onPress={() => this.selectSegmentBtnAction({ id: index })} style={this.state.selectSegmentTab == index ? commonStyle.selectedViewStyle : commonStyle.unSelectedViewStyle}>
        <Text style={{ color: this.state.selectSegmentTab == index ? colors.AppTheme : colors.AppWhite, fontSize: 12, fontWeight: '500' }}>
          {index == 0 ? 'All' : 'Paper'}
        </Text>
      </TouchableOpacity>
    </View>
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Find Recycle Item'} />
        <View style={styles.searchViewStyle}>
          <TextInput
            style={styles.searchTxtFieldStyle}
            placeholder="Search Collector..."
            placeholderTextColor={'gray'}
          />
          <Image style={commonStyle.backBtnStyle} source={searchIcon} resizeMode={'contain'} />
        </View>
        <this.renderSegmentBar />
        <View style={{height: 10}} />
        <View style={{ backgroundColor: colors.AppWhite, flex: 1 }}>
          <this.renderListView />
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
  searchViewStyle: {
    flexDirection: 'row',
    height: 40,
    margin: 16,
    marginTop: 0,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.BorderColor,
  },
  searchTxtFieldStyle: {
    color: colors.AppWhite,
    fontSize: 16,
    width: '94%',
  },
  segmentViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16
  },
  profileImageViewStyle:{
    width: 80,
    height: 80,
    borderWidth:1,
    borderRadius: 30,
  },
  categoryViewStyle: {
    backgroundColor: colors.AppWhite,
    borderRadius: 20,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.AppTheme,
    borderWidth: 1,
    marginTop: 10,
  },
  cellMapPhoneViewStyle:{
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  mapPhoneTxtStyle: {
    fontWeight: '700', 
    fontSize: 14 ,
    color: colors.AppTheme,
    marginLeft: 5,
  }

});