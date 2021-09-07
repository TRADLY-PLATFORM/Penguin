
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
import cameraIcon from '../../../../assets/camera.png';
import commonStyles from '../../../../StyleSheets/CommonStyleSheet';

import ImagePicker from 'react-native-image-crop-picker';

const windowWidth = Dimensions.get('window').width;

export default class AddRecycleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: 0,
      photo: null,
      updateUI: false,
      showModal:false,
    }
  }
  componentDidMount() {
  }
  /*  Buttons   */
  selectSegmentBtnAction(id){
    this.setState({ selectedGroup: id })
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
                  source={cameraIcon}
                  style={{ width: 30, height: 30, alignSelf: 'center' }}
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
    for (let a = 0; a < Items.length; a++) {
      let item = Items[a];
        views.push(<TouchableOpacity style={{padding: 5}} onPress={()=> this.selectSegmentBtnAction(a)}>
          <View style={a == this.state.selectedGroup ? styles.selectedGroupViewStyle : styles.groupViewStyle}>
            <Image style={styles.imageThumbnail} source={item['image']} resizeMode={'contain'}/>
              <View style={{height: 10}}/>
            <Text style={{textAlign: 'center', fontSize: 10}}>{`${item['name']}`}</Text>
          </View>
        </TouchableOpacity>)
    }
    return views;
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Apply as Group'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()} />
        <View style={{height: '100%', backgroundColor: colors.LightBlueColor}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ margin: 10, width: windowWidth - 20, height: imagePickerHeight }}>
              <this.viewSelectedImages />
            </View>
            <View style={{ backgroundColor: colors.AppWhite, height: '80%', padding: 16 }}>
              <Text style={commonStyles.textLabelStyle}>Name</Text>
              <TextInput style={commonStyles.addTxtFieldStyle} placeholder={'Enter Name'} />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Location</Text>
              <TextInput style={commonStyles.addTxtFieldStyle} placeholder={'Enter Location'} />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>About Group</Text>
              <TextInput
                style={commonStyles.txtViewStyle}
                placeholder={'Enter About Group'}
                multiline={true} />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Preferred Time</Text>
              <TextInput style={commonStyles.addTxtFieldStyle} placeholder={'Enter Preferred Time'} />
              <View style={{ height: 16 }} />
              <Text style={commonStyles.textLabelStyle}>Group Type</Text>
              <View style={styles.groupViewContainerStyle}>
                <this.renderGroup />
              </View>
              <View style={{ height: 20 }} />
              <TouchableOpacity style={commonStyles.themeBtnStyle} onPress={() => this.setState({ showModal: true })}>
                <Text style={commonStyles.themeTitleStyle}>Submit Item</Text>
              </TouchableOpacity>
              <View style={{ height: 60 }} />
            </View>
          </ScrollView >
        </View>
      </SafeAreaView>
    );
  }
}
const imagePickerHeight  = 200;
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
    height: imagePickerHeight,
    width: '100%',
    margin: 0,
    justifyContent: 'center',
    borderColor: colors.BorderColor,
    borderWidth: 2,
    borderRadius: 10,
  },
  SelectedImageStyle: {
    height: imagePickerHeight,
    width: windowWidth - 20,
    borderRadius: 10,
    borderColor: colors.BorderColor,
    borderWidth: 2,
  },
  groupViewContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
  },
  groupViewStyle: {
    borderRadius: 10,
    borderColor: colors.BorderColor,
    borderWidth: 2,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedGroupViewStyle: {
    borderRadius: 10,
    borderColor: colors.AppTheme,
    borderWidth: 2,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageThumbnail : {
    width: 35,
    height: 35,
  },
});


import bag from '../../../../assets/govtBuilding.png';
import dress from '../../../../assets/network.png';
import books from '../../../../assets/manager.png';
import paper from '../../../../assets/appartments.png';
import tenis from '../../../../assets/school.png';

var Items = [
  {name:'Govt Registered company',image: bag},
  {name:'Union & Associations',image: dress},
  {name:'Communit Head',image: books},
  {name:'Appartments',image: paper},
  {name:'College',image: tenis},
]
