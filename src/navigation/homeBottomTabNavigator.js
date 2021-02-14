import React from 'react'
import {Text} from 'react-native'
import Home from '../screens/Home'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator()

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: '#000',
            },
            activeTintColor: '#fff'
        }}>
            <Tab.Screen 
                name={"Home"} 
                component={Home} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={'home-circle'} size={30} color={color}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen 
                name={"Search"} 
                component={() => <Text>search</Text>}
                options={{
                    tabBarIcon: ({color}) => (
                        <EvilIcons name={'search'} size={30} color={color}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen 
                name={"Upload"} 
                component={Home} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name={'circle-with-plus'} size={50} color={color}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen 
                name={"Inbox"} 
                component={Home} 
                options={{
                    tabBarIcon: ({color}) => (
                        <EvilIcons name={'envelope'} size={30} color={color}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen 
                name={"Profile"} 
                component={Home} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={'account-circle'} size={30} color={color}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeBottomTabNavigator