import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList }
  from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './tabScreens/Home'
import LibraryScreen from './tabScreens/Library'
import StoreScreen from './tabScreens/Store'
import MoreScreen from './tabScreens/More'
import Notification from './stackScreens/Notification'
import LoginScreen from './stackScreens/Login';
import SignupScreen from './stackScreens/Signup';
import InfoScreen from './stackScreens/Info';
import AppSetting from './stackScreens/AppSetting';
import ReadingSettingScreen from './stackScreens/ReadingSetting';
import AboutScreen from './stackScreens/About';
import WordWise from "./stackScreens/WordWise";
import SearchScreen from "./stackScreens/SearchScreen";
import FastSearch from "./components/FastSearch";
import RomanceScreen from "./storeDrawer/Romance";
import MysteryScreen from "./storeDrawer/Mystery";
import ScienceScreen from "./storeDrawer/Science"
import LiteratureScreen from "./storeDrawer/Literature"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
      inactiveColor="black"
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'HOME',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26}
          />
        ),
      }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{
        tabBarLabel: 'LIBRARY',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="book-open-variant" color={color} size={26}
          />
        ),
      }} />
      <Tab.Screen name="Store" component={StoreDrawer} options={{
        tabBarLabel: 'STORE',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cart-outline" color={color} size={26}
          />
        ),
      }} />
      <Tab.Screen name="More" component={MoreScreen} options={{
        tabBarLabel: 'MORE',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26}
          />
        ),
      }} />
    </Tab.Navigator>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView{...props}>
      <DrawerItemList{...props} />
      <DrawerItem
        onPress={() => { props.navigation.closeDrawer() }}
        label="Close"
      />
    </DrawerContentScrollView>

  );
}

function StoreDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent{...props} />}>
      <Drawer.Screen name='StoreFront' component={StoreScreen} />
      <Drawer.Screen name='Romance' component={RomanceScreen} />
      <Drawer.Screen name='Mystery' component={MysteryScreen}
        options={{ title: "Mystery, Thriller" }}
      />
      <Drawer.Screen name='Science Fiction' component={ScienceScreen} />
      <Drawer.Screen name='Literature' component={LiteratureScreen} />
    </Drawer.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeTab" component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Notification" component={Notification}
      />
      <Stack.Screen name="Signup" component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AppSetting" component={AppSetting}
        options={{ title: "App Setting" }}
      />
      <Stack.Screen name="ReadingSetting" component={ReadingSettingScreen}
        options={{ title: "Reading Setting" }}
      />
      <Stack.Screen name="Info" component={InfoScreen}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="WordWise" component={WordWise}
        options={{ title: "Word Wise" }}
      />
      <Stack.Screen name="ManageFont" component={View}
        options={{ title: "Manage Additional Font" }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="FastSearch" component={FastSearch}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}
export default App;