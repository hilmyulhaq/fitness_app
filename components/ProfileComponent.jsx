// ProfileComponent.jsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileComponent = ({ name, nim, biography }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/avatar.png")}
        style={styles.image}
      />
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{name}</Text>

      <Text style={styles.label}>NIM:</Text>
      <Text style={styles.value}>{nim}</Text>

      <Text style={styles.label}>Biography:</Text>
      <Text style={styles.biography}>{biography}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4, // for Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 50, // Adjust the borderRadius to make it circular
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginBottom: 12,
  },
  biography: {
    fontSize: 14,
    color: "#555",
    textAlign: "center", // Center text within the container
  },
});

export default ProfileComponent;
