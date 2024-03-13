import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import logo from "../assets/logo.png";
import STYLES from "../constant/styles";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>MediCare</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Sign Up"
            buttonStyle={[styles.button, styles.signUpBtn]}
            titleStyle={[styles.buttonText, styles.signUpText]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "70%",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 138,
    height: 138,
    marginBottom: 12,
  },
  title: {
    color: "#199A8E",
    fontSize: 48,
    fontWeight: "300",
  },
  content: {
    padding: 20,
    flex: 1,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: STYLES.blackText,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: 260,
    backgroundColor: STYLES.mainColor,
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "medium",
  },
  signUpBtn: {
    backgroundColor: "rgba(25 154 142 / 0.15)",
    borderColor: STYLES.mainColor,
    borderWidth: 2,
  },
  signUpText: {
    color: STYLES.mainColor,
  },
});

export default Welcome;
