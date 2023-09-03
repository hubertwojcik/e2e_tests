/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SplashScreen from 'react-native-splash-screen';
import {MemberProvider} from './src/context/MemberContext';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import AnimationScreen from './src/screens/AnimationScreen';
import MemberListScreen from './src/screens/memberScreens/MemberListScreen';
import ShowMemberScreen from './src/screens/memberScreens/ShowMemberScreen';
import AddMemberScreen from './src/screens/memberScreens/AddMemberScreen';
import EditMemberScreen from './src/screens/memberScreens/EditMemberScreen';
import ExtrasScreen from './src/screens/ExtrasScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

const HomeStack = createNativeStackNavigator();
const MemberStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Counters" component={CounterScreen} />
      <HomeStack.Screen
        name="Members"
        component={MemberListScreen}
        options={{
          headerRight: ({}) => (
            //@ts-ignore
            <TouchableOpacity onPress={() => navigation.navigate('AddMember')}>
              <AntDesign
                // eslint-disable-next-line react-native/no-inline-styles
                style={{paddingRight: 15}}
                name="pluscircle"
                size={25}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen name="Images" component={ImagesScreen} />
      <HomeStack.Screen name="Animation" component={AnimationScreen} />
      <HomeStack.Screen name="Extras" component={ExtrasScreen} />
    </HomeStack.Navigator>
  );
};

const MemberNavigator = () => (
  <MemberStack.Navigator>
    <MemberStack.Screen name="Members" component={MemberListScreen} />
    <MemberStack.Screen name="ShowMember" component={ShowMemberScreen} />
    <MemberStack.Screen name="AddMember" component={AddMemberScreen} />
    <MemberStack.Screen name="EditMember" component={EditMemberScreen} />
  </MemberStack.Navigator>
);

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <MemberProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="HomeTab"
              component={HomeNavigator}
              options={{
                tabBarIcon: () => <FontAwesome5 name="home" size={20} />,
                tabBarAccessibilityLabel: 'Home',
              }}
            />
            <Tab.Screen name="Images" component={ImagesScreen} />
            <Tab.Screen
              name="MembersTab"
              component={MemberNavigator}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="wallet-membership" size={20} />
                ),
                tabBarAccessibilityLabel: 'Members',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </MemberProvider>
    </GestureHandlerRootView>
  );
};

export default App;
