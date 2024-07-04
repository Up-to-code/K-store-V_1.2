import React, { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export const CartScreen = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 1,
    },
  ]);

  const [total, setTotal] = useState(
    products.reduce((acc, product) => acc + product.price, 0)
  );

  const [count, setCount] = useState(
    products.reduce((acc, product) => acc + product.quantity, 0)
  );

  return (
    <View style={[styles.container]}>
      <FlashList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.Detels}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
          </View>
        )}
      />
      <Text>Total: {total}</Text>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
   width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",

  },
  Detels: {
    height: 100,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
  },
});
