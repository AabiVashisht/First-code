import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './Pages/HomeScreen';
import SettingsScreen from './Pages/SettingScreen';
import Dashhboard from './Pages/Dashhboard';
import HireEmployee from './Pages/HireEmployee';
import EditEmployeeDetails from './Pages/EditEmployeeDetails';
import SearchEmployee from './Pages/SearchEmployee';
import EmployeeDetails from './Pages/EmployeeDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
          <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}/>

        </Stack.Navigator>


  );
}

function DashhboardStack() {
    return (
      <Stack.Navigator
        initialRouteName="Dashhboard"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Dashhboard"
          component={Dashhboard}
          options={{ title: 'Dashboard Page' }}/>

        <Stack.Screen
          name="HireEmployee"
          component={HireEmployee}
          options={{ title: 'HireEmployee Page' }}/>

        <Stack.Screen
          name="EditEmployeeDetails"
          component={EditEmployeeDetails}
          options={{ title: 'EditEmployeeDetails Page' }}/>

        <Stack.Screen
          name="SearchEmployee"
          component={SearchEmployee}
          options={{ title: 'SearchEmployee Page' }}/>

        <Stack.Screen
          name="EmployeeDetails"
          component={EmployeeDetails}
          options={{ title: 'EmployeeDetails Page' }}/>

      </Stack.Navigator>
    );
  }

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}/>

    </Stack.Navigator>
  );
}

function BottomNavi() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title:'Home',
            tabBarIcon: ({ color, size }) => {
              return (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
              )
          },
          }}  />

        <Tab.Screen
          name="DashhboardStack"
          component={DashhboardStack}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="Dashboard"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomNavi;
