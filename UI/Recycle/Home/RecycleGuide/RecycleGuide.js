
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
import commonStyle from '../../../../StyleSheets/CommonStyleSheet';
import searchIcon from '../../../../assets/search.png';
import logo from '../../../../assets/sample.png';

const buttonTitleArray = ['Find Nearest Bin', 'Find a nearest garbage', 'Sell to Collector'];
const titleArray = ['Item can be recycled', 'Item can’t be recycled', 'Item can be sold'];

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
        data={[1,1,1]}
        horizontal={false}
        renderItem={this.renderCellItem}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>)
  }
  renderCellItem = ({item, index}) => {
    return (<View style={{ backgroundColor: colors.AppWhite}}>
      <View style={{margin: 10, justifyContent: 'center'}}>
        <Text style={styles.titleTextStyle}>{titleArray[index]}</Text>
        <Text style={styles.subtitleTextStyle}>15 items left to achive your target</Text>
        {this.renderHorizontalListView()}
        <View style={{height: 16}} />
        <TouchableOpacity 
          style={styles.recycleGuideBtnStyle} 
          onPress={() => this.props.navigation.navigate(NavigationRoots.RecycleGuide)}>
          <Text style={{ color: colors.AppTheme, fontSize: 14, fontWeight: '500' }}>
            {buttonTitleArray[index]}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 10, backgroundColor: colors.LightBlueColor, marginTop: 10 }} />
    </View>);
  }
  renderHorizontalListView = () => {
    return (<View style={{margin: 0}}>
      <FlatList
        data={[1,1,1,232,32,22,32,33,3232,32]}
        horizontal={true}
        renderItem={this.renderItemView}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>)
  }
  renderItemView = ({item, index}) => {
    return (<View style={{backgroundColor: colors.AppWhite, padding: 5}}>
      <Image source={logo}
        style={styles.SelectedImageStyle}
        // resizeMode={'cover'}
      />
    </View>);
  }
  render
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Recycling Guide'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()} />
        <View style={styles.searchViewStyle}>
          <TextInput
            style={styles.searchTxtFieldStyle}
            placeholder="Search Items........"
            placeholderTextColor={'gray'}
          />
          <Image style={commonStyle.backBtnStyle} source={searchIcon} resizeMode={'contain'} />
        </View>
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
  cellItemStyle: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: colors.BorderColor,
    justifyContent: 'space-between'
  },
  titleTextStyle: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 16,
    color: colors.AppTheme
  },
  subtitleTextStyle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
    color: colors.Lightgray,
  },
  SelectedImageStyle: {
    height: 115,
    width: 115,
    marginTop:15,
    borderRadius: 10,
  },
  recycleGuideBtnStyle: {
    borderColor: colors.AppTheme,
    borderWidth: 1,
    borderRadius: 20,
    height: 45,
    width: '80%',
    backgroundColor: colors.AppWhite,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});