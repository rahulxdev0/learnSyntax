import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false}}>
        <Tabs.Screen name='course' options={{ title: "Course"}}/>
        <Tabs.Screen name='subscription' options={{ title: "Subscription"}}/>
        <Tabs.Screen name='index' options={{ title: "Home"}}/>
        <Tabs.Screen name='expert' options={{ title: "Syntax Expert"}}/>
        <Tabs.Screen name='profile' options={{ title: "Profile"}}/>
    </Tabs>
  )
}