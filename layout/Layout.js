import React from "react";
import { Image, Text, View } from "react-native";
import styleLayout from "./styleLayout";

const Layout = ({ hasNavbar }) => {
  return (
    <View style={styleLayout.container}>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      <Text>Components will be rendered there!</Text>
      {hasNavbar ? <Text>This is Navbar</Text> : null}
    </View>
  );
};
export default Layout;
