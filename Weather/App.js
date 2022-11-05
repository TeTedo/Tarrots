import { View, StyleSheet, Text } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 88,
    fontWeight: "500",
  },
  weather: {
    flex: 2,
  },
  day: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    fontSize: 130,
  },
  description: {
    fontSize: 40,
  },
});
