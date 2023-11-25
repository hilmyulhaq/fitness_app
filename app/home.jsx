import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilePage from "./ProfilePage";
import Exercises from "./exercises";
import ExerciseList from "../components/ExerciseList";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} edges={["top"]}>
      <StatusBar style="dark" />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: wp(5),
        }}
      >
        <View style={{ justifyContent: "space-y-2" }}>
          <Text
            style={{ fontSize: hp(4.5), fontWeight: "bold", color: "black" }}
          >
            READY TO
          </Text>
          <Text
            style={{
              fontSize: hp(4.5),
              fontWeight: "bold",
              color: "#FF007F",
            }}
          >
            WORKOUT
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfilePage");
              }}
            >
              <Image
                source={require("../assets/images/avatar.png")}
                style={{
                  height: hp(6),
                  width: hp(6),
                  borderRadius: hp(6) / 2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#E0E0E0",
              borderRadius: hp(5.5) / 2,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 3,
              borderColor: "#CCCCCC",
              height: hp(5.5),
              width: hp(5.5),
            }}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* image slider */}
      <View>
        <ImageSlider />
      </View>

      {/* body parts list */}
      <View style={{ flex: 1 }}>
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}

export default function Home() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
      <Drawer.Screen name="Exercises" component={ExerciseList} />
    </Drawer.Navigator>
  );
}
