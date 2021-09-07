
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
import bag from '../../../../assets/bag.png';

export default class CollectionHistory extends Component {
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
    this.setState({selectSegmentTab:id})
}
  /*  UI   */
  renderListView = () => {
    return (<View style={{ margin: 5 }}>
      <FlatList
        data={[1,1,1,4,22,2,2,,2,2,2,2,2,2,2,2,2,2,2,22,2]}
        horizontal={false}
        renderItem={this.renderCellItem}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>)
  }
  renderCellItem = ({item, index}) => {
    return (<View>
      <View style={styles.cellItemStyle}>
        <View style={{flexDirection: 'row'}}>
          <Image source={bag} style={{width: 30,height: 30}} />
          <View style={{paddingLeft: 16}}>
            <Text style={{color: colors.AppGray, fontSize: 14, fontWeight: '700' }}>Collection {` ${index}`}</Text>
            <View style={{height: 5}} />
            <Text style={{color: colors.Lightgray, fontSize: 12, fontWeight: '400'}}>Today</Text>
          </View>
        </View>
        <View>
          <Text style={{color: index == 0 ? colors.AppTheme : colors.AppGreen, fontSize: 14, fontWeight: '400' }}> 
          {index == 0 ? `Track Location` : 'Collected'}</Text>
        </View>
       
      </View>
    </View>);
  }
  renderSegmentBar = () => {
    return <View style={styles.segmentViewStyle}>
        <TouchableOpacity onPress = {() => this.selectSegmentBtnAction({id:1})}  style={this.state.selectSegmentTab == 1 ? styles.selectedSegmentBarView : styles.segmentBarView}>
            <Text style={this.state.selectSegmentTab == 1 ? styles.selectedSegmentText : styles.segmentText}> All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.selectSegmentBtnAction({id:2})} style={this.state.selectSegmentTab == 2 ? styles.selectedSegmentBarView : styles.segmentBarView}>
            <Text style={this.state.selectSegmentTab == 2 ? styles.selectedSegmentText : styles.segmentText}> Week</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.selectSegmentBtnAction({id:3})} style={this.state.selectSegmentTab == 3 ? styles.selectedSegmentBarView : styles.segmentBarView}>
            <Text style={this.state.selectSegmentTab == 3 ? styles.selectedSegmentText : styles.segmentText}> Month</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.selectSegmentBtnAction({id:4})} style={this.state.selectSegmentTab == 4 ? styles.selectedSegmentBarView : styles.segmentBarView}>
            <Text style={this.state.selectSegmentTab == 4 ? styles.selectedSegmentText : styles.segmentText}> Year</Text>
        </TouchableOpacity>
    </View>
}
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Collection History'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()}/>
        <View style={{height:'100%', backgroundColor: colors.LightBlueColor}}>
          <this.renderSegmentBar />
          <View style={{height: '80%'}}>
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
  segmentViewStyle: {
    margin:16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  segmentBarView: {
    height: 40,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightTransparent
  },
  selectedSegmentBarView: {
    height: 35,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.AppTheme,
    borderRadius: 10,
  },
  segmentText:{
    color: 'gray',
    fontWeight: '500',
    fontSize: 16,
    backgroundColor: colors.lightTransparent
  },
  selectedSegmentText: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 16,
    color: colors.AppWhite
  },
  cellItemStyle: {
    height: 60,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: colors.AppWhite,
    borderRadius: 10,
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between'
  },
});