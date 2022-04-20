import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MainLayout({ children }) {
  return <View style={{ flex: 1 }}>{children}</View>;
}

const styles = StyleSheet.create({});
