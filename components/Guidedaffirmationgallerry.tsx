import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "./Models/affirmationcategories";
import { Link } from "expo-router";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
interface GuidedAffirmationGallery {
  title: string;
  previews: GalleryPreviewData[];
}
export default function Guidedaffirmationgallerry({
  title,
  previews,
}: GuidedAffirmationGallery) {
  return (
    <View className="my-5">
      <View>
        <Text className="mb-2 text-white font-bold text-xl">{title}</Text>
        <View className="space-y-2">
          <FlatList
            data={previews}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Link href={`/affirmations/${item.id}`} asChild>
                <Pressable>
                  <View className="h-36 w-32 rounded-md mr-4 md:h-44 md:w-60 lg:h-52 lg:w-80">
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      className="w-full h-full"
                    />
                  </View>
                </Pressable>
              </Link>
            )}
            horizontal
          />
        </View>
      </View>
    </View>
  );
  // here you are fetching a data in row that is horizontally and maping through it in the affararmation page flatlist is used to get the list of and array of data and style it so it gets the array list of each and you are mapping through it in the other page
}
