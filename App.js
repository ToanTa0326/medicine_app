import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  console.log(text);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Test app</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <TextInput onChangeText={(e) => setText(e)} placeholder="Test Text 4" style={styles.textInput} />
      </View>
      <Image style={styles.image} source={{ uri: "https://i.ytimg.com/vi/vyL9iQbcAD8/maxresdefault.jpg" }} />
      <Image style={styles.image} source={{ uri: "https://i.ytimg.com/vi/vyL9iQbcAD8/maxresdefault.jpg" }} />
      <Image style={styles.image} source={{ uri: "https://i.ytimg.com/vi/vyL9iQbcAD8/maxresdefault.jpg" }} />
      <Image style={styles.image} source={{ uri: "https://i.ytimg.com/vi/vyL9iQbcAD8/maxresdefault.jpg" }} />
      <Image style={styles.image} source={{ uri: "https://i.ytimg.com/vi/vyL9iQbcAD8/maxresdefault.jpg" }} />
      <View style={styles.view}>
        <Text style={styles.text}>Test app</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Test app</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Test app</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Test app</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Test app</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
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
