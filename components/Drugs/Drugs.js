import { View, Text } from "react-native";
import React from "react";
import Layout from "../common/Layout/Layout";
import { useNavigation } from "@react-navigation/native";

const Drugs = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <Text onPress={() => navigation.goBack()}>Drugs</Text>
    </Layout>
  );
};

export default Drugs;
