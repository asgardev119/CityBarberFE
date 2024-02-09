import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const usersData: { id: string; name: string; status: string }[] = [
  { id: "1", name: "John Doe", status: "Inactive" },
  { id: "2", name: "Samarth", status: "Active" },
  { id: "3", name: "Michael Johnson", status: "Inactive" },
  { id: "4", name: "Asgar", status: "Active" },
  { id: "5", name: "Ballu ", status: "Active" },
  { id: "6", name: "Tullu ", status: "Inactive" },
];

const Status = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

export const AddSeatsScreen = () => {
  
  const navigation = useNavigation<any>();
  const [users, setUsers] = useState(usersData);
  const [name, setName] = useState("Add new");
  const [openAddNew, setOpenAddNew] = useState(false);
  const [active, setActive] = useState("");

  const [openEdit, setOpenEdit] = useState(false);
  const [editUser, setEditUser] = useState({ id: "", name: "", status: "" });

  const onClickAddNew = () => {
    if (name != "Leave") {
      setName("Leave");
    } else {
      setName("Add New");
    }

    if (openAddNew) {
      setOpenAddNew(false);
    } else {
      setOpenAddNew(true);
    }
  };

  // Delete function code for a particular Row------->
  const deleteUser = (id: any) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  // Edit popUP Function ------>
  const saveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id == editUser.id ? { ...editUser } : user
    );
    setUsers(updatedUsers);
    setEditUser({ id: "", name: "", status: "" });
    setOpenEdit(false);
  };

  const onClickEdit = (user: any) => {
    setEditUser(user);
    setOpenEdit(true);
  };

  // Back Naviagtion Function------>
  const onClickBack = () => {
    navigation.goBack();
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
            style={{
              height: 30,
              width: 30,
              transform: [{ rotate: "180deg" }],
              tintColor: "#fff",
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "800", color: "#fff" }}>
            Available Seats
          </Text>
        </TouchableOpacity>
      </View>

      {/* Add new Barber Button  */}

      <TouchableOpacity style={styles.addNew} onPress={onClickAddNew}>
        <Text style={{ color: "#fff", textAlign: "center" }}>{name}</Text>
      </TouchableOpacity>

      {/* code for addnew Worker ---------> */}
      {openAddNew && (
        <View style={styles.barberInfoModel}>
          <TextInput
            placeholder="id"
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput placeholder="Name" style={styles.input} />

          <Dropdown
            labelField="label"
            valueField="value"
            style={styles.dropdown}
            data={Status}
            value={active}
            placeholder="Select Status"
            onChange={(item) => {
              setActive(item.value);
            }}
          />
          <TouchableOpacity style={styles.addNew} onPress={onClickAddNew}>
            <Text style={{ color: "#fff", textAlign: "center" }}>Save</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Edit Barber Details popup-----> */}

      {openEdit && (
        <View style={styles.barberInfoModel}>
          <TextInput
            placeholder="id"
            style={styles.input}
            keyboardType="numeric"
            value={editUser.id.toString()}
            onChangeText={(text) => setEditUser({ ...editUser, id: text })}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={editUser.name}
            onChangeText={(text) => setEditUser({ ...editUser, name: text })}
          />
          <Dropdown
            labelField="label"
            valueField="value"
            style={styles.dropdown}
            data={Status}
            value={editUser.status}
            placeholder="Select Status"
            onChange={(item) =>
              setEditUser({ ...editUser, status: item.value })
            }
          />

          <TouchableOpacity style={styles.addNew} onPress={saveUser}>
            <Text style={{ color: "#fff", textAlign: "center" }}>Save</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* menu list of all Barber --------> */}

      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.root}>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>ID</Text>
            <Text style={styles.headerCell}>Name</Text>
            <Text style={styles.headerCell}>Status</Text>
            <Text style={styles.headerCell}>Actions</Text>
          </View>
          {users.map((user) => (
            <View key={user.id} style={styles.row}>
              <Text style={styles.cell}>{user.id}</Text>
              <Text style={styles.cell}>{user.name}</Text>
              <Text
                style={[
                  styles.cell,
                  { color: user.status == "Active" ? "green" : "red" },
                ]}
              >
                {user.status}
              </Text>

              <View
                style={[
                  styles.cell,
                  { flexDirection: "row", justifyContent: "space-around" },
                ]}
              >
                <TouchableOpacity onPress={() => deleteUser(user.id)}>
                  <Image
                    source={require("../../../../../public/images/delete.png")}
                    style={{ height: 20, width: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onClickEdit(user)}>
                  <Image
                    source={require("../../../../../public/images/compose.png")}
                    style={{ height: 20, width: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
    backgroundColor: "grey",
  },

  container: {
    width: "auto",
    height: "auto",
    alignItems: "center",
    backgroundColor: "lightgrey",
    flex: 1,
    paddingTop: 40,
  },
  root: {
    height: "auto",
    width: "auto",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 10,
    marginTop: 10,
  },

  headerRow: {
    width: "auto",
    height: 40,
    backgroundColor: "#f2f2f2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerCell: {
    fontWeight: "bold",
    width: 100,
    height: "auto",
    textAlign: "center",
  },

  row: {
    height: "auto",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    borderColor: "lightgrey",
  },

  cell: {
    height: "auto",
    fontWeight: "bold",
    width: 100,
    borderBottomColor: "lightgrey",
    textAlign: "center",
    marginTop: 10,
  },

  addNew: {
    backgroundColor: "black",
    borderRadius: 20,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginRight: "auto",
    marginLeft: 20,
  },
  barberInfoModel: {
    height: "auto",
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    paddingVertical: 5,
  },
  input: {
    borderBottomWidth: 1,
    width: "90%",
    borderColor: "grey",
    color: "black",
  },
  dropdown: {
    width: "90%",
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});

export default AddSeatsScreen;
