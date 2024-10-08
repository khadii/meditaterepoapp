import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useLocalSearchParams} from 'expo-router'
import { GalleryPreviewData } from '@/components/Models/affirmationcategories';
import AFFIRMATION_GALLERY from '@/constants/affarmation-gallery';


export default function AffirmationPractice() {
  
  const {itemid}=useLocalSearchParams();
  const [affarmation,setAffarmation]=useState<GalleryPreviewData>()
  useEffect(()=>{
    for (let idx=0;idx<AFFIRMATION_GALLERY.length;idx++){
      const affarmationsData =AFFIRMATION_GALLERY[idx].data
    }
  })
  
  return (
    <View className='flex-1'>
      <Text>AffirmationPractice</Text>
    </View>
  )
}