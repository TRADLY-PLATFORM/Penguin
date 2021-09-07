
import React, { Component } from 'react';
import {
  Alert, FlatList,Text,Image,
  View,StyleSheet, SafeAreaView,
  TouchableOpacity,ScrollView} from 'react-native';
import NavigationRoots from '../../../Constants/NavigationRoots';
import HeaderView from '../../../Components/Header'
import colors from '../../../CommonClasses/AppColor';
import locationPermission from '../../../Helper/LocationPermission';
import RNLocation from 'react-native-location'
import commonStyles from '../../../StyleSheets/CommonStyleSheet';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const origin = { latitude: 30.68825, longitude: 76.6924 };
const destination = { latitude: 30.7051, longitude: 76.68154 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyBAV63gkOE0d0eSV_3rIagJfzMwDcbzPnM';
export default class BinMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {},
      selectSegmentTab: 0,
      markers: [{
          coordinates: {
              latitude: 30.68825,
              longitude: 76.6924
          },
      },
      {
          coordinates: {
              latitude: 30.7051,
              longitude: 76.68154
          },
      }]
    }
    locationObject = new locationPermission()
  }
  componentDidMount() {
    // locationObject.allowLocationPermission()
    this.getCurrentLocation()
  }
  getCurrentLocation = () => {
    RNLocation.getLatestLocation({ timeout: 60000 }) .then(latestLocation => {
        //  this.setState({currentLocation:{ latitude: latestLocation['latitude'],  longitude: latestLocation['longitude']}})
    })
}
  /*  Buttons   */
  signUpBtnAction() {
    this.props.navigation.navigate(NavigationRoots.SignUp);
  }
  selectSegmentBtnAction = ({ id }) => {
    this.setState({ selectSegmentTab: id })
  }
  /*  UI   */
  renderMapView = () => {
    return <View style={styles.containerMapStyle}>
        <MapView
            // provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}
            initialRegion={{
                latitude: 30.68825,
                longitude: 76.6924,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}  >
            {this.state.markers.map(marker =>
            (
                <Marker coordinate={marker.coordinates} pinColor={colors.Appgreen}
                 />
            ))
            }
            <Marker coordinate={this.state.currentLocation}  image = {require('../../../assets/logo.png')} />
        </MapView>
    </View>
  }
  renderSegmentBar = () => {
    return (<View style={{ margin: 5 }}>
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
      <TouchableOpacity onPress={() => this.selectSegmentBtnAction({ id: index })} style={this.state.selectSegmentTab == index ? commonStyles.unSelectedViewStyle : commonStyles.selectedViewStyle }>
        <Text style={{ color: this.state.selectSegmentTab == index ? colors.AppWhite : colors.AppTheme, fontSize: 12, fontWeight: '500' }}>
          {index == 0 ? 'All' : 'Paper'}
        </Text>
      </TouchableOpacity>
    </View>
  }
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <View style={{backgroundColor: colors.AppWhite, flex: 1}}>
          <HeaderView title={'Bin Map'} />
          <this.renderMapView />
          <View style={{backgroundColor: colors.AppWhite, flex: 1, padding: 10,}}>
            <this.renderSegmentBar />
            <View style={{ height: 20 }} />
              <TouchableOpacity style={commonStyles.themeBtnStyle} onPress={() => this.props.navigation.navigate(NavigationRoots.AddBinMap)}>
                <Text style={commonStyles.themeTitleStyle}>Add bin in your location</Text>
              </TouchableOpacity>
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
  containerMapStyle: {
    margin:0,
    height: "70%",
    width: "100%",
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  mapStyle: {
    position: 'absolute',
    marginTop: 0,
    height: "100%",
    ...StyleSheet.absoluteFillObject,
    borderRadius: 5
  },
  segmentViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});