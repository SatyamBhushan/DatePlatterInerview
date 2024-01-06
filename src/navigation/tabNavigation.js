import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OptionAStackScreen, OptionBStackScreen, OptionCStackScreen, OptionDStackScreen } from './stackNavigation';
import images from '../res/images';
import globalColors from '../res/colors';
const Tab = createBottomTabNavigator();

const TabNavigationAllScreen = () => {


    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                headerTitle: '',
                focused: true,
                tabBarLabelStyle: { fontSize: 16, fontWeight: 700 },
                tabBarActiveTintColor: globalColors.globalThemes,
                tabBarInactiveTintColor: globalColors.globalText,
                tabBarItemStyle: { padding: 10 },
                tabBarIconStyle: { width: 40, height: 40 },
                tabBarStyle: { top: -1, height: 75, backgroundColor: globalColors.globalWhite },
                // title: '',
                headerRight: () => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginRight: 10, fontSize: 16, fontWeight: 600, color: globalColors.globalThemes }}>{'Date and time'}</Text>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ marginRight: 10, fontSize: 12, fontWeight: 600, color: globalColors.globalThemes, }}>{'\\/'}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                },
                headerLeft: () => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={images.homeIcon}
                                    style={{ height: 50, width: 50, marginLeft: 60 }}
                                />
                            </TouchableOpacity>

                        </View>
                    );
                },
                headerStyle: { backgroundColor: globalColors.globalWhite, height: 55, borderBottomColor: globalColors.globalThemes, elevation: 7, shadowColor: globalColors.globalBlack },

            }
            }

        >
            <Tab.Screen name="Option A"
                component={OptionAStackScreen}

                options={{

                    tabBarIcon: ({ focused }) => {

                        return (
                            <Image
                                resizeMode={'contain'}
                                style={focused ? { width: 30, height: 27, tintColor: globalColors.globalThemes } : { width: 30, height: 27, opacity: 0.5, }}
                                source={images.homeIcon}

                            />);

                    },


                }} />
            <Tab.Screen name="Option B" component={OptionBStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <Image
                                resizeMode={'contain'}
                                style={focused ? { width: 30, height: 27, tintColor: globalColors.globalThemes } : { width: 30, height: 27, opacity: 0.5, }}
                                source={images.homeIcon}

                            />);

                    },
                }} />
            <Tab.Screen name="Option C" component={OptionCStackScreen} options={{
                tabBarIcon: ({ focused }) => {

                    return (
                        <Image
                            resizeMode={'contain'}
                            style={focused ? { width: 30, height: 27, tintColor: globalColors.globalThemes } : { width: 30, height: 27, opacity: 0.5, }}
                            source={images.homeIcon}

                        />);

                },

            }} />
            <Tab.Screen name="Option D" component={OptionDStackScreen} options={{
                tabBarIcon: ({focused})=> {
                    
                    return (
                        <Image
                            resizeMode={'contain'}
                            style={focused?{ width: 30, height: 27,tintColor:globalColors.globalThemes}:{ width: 30, height: 27, opacity: 0.5,}}
                            source={images.homeIcon}

                        />);

                },

            }} />
        </Tab.Navigator>
    )

}
export default TabNavigationAllScreen;