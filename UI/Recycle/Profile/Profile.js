
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
import logo from '../../../assets/logo.png';

const Items = [
  'Edit  Profile',
  'Collection History',
  'Track  my collection',
  'Language ',
  'Feedback',
  'Invite Friend',
  'Apply as Group/Organisation',
  'Logout',
]
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }
  componentDidMount() {
  }
  /*  Buttons   */
  didSelectList(index){
    if (index == 1) {
      this.props.navigation.navigate(NavigationRoots.CollectionHistory)
    } else if (index == 5) {
      this.props.navigation.navigate(NavigationRoots.InviteFriends)
    } else {
      this.props.navigation.navigate(NavigationRoots.ApplyGroup)
    }
  }
  /*  UI   */
  renderListView = () => {
    return (<View style={{margin: 10}}>
        <FlatList
          data={Items}
          renderItem={this.renderCellItem}
          extraData={this.state}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>)
  }
  renderCellItem = ({item, index}) => {
    return <TouchableOpacity style={styles.listViewStyle} onPress={() => this.didSelectList(index)}>
      <Text style={{fontWeight: '500' ,fontSize: 12 , color: index == 7 ? colors.AppRed : colors.AppGray}}>
        {`${item}`}
      </Text>
    </TouchableOpacity>
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <View style={{flexDirection: 'row',margin: 20, zIndex: 1}}>
          <Image source={logo} style={styles.profileImageViewStyle}/>
          <View style={{marginLeft: 20}}>
            <Text style={styles.profileNameStyle}>Dipesh Saini</Text>
            <Text style={styles.profileMobileStyle}>+996 56327329</Text>
            <Text style={styles.profileMobileStyle}>developer@gmail.com</Text>
          </View>
          <View style={{height: 150}}/>
        </View>
        <View style={{backgroundColor:colors.LightBlueColor, flex: 1, zIndex: 120}}>
            <View style={styles.ListViewContainerStyle}>
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
  profileImageViewStyle:{
    width: 60,
    height: 60,
    borderWidth:1,
    borderRadius: 30,
  },
  profileNameStyle:{ 
    color: colors.AppWhite,
    fontSize: 16,
    fontWeight: '700',
  },
  profileMobileStyle:{
    marginTop: 5,
    color: colors.AppWhite,
    fontSize: 12,
    fontWeight: '500',
  }, 
  ListViewContainerStyle: {
    backgroundColor: colors.AppWhite,
    margin: 20,
    borderRadius: 10,
    borderColor: colors.BorderColor,
    borderWidth: 1,
    height: 300,
    marginTop: -80,
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
  },
  listViewStyle:{
    flexDirection: 'column', 
    padding: 10,
    flex:1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.BorderColor
  },
});