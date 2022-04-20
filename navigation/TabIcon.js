import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants/theme";

export default function TabIcon({ focused, icon, label, isTrade = false }) {
  if (isTrade) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: COLORS.black,
        }}
      >
        <Image
          source={icon}
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: COLORS.white,
            marginTop: 5,
            ...FONTS.h4,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={icon}
          style={{
            width: 25,
            height: 25,
            resizeMode: "cover",
            tintColor: focused ? COLORS.white : COLORS.lightGray,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.lightGray,
            marginTop: 5,
            ...FONTS.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
