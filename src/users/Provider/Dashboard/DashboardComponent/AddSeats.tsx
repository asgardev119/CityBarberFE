import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import React, { Component, useState } from "react";

const AddSeats = () => {
  const [sitOpen, setSitOpne] = useState(false);
  const Sits = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10"];
  const [selectedOptions, setSelectedOptions] = useState(["S1"]);
  const onSitSelect = () => {
    if (sitOpen) {
      setSitOpne(false);
    } else {
      setSitOpne(true);
    }
  };
  const handleOptionSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <View>
      <TouchableOpacity style={styles.appointments} onPress={onSitSelect}>
        <Image
          source={require("../../../../../public/images/Chair.png")}
          style={styles.imgbtn}
        />
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            justifyContent: "center",
            fontWeight: "800",
            position: "absolute",
            top: 50,
            left: 50,
          }}
        >
          Add seats
        </Text>
      </TouchableOpacity>
      {/* select seats popUp Page---------> */}

      {sitOpen && (
        <View style={styles.sitPopup}>
          {Sits.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option)}
              style={[
                {
                  backgroundColor: selectedOptions.includes(option)
                    ? "green"
                    : "gray",
                },
                styles.sits,
              ]}
            >
              <Image
                source={require("../../../../../public/images/Chair.png")}
                style={styles.imgbtn}
              />
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
          <Button title="Save" onPress={onSitSelect} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appointments: {
    height: 150,
    width: 200,
    backgroundColor: "#D2D4CE",
    margin: 5,
    borderRadius: 7,
    textAlign: "center",
  },
  imgbtn: {
    height: "100%",
    width: "100%",
    position: "absolute",
    opacity: 0.2,
  },
  sits: {
    height: 80,
    width: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sitPopup: {
    height: "auto",
    width: 400,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    gap: 10,
    zIndex: 5,
  },
});

export default AddSeats;
