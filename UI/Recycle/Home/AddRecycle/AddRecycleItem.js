
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
  Modal,
} from 'react-native';
import NavigationRoots from '../../../../Constants/NavigationRoots';
import HeaderView from '../../../../Components/Header'
import colors from '../../../../CommonClasses/AppColor';
import cameraIcon from '../../../../assets/camera.png';
import cancelIcon from '../../../../assets/cancel.png';
import successIcon from '../../../../assets/successIcon.png';

import commonStyles from '../../../../StyleSheets/CommonStyleSheet';
import AppColor from '../../../../CommonClasses/AppColor';

import ImagePicker from 'react-native-image-crop-picker';

export default class AddRecycleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSegmentTab: 1,
      imagesArray: [],
      updateUI: false,
      showModal:false,
    }
    this.renderProgressView = this.renderProgressView.bind(this);
  }
  componentDidMount() {
  }
  /*  Buttons   */
  selectSegmentBtnAction = ({ id }) => {
    this.setState({ selectSegmentTab: id })
  }
  deleteImageButtonAction(id) {
    this.state.imagesArray.splice(id, 1)
    this.setState({updateUI: !this.state.updateUI});
  }
  /*  UI   */

  imagePicker() {
    ImagePicker.openPicker({
      height: 200,
      width: 200,
      cropping: false,
    }).then(image => {
      this.state.imagesArray.push(image.sourceURL)
      this.setState({updateUI: !this.state.updateUI})
    });
  }
  viewSelectedImages = () => {
    var views = [];
    for (let i = 0; i < this.state.imagesArray.length + 1; i++) {
      let imageObj = {};
      if (this.state.imagesArray[i]) {
        imageObj = this.state.imagesArray[i];
      }
      if (this.state.imagesArray[i]) {
        views.push(
          <View>
            <View style={styles.imageSelectedStyle}>
              <TouchableOpacity onPress={() => this.imagePicker()}>
                <View>
                  <Image
                    source={{ uri: this.state.imagesArray[i]}}
                    style={styles.SelectedImageStyle}
                    resizeMode={'cover'}
                  />
                  <TouchableOpacity
                    style={styles.deleteViewStyle}
                    onPress={() => this.deleteImageButtonAction(i)}>
                    <Image
                      resizeMode={'center'}
                      style={styles.deleteImageStyle}
                      source={cancelIcon}
                    />
                  </TouchableOpacity>
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
                    source={cameraIcon}
                    style={{ width: 30, height: 30, alignSelf: 'center' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>,
        );
      }
    }
    return views;
  };
  renderProgressView = () => {

    let views = [];
    for (let a = 0; a <= 4; a++) {
      var color1 = colors.AppGray;
      var color2 = colors.AppGray;
      var color3 = colors.AppGray;
      if (a == 1 || a == 0) {
        color1 = colors.lightTransparent;
        color2 = colors.AppGreen;
        color3 = colors.AppGreen;
      }
      if (a == 1) {
        color1 = colors.AppGreen;
        color2 = colors.AppGreen;
        color3 = colors.AppGray;
      views.push(
        <View style={styles.progessContainerViewStyle}>
          <Text style={styles.itemTxtStyle}>Item Submit</Text>
          <View style={{ height: 10 }} />
          <View style={styles.progessViewStyle}>
            <View style={{ backgroundColor: color1, height: 2, flex: 1 }} />
            <View style={{ backgroundColor: colors.LightGreenColor, height: 20, width: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: colors.AppGreen, height: 10, width: 10, borderRadius: 5 }} />
            </View>
            <View style={{ backgroundColor: color3, height: 2, flex: 1, }} />
          </View>
          <View style={{ height: 10 }} />
          <Text style={styles.itemTxtStyle}>05/08/2019{`\n`}11:07 AM</Text>
        </View>
      )
      } else {
        views.push(
          <View style={styles.progessContainerViewStyle}>
            <Text style={styles.itemTxtStyle}>Item Submit</Text>
            <View style={{ height: 10 }} />
            <View style={styles.progessViewStyle}>
              <View style={{ backgroundColor: color1, height: 2, flex: 1 }} />
              <View style={{ backgroundColor: color2, height: 10, width: 10, borderRadius: 5 }} />
              <View style={{ backgroundColor: color3, height: 2, flex: 1, }} />
            </View>
            <View style={{ height: 10 }} />
            <Text style={styles.itemTxtStyle}>05/08/2019{`\n`}11:07 AM</Text>
          </View>
        )
      }
    }
    return views;

    // return (<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //   <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
    //     <Text style={styles.itemTxtStyle}>Item Submitted</Text>
    //     <View style={{ height: 10 }} />
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
    //       <View style={{ backgroundColor: colors.lightTransparent, height: 2, flex: 1 }} />
    //       <View style={{ backgroundColor: colors.AppGreen, height: 10, width: 10, borderRadius: 5 }} />
    //       <View style={{ backgroundColor: colors.AppGreen, height: 2, flex: 1,}} />
    //     </View>
    //     <View style={{ height: 10 }} />
    //     <Text style={styles.itemTxtStyle}>05/08/2019{`\n`}11:07 AM</Text>
    //   </View>
    //   <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
    //     <Text style={styles.itemTxtStyle}>Processed</Text>
    //     <View style={{ height: 10 }} />
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
    //       <View style={{ backgroundColor: colors.AppGreen, height: 2, flex: 1 }} />
    //       <View style={{ backgroundColor: colors.LightGreenColor, height: 20, width: 20, borderRadius: 10, justifyContent: 'center',alignItems: 'center' }}>
    //         <View style={{ backgroundColor: colors.AppGreen, height: 10, width: 10, borderRadius: 5 }} />
    //       </View>
    //       <View style={{ backgroundColor: colors.AppGray, height: 2, flex: 1 }} />
    //     </View>
    //     <View style={{ height: 10 }} />
    //     <Text style={styles.itemTxtStyle}>05/08/2019{`\n`}11:07 AM</Text>
    //   </View>
    //   <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
    //     <Text style={styles.itemTxtStyle}>Rider coming</Text>
    //     <View style={{ height: 10 }} />
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
    //       <View style={{ backgroundColor: colors.AppGray, height: 2, flex: 1 }} />
    //       <View style={{ backgroundColor: colors.AppGray, height: 10, width: 10, borderRadius: 5 }} />
    //       <View style={{ backgroundColor: colors.AppGray, height: 2, flex: 1 }} />
    //     </View>
    //     <View style={{ height: 10 }} />
    //     <Text style={styles.itemTxtStyle}>05/08/2019{`\n`}11:07 AM</Text>
    //   </View>
    //   <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
    //     <Text style={styles.itemTxtStyle}>Collected</Text>
    //     <View style={{ height: 10 }} />
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
    //       <View style={{ backgroundColor: colors.AppGray, height: 2, flex: 1}} />
    //       <View style={{ backgroundColor: colors.AppGray, height: 10, width: 10, borderRadius: 5 }} />
    //       <View style={{ backgroundColor: colors.lightTransparent, height: 2, flex: 1 }} />
    //     </View>
    //     <View style={{ height: 10 }} />
    //     <Text style={styles.itemTxtStyle}>05/08/2019{`\n`}11:07 AM</Text>
    //   </View>
    // </View>)
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
        <View style={{height: '95%', backgroundColor: AppColor.LightBlueColor, marginTop: '12%',justifyContent: 'space-between'}}>
          <View style={{flex: 1}}>
            <View style={{ height: 20 }} />
            <Image source={successIcon} resizeMode={'contain'} style={styles.iconImageViewStyle} />
            <Text style={styles.successTitleTxtStyle}>Successfully {`\n`}submitted.</Text>
            <View style={{ height: 20 }} />
            <Text style={{fontSize:16,textAlign: 'center'}}>
              {`You can track the collection in the \n “my collection” section.`}
            </Text>
            <View style={styles.addressViewStyle}>
              <Text style={{fontSize:16,fontWeight: '600',padding: 16,}}> Collection Address</Text>
              <View style={{ height: 1, backgroundColor: colors.BorderColor, width: '100%', marginTop: 0}} />
              <View style={{padding:16}}>
                <Text style={{fontSize:14,fontWeight: '500'}}>Tan Lim</Text>
                <View style={{ height: 5 }} />
                <Text style={{fontSize:12,fontWeight: '500', color: colors.Lightgray}}>Penang Municipal Park Persiaran Kuari, George Town, 10450 
                  George Town, Pulau Pinang</Text>
              </View>
            </View>
            <View style={styles.addressViewStyle}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {this.renderProgressView()}
              </View>
            </View>
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
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Add Recycle Item'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()} />
        <View style={{ height: '100%', backgroundColor: colors.LightBlueColor }}>
          <ScrollView>
            <ScrollView horizontal={true}>
              <View style={{ width: '100%', height: 130, flexDirection: 'row-reverse', margin: 0, marginTop: 10 }}>
                <this.viewSelectedImages />
              </View>
            </ScrollView>
            <View style={{ padding: 16 }}>
              <Text style={{ color: colors.Lightgray, fontSize: 14, fontWeight: '400' }}>Max. # photos per product</Text>
              <Text style={styles.recyleItemTxtStyle}>See Recycling Guide</Text>
            </View>
            <View style={{ backgroundColor: colors.AppWhite, height: '70%', padding: 16 }}>
              <Text style={commonStyles.textLabelStyle}>Category</Text>
              <TextInput style={commonStyles.addTxtFieldStyle} placeholder={'Enter Category'}  />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Condition</Text>
              <TextInput  style={commonStyles.addTxtFieldStyle}  placeholder={'Enter Condition'}  />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Stock Quantity*</Text>
              <TextInput
                style={commonStyles.addTxtFieldStyle}
                keyboardType={'number-pad'}
                placeholder={'Enter Stock Quantity'}
              />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Preferred Time (applicable if there is Pickup)</Text>
              <TextInput
                style={commonStyles.addTxtFieldStyle}
                keyboardType={'number-pad'}
                placeholder={'Preferred Time (applicable if there is Pickup)'}
              />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Extra Comments</Text>
              <TextInput
                style={commonStyles.addTxtFieldStyle}
                placeholder={'Enter Extra Comments'}
              />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Address</Text>
              <TextInput
                style={commonStyles.txtViewStyle}
                placeholder={'Enter Address'}
                multiline={true}
              />
              <View style={{ height: 20 }} />
              <TouchableOpacity style={commonStyles.themeBtnStyle} onPress={() => this.setState({ showModal: true })}>
                <Text style={commonStyles.themeTitleStyle}>Submit Item</Text>
              </TouchableOpacity>
              <View style={{ height: 150 }} />
            </View>
          </ScrollView >
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
  dottedViewStyle: {
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  imageSelectedStyle: {
    height: 120,
    width: 120,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerPlaceholderStyle: {
    height: 120,
    width: 120,
    margin: 10,
    justifyContent: 'center',
    borderColor: colors.LightUltraGray,
    borderWidth: 2,
    borderRadius: 10,
  },
  deleteViewStyle: {
    height: 20,
    width: 20,
    marginLeft: 100,
    top: -125,
  },
  SelectedImageStyle: {
    height: 115,
    width: 115,
    marginTop:15,
    borderRadius: 10,
  },
  recyleItemTxtStyle: {
    marginTop: 20,
    color: colors.AppTheme,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.Lightgray,
  },
  txtFieldStyle: {
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
    height: 40,
  },
  iconImageViewStyle:{
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center',
  },
  successTitleTxtStyle:{ 
    marginTop: 20,
    color: colors.AppGray,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  addressViewStyle: {
    marginTop: 20,
    width: '90%',
    // height: 150,
    backgroundColor:colors.AppWhite,
    alignSelf: 'center',
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    borderRadius: 5,
    padding: 10,
  }, 
  itemTxtStyle: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  progessContainerViewStyle:{ 
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',
  }, 
  progessViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});