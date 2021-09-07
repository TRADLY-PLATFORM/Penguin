
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
  Dimensions,
} from 'react-native';
import NavigationRoots from '../../../../Constants/NavigationRoots';
import HeaderView from '../../../../Components/Header'
import colors from '../../../../CommonClasses/AppColor';
import addBinIcon from '../../../../assets/addBinIcon.png';
import mapLocationIcon from '../../../../assets/mapLocation.png';

import commonStyles from '../../../../StyleSheets/CommonStyleSheet';

import ImagePicker from 'react-native-image-crop-picker';

const windowWidth = Dimensions.get('window').width;

export default class AddBinMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBinType: 0,
      photo: null,
      updateUI: false,
      showModal:false,
    }
  }
  componentDidMount() {
  }
  /*  Buttons   */
  selectSegmentBtnAction = ({ id }) => {
    this.setState({ selectBinType: id })
  }
  deleteImageButtonAction(id) {
    this.setState({updateUI: !this.state.updateUI});
  }
  /*  UI   */

  imagePicker() {
    ImagePicker.openPicker({
      height: 200,
      width: 200,
      cropping: false,
    }).then(image => {
      this.state.photo = image.sourceURL;
      this.setState({updateUI: !this.state.updateUI})
    });
  }
  viewSelectedImages = () => {
    var views = [];
    if (this.state.photo != null) {
      views.push(
        <View>
          <View style={styles.imagePickerPlaceholderStyle}>
            <TouchableOpacity onPress={() => this.imagePicker()}>
              <View>
                <Image source={{uri: this.state.photo}}
                  style={styles.SelectedImageStyle}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>,
      );
    } else {
      views.push(
        <View>
          <View style={styles.imagePickerPlaceholderStyle}>
            <TouchableOpacity onPress={() => this.imagePicker()}>
              <View style={{ justifyContent: 'center' }}>
                <Image
                  source={addBinIcon}
                  style={styles.SelectedImageStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>,
      );
    }
    return views;
  };

  renderGroup = () => {
    var views = [];
    for (let a = 0; a < 12; a++) {
        views.push(<View style={styles.segmentViewStyle}>
          <TouchableOpacity onPress={() => this.selectSegmentBtnAction({ id: a })} style={this.state.selectBinType == a ? commonStyles.unSelectedViewStyle : commonStyles.selectedViewStyle }>
            <Text style={{ color: this.state.selectBinType == a ? colors.AppWhite : colors.AppTheme, fontSize: 12, fontWeight: '500' }}>
              {a == 0 ? 'All' : 'Paper'}
            </Text>
          </TouchableOpacity>
        </View>)
    }
    return views;
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Apply as Group'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()} />
        <View style={{ height: '100%', backgroundColor: colors.AppWhite }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{width: windowWidth ,backgroundColor: colors.LightBlueColor }}>
              <this.viewSelectedImages />
              <Text style={styles.titleStyle}>
                42% of the people do not recycle because they do not where to recycle. When you add a bin, it helps others to recycle
              </Text>
              <View style={{height: 10}}/>
            </View>
            <View style={{ backgroundColor: colors.AppWhite, padding: 16, height: '100%' }}>
              <Text style={commonStyles.textLabelStyle}>Bin Location</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <TextInput style={styles.addTxtFieldStyle} placeholder={'Bin Location'} />
                <Image style={{ width: 20, height: 20 }} source={mapLocationIcon} resizeMode={'contain'} />
              </View>
              <View style={{height: 20}}/>
              <Text style={commonStyles.textLabelStyle}>Bin Type</Text>
              <View style={styles.groupViewContainerStyle}>
                <this.renderGroup />
              </View>
              <View style={{ height: 40 }} />
              <TouchableOpacity style={commonStyles.themeBtnStyle} onPress={() => this.setState({ showModal: true })}>
                <Text style={commonStyles.themeTitleStyle}>Submit Bin</Text>
              </TouchableOpacity>
            </View>
          </ScrollView >
        </View>
      </SafeAreaView>
    );
  }
}
const imagePickerHeight  = 100;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.AppTheme
  },
  imageSelectedStyle: {
    height: imagePickerHeight,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerPlaceholderStyle: {
    marginTop: 20,
    height: imagePickerHeight,
    width: '100%',
    justifyContent: 'center',
  },
  SelectedImageStyle: {
    height: imagePickerHeight,
    width: 100,
    alignSelf: 'center',
  },
  groupViewContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  segmentViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  titleStyle:{
    fontSize: 14,
    fontWeight: '600',
    color: colors.AppGray,
    textAlign: 'center',
    marginTop: 10,
    padding: 16,
  },
  imageThumbnail : {
    width: 35,
    height: 35,
  },
  addTxtFieldStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.AppGray,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: colors.LightUltraGray,
    marginTop: 10,
    width: '90%',
    marginRight: 10,
  },
});