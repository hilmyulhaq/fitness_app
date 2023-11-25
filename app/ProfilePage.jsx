// ProfilePage.jsx
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import ProfileComponent from "../components/ProfileComponent";
import { DarkTheme } from "@react-navigation/native";

const ProfilePage = () => {
  const name = "Hilmy Dhiya Ulhaq";
  const nim = "21120121120008";
  const biography = "Aiming to constantly improve and become better";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ProfileComponent name={name} nim={nim} biography={biography} />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
