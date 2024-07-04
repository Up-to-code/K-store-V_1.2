import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../config";
import CartScreen from "../screens/CartScreen";
import UserSettingsScreen from "../screens/UserSetingsScreen";
import { View } from "react-native";
import SearchScreen from "../screens/Search";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export const AppStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: "K-Store",
        headerRight: () => (
          <>
            <View style={{ marginRight: 20, flexDirection: "row", gap: 10 }}>
              <Feather
                name="search"
                size={24}
                style={{ marginRight: 20 }}
                color={Colors.sacend}
                onPress={() => navigation.navigate("Search")}
              />
              <Feather
                name="shopping-cart"
                size={24}
                style={{ marginRight: 20 }}
                color={Colors.sacend}
                onPress={() => navigation.navigate("Cart")}
              />
              <Feather
                name="user"
                size={24}
                style={{ marginRight: 20 }}
                color={Colors.sacend}
                onPress={() => navigation.navigate("UserSettings")}
              />
            </View>
          </>
        ),
      }}
    >
      <Stack.Screen name="Home" component={ProductListScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="UserSettings" component={UserSettingsScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
