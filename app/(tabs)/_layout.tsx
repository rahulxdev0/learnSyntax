import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function _layout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#6E3AFF', // Your brand purple
        tabBarInactiveTintColor: '#64748b', // Medium gray
        tabBarStyle: {
          backgroundColor: '#F8F9FF', // Off-white background
          borderTopWidth: 0,
          elevation: 5,
        }
      }}
    >
      <Tabs.Screen 
        name='index' 
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={size} 
              color={color} 
            />
          )
        }}
      />

      <Tabs.Screen 
        name='course' 
        options={{
          title: "Course",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'book' : 'book-outline'} 
              size={size} 
              color={color} 
            />
          )
        }}
      />

      <Tabs.Screen 
        name='subscription' 
        options={{
          title: "Subscription",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'wallet' : 'wallet-outline'} 
              size={size} 
              color={color} 
            />
          )
        }}
      />

      <Tabs.Screen 
        name='profile' 
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'person' : 'person-outline'} 
              size={size} 
              color={color} 
            />
          )
        }}
      />
      <Tabs.Screen 
        name='syntaxExpert' 
        options={{
          title: "SyntaxExpert",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'person-sharp' : 'person-outline'} 
              size={size} 
              color={color} 
            />
          )
        }}
      />

    </Tabs>
  )
}