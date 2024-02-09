import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AddShop } from "./DashboardScreen/AddShop";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { ProviderProfile } from "./DashboardScreen/ProviderProfile";
import { Location } from "../../../screens/Location";
import Help from "../../../screens/Help";
import ShopDetails from "./DashboardScreen/ShopDetails";

const DashboardProvider = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();
  const [showAddShop, setShowAddShop] = useState(true);

  const handleAddShopSubmit = () => {
    setShowAddShop(false);
  };

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        showAddShop ? (
          <AddShop onSubmit={handleAddShopSubmit} />
        ) : (
          <ShopDetails />
        )
      ) : selectedTab == 1 ? (
        <Location />
      ) : selectedTab == 2 ? (
        <Help />
      ) : (
        <ProviderProfile />
      )}

      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../../../../public/images/home.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 0 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../../../../public/images/location.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 1 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(2);
          }}
          style={styles.btn}
        >
          <Image
            source={require("../../../../public/images/CustomerSupport.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 2 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}
          style={styles.btn}
        >
          <Image
            source={require("../../../../public/images/user.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 3 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    width: "100%",
    height: heightPercentageToDP("8"),
    backgroundColor: "tomato",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  btn: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cartList: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardProvider;
