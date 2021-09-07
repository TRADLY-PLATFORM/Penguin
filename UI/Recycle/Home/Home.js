
import React, { Component } from 'react';
import {
  Alert,
  StatusBar,
  FlatList,
  Text,Image,View,
  StyleSheet, SafeAreaView,
  TouchableOpacity,ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import colors from '../../../CommonClasses/AppColor';
import notificationIcon from '../../../assets/notification.png';
import commonStyle from '../../../StyleSheets/CommonStyleSheet';
import HeaderView from '../../../Components/Header'
import logo from '../../../assets/logo.png';
import NavigationRoots from '../../../Constants/NavigationRoots';

export default class Home extends Component {
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
  /*  UI   */
  renderHeaderView = () => {
    return <View style={commonStyle.headerViewStyle}>
        <Text style={commonStyle.headerTitleStyle}>Tradly</Text>
        <Image source={notificationIcon} style={commonStyle.backBtnStyle} />
      </View>
  }
  renderRecyleValue = () => {
    return (<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
      <View style={{ height: 100, flex: 1, borderRightWidth: 1, borderRightColor: colors.BorderColor, justifyContent: 'center' }}>
        <Text style={styles.titleStyle}>2.433 </Text>
        <Text style={styles.valueSubTitleStyle}>Co2 Emission </Text>
      </View>
      <View style={{ height: 100, flex: 1, borderRightWidth: 1, borderRightColor: colors.BorderColor, justifyContent: 'center' }}>
        <Text style={styles.titleStyle}>15</Text>
        <Text style={styles.valueSubTitleStyle}>Items recycled</Text>
      </View>
      <View style={{ height: 100, flex: 1,justifyContent: 'center' }}>
        <Text style={styles.titleStyle}>4</Text>
        <Text style={styles.valueSubTitleStyle}>Times Per Month </Text>
      </View>
    </View>)
  }
  renderGridView = () => {
    return (<View style={{backgroundColor:colors.AppWhite}}>
        <FlatList
          data={Items}
          horizontal={false}
          renderItem={this.renderGridItem}
          numColumns={4}
          keyExtractor={(item, index) => index}
        />
      </View>)
  }
  renderGridItem = ({ item, index }) => {
    return ( <View style={styles.gridViewStyle}>
        <Image style={styles.imageThumbnail} source={item.image} resizeMode={'contain'} />
        <View style={{ height: 5 }} />
        <Text style={{ textAlign: 'center', fontSize: 12 }}>{`${item.name}`}</Text>
      </View>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <View style={{ flex: 1, backgroundColor:colors.AppWhite}}>
          <HeaderView title={'Tradly'} />
          <View style={{flex: 1}}>
          <ScrollView  nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }}  removeClippedSubviews={false}>
            <View style={{ flex: 2, backgroundColor: colors.AppWhite }}>
              <Image source={logo} style={styles.profileImageViewStyle} />
              <Text style={styles.subTitleStyle}>
                Hello<Text style={styles.titleStyle}>{`, Recyclers`}</Text>
              </Text>
              <this.renderRecyleValue />
              <View style={{ margin: 20 }}>
                <View style={styles.progressBackgroundStyle}>
                  <View style={styles.progressSelectedStyle} />
                </View>
              </View>
              <Text style={styles.valueSubTitleStyle}>
                15 items left to achive your target
              </Text>
            </View>
            <View style={{ backgroundColor: colors.LightBlueColor, marginTop: 40 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -20 }}>
                <TouchableOpacity
                  style={styles.recycleGuideBtnStyle}
                  onPress={() => this.props.navigation.navigate(NavigationRoots.RecycleGuide)}>
                  <Text style={{ color: colors.AppTheme, fontSize: 14, fontWeight: '500' }}>
                    Recycling guide
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.seeTargetBtnStyle}
                  onPress={() => this.props.navigation.navigate(NavigationRoots.Target)}>
                  <Text style={{ color: colors.AppWhite, fontSize: 14, fontWeight: '500' }}>See Target</Text>
                </TouchableOpacity>
              </View>
              <View style={{ height: 20 }} />
              <TouchableOpacity onPress={() => this.props.navigation.navigate(NavigationRoots.AddRecycleItem)}>
                <Text style={styles.recyleItemTxtStyle}>Recycle your item</Text>
              </TouchableOpacity>
              <View style={{ height: 20 }} />
              <this.renderGridView />
            </View>
          </ScrollView>
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
    width: 80,
    height: 80,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth:1,
    borderRadius: 40,
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
  valueSubTitleStyle: {
    color: colors.AppGray,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
  },
  recycleGuideBtnStyle: {
    borderColor: colors.AppTheme,
    borderWidth: 1,
    borderRadius: 20,
    height: 45,
    width: '40%',
    backgroundColor: colors.AppWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeTargetBtnStyle:{
    backgroundColor: colors.AppTheme,
    borderRadius: 20,
    height: 45,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageThumbnail : {
    width: 30,
    height: 30,
  },
  gridViewStyle:{
    flexDirection: 'column', 
    padding: 10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.BorderColor
  },
  recyleItemTxtStyle: {
    color: colors.AppTheme,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  }
});

import bag from '../../../assets/bag.png';
import dress from '../../../assets/dress.png';
import books from '../../../assets/books.png';
import paper from '../../../assets/book.png';
import tenis from '../../../assets/tabletennis.png';
import game from '../../../assets/game.png';
import notebookmousecursor from '../../../assets/notebookmousecursor.png';

var Items = [
  {name:'Bags',image: bag},
  {name:'Clothes',image: dress},
  {name:'Books',image: books},
  {name:'Other Papers',image: paper},
  {name:'Sports Equipments',image: tenis},
  {name:'Electronics',image: notebookmousecursor},
  {name:'Game & Toys',image: game},
  {name:'More',image: bag},
]