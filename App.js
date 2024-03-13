import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from "react-native";
import Layout from "./layout/Layout";
import Welcome from "./components/Welcome";
import AppNavigator from "./Navigator";

export default function App() {
  const [text, setText] = useState("");

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    flexWrap: "wrap",
  },
  view: {
    width: "33%",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
  image: {
    width: 200,
    height: 200,
  },
  textInput: {
    padding: 16,
    fontSize: 16,
  },
});
