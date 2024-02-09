import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import Btn from "../../../../component/Btn";
import { useNavigation } from "@react-navigation/native";

export const EditProfile = () => {
  const navigation = useNavigation<any>();
  const [mobileNumber, setMobileNumber] = useState("1234567890");
  const [email, setEmail] = useState("example@gamil.com");
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  const onClickBack = () => {
    navigation.goBack();
  };

  const onSaveChanges = () => {
    // Handle saving changes here
    console.log("Changes saved");
  };

  return (
    <View style={styles.container}>
      {/* header section ------> */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onClickBack}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../../../public/images/next.png")}
            style={{ height: 30, width: 30, transform: [{ rotate: "180deg" }] }}
          />
          <Text style={{ fontSize: 18, fontWeight: "800" }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* main section ---------> */}
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.root}>
          {/* profile pic section --------> */}
          <View style={styles.profilePic}>
            <Image
              source={require("../../../../../public/images/image1.jpg")}
              style={{ height: 100, width: 100, borderRadius: 50 }}
            />
            <TouchableOpacity>
              <Text>change Photo</Text>
            </TouchableOpacity>
          </View>

          {/* profile information section -------> */}
          <View style={styles.profileInformation}>
            <View style={{ width: "90%", marginTop: 20 }}>
              <Text>Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="phone"
                keyboardType="numeric"
                placeholderTextColor="grey"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>
            <View style={{ width: "90%", marginTop: 20 }}>
              <Text>Email </Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="grey"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "700" }}>
            Personal Information
          </Text>

          <View style={styles.profileInformation}>
            <View style={{ width: "90%", marginTop: 20 }}>
              <Text>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="grey"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            <View style={{ width: "90%", marginTop: 20 }}>
              <Text>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="grey"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
            <Btn
              btnLabel="Save Change"
              bgColor="grey"
              textColor="#fff"
              onPress={onClickBack}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    alignItems: "center",
  },
  header: {
    height: 100,
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  root: {
    height: "auto",
    width: "100%",
    justifyContent: "center",
  },
  profilePic: {
    height: 150,
    width: "100%",
    backgroundColor: "rgba(145, 148, 163, 1.00)",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  profileInformation: {
    height: "auto",
    width: "100%",
    backgroundColor: "#f5f5f5",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "grey",
    height: 40,
    borderRadius: 10,
  },
});
