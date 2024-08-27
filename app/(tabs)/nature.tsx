import { View, Text, FlatList, Pressable, ImageBackground, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/meditation-data";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

export default function Nature() {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
       <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
       <View className="mb-6 mt-10">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Steven
          </Text>
          <Text className="text-indigo-100 text-xl font-meduim">
            start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log("working")}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={meditationImages[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center w-full"
                >
                  <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)b "]} className="flex-1 justify-center items-center">
                
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
       </ScrollView>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  );
}
