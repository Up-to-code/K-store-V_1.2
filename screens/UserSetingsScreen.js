import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { AuthenticatedUserContext } from "../providers";

export const UserSettingsScreen = () => {
  const { user } = useContext(AuthenticatedUserContext);
  console.log(user);
  return (
    <View>
      <Image source={{ uri: user?.photoURL }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text>{user?.displayName}</Text>
      <Text>Email: {user?.email}</Text>
    </View>
  );
};

export default UserSettingsScreen;

