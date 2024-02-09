import React, { useState } from "react";
import Background from "../../../../component/Background";
import Dashboard from "../DashboardProvider";
import Login from "../../../../auth/Login";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import InputField from "../../../../component/InputField";
import Btn from "../../../../component/Btn";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Header from "../../../../component/Header";

export const AddShop = ({ onSubmit }: any) => {
  const navigation = useNavigation<any>();

  // states for  input Fields Names ---->

  const [details, setDetails] = useState({
    shopName: "",
    ownerName: "",
  });
  
  // sates for SelectTime -------->

  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [showOpeningPicker, setShowOpeningPicker] = useState(false);
  const [showClosingPicker, setShowClosingPicker] = useState(false);

  // time type string for api integration --->

  const [openingTimeString, setOpeningTimeString] = useState("");
  const [closingTimeString, setClosingTimeString] = useState("");

  // sate for save image---->

  const onOpeningTimeChange = (_event: any, selectedTime: Date | undefined) => {
    const currentTime = selectedTime || openingTime;
    setShowOpeningPicker(false);
    setOpeningTime(currentTime);
    setOpeningTimeString(formatTime(currentTime));
  };

  const onClosingTimeChange = (_event: any, selectedTime: Date | undefined) => {
    const currentTime = selectedTime || closingTime;
    setShowClosingPicker(false);
    setClosingTime(currentTime);
    setClosingTimeString(formatTime(currentTime));
  };

  const formatTime = (time: any) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    // const formattedHours = hours % 24 || 24;
    // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    // // const period = hours >= 12 ? "PM" : "AM";
    // return `${formattedHours}:${formattedMinutes}`;
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const period = hours >= 12 ? "PM" : "AM";
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const handleInputChange = (field: string, value: any) => {
    setDetails((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  return (
    <View>
      <Header name="Provider" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}> Add Shop Details</Text>
        <View style={styles.root}>
          <View style={styles.inputContainer}>
            <Text>Shop Address</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderBottomWidth={1}
              value={details.ownerName}
              onChangeText={(text: any) => handleInputChange("ownerName", text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Shop Name</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderColor="grey"
              borderBottomWidth={1}
              value={details.shopName}
              onChangeText={(text: any) => handleInputChange("shopName", text)}
            />
          </View>

          {/* select time Picker-------> */}

          <View style={styles.inputContainer}>
            {showOpeningPicker && (
              <DateTimePicker
                value={openingTime}
                mode="time"
                is24Hour={false}
                display="spinner"
                onChange={onOpeningTimeChange}
              />
            )}
            <TouchableOpacity onPress={() => setShowOpeningPicker(true)}>
              <Text>Opening Time </Text>

              {openingTime ? (
                <Text
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 1,
                  }}
                >
                  {openingTimeString}
                </Text>
              ) : (
                ""
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            {showClosingPicker && (
              <DateTimePicker
                value={closingTime}
                mode="time"
                is24Hour={false}
                display="spinner"
                onChange={onClosingTimeChange}
              />
            )}

            <TouchableOpacity onPress={() => setShowClosingPicker(true)}>
              <Text>Closing Time </Text>
              {closingTime && (
                <Text
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 1,
                  }}
                >
                  {closingTimeString}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 30, width: 30 }}
                source={require("../../../../../public/images/CameraIcon.png")}
                tintColor={"tomato"}
              />
              <Text style={{ fontWeight: "500" }}>Choose Image</Text>
            </TouchableOpacity>
          </View>
          <Btn
            btnLabel={"submit"}
            bgColor={"tomato"}
            textColor={"#fff"}
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },

  root: {
    flexDirection: "column",
    height: 700,
    width: 400,
    backgroundColor: "#fff",
    marginTop: 150,
    marginLeft: 10,
    borderRadius: 20,
    padding: 20,
  },

  inputContainer: {
    marginBottom: 30,
  },

  title: {
    width: "100%",
    height: "auto",
    fontSize: 24,
    position: "absolute",
    top: 100,
    fontWeight: "800",
    textAlign: "center",
    color: "black",
  },

  // modelView: {
  //   height: 300,
  //   width: "100%",
  //   // backgroundColor: "red",
  // },
});
