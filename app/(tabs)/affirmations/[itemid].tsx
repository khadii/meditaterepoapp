import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/components/Models/affirmationcategories";
import AFFIRMATION_GALLERY from "@/constants/affarmation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";


export default function AffirmationPractice() {
  const { itemid } = useLocalSearchParams();
  const [affarmation, setAffarmation] = useState<GalleryPreviewData>();
  const[sentences, setSentences]=useState<string[]>([])
  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affarmationsData = AFFIRMATION_GALLERY[idx].data;
      const affarmationsTostart = affarmationsData.find(
        (a) => a.id === Number(itemid)
      );
      if (affarmationsTostart) {
        setAffarmation(affarmationsTostart);
        const affarmationArray = affarmationsTostart.text.split(".");
        /** remove last element if its an empty string */
        if(affarmationArray[affarmationArray.length-1]===''){
          affarmationArray.pop()
        }
        setSentences(affarmationArray)
        return;
      }
    }
  },[itemid]);

  return (
    <View className="flex-1">
      <ImageBackground
       resizeMode="cover"
        className="flex-1 w-full"
        source={affarmation?.image}
      >
        <AppGradient colors={["rgba(0,0,0,0.3),rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute left-6 top-16 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView className="mt-40" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
              {sentences?.map((text,index)=>(
                 <Text key={index} className="text-white text-3xl font-bold text-center mb-10 ">
                 {text}.
               </Text>
             ) )}
               
              </View>{" "}
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
