import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import Layout from "../common/Layout/Layout";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import DrugIcon from "../../assets/icons/drugs.png";
import InteractionIcon from "../../assets/icons/interaction.png";
import CallIcon from "../../assets/icons/call.png";

const SearchMedicine = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <Text style={styles.headerText}>Identify Medicine</Text>
      <View style={styles.container}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => navigation.navigate("MedicineNavigator", { screen: "Drugs" })}
        >
          <Image source={DrugIcon} />
          <Text style={styles.itemText}>Drugs</Text>
        </Pressable>
        <Pressable
          style={styles.itemContainer}
          onPress={() => navigation.navigate("MedicineNavigator", { screen: "Interaction" })}
        >
          <Image source={InteractionIcon} />
          <Text style={styles.itemText}>Interaction</Text>
        </Pressable>
        <Pressable style={styles.itemContainer} onPress={() => navigation.navigate("ListRoom", { screen: "ListRoom" })}>
          <Image source={CallIcon} style={{ maxWidth: 64, maxHeight: 64, objectFit: "cover" }} />
          <Text style={styles.itemText}>Call Doctor</Text>
        </Pressable>
      </View>
    </Layout>
  );
};

export default SearchMedicine;
