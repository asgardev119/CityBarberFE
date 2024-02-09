import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DashboardProvider from "../DashboardProvider";
import { EditProfile } from "../DashboardScreen/EditProfile";

export const ProviderProfile = () => {
  const navigation = useNavigation<any>();

  const onEditProfile = () => {
    navigation.navigate(EditProfile);
  };

  const MenuLists = [
    {
      image: require("../../../../../public/images/barber.png"),
      title: "Available Seats",
      subTitle: "View All Available Seats ",
      icon: require("../../../../../public/images/next.png"),
      onPress: () => {
        navigation.navigate(EditProfile);
      },
    },

    {
      image: require("../../../../../public/images/hair-cut-tool.png"),
      title: "Available Services",
      subTitle: " View all your Available Services ",
      icon: require("../../../../../public/images/next.png"),
      onPress: () => {
        alert("Available Services");
      },
    },

    {
      image: require("../../../../../public/images/hourglass.png"),
      title: "Available Time",
      subTitle: "View all your Available times ",
      icon: require("../../../../../public/images/next.png"),
      onPress: () => {
        alert("Available Time");
      },
    },

    {
      image: require("../../../../../public/images/setting.png"),
      title: "Account and Settings",
      subTitle: "  Lcations , Payments , Permission",
      icon: require("../../../../../public/images/next.png"),
      onPress: () => {
        alert("Account and Settings");
      },
    },

    {
      image: require("../../../../../public/images/logout.png"),
      title: "Logout",
      subTitle: "Account Logout",
      // icon: require("../../../../../public/images/next.png"),
      onPress: () => {
        alert("Account Logout");
      },
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header code------->  */}
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "800" }}>Hi Asgar</Text>
          <TouchableOpacity
            onPress={onEditProfile}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 10, color: "grey" }}>Edit Profile</Text>
            <Image
              source={require("../../../../../public/images/next.png")}
              style={{ height: 12, width: 12, tintColor: "grey" }}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={require("../../../../../public/images/image1.jpg")}
          style={{ height: 60, width: 60, borderRadius: 50 }}
        />
      </View>
      {/* Menu code ---------> */}
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.contents}>
          {MenuLists.map((obj, index) => {
            return (
              <TouchableOpacity
                style={styles.btn}
                onPress={obj.onPress}
                key={index}
              >
                <View style={styles.btncontent}>
                  <Image source={obj.image} style={{ height: 30, width: 30 }} />
                  <View>
                    <Text style={{ fontSize: 16 }}>{obj.title}</Text>
                    <Text style={{ fontSize: 12 }}>{obj.subTitle}</Text>
                  </View>
                </View>
                <Image source={obj.icon} style={{ height: 20, width: 20 }} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={[styles.contents, { height: 500 }]}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },

  header: {
    height: 80,
    width: "100%",
    marginTop: 40,
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 100,
    elevation: 20,
    shadowColor: "black",
    shadowOpacity: 10,
    backgroundColor: "#fff",
  },

  contents: {
    height: "auto",
    width: "100%",
    backgroundColor: "#F8F8FF",
    marginTop: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    // gap: 10,
    padding: 5,
  },
  btn: {
    height: 80,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },

  btncontent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    width: "80%",
  },
});
