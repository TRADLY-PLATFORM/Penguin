import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../UI/Recycle/Home/Home';
import Binmap from '../UI/Recycle/BinMap/BinMap';
import Profiles from '../UI/Recycle/Profile/Profile';
import Collectors from '../UI/Recycle/Collector/Collector'
import FindRecycleItems from '../UI/Recycle/FindRecycle/FindRecycleItem'
import colors from '../CommonClasses/AppColor';

const Tab = createBottomTabNavigator();

function AppTabbar() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
      activeTintColor:colors.AppTheme ,
      inactiveTintColor: '#c3d5fa',
      labelStyle: { fontSize: 12, color: 'black' }  
    }}  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          //Home
          iconName = focused    ? require('../assets/activeHome.png')  : require('../assets/unActiveHome.png');
        } else if (route.name === 'Bin Map') {
           //Deliveries
          iconName = focused    ? require('../assets/unActiveMap.png')  : require('../assets/unActiveMap.png');
        } else if (route.name === 'Collector') {
          //Deliveries
         iconName = focused    ? require('../assets/unActiveCollector.png')  : require('../assets/unActiveCollector.png');
        } else if (route.name === 'Profile') {
          //Deliveries
         iconName = focused    ? require('../assets/unActiveProfile.png')  : require('../assets/unActiveProfile.png');
        } else if (route.name === 'Recycle') {
          //More
          iconName = focused    ? require('../assets/recycle.png')  : require('../assets/recycle.png');
        }
        if (route.name === 'Recycle') {
          return  <Image source={iconName} style={{width: 30, height: 30}} />
        }else {
          return  <Image source={iconName} resizeMode={'contain'} style={{width: 18, height: 18}} />
        } 
      },
    })}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Bin Map" component={Binmap} />
      <Tab.Screen name="Recycle" component={FindRecycleItems} />
      <Tab.Screen name="Collector" component={Collectors} />
      <Tab.Screen name="Profile" component={Profiles} />     
    </Tab.Navigator>
  );
}
export default AppTabbar;