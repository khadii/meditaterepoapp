import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {useLocalSearchParams} from 'expo-router'
import { GalleryPreviewData } from '@/components/Models/affirmationcategories';


export default function AffirmationPractice() {
  const {itemid}=useLocalSearchParams();
  const [affarmation,setAffarmation]=useState<GalleryPreviewData>()
  
  return (
    <View className='flex-1'>
      <Text>AffirmationPractice</Text>
    </View>
  )
}