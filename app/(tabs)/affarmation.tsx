import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { moderateScale } from 'react-native-size-matters';



export default function affarmation() {
  return (
    <View className='flex-1'>
      <AppGradient colors={['#2e1f58','#54426b','#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>
            <Text className='text-zinc-50 text-3xl font-bold'>Change your believe with affirmation</Text>
        </ScrollView>
      </AppGradient>
    </View>
  )
}