import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function Content({ children }: { children: any }) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, paddingHorizontal: 20, paddingVertical: 12 }}>
      {children}
    </SafeAreaView>
  )
}
