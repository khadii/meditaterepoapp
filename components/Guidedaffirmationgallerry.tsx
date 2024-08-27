import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from './Models/affirmationcategories';
import { Link } from 'expo-router';

interface GuidedAffirmationGallery{
    title:string;
    previews:GalleryPreviewData[]
}
export default function Guidedaffirmationgallerry({title,previews}:GuidedAffirmationGallery) {
  return (
    <View className='my-5'>
      <View>
          <Text className='mb-2 text-white font-bold text-xl'>{}</Text>
          <View className='space-y-2'>
            <FlatList
            data={previews}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
                <Link href={`/affarmation/${item.id}`}asChild>
                </Link>
            )}
            
            />

          </View>
      </View>
    </View>
  )
}