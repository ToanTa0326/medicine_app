import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductImg from "../../assets/product.png";
import Layout from "../common/Layout/Layout";
import STYLES from "../../constant/styles";

const DrugList = () => {
  const renderProducts = () => {
    const products = [];
    for (let index = 1; index < 29; index++) {
      products.push({
        id: index,
        image: ProductImg,
        name: "Product" + index,
        volume: "75ml",
        description: {
          define:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          warning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          avoid:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          interaction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      });
    }
    return products;
  };

  const renderRow = ({ item, index }) => {
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate("MedicineNavigator", { screen: "DrugDetails", props: item })}
    >
      <Image source={item?.image} />
      <Text style={styles.itemText}>{`${item?.name} ${index}`}</Text>
      <Text style={styles.itemVolume}>{item.volume}</Text>
    </Pressable>;
  };

  return (
    <Layout>
      {/* <ScrollView style={styles.productList}> */}
      <FlatList data={renderProducts()} renderItem={renderRow} keyExtractor={(item) => item.id} numColumns={3} />
      {/* </ScrollView> */}
    </Layout>
  );
};

export default DrugList;

const styles = StyleSheet.create({
  productList: {
    flex: 1,
    paddingTop: 20,
  },
  itemContainer: {
    maxWidth: "calc(100% - 16px / 3)",
    padding: 20,
    borderRadius: 12,
    borderColor: "#E8F3F1",
    borderWidth: 2,
  },
  itemText: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: 16,
  },
  itemVolume: {
    color: STYLES.gray,
  },
});
