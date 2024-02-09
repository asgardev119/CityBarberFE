import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { Component } from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const Header = ({ name}: any) => {
  const onCheck = () => {
    alert("setting ...");
  };
  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
          }}
        >
          hey
          <Text style={{ fontWeight: "800", fontSize: 24 }}> {name}</Text>
        </Text>

        <TouchableOpacity onPress={onCheck}>
          <Image
            source={require("../../public/images/setting.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: heightPercentageToDP("12"),
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    height: "auto",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    height: heightPercentageToDP("3"),
    width: widthPercentageToDP("6"),
    justifyContent: "center",
    tintColor: "#fff",
  },
});

export default Header;
