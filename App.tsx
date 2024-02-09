import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import ResetPassword from "./src/auth/ResetPassword";
import Signup from "./src/users/Signup";
import Consumer from "./src/users/Consumer/Consumer";
import Provider from "./src/users/Provider/Provider";
import Login from "./src/auth/Login";
import ForgotPassword from "./src/auth/ForgotPassword";
import DashboardProvider from "./src/users/Provider/Dashboard/DashboardProvider";
import { AddShop } from "./src/users/Provider/Dashboard/DashboardScreen/AddShop";
import Help from "./src/screens/Help";
import { ProviderProfile } from "./src/users/Provider/Dashboard/DashboardScreen/ProviderProfile";
import { Location } from "./src/screens/Location";
import { SlotService } from "./src/users/Provider/Dashboard/DashboardScreen/SlotService";
import { EditShopDetails } from "./src/users/Provider/Dashboard/DashboardScreen/EditShopDetails";
import ShopDetails from "./src/users/Provider/Dashboard/DashboardScreen/ShopDetails";
import { EditProfile } from "./src/users/Provider/Dashboard/DashboardScreen/EditProfile";
import { AddSeatsScreen } from "./src/users/Provider/Dashboard/DashboardScreen/AddSeatsScreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DashboardProvider"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Provider" component={Provider} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Consumer" component={Consumer} />
        <Stack.Screen name="DashboardProvider" component={DashboardProvider} />
        <Stack.Screen name="AddShop" component={AddShop} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="ProviderProfile" component={ProviderProfile} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="SlotService" component={SlotService} />
        <Stack.Screen name="EditShopDetails" component={EditShopDetails} />
        <Stack.Screen name="ShopDetails" component={ShopDetails} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="AddSeatsScreen" component={AddSeatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
