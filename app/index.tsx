import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

export default function app() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("@/assets/meditation-images/beach.webp")}
        resizeMode="cover"
        className="flex-1 w-full"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between  mt-10">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push("/nature")}
                title={"Get Started"}
              />
            </View>
          
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native", // or 'web' if you're targeting web as well
});
