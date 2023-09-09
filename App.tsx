import 'react-native-reanimated';
import 'react-native-gesture-handler';
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
import {LogBox, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from 'react-native-config';

const HomeStack = createStackNavigator();
const MemberStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const navigation = useNavigation<any>();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackAccessibilityLabel: 'header-back',
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Counters" component={CounterScreen} />
      <HomeStack.Screen
        name="Members"
        component={MemberListScreen}
        options={{
          headerTitle: () => <Text testID="memberListHeader">Members</Text>,
          headerRight: ({}) => (
            //@ts-ignore
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MembersTab', {screen: 'AddMember'})
              }>
              <AntDesign
                // eslint-disable-next-line react-native/no-inline-styles
                style={{paddingRight: 15}}
                name="pluscircle"
                size={25}
                testID="addMemberIcon"
                accessibilityLabel="addMemberLabel"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Images"
        component={ImagesScreen}
        options={{
          headerTitle: () => <Text testID="citiesHeader">Cities</Text>,
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Cities',
        }}
      />
      <HomeStack.Screen name="Animation" component={AnimationScreen} />
      <HomeStack.Screen name="Extras" component={ExtrasScreen} />
    </HomeStack.Navigator>
  );
};

const MemberNavigator = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  console.log('🚀 ~ file: App.tsx:81 ~ MemberNavigator ~ route:', route);

  return (
    <MemberStack.Navigator
      screenOptions={{
        headerBackAccessibilityLabel: 'header-back',
      }}>
      <MemberStack.Screen
        name="Members"
        component={MemberListScreen}
        options={{
          headerTitle: () => <Text testID="memberListHeader">Members</Text>,
          headerRight: ({}) => (
            //@ts-ignore
            <TouchableOpacity onPress={() => navigation.navigate('AddMember')}>
              <AntDesign
                // eslint-disable-next-line react-native/no-inline-styles
                style={{paddingRight: 15}}
                name="pluscircle"
                size={25}
                testID="addMemberIcon"
                accessibilityLabel="addMemberLabel"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <MemberStack.Screen
        name="ShowMember"
        component={ShowMemberScreen}
        options={{
          headerTitle: () => (
            <Text testID="showMemberHeader">
              {/* @ts-ignore */}
              {`Member ${route?.params?.params.id}`}
            </Text>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EditMember', {
                  //@ts-ignore
                  id: route?.params?.params.id,
                })
              }>
              <FontAwesome name="pencil" size={25} testID="editMemberIcon" />
            </TouchableOpacity>
          ),
        }}
      />
      <MemberStack.Screen
        name="AddMember"
        component={AddMemberScreen}
        options={{
          headerTitle: () => <Text testID="addMemberHeader">Add Member</Text>,
          headerTitleAlign: 'center',
        }}
      />
      <MemberStack.Screen
        name="EditMember"
        component={EditMemberScreen}
        options={{
          headerTitle: () => (
            <Text testID="editMemberHeader">
              {/* @ts-ignore */}
              {`Edit Member ${route?.params?.params.id}`}
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </MemberStack.Navigator>
  );
};

const App = () => {
  if (Config.ENV === 'detox') {
    LogBox.ignoreAllLogs();
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <MemberProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
              name="HomeTab"
              component={HomeNavigator}
              options={{
                title: 'Home',
                tabBarIcon: () => (
                  <FontAwesome5
                    name="home"
                    size={20}
                    testID="homeNavigationImage"
                  />
                ),
                tabBarAccessibilityLabel: 'Home',
                tabBarTestID: 'homeNavigationSection',
              }}
            />
            <Tab.Screen
              name="Images"
              component={ImagesScreen}
              options={{
                headerTitle: () => <Text testID="citiesHeader">Cities</Text>,
                headerShown: true,
                headerTitleAlign: 'center',
                title: 'Cities',
                tabBarAccessibilityLabel: 'Cities',
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name="wallet-membership"
                    size={20}
                    testID="citiesNavigationImage"
                  />
                ),
                tabBarTestID: 'citiesNavigationSection',
              }}
            />
            <Tab.Screen
              name="MembersTab"
              component={MemberNavigator}
              options={{
                tabBarTestID: 'membersNavigationSection',
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name="wallet-membership"
                    size={20}
                    testID="membersNavigationImage"
                  />
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
