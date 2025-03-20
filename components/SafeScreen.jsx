import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SafeScreen({children}) {
    const inset = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: inset.top}]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6E3AFF"
    }
})