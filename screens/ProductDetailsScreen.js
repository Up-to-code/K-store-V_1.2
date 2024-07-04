import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      {/* <View style={styles.titleBox}>
        <Text style={styles.title}>{product.title}</Text>
      </View> */}
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={{ height: 100 }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 16,
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "green",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "black",
    padding: 16,
    alignItems: "center",
    marginVertical: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  titleBox: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default ProductDetailsScreen;
