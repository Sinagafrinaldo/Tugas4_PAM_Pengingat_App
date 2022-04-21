import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
// Screens

import Home from './home';
import Riwayat from './riwayat';
//Screen names
const homeName = "Beranda";
const riwayatName = "Riwayat";


const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        padding: 10,
                        height: 70,
                    },

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === riwayatName) {
                            iconName = focused ? 'book' : 'book-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}


                tabBarOptions={{
                    activeTintColor: '#00579c',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 12 },


                }}>

                <Tab.Screen name={homeName} component={Home}

                    options={{
                        headerShown: false
                    }} />
                <Tab.Screen name={riwayatName} component={Riwayat}
                    options={{
                        headerTitle: 'Riwayat',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#024d88',
                        },
                        headerTintColor: 'white'

                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;