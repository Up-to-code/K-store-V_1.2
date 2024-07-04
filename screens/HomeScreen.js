import Constants from "expo-constants";
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../config";

export const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch(Constants.expoConfig?.extra?.api);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          onError={(e) => {
            console.error("Image failed to load:", e.nativeEvent.error);
          }}
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <FlashList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        estimatedItemSize={150}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  listContent: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    margin: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "center",
    marginTop: 8,
  },
  imagePlaceholder: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e1e1",
  },
  imagePlaceholderText: {
    color: "#aaa",
    fontSize: 16,
  },
  textContainer: {
    padding: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProductListScreen;
