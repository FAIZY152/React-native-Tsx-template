import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Check from "./src/components/Check";

export default function index() {
  return (
    <View style={styles.container}>
      <Check />
      <Text style={styles.title}>Hello React Native!</Text>
      <Text style={styles.subtitle}>StyleSheet is working!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb",
  },
  subtitle: {
    color: "#6b7280",
    marginTop: 16,
  },
});
