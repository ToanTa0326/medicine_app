import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import ArrowLeftIcon from "../../assets/icons/arrow_left.png";
import styles from "./styles";
import ImageButton from "../common/ImageButton/ImageButton";
import BasicInput from "../common/BasicInput/BasicInput";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 40 }}>
        <View style={styles.viewBox}>
          <ImageButton
            style={{ transform: [{ scale: 0.5 }] }}
            onPress={() => navigation.navigate("Welcome")}
            source={ArrowLeftIcon}
          />
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View>
          <BasicInput
            placeholder="email@gmail.com"
            value={email}
            label="Email or Mobile Number"
            styles={styles}
            onChangeText={onChangeEmail}
          />
          <BasicInput
            value={password}
            label="Password"
            inputType="password"
            styles={styles}
            onChangeText={onChangePassword}
            placeholder="********"
          />
          <Text style={styles.forgetText} onPress={() => navigation.navigate("Signup")}>
            Forget Password
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
