import React, { Component } from 'react';
import { StyleSheet, SafeAreaView ,LogBox,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import NavigationRoots from './Constants/NavigationRoots';
import Signin from './UI/User/SignIn';
import Signup from './UI/User/SignUp';
import VerifyPhone from './UI/User/VerifyPhoneNo';
import PhoneVerifications from './UI/User/PhoneVerification';
import OnBoarding from './UI/User/OnBoardings';
import bottomTabBar from './Components/BottomTabbar';
import Target from './UI/Recycle/Home/Target/Target';
import SetTarget from './UI/Recycle/Home/Target/SetTarget';
import CollectionHistory from './UI/Recycle/Profile/Collection/CollectionHistory';
import AddRecycleItems from './UI/Recycle/Home/AddRecycle/AddRecycleItem';
import RecycleGuides from './UI/Recycle/Home/RecycleGuide/RecycleGuide';
import ApplyGroups from './UI/Recycle/Home/ApplyGroup/ApplyGroup';
import InviteFriends from './UI/Recycle/Profile/InviteFriend/InviteFriend';
import AddBinMaps from './UI/Recycle/BinMap/AddBinMap/AddBinMap';


import AppColors from './CommonClasses/AppColor';

const Stack = createStackNavigator();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 'false',
      reload: true,
    }
  }
  componentDidMount() {
    LogBox.ignoreAllLogs(true)

  }
  navigationReturn = () => {
    return <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoots.BottomTabbar} screenOptions={{
        headerShown: false}}>
        <Stack.Screen name={NavigationRoots.OnBoardings} component={OnBoarding} />
        <Stack.Screen name={NavigationRoots.SignIn} component={Signin}
        options={{
          title: '',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }} />
        <Stack.Screen name={NavigationRoots.BottomTabbar} component={bottomTabBar}/>
        <Stack.Screen name={NavigationRoots.SignUp}component={Signup} />
        <Stack.Screen name={NavigationRoots.VerifyPhoneNo}component={VerifyPhone} />
        <Stack.Screen name={NavigationRoots.PhoneVerification}component={PhoneVerifications} />
        <Stack.Screen name={NavigationRoots.Target}component={Target} />
        <Stack.Screen name={NavigationRoots.SetTarget}component={SetTarget} />
        <Stack.Screen name={NavigationRoots.CollectionHistory}component={CollectionHistory} />
        <Stack.Screen name={NavigationRoots.AddRecycleItem}component={AddRecycleItems} />
        <Stack.Screen name={NavigationRoots.RecycleGuide}component={RecycleGuides} />
        <Stack.Screen name={NavigationRoots.ApplyGroup}component={ApplyGroups} />
        <Stack.Screen name={NavigationRoots.InviteFriends}component={InviteFriends} />
        <Stack.Screen name={NavigationRoots.AddBinMap}component={AddBinMaps} />

      </Stack.Navigator>
    </NavigationContainer>
  }
  render() {
    if (this.state.reload == false) {
      return <SafeAreaView style={styles.container}></SafeAreaView>
    } else {
      return (<View style={styles.navigationContainer}>
        <this.navigationReturn />
      </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:AppColors.AppTheme,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationContainer: {
    flex: 1,
    backgroundColor:AppColors.AppTheme,
  },
});