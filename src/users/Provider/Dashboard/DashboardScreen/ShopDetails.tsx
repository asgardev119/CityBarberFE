import React from "react";
import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import BookedAppointment from "../DashboardComponent/BookedAppointment";
import Header from "../../../../component/Header";

const ShopDetails = () => {
  return (
    <View>
      <Header name="provider" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <BookedAppointment />

          {/* <View>
            <View
              style={{ width: "100%", height: "auto", overflow: "visible" }}
            >
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              ></ScrollView>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "auto",
    width: "100%",
    marginBottom: 200,
  },
});
export default ShopDetails;
