import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
interface custombutton {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyles?: string;
}

export default function CustomButton({
  onPress,
  title,
  textStyle,
  containerStyles,
}: custombutton) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl justify-center items-center min-h-[62px] ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
}
