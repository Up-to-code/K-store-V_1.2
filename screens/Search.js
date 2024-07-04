import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
        />
        <Ionicons
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.searchRow}>
        <Text style={styles.searchText}>Search Keyword 1</Text>
        <Button title="Unfollow" color="red" style={styles.unfollowButton} />
      </View>
      <View style={styles.searchRow}>
        <Text style={styles.searchText}>Search Keyword 2</Text>
        <Button title="Unfollow" color="red" style={styles.unfollowButton} />
      </View>
      <View style={styles.searchRow}>
        <Text style={styles.searchText}>Search Keyword 3</Text>
        <Button title="Unfollow" color="red" style={styles.unfollowButton} />
      </View>
    </View>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "black",
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  searchText: {
    fontSize: 16,
  },
  unfollowButton: {
    color: "red",
  },
});
