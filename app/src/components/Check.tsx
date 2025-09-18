import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Check() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Check Component
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#b91c1c',
    fontWeight: 'bold',
  },
});
